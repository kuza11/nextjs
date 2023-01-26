import sqlite3 from "sqlite3";
import { open } from "sqlite";
import defValues from "../config.json";

export async function readDBid({ table, id }: functionParamsAll) {
  const db = await openDB();
  return await db.get(`SELECT * from ${table} WHERE id = ?`, [id]);
}

export async function readDBall({ table }: functionParams) {
  const db = await openDB();
  return await db.all(`SELECT * from ${table}`);
}

export async function writeDB({ table, id }: functionParamsAll, { name, color, description }: writeDBparams) {
  const db = await openDB();
  const cmd = crtCmd(table, { name, color, description });
  return await db.run(cmd.command, cmd.arr.concat(id ? id : ""));
}

export async function insertDB({ table }: functionParams, { name, color, description }: writeDBparams) {
  const db = await openDB();
  return await db.run(`INSERT INTO ${table} (name, color, description) VALUES (?, ?, ?)`, [name, color, description]);
}

export async function deleteDB({ table, id }: functionParamsAll) {
  const db = await openDB();
  return await db.run(`DELETE FROM ${table} WHERE id = ?`, [id]);
}

async function openDB() {
  return open({
    filename: "./" + defValues.databaseName,
    driver: sqlite3.Database,
  });
}

function crtCmd(
  table: string | string[] | undefined, 
  { name, color, description }: writeDBparams
) {
  let num = 0;
  let command = `UPDATE ${table} SET`;
  let arr: string[];
  arr = [];
  let paramsArr = Object.entries({
    name: name,
    color: color,
    description: description
  });
  paramsArr.forEach((e) => {
    if (e[1]){ 
      num++;
      let arg = e[1].toString();
      arr.push(arg);
    }
  });
  paramsArr.forEach((e) => {
    if (e[1] && num > 1) {
      command += ` ${e[0]} = ?,`;
      num--;
    } else if (e[1] && num == 1) {
      command += ` ${e[0]} = ?`;
    }
  });
  command += ` where id = ?`;
  return {command, arr};
}

export interface functionParams{
  table: string | string[] | undefined;
}

export interface functionParamsAll{
  table: string | string[] | undefined;
  id: string | string[] | undefined;
}

export interface writeDBparams{
  name: string | string[] | undefined;
  color: string | string[] | undefined;
  description: string | string[] | undefined;
}
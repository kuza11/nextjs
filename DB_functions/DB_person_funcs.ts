import sqlite3 from "sqlite3";
import { open } from "sqlite";
import defValues from "../config.json";

export async function insertDB(
  { table }: functionInsParams,
  { username, password, title, description }: writeDBparams
) {
  const db = await openDB();
  return await db.run(`INSERT INTO ${table} (username, password, title, description) VALUES (?, ?, ?, ?)`, [ username, password, title, description ]);
}

export async function writeDB(
  { table, id }: functionParams,
  { username, password, title, description }: writeDBparams
) {
  const db = await openDB();
  const cmd = crtCmd(table , { username, password, title, description});
  return await db.run(cmd.command, cmd.arr.concat(id ? id : ""));
}

export async function deleteDB({table, id}: functionParams) {
  const db = await openDB();
  return await db.run(`DELETE FROM ${table} WHERE id = ?`, [id]);
}

export async function readDB({ table, id }: functionParams) {
  const db = await openDB();
  return await db.get(`SELECT * from ${table} where id = ?`, [id]);
}

async function openDB() {
  return open({
    filename: "./" + defValues.databaseName,
    driver: sqlite3.Database,
  });
}


export interface functionParams {
  table: string | string[] | undefined;
  id: string | string[] | undefined;
}

export interface writeDBparams {
  username: string | string[] | undefined;
  password: string | string[] | undefined;
  title: string | string[] | undefined;
  description: string | string[] | undefined;
  
}

export interface functionInsParams {
  table: string | string[] | undefined;
}

function crtCmd(
  table: string | string[] | undefined,
  { username, password, title, description }: writeDBparams
) {
  let num = 0;
  let command = `UPDATE ${table} SET`;
  let arr: string[];
  arr = [];
  let paramsArr = Object.entries({
    username: username,
    password: password,
    title: title,
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

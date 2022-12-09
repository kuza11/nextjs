import sqlite3 from "sqlite3";
import { open } from "sqlite";
import defValues from "./config.json";

export async function insertDB(
  { table }: functionInsParams,
  { username, password }: writeDBparams
) {
  const db = await openDB();
  await db.run(`INSERT INTO ${table} (username, password) VALUES (?, ?)`, [ username, password]);
}

export async function writeDB(
  { table, id }: functionParams,
  { username, password }: writeDBparams
) {
  const db = await openDB();
  const cmd = crtCmd({ table, id }, { username, password });
  await db.run(cmd);
}

export async function deleteDB({table, id}: functionParams) {
  const db = await openDB();
  await db.run(`DELETE FROM ${table} WHERE id = ?`, [id]);
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

function crtCmd(
  { table, id }: functionParams,
  { username, password }: writeDBparams
) {
  let num = 0;
  let command = `UPDATE ${table} SET`;
  let paramsArr = Object.entries({
    username: username,
    password: password
  });
  paramsArr.forEach((e) => {
    if (e[1]) num++;
  });
  paramsArr.forEach((e) => {
    if (e[1] && num > 1) {
      command += ` ${e[0]} = "${e[1]}",`;
      num--;
    } else if (e[1] && num == 1) {
      command += ` ${e[0]} = "${e[1]}"`;
    }
  });
  command += ` where id = ${id}`;
  return command;
}

export interface functionParams {
  table: string | string[] | undefined;
  id: string | string[] | undefined;
}

export interface writeDBparams {
  username: string | string[] | undefined;
  password: string | string[] | undefined;
}

export interface functionInsParams {
  table: string | string[] | undefined;
}

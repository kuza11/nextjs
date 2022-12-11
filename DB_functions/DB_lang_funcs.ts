import sqlite3 from "sqlite3";
import { open } from "sqlite";
import defValues from "../config.json";

export async function readDB({ table }: functionParams) {
  const db = await openDB();
  return await db.all(`SELECT * from ${table}`);
}

export async function insertDB({ table }: functionParams, { name } : writeDBparams) {
  const db = await openDB();
  return await db.run(`INSERT INTO ${table} (name) VALUES (?)`, [name])
}

async function openDB() {
  return open({
    filename: "./" + defValues.databaseName,
    driver: sqlite3.Database,
  });
}

export interface functionParams {
  table: string | string[] | undefined;
}

export interface writeDBparams{
  name: string | string[] | undefined;
}
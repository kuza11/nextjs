import sqlite3 from "sqlite3";
import { open } from "sqlite";
import defValues from "./config.json";

export async function readDBid({ table, id }: functionParams) {
  const db = await openDB();
  return await db.get(`SELECT * from ${table} WHERE id = ?`, [id]);
}

export async function readDBall({ table }: functionParamsAll) {
  const db = await openDB();
  return await db.all(`SELECT * from ${table}`);
}

export async function insertDB({ table }: functionParamsAll, { name, color, description } : writeDBparams) {
  const db = await openDB();
  return await db.run(`INSERT INTO ${table} (name, color, description) VALUES (?, ?, ?)`, [name, color, description])
}

async function openDB() {
  return open({
    filename: "./" + defValues.databaseName,
    driver: sqlite3.Database,
  });
}

export interface functionParamsAll{
  table: string | string[] | undefined;
}

export interface functionParams{
  table: string | string[] | undefined;
  id: string | string[] | undefined;
}

export interface writeDBparams{
  name: string | string[] | undefined;
  color: string | string[] | undefined;
  description: string | string[] | undefined;
}
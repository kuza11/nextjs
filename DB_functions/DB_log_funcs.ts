import sqlite3 from "sqlite3";
import { open } from "sqlite";
import defValues from "../config.json";

export async function readDB({ table }: functionParams) {
  const db = await openDB();
  return await db.all(`SELECT * from ${table}`);
}

export async function insertDB({ table }: functionParams, { name, description, time, date, persons_id, language } : writeDBparams) {
  const db = await openDB();
  const result = await db.run(`INSERT INTO ${table} (languages_id) SELECT languages.id FROM languages WHERE languages.name = ?;`, [language]);
  await db.run(`UPDATE ${table} set name = ?, description = ?, time = ?, date = ?, persons_id = ? WHERE id = ?;`, [name, description, time, date, persons_id, result.lastID])
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
  description: string | string[] | undefined;
  time: string | string[] | undefined;
  date: string | string[] | undefined;
  persons_id: string | string[] | undefined;
  language: string | string[] | undefined;
}
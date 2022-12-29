import sqlite3 from "sqlite3";
import { open } from "sqlite";
import defValues from "../config.json";

export async function readDBall({ table }: functionParams) {
  const db = await openDB();
  return await db.all(`SELECT * from ${table}`);
}

export async function readDBid({ table, id }: functionParams) {
  const db = await openDB();
  let log = await db.get(`SELECT ${table}.persons_id, ${table}.name, ${table}.description, ${table}.time, ${table}.date, languages.name as lang_name FROM ${table} INNER JOIN languages on ${table}.languages_id = languages.id WHERE ${table}.id = 1;`, [id]);
  let tags = await db.all(`SELECT tags.id, tags.name, tags.color, tags.description FROM tags_assignment INNER JOIN tags on	tags_assignment.tags_id = tags.id WHERE tags_assignment.logs_id = ?;`, [id]);
  log.tags_arr = tags;
  return log;
}

export async function insertDB({ table }: functionParams, { name } : writeDBparams) {
  const db = await openDB();
  return await db.run(`INSERT INTO ${table} (name) VALUES (?)`, [name]);
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

export interface writeDBparams{
  name: string | string[] | undefined;
}
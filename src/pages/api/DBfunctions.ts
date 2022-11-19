import sqlite3 from "sqlite3";
import { open } from "sqlite";
import defValues from "../../../config.json";


export async function writeDB({table, id}: functionParams, {username, email, password}: writeDBparams) {
  const db = await openDB();
  console.log(username, email, password, id)
  await db.run(`UPDATE ${table} SET username = ?, email = ?, password = ? where id = ?`, [username, email, password, id]);
  
}

export async function readDB({table, id}: functionParams){
  const db = await openDB();
    return await db.get(`SELECT * from ${table} where id = ?`, [id]);
}

async function openDB() {
  return open({
    filename: "./" + defValues.databaseName,
    driver: sqlite3.Database,
  });
}

export interface functionParams{
  table: string | string[] | undefined;
  id: string | string[] | undefined;
}

export interface writeDBparams{
  username: string;
  email: string;
  password: string;
}
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import defValues from "../config.json";

export async function readDB({ table }: functionParams, { persons_id }: writeDBparams) {
  const db = await openDB();
  let cmplt = [];
  let logsArr = await db.all(`SELECT logs.id, logs.name, logs.description, logs.time, logs.date, logs.persons_id, persons.username, languages.name as lang_name from ${table} INNER JOIN languages on logs.languages_id=languages.id INNER JOIN persons on logs.persons_id=persons.id WHERE persons.id = ?;`, [persons_id]);
  for (let i = 0; i < logsArr.length; i++) {
    cmplt.push({log: logsArr[i], tags: await db.all(`SELECT tags.id, tags.name, tags.description, tags.color FROM tags_assignment INNER JOIN tags on tags.id=tags_assignment.tags_id WHERE tags_assignment.logs_id = ?;`, [logsArr[i].id])});
    
  }
}

export async function insertDB({ table }: functionParams, { name, description, time, date, persons_id, language, tags } : writeDBparams) {
  const db = await openDB();
  let cmdC = crtCmd(tags);
  const resultTag = await db.run(cmdC.cmd, cmdC.arr);
  const result = await db.run(`INSERT INTO ${table} (languages_id) SELECT languages.id FROM languages WHERE languages.name = ?;`, [language]);
  await db.run(`UPDATE ${table} set name = ?, description = ?, time = ?, date = ?, persons_id = ? WHERE id = ?;`, [name, description, time, date, persons_id, result.lastID]);
  
}

async function openDB() {
  return open({
    filename: "./" + defValues.databaseName,
    driver: sqlite3.Database,
  });
}

function crtCmd(tags: [{name: string, description: string, color: string}]){
  let cmd = "INSERT INTO tags (name, color, description) VALUES ";
  let arr: string[] = [];
  tags.forEach((tag)=>{
    cmd += "(?,?,?)";
    arr.push(tag.name, tag.color, tag.description);
  });
  cmd += ";";
  return {arr, cmd};
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
  tags: [{name: string, description: string, color: string}]
}
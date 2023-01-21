import sqlite3 from "sqlite3";
import { ISqlite, open } from "sqlite";
import defValues from "../config.json";

export async function readDB({ table }: functionParams, { persons_id, sort}: {persons_id : string | string[] | undefined, sort: {by?: "time" | "rating" | "date", order?: "asc" | "desc"}}) {
  const db = await openDB();
  let cmplt = [];
  let logsArr = await db.all(`SELECT logs.id, logs.name, logs.description, logs.time, logs.date, logs.rating, logs.persons_id, persons.username, languages.name as lang_name from ${table} INNER JOIN languages on logs.languages_id=languages.id INNER JOIN persons on logs.persons_id=persons.id WHERE persons.id = ? ${sort.by ? `ORDER BY ${sort.by} ${sort.order ? sort.order : ''}` : ''};`, [persons_id]);
  for (let i = 0; i < logsArr.length; i++) {
    cmplt.push({log: logsArr[i], tags: await db.all(`SELECT tags.id, tags.name, tags.description, tags.color FROM tags_assignment INNER JOIN tags on tags.id=tags_assignment.tags_id WHERE tags_assignment.logs_id = ?;`, [logsArr[i].id])});
    
  }
  return cmplt;
}

export async function insertDB({ table }: functionParams, { name, description, time, date, persons_id, language, tags, tags_id} : writeDBparams) {
  let resultTag: ISqlite.RunResult;
  const db = await openDB();
  const resultLog = await db.run(`INSERT INTO ${table} (languages_id) SELECT languages.id FROM languages WHERE languages.name = ?;`, [language]);
  await db.run(`UPDATE ${table} set name = ?, description = ?, time = ?, date = ?, persons_id = ? WHERE id = ?;`, [name, description, time, date, persons_id, resultLog.lastID]);
  await db.run(`INSERT INTO tags_assignment (logs_id, tags_id)`);
  if(tags){
    let Aarr: number[] = [];
    let cmdC = crtCmd(tags);
    resultTag = await db.run(cmdC.Tcmd, cmdC.Tarr);
    if(!resultTag.lastID || !resultLog.lastID) return "e";
    for (let i = 0; i < tags.length; i++) {
      Aarr.push(resultLog.lastID, resultTag.lastID - i);
    }
    await db.run(cmdC.Acmd, Aarr);
  }
  if(tags_id){
    let Aarr: number[] = [];
    let cmd = crtTAcmd(tags_id);
    if(!resultLog.lastID) return "e";
    for (let i = 0; i < tags_id.length; i++) {
      Aarr.push(resultLog.lastID, tags_id[i]);
    }
    await db.run(cmd, Aarr);
  }
}

async function openDB() {
  return open({
    filename: "./" + defValues.databaseName,
    driver: sqlite3.Database,
  });
}

function crtCmd(tags: [{name: string, description: string, color: string}]){
  let Tcmd = "INSERT INTO tags (name, color, description) VALUES ";
  let Acmd = "INSERT INTO tags_assignment (logs_id, tags_id) VALUES ";
  let Tarr: string[] = [];
  tags.forEach((tag)=>{
    Tcmd += "(?,?,?)";
    Acmd += "(?,?)";
    Tarr.push(tag.name, tag.color, tag.description);
  });
  Tcmd += ";";
  return {Tarr, Tcmd, Acmd };
}

function crtTAcmd(tags:number[]){
  let cmd = "INSERT INTO tags_assignment (logs_id, tags_id) VALUES ";
  tags.forEach((tag) => {
    cmd += "(?,?)";
  });
  return cmd;
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
  tags?: [{name: string, description: string, color: string}];
  tags_id?: number[];
}

import sqlite3 from "sqlite3";
import { open } from "sqlite";
import defValues from "../config.json";

export async function readDB({ table }: functionParams, { persons_id, sort, filter }: {persons_id : string | string[] | undefined, sort: {by?: "time" | "rating" | "date" | "lang_name", order?: "asc" | "desc"}, filter?: number[] | null}) {
 
  const db = await openDB();
  let cmplt = [];
  let arr = [];
  console.log(sort)
  arr.push(persons_id? persons_id.toString() : "");
  arr = arr.concat(filter ? filter.map((e) => e.toString()) : []);
  let logsArr = await db.all(`SELECT logs.id, logs.name, logs.description, logs.time, logs.date, logs.rating, logs.persons_id, persons.username, languages.name as lang_name from ${table} INNER JOIN languages on logs.languages_id=languages.id INNER JOIN persons on logs.persons_id=persons.id INNER JOIN tags_assignment on tags_assignment.logs_id=logs.id WHERE persons.id = ? ${filter ? "AND (" + filter.map((e) => "tags_assignment.tags_id = ?").toString().replaceAll(',', ' OR ') + ")" : ""} ${sort.by ? `ORDER BY ${sort.by} ${sort.order ? sort.order : ''}` : ''};`, arr);//.catch((e) => console.error(e));
  for (let i = 0; i < logsArr.length; i++) {
    cmplt.push({log: logsArr[i], tags: await db.all(`SELECT tags.id, tags.name, tags.description, tags.color FROM tags_assignment INNER JOIN tags on tags.id=tags_assignment.tags_id WHERE tags_assignment.logs_id = ?;`, [logsArr[i].id])});
    
  }
  return cmplt;
}

export async function insertDB({ table }: functionParams, { name, description, time, date, rating, persons_id, language, tags, tags_id } : writeDBparams) {
  const db = await openDB();
  console.log(language);
  const resultLog = await db.run(`INSERT INTO ${table} (languages_id) SELECT languages.id FROM languages WHERE languages.name = ?;`, [language]);
  const result = await db.run(`UPDATE ${table} set name = ?, description = ?, time = ?, date = ?, rating = ?, persons_id = ? WHERE id = ?;`, [name, description, time, date, rating, persons_id, resultLog.lastID]);
  await db.run(`INSERT INTO tags_assignment (logs_id, tags_id)`);
  if(!result.lastID || !resultLog.lastID) return 1;
  if(tags){
    let Aarr: number[] = [];
    let cmdC = crtCmd(tags);
    const resultTag = await db.run(cmdC.Tcmd, cmdC.Tarr);
    if(!resultTag.lastID) return 1;
    for (let i = 0; i < tags.length; i++) {
      Aarr.push(resultLog.lastID, resultTag.lastID - i);
    }
    await db.run(cmdC.Acmd, Aarr);
  }
  if(tags_id){
    let Aarr: number[] = [];
    let cmd = crtTAcmd(tags_id);
    for (let i = 0; i < tags_id.length; i++) {
      Aarr.push(resultLog.lastID, tags_id[i]);
    }
    await db.run(cmd, Aarr);
  }
  return resultLog;
}

export async function deleteDB({ table, id } : functionParamsAll){
  const db = await openDB();
  const res = await db.run(`DELETE FROM ${table} WHERE id = ?`, [id]);
  await db.run(`DELETE FROM tags_assignment WHERE logs_id = ?`, [id]);
  return res;
}

export async function rewriteDB({ table, id }:functionParamsAll, { name, description, time, date, rating, persons_id, language, tags_id } : writeDBparams) {
  const db = await openDB();
  let arr: string[] = [];
  if(typeof id != "string") throw "bad type";
  tags_id?.forEach((tag_id) =>{
    arr.push(id);
    arr.push(tag_id.toString())
  });
  
  const resultAssignDel = await db.run(`DELETE FROM ${table} WHERE id = ?`, [id]);
  const resultAssignAdd = await db.run(`INSERT INTO tags_assignment (logs_id, tags_id) VALUES ${tags_id?.map((e) => `(?, ?)`).toString().replaceAll(',', " ")}`, arr);
  const lang_id = await db.get(`SELECT id FROM languages WHERE name = ?`, language);
  const result = await db.run(`UPDATE ${table} set name = ?, description = ?, time = ?, date = ?, rating = ?, languages_id = ?, persons_id = ? WHERE id = ?;`, [name, description, time, date, rating, lang_id, persons_id, id]);

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

export interface functionParamsAll {
  table: string | string[] | undefined;
  id: string | string[] | undefined;
}

export interface writeDBparams{
  name: string | string[] | undefined;
  description: string | string[] | undefined;
  time: string | string[] | undefined;
  date: string | string[] | undefined;
  rating: string | string[] | undefined;
  persons_id: string | string[] | undefined;
  language: string | string[] | undefined;
  tags?: [{name: string, description: string, color: string}];
  tags_id?: number[];
}


//SELECT logs.id, logs.name, logs.description, logs.time, logs.date, logs.rating, logs.persons_id, persons.username, languages.name as lang_name from logs INNER JOIN languages on logs.languages_id=languages.id INNER JOIN persons on logs.persons_id=persons.id INNER JOIN tags_assignment on tags_assignment.logs_id=logs.id WHERE persons.id = 1 AND (tags_assignment.tags_id = 2 OR tags_assignment.tags_id = 1) ORDER BY lang_name ;
//SELECT logs.id, logs.name, logs.description, logs.time, logs.date, logs.rating, logs.persons_id, persons.username, languages.name as lang_name from logs INNER JOIN languages on logs.languages_id=languages.id INNER JOIN persons on logs.persons_id=persons.id INNER JOIN tags_assignment on tags_assignment.logs_id=logs.id WHERE persons.id = ? AND (tags_assignment.tags_id = ?) ;11
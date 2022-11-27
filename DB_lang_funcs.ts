import sqlite3 from "sqlite3";
import { open } from "sqlite";
import defValues from "./config.json";

export async function readDB({ table, id }: functionParams) {
  const db = await openDB();
  return await db.get(`SELECT * from ${table} where ownerId = ?`, [id]);
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
/*
CREATE TABLE prog_lang (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ownerId INTEGER REFERENCES Person(id),
   _c,  _cpp,  _cs,  _java,  _javascript,  _typescript,  _python,  _go,  _kotlin,  _php,  _swift,  _r,  _ruby,  _matlab,  _scala,  _html,  _css,  _assembly,  _fs,  _fortran,  _sql NUMBER DEFAULT  0 not null
);

INSERT into prog_lang (ownerId, _c) values (2,1);
*/
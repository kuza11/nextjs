import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import defValues from "../../../../../config.json";

export default async function getPersonById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const db = await openDB();
    const person = await db.get("SELECT * from person where id = ?", [
      req.query.id,
    ]);
    res.status(200).json(person);
  } else if (req.method === "PUT") {
    const db = await openDB();
    await db.run("UPDATE person SET name = ?, email = ? where id = ?", [
      req.body.name,
      req.body.email,
      req.query.id,
    ]);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

async function openDB() {
  return open({
    filename: "./" + defValues.databaseName,
    driver: sqlite3.Database,
  });
}

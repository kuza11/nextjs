import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function getAllVehiclesByPersonId(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method Not Allowed" });
  }

  const db = await openDB();
  const allVehicles = await db.all("SELECT * from vehicle where ownerId = ?", [
    req.query.id,
  ]);

  res.status(200).json(allVehicles);
}

async function openDB() {
  return open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });
}

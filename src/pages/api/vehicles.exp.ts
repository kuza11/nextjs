import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import defValues from "../../../config.json";

export default async function getAllVehicles(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method Not Allowed" });
  }

  const db = await openDB();
  const vehicle = await db.all("SELECT * from vehicle");

  res.status(200).json(vehicle);
}

async function openDB() {
  return open({
    filename: "./" + defValues.databaseName,
    driver: sqlite3.Database,
  });
}

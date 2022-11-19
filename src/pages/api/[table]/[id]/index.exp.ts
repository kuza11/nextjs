import { NextApiRequest, NextApiResponse } from "next";
import { readDB, writeDB } from "../../DBfunctions";


export default async function getPersonById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const data = await readDB({table: req.query.table, id: req.query.id});
    res.status(200).json(data);
  } else if (req.method === "PUT") {
    await writeDB({table: req.query.table, id: req.query.id}, {username: req.body.username, email: req.body.email, password: req.body.password});
    res.status(200).json({mesage: "success"});
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}




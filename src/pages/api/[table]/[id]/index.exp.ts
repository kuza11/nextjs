import { NextApiRequest, NextApiResponse } from "next";
import { deleteDB, insertDB, readDB, writeDB } from "../../../../../DB_person_funcs";


export default async function getPersonById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const data = await readDB({table: req.query.table, id: req.query.id});
    if(data) res.status(200).json(data);
    else res.status(404).json({message: "data does not exist"});
  } else if (req.method === "PUT") {
    await writeDB({table: req.query.table, id: req.query.id}, {username: req.body.username, password: req.body.password});
    res.status(200).json({mesage: "success"});
  }else if(req.method === "POST"){
    await insertDB({table: req.query.table}, {username: req.query.username, password: req.query.password});
  }else if (req.method == "DELETE"){
    await deleteDB({table: req.query.table, id: req.query.id});
  }
  else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
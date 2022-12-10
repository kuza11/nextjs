import { NextApiRequest, NextApiResponse } from "next";
import { deleteDB, readDB, writeDB } from "../../../../../DB_person_funcs";


export default async function RWPersonById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const data = await readDB({table: "persons", id: req.query.id});
    if(data) res.status(200).json(data);
    else res.status(404).json({message: "element does not exist"});
  } else if (req.method === "PUT") {
    const data = await writeDB({table: "persons", id: req.query.id}, {username: req.body.username, password: req.body.password, title: req.body.title, description: req.body.description});
    if(data.changes == 0) res.status(404).json({message: "element does not exist"});
    else res.status(200).json({message: "success"});
  } else if (req.method == "DELETE"){
    const data = await deleteDB({table: "persons", id: req.query.id});
    if(data) res.status(200).json({message: "success"});
    else res.status(400).json({message: "error"});
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
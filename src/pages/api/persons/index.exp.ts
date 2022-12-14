import { NextApiRequest, NextApiResponse } from "next";
import { insertDB } from "../../../../DB_functions/DB_person_funcs";


export default async function WPersons(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if(req.method === "POST"){
    const data = await insertDB({table: "persons"}, {username: req.body.username, password: req.body.password, title: req.body.title, description: req.body.description});
    if(data) res.status(201).json(data);
    else res.status(400).json({message: "error"});
  } else{
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
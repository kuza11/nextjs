import { NextApiRequest, NextApiResponse } from "next";
import { insertDB, readDB } from "../../../../../DB_functions/DB_log_funcs";

export default async function RWllogs(
  req: NextApiRequest,
  res: NextApiResponse
) {
if(req.method === "GET"){
    const data = await readDB({table: "logs"}, {persons_id: req.query.id});
    if(data) res.status(201).json(data);
    else res.status(400).json({message: "error"});
  }else{
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
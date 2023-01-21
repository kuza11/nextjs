import { NextApiRequest, NextApiResponse } from "next";
import { insertDB, readDB } from "../../../../../DB_functions/DB_log_funcs";

export default async function RWllogs(
  req: NextApiRequest,
  res: NextApiResponse
) {
if(req.method === "GET"){
  let sort = req.query.sort;
  let order = req.query.order;
  if(order != "asc" && order != "desc") order = undefined;
  if(sort != "time" && sort != "rating" && sort !="date") sort = undefined;
    const data = await readDB({table: "logs"}, {persons_id: req.query.id, sort: {by: sort, order: order}});
    console.log(req.query.order);
    if(data) res.status(201).json(data);
    else res.status(400).json({message: "error"});
  }else{
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
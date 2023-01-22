import { NextApiRequest, NextApiResponse } from "next";
import { insertDB, readDB } from "../../../../../../DB_functions/DB_log_funcs";

export default async function RWllogs(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if(req.method === "GET"){
      let sort = req.query.sort;
      let order = req.query.order;
      if(order != "asc" && order != "desc") order = undefined;
      if(sort != "time" && sort != "rating" && sort !="date") sort = undefined;
      const data = await readDB({table: "logs"}, {persons_id: req.query.id, sort: {by: sort, order: order}});
      if(data) res.status(200).json(data);
      else res.status(500).json({message: "error"});
      }else if(req.method === "POST"){
        const result = await insertDB({table: "logs"}, {name: req.body.name, description: req.body.description, time: req.body.time, date: req.body.date, persons_id: req.query.id, language: req.body.language, tags: req.body.tags, tags_id: req.body.tags_id});
        if(result == 1) res.status(500).json({message: "error"});
        else if(result) res.status(201).json(result);
        else res.status(500).json({message: "error"});
        
      }else{
        res.status(405).json({ message: "Method Not Allowed" });
      }
  } catch (error) {
    res.status(400).json({error: error, message: "Probably wrong data in body"});
  }

}
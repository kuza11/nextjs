import { NextApiRequest, NextApiResponse } from "next";
import { readDBid, writeDB } from "../../../../../DB_functions/DB_tag_func";

export default async function RWtags(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if(req.method === "GET"){
      const data = await readDBid({table: "tags", id: req.query.id});
      if(data)res.status(200).json(data);
      else res.status(404).json({message: "element does not exist"})
    }else if(req.method === "PUT"){
      const data = await writeDB({table: "tags", id: req.query.id}, {name: req.body.name, color: req.body.color, description: req.body.description});
      if(data.changes == 0) res.status(404).json({message: "element does not exist"});
      else if(data) res.status(200).json({message: "success"});
      else res.status(500).json({message: "error"});
    }else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    res.status(400).json({error: error, message: "Probably wrong data in body"});
  }

}
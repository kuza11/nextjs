import { NextApiRequest, NextApiResponse } from "next";
import { insertDB, readDBall } from "../../../../DB_functions/DB_tag_func";

export default async function RWtags(
  req : NextApiRequest,
  res: NextApiResponse
) {
  try {
    if(req.method === "GET"){
      const data = await readDBall({table: "tags"});
      if(data)res.status(200).json(data);
      else res.status(500).json({message: "error"})
    }else if(req.method === "POST"){
      const data = await insertDB({table: "tags"}, {name: req.body.name, color: req.body.color, description: req.body.description});
      if(data)res.status(201).json(data);
      else res.status(500).json({message: "error"})
    }else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    res.status(400).json({error: error, message: "Probably wrong data in body"});
  }
    
}
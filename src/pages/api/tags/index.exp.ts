import { NextApiRequest, NextApiResponse } from "next";
import { insertDB, readDBall } from "../../../../DB_tag_func";

export default async function RWtags(
  req : NextApiRequest,
  res: NextApiResponse
) {
    if(req.method === "GET"){
      const data = await readDBall({table: "tags"});
      if(data)res.status(200).json(data);
      else res.status(400).json({message: "error"})
    }else if(req.method === "POST"){
      const data = await insertDB({table: "tags"}, {name: req.body.name, color: req.body.name, description: req.body.description});
      if(data)res.status(201).json(data);
      else res.status(400).json({message: "error"})
    }
}
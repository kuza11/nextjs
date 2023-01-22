import { NextApiRequest, NextApiResponse } from "next";
import { insertDB, readDB } from "../../../../DB_functions/DB_lang_funcs";

export default async function RWlanguages(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if(req.method === "POST"){
      const data = await insertDB({table: "languages"}, {name: req.body.name});
      if(data) res.status(201).json(data);
      else res.status(500).json({message: "error"});
    } else if(req.method === "GET"){
      const data = await readDB({table: "languages"});
      if(data) res.status(200).json(data);
      else res.status(500).json({message: "error"});
    }else{
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    res.status(400).json({error: error, message: "Probably wrong data in body"});
  }
  
}
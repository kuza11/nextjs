import { NextApiRequest, NextApiResponse } from "next";
import { insertDB, readDBid } from "../../../../../DB_functions/DB_tag_func";

export default async function RWtags(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === "GET"){
    const data = await readDBid({table: "tags", id: req.query.id});
    if(data)res.status(200).json(data);
    else res.status(404).json({message: "element does not exist"})
  }else if(req.method === "PUT"){

  }
}
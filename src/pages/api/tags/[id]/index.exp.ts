import { NextApiRequest, NextApiResponse } from "next";
import { deleteDB, readDBid, writeDB } from "../../../../../DB_functions/DB_tag_func";
import { createRouter, expressWrapper } from "next-connect";
import cors from "cors";

const router = createRouter<NextApiRequest, NextApiResponse>();

router
  .use(expressWrapper(cors()))
  .use(async (req, res, next) => {
    const start = Date.now();
    await next();
    const end = Date.now();
  })
  .get(async (req, res) => {
    const data = await readDBid({table: "tags", id: req.query.id});
      if(data)res.status(200).json(data);
      else res.status(404).json({message: "element does not exist"})
    
  })
  .post(async (req, res) => {
    if(req.query.del == "1"){
      const data = await deleteDB({table: "tags", id: req.query.id});
      if(data) res.status(200).json({message: "success"});
      else res.status(500).json({message: "error"});
    }else{
      const data = await writeDB({table: "tags", id: req.query.id}, {name: JSON.parse(req.body).name, color: JSON.parse(req.body).color, description: JSON.parse(req.body).description});
      if(data.changes == 0) res.status(404).json({message: "element does not exist"});
      else if(data) res.status(200).json({message: "success"});
      else res.status(500).json({message: "error"});
    }
  });
export default router.handler({
  onError: (err, req, res) => {
    res.status(400).json({error: err, message: "Probably wrong data in body"});
  },
  onNoMatch: (req, res) => {
    res.status(405).json({ message: "Method Not Allowed" });
  },
});


/*export default async function RWtags(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if(req.method === "GET"){
      const data = await readDBid({table: "tags", id: req.query.id});
      if(data)res.status(200).json(data);
      else res.status(404).json({message: "element does not exist"})
    }else if(req.method === "PUT"){
      const data = await writeDB({table: "tags", id: req.query.id}, {name: JSON.parse(req.body).name, color: JSON.parse(req.body).color, description: JSON.parse(req.body).description});
      if(data.changes == 0) res.status(404).json({message: "element does not exist"});
      else if(data) res.status(200).json({message: "success"});
      else res.status(500).json({message: "error"});
    }else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    res.status(400).json({error: error, message: "Probably wrong data in body"});
  }

}*/
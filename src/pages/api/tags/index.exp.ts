import { NextApiRequest, NextApiResponse } from "next";
import { insertDB, readDBall } from "../../../../DB_functions/DB_tag_func";
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
    const data = await readDBall({table: "tags"});
      if(data)res.status(200).json(data);
      else res.status(500).json({message: "error"})
    
  })
  .post(async (req, res) => {
    const data = await insertDB({table: "tags"}, {name: JSON.parse(req.body).name, color: JSON.parse(req.body).color, description: JSON.parse(req.body).description});
    if(data)res.status(201).json(data);
    else res.status(500).json({message: "error"})
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
  req : NextApiRequest,
  res: NextApiResponse
) {
  try {
    if(req.method === "GET"){
      const data = await readDBall({table: "tags"});
      if(data)res.status(200).json(data);
      else res.status(500).json({message: "error"})
    }else if(req.method === "POST"){
      const data = await insertDB({table: "tags"}, {name: JSON.parse(req.body).name, color: JSON.parse(req.body).color, description: JSON.parse(req.body).description});
      if(data)res.status(201).json(data);
      else res.status(500).json({message: "error"})
    }else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    res.status(400).json({error: error, message: "Probably wrong data in body"});
  }
    
}*/
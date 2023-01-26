import { NextApiRequest, NextApiResponse } from "next";
import { insertDB, readDB } from "../../../../DB_functions/DB_lang_funcs";
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
    const data = await readDB({table: "languages"});
    if(data) res.status(200).json(data);
    else res.status(500).json({message: "error"});
    
  })
  .post(async (req, res) => {
    const data = await insertDB({table: "languages"}, {name: JSON.parse(req.body).name});
    if(data) res.status(201).json(data);
    else res.status(500).json({message: "error"});
  });
export default router.handler({
  onError: (err, req, res) => {
    res.status(400).json({error: err, message: "Probably wrong data in body"});
  },
  onNoMatch: (req, res) => {
    res.status(405).json({ message: "Method Not Allowed" });
  },
});


/*export default async function RWlanguages(
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
  
}*/
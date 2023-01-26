import { NextApiRequest, NextApiResponse } from "next";
import { insertDB } from "../../../../DB_functions/DB_person_funcs";
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
  .post(async (req, res) => {
    const data = await insertDB({table: "persons"}, {username: JSON.parse(req.body).username, password: JSON.parse(req.body).password, title: JSON.parse(req.body).title, description: JSON.parse(req.body).description});
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

/*export default async function WPersons(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if(req.method === "POST"){
      const data = await insertDB({table: "persons"}, {username: JSON.parse(req.body).username, password: JSON.parse(req.body).password, title: JSON.parse(req.body).title, description: JSON.parse(req.body).description});
      if(data) res.status(201).json(data);
      else res.status(500).json({message: "error"});
    } else{
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    res.status(400).json({error: error, message: "Probably wrong data in body"});
  }
  
}*/
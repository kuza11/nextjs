import { NextApiRequest, NextApiResponse } from "next";
import { insertDB, deleteDB} from "../../../../../../../DB_functions/DB_log_funcs";
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
    if(req.query.del == "del"){
      const data = await deleteDB({table: "logs", id: req.query.log_id});
      if(data) res.status(200).json({message: "success"});
      else res.status(500).json({message: "error"});
    }else{
      const result = await insertDB({table: "logs"}, {name: JSON.parse(req.body).name, description: JSON.parse(req.body).description, time: JSON.parse(req.body).time, date: JSON.parse(req.body).date, rating: JSON.parse(req.body).rating, persons_id: req.query.id, language: JSON.parse(req.body).language, tags: JSON.parse(req.body).tags, tags_id: JSON.parse(req.body).tags_id});
      if(result == 1) res.status(500).json({message: "error"});
      else if(result) res.status(201).json(result);
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

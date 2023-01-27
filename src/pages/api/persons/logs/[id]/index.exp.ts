import { NextApiRequest, NextApiResponse } from "next";
import { insertDB, readDB } from "../../../../../../DB_functions/DB_log_funcs";
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
    let sort = req.query.sort;
    let order = req.query.order;
    let filter = JSON.parse(req.query.filter ? req.query.filter?.toString() : "null");
    if(order != "asc" && order != "desc") order = undefined;
    if(sort != "time" && sort != "rating" && sort !="date" && sort !="lang_name") sort = undefined;
    console.log(filter);
    const data = await readDB({table: "logs"}, {persons_id: req.query.id, sort: {by: sort, order: order}, filter: filter});
    if(data) res.status(200).json(data);
    else res.status(500).json({message: "error"});
    
  })
  .post(async (req, res) => {
    const result = await insertDB({table: "logs"}, {name: JSON.parse(req.body).name, description: JSON.parse(req.body).description, time: JSON.parse(req.body).time, date: JSON.parse(req.body).date, rating: req.query.rating, persons_id: req.query.id, language: JSON.parse(req.body).language, tags: JSON.parse(req.body).tags, tags_id: JSON.parse(req.body).tags_id});
    if(result == 1) res.status(500).json({message: "error"});
    else if(result) res.status(201).json(result);
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

/*export default async function RWllogs(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if(req.method === "GET"){
      let sort = req.query.sort;
      let order = req.query.order;
      if(order != "asc" && order != "desc") order = undefined;
      if(sort != "time" && sort != "rating" && sort !="date") sort = undefined;
      const data = await readDB({table: "logs"}, {persons_id: req.query.id, sort: {by: sort, order: order}});
      if(data) res.status(200).json(data);
      else res.status(500).json({message: "error"});
    }else if(req.method === "POST"){
      const result = await insertDB({table: "logs"}, {name: JSON.parse(req.body).name, description: JSON.parse(req.body).description, time: JSON.parse(req.body).time, date: JSON.parse(req.body).date, rating: req.query.rating, persons_id: req.query.id, language: JSON.parse(req.body).language, tags: JSON.parse(req.body).tags, tags_id: JSON.parse(req.body).tags_id});
      if(result == 1) res.status(500).json({message: "error"});
      else if(result) res.status(201).json(result);
      else res.status(500).json({message: "error"});
        
    }else{
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    res.status(400).json({error: error, message: "Probably wrong data in body"});
  }

}*/
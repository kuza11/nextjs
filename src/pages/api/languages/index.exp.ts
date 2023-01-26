import { NextApiRequest, NextApiResponse } from "next";
import { insertDB, readDB } from "../../../../DB_functions/DB_lang_funcs";
import { createRouter, expressWrapper } from "next-connect";
import cors from "cors";

const router = createRouter<NextApiRequest, NextApiResponse>();

router
  .use(expressWrapper(cors())) // express middleware are supported if you wrap it with expressWrapper
  .use(async (req, res, next) => {
    const start = Date.now();
    await next(); // call next in chain
    const end = Date.now();
    console.log(`Request took ${end - start}ms`);
  })
  .get(async (req, res) => {
    const data = await readDB({table: "languages"});
    if(data) res.status(200).json(data);
    else res.status(500).json({message: "error"});
    
  })
  .post(async (req, res) => {
    const data = await insertDB({table: "languages"}, {name: req.body.name});
    if(data) res.status(201).json(data);
    else res.status(500).json({message: "error"});
  })/*
  .put(
    async (req, res, next) => {
      // You may want to pass in NextApiRequest & { isLoggedIn: true }
      // in createRouter generics to define this extra property
      if (!req.isLoggedIn) throw new Error("thrown stuff will be caught");
      // go to the next in chain
      return next();
    },
    async (req, res) => {
      const user = await updateUser(req.body.user);
      res.json({ user });
    }
  );*/

// create a handler from router with custom
// onError and onNoMatch
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
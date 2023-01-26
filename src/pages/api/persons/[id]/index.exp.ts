import { NextApiRequest, NextApiResponse } from "next";
import { deleteDB, readDB, writeDB } from "../../../../../DB_functions/DB_person_funcs";


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
    const data = await readDB({table: "persons", id: req.query.id});
    if(data) res.status(200).json(data);
    else res.status(404).json({message: "element does not exist"});
    
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


/*
export default async function RWPersonById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const data = await readDB({table: "persons", id: req.query.id});
      if(data) res.status(200).json(data);
      else res.status(404).json({message: "element does not exist"});
    } else if (req.method === "PUT") {
      const data = await writeDB({table: "persons", id: req.query.id}, {username: req.body.username, password: req.body.password, title: req.body.title, description: req.body.description});
      if(data.changes == 0) res.status(404).json({message: "element does not exist"});
      else if(data) res.status(200).json({message: "success"});
      else res.status(500).json({message: "error"});
    } else if (req.method == "DELETE"){
      const data = await deleteDB({table: "persons", id: req.query.id});
      if(data) res.status(200).json({message: "success"});
      else res.status(500).json({message: "error"});
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    res.status(400).json({error: error, message: "Probably wrong data in body"});
  }
  
}*/
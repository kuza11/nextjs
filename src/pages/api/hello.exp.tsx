import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter, expressWrapper } from "next-connect";
import cors from "cors";

// Default Req and Res are IncomingMessage and ServerResponse
// You may want to pass in NextApiRequest and NextApiResponse
const router = createRouter<NextApiRequest, NextApiResponse>();

router
  .use(expressWrapper(cors())) // express middleware are supported if you wrap it with expressWrapper
  .use(async (req, res, next) => {
    const start = Date.now();
    await next(); // call next in chain
    const end = Date.now();
    console.log(`Request took ${end - start}ms`);
  })
  .get((req, res) => {
    res.status(200).json({mes: "Hello world"});
  })
  .post(async (req, res) => {
    // use async/await
    console.log("fd");
    res.status(200).json({m:"s"});
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
    console.error(err);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});
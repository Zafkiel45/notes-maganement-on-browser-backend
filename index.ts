import express from "express";
import { docsRoute, foldersRoute } from "./routes/docs.router";

const route = express();

route.use("/docs", docsRoute);
route.use("/folders", foldersRoute);

route.listen(3001, () => {
  console.log("tudo funcionando!");
});

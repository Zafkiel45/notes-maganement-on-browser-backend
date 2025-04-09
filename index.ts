import express from "express";
import { docsRoute, foldersRoute, typesRoute } from "./routes/docs.router";

const route = express();

route.use("/docs", docsRoute);
route.use("/folders", foldersRoute);
route.use("/types", typesRoute);

route.listen(3001, () => {
  console.log("tudo funcionando!");
});

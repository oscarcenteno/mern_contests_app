import express from "express";
const server = express();

server.use(express.static("dist"));

server.set("view engine", "ejs");

// all api endpoints under /api route
import apiRouter from "./api-router";
server.use("/api", apiRouter);

import serverRender from "./render";
server.get("/", async (req, res) => {
  const { initialMarkup } = await serverRender();
  res.render("index", {
    initialMarkup,
  });
});

import config from "./config";
import os from "node:os";
server.listen(config.PORT, config.HOST, () => {
  console.info(
    `Express server is listening at ${config.SERVER_URL}`,
    `Free Memory: ${os.freemem() / 1024 / 1024}`,
  );
});

import express from "express";
const server = express();
import os from "node:os";
import config from "./config";
import apiRouter from "./api-router";

server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use("/api", apiRouter);

server.get("/", (req, res) => {
  res.render("index", {
    initialContent: "<em>Loading...</em>",
  });
});

server.listen(config.PORT, config.HOST, () => {
  console.info(
    `Express server is listening at ${config.SERVER_URL}`,
    `Free Memory: ${os.freemem() / 1024 / 1024}`,
  );
});

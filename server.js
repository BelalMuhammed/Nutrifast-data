const express = require("express");
const jsonServer = require("json-server");

const server = express();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", router); // API هتشتغل على /api
server.get("/", (req, res) => {
  res.send("✅ JSON Server is running on Vercel! Use /api");
});

module.exports = server;

import express from "express";
import cors from "cors";
import random from "./random";

const app = express();

app.get("/", function(req, res) {
  res.send("Hello World");
});

console.log("Random Number:", random());

import express from "express";
import cors from "cors";

const app = express();

app.get("/", function(req, res) {
  res.send("Hello World");
});

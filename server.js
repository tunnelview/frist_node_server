import express from "express";
const app = express();

import fs from "fs";

app.use(express.urlencoded({ extended: true }));

// const path = require("path");
import path from "path";
const __dirname = path.resolve();

app.get("/register", (req, res) => {
  console.log(req.query);
  res.sendFile(__dirname + "/form.html");
});

app.post("/register", (req, res) => {
  console.log(req.body);
  // store in db

  res.send("Registered Successfully");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.get("/", (req, res) => {
  res.send(`<h1>welcome to xyz</h1>
  <p>
  <a href="/register">register now </a>
  <a href="/login">login </a>
    </p>`);
});

app.listen(8000, (error) => {
  if (error) {
    console.log("Error");
  }

  console.log(`Server is running at http://localhost:8000`);
});

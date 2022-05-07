import express from "express";
// const express = require("express");
const app = express();

import fs from "fs";
// const fs = require("fs");
// const path = require("path");

import path from "path";
const __dirname = path.resolve();

app.get("/", (req, res) => {
  res.send(`<h1>welcome to xyz</h1> 
    <p>This is my first SSR app</p>
    <a> I have just created server side rendering app with node and expressJS</a>
    <a>
  </div>;
  `);
});

const dt = "my book";
app.use("/", (req, res) => {
  res.sendFile(__dirname + "/form.html");
  const html = `<div>
    <h1>This is my first SSR app</h1>
    <p> I have just created server side rendering app with node and expressJS</p>
  </div>;
  `;
});

app.listen(8000, (error) => {
  if (error) {
    console.log("Error");
  }

  console.log("Server is running at http://localhost:8000");
});

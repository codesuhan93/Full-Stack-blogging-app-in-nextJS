// const express = require("express");
// const dotenv = require("dotenv");
// const blogs = require("./data/blogs");

import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import blogsRoutes from "./routes/blogsRoutes.js";

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API is running nice and smooth");
});

app.use("/api/blogs", blogsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);

import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Blog from "../models/blogModel.js";

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const blogs = await Blog.find({});
    res.json(blogs);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      res.json(blog);
    } else {
      res.status(404).json({ message: "blog not found" });
    }
  })
);

export default router;

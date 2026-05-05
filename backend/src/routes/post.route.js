import { Router } from "express";
import { createPost, getPosts } from "../controllers/post.controller.js";

const router=Router();
router.route("/post").post(createPost);
router.route("/getposts").get(getPosts);

export default router;
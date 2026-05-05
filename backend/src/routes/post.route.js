import { Router } from "express";
import { createPost, getPosts, updatePost } from "../controllers/post.controller.js";

const router=Router();
router.route("/post").post(createPost);
router.route("/getposts").get(getPosts);
router.route("/update/:id").patch(updatePost);

export default router;
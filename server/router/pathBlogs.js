const express = require("express");
const router = express.Router();

const {getAllBlog,getOneBlog,postBlog,updateBlog,deleteBlog} = require('../controller/blogscontroller');

router.get("/getblogs", getAllBlog);
router.get("/:title", getOneBlog);
router.post("/post",postBlog);
router.put("/:title", updateBlog);
router.delete("/:title", deleteBlog);

module.exports = router;
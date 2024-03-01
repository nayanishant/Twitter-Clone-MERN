var express = require("express");
var router = express.Router();
var protectedRoutes = require("../middlewares/protectedRoutes");
const {
  createPostHandler,
  showAllPosts,
  showAllPostsOfLoggedInUser,
  deletePost,
  likes,
  unlike,
  comment,
  postLikeAndUnlike,
  retweetHandler,
  retweetHandler2,
} = require("../controllers/post");

router.post("/createpost", protectedRoutes, createPostHandler);
router.get("/allposts", protectedRoutes, showAllPosts);
router.get("/mygallery", protectedRoutes, showAllPostsOfLoggedInUser);
router.delete("/deletepost/:postid", protectedRoutes, deletePost);
router.put("/like", protectedRoutes, likes);
router.put("/unlike", protectedRoutes, unlike);
router.put("/comment", protectedRoutes, comment);
router.put('/retweet', protectedRoutes, retweetHandler);
router.get('/likenunlike/:postId/like-state', protectedRoutes, postLikeAndUnlike);

module.exports = router;

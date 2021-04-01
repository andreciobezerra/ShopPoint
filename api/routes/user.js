const { getUsers, getUser, createUser, updateUser, deleteUser } = require("../controller/user");
const proxy = require("express-http-proxy");

//Invoked middleware.
const advanceResults = require("../middleware/advanceResults");
const { protect, permission } = require("../middleware/auth");

//User model
const User = require("../models/User");

const router = require("express").Router();

router.use(protect);
router.use(permission("admin"));

router
  .route("/")
  .get(
    advanceResults(User),
    proxy(process.env.USER_MS_HOST, { proxyReqPathResolver: (req) => "/api/user" })
  )
  .post(proxy(process.env.USER_MS_HOST, { proxyReqPathResolver: (req) => "/api/user" }));

router
  .route("/:id")
  .get(proxy(process.env.USER_MS_HOST, { proxyReqPathResolver: (req) => "/api/user/:id" }))
  .put(proxy(process.env.USER_MS_HOST, { proxyReqPathResolver: (req) => "/api/user/:id" }))
  .delete(proxy(process.env.USER_MS_HOST, { proxyReqPathResolver: (req) => "/api/user/:id" }));

module.exports = router;

const {
  RegisterUser,
  login,
  updateDetails,
  updatePassword,
  forgotPassword,
  resetPassword,
  verificationEmail,
} = require("../controller/auth");

const proxy = require("express-http-proxy");
const { protect } = require("../middleware/auth");

const router = require("express").Router();

router
  .route("/register")
  .post(proxy(process.env.USER_MS_HOST, { proxyReqPathResolver: (req) => "/api/auth/register" }));

router
  .route("/login")
  .post(proxy(process.env.USER_MS_HOST, { proxyReqPathResolver: (req) => "/api/auth/login" }));

router.route("/update/userDetails").put(
  protect,
  proxy(process.env.USER_MS_HOST, {
    proxyReqPathResolver: (req) => "/api/auth/update/userDetails",
  })
);

router.route("/update/password").put(
  protect,
  proxy(process.env.USER_MS_HOST, {
    proxyReqPathResolver: (req) => "/api/auth/update/password",
  })
);

router
  .route("/forgotPassword")
  .post(
    proxy(process.env.USER_MS_HOST, { proxyReqPathResolver: (req) => "/api/auth/forgotPassword" })
  );

router
  .route("/resetPassword")
  .post(
    proxy(process.env.USER_MS_HOST, { proxyReqPathResolver: (req) => "/api/auth/resetPassword" })
  );

router
  .route("/verifyEmail")
  .post(
    proxy(process.env.USER_MS_HOST, { proxyReqPathResolver: (req) => "/api/auth/verifyEmail" })
  );

module.exports = router;

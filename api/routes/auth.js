const {
  RegisterUser,
  login,
  updateDetails,
  updatePassword,
  forgotPassword,
  resetPassword,
  verificationEmail,
} = require("../controller/auth");

const proxy = require("express-http-proxy")
const { protect } = require("../middleware/auth");

const router = require("express").Router();

router.route("/register").post(proxy(process.env.USER_MS_HOST ,{proxyReqPathResolver: req => `/api/auth/register`}));
router.route("/login").post(login);
router.route("/update/userDetails").put(protect, updateDetails);
router.route("/update/password").put(protect, updatePassword);
router.route("/forgotPassword").post(forgotPassword);
router.route("/resetPassword").post(resetPassword);
router.route("/verifyEmail").post(verificationEmail);

module.exports = router;

//
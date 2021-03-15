const {
  RegisterUser,
  login,
  updateDetails,
  updatePassword,
  forgotPassword,
  resetPassword,
  verificationEmail,
} = require("../controllers/auth");

const { protect } = require("../middlewares/auth");

const router = require("express").Router();

router.route("/register").post(RegisterUser);
router.route("/login").post(login);
router.route("/update/userDetails").put(protect, updateDetails);
router.route("/update/password").put(protect, updatePassword);
router.route("/forgotPassword").post(forgotPassword);
router.route("/resetPassword").post(resetPassword);
router.route("/verifyEmail").post(verificationEmail);

module.exports = router;

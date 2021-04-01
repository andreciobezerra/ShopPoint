const { getUsers, getUser, createUser, updateUser, deleteUser } = require("../controllers/user");

//Invoked middleware.
const advanceResults = require("../middlewares/advanceResults");

//User model
const User = require("../models/User");

const router = require("express").Router();

router.route("/").get(advanceResults(User), getUsers).post(createUser);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;

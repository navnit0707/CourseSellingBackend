const express = require("express");

const router = express.Router();

router.get("/me", (req, res) => {
  res.send("me");
});

router.post("/signup", (req, res) => {
  res.send("signup");
});

router.post("/login", (req, res) => {
  res.send("login");
});

router.post("/courses", (req, res) => {
  res.send("courses ");
});

router.put("/courses/:courseId", (req, res) => {
  res.send("courses with id");
});

router.get("/courses", (req, res) => {
  res.send("get courses");
});

router.get("/course/:courseId", (req, res) => {
  res.send("get courses with id");
});
module.exports = router;

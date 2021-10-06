/** @format */

const express = require("express");
const { users: ctrl } = require("../../controllers");
const router = express.Router();
const { joiSchema } = require("../../models/user");
const {
  controllerWrapper,
  validation,
  authenticate,
  upload,
} = require("../../middlewares");

router.post("/singup", validation(joiSchema), controllerWrapper(ctrl.singup));

router.post("/login", validation(joiSchema), controllerWrapper(ctrl.login));

router.get("/logout", authenticate, controllerWrapper(ctrl.logout));

router.get("/current", authenticate, controllerWrapper(ctrl.current));

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatars"),
  controllerWrapper(ctrl.updateAvatar)
);

module.exports = router;

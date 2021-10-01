/** @format */

const express = require("express");
const router = express.Router();
const { controllerWrapper, validation } = require("../../middlewares");
const { joiSchema } = require("../../models/contact");
const { contacts: ctrl } = require("../../controllers");

router.get("/", controllerWrapper(ctrl.getAll));

router.get("/:contactId", controllerWrapper(ctrl.getById));

router.post("/", validation(joiSchema), controllerWrapper(ctrl.add));

router.delete("/:contactId", controllerWrapper(ctrl.removeById));

router.patch(
  "/:contactId",
  validation(joiSchema),
  controllerWrapper(ctrl.updateStatus)
);

router.put(
  "/:contactId",
  validation(joiSchema),
  controllerWrapper(ctrl.updateById)
);

module.exports = router;

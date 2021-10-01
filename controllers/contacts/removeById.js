/** @format */

const { NotFound } = require("http-errors");
const { Contact } = require("../../models");
const { sendSuccessReq } = require("../../helpers");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw new NotFound("Not found");
  }
  sendSuccessReq(res, {
    result,
    message: "Success remove contact",
  });
};

module.exports = removeById;

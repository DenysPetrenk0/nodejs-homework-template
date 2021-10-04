/** @format */

const { NotFound } = require("http-errors");
const { Contact } = require("../../models");
const { sendSuccess } = require("../../helpers");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw new NotFound("Not found");
  }
  sendSuccess({
    res,
    data: {
      result,
      message: "Success remove contact",
    },
  });
};

module.exports = removeById;

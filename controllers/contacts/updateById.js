/** @format */
const { NotFound } = require("http-errors");
const { Contact } = require("../../models");
const { sendSuccess } = require("../../helpers");

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body);
  if (!result) {
    throw new NotFound("Not found");
  }
  sendSuccess({ res, data: { result } });
};

module.exports = updateById;

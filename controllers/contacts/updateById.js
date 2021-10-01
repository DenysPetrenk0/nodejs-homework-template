/** @format */
const { NotFound } = require("http-errors");
const { Contact } = require("../../models");
const { sendSuccessReq } = require("../../helpers");

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body);
  if (!result) {
    throw new NotFound("Not found");
  }
  sendSuccessReq(res, { result });
};

module.exports = updateById;

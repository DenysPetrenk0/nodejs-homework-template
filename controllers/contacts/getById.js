/** @format */
const { NotFound } = require("http-errors");
const { Contact } = require("../../models");
const { sendSuccess } = require("../../helpers");

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const contacts = await Contact.findById(contactId);
  if (!contacts) {
    throw new NotFound("Not found");
  }
  sendSuccess({ res, data: { contacts } });
};

module.exports = getById;

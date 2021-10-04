/** @format */
const { Contact } = require("../../models");
const { sendSuccess } = require("../../helpers");

const getAll = async (req, res, next) => {
  const result = await Contact.find({});
  sendSuccess({ res, data: { result } });
};

module.exports = getAll;

/** @format */
const { Contact } = require("../../models");
const { sendSuccess } = require("../../helpers");

const add = async (req, res) => {
  const result = await Contact.create(req.body);
  sendSuccess({ res, data: { result }, status: 201 });
};

module.exports = add;

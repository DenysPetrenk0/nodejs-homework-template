/** @format */

const { User } = require("../../models");
const { NotFound } = require("http-errors");
const { sendSuccess } = require("../../helpers");

const verify = async (req, res) => {
  const { verifyToken } = req.param;
  const user = await User.findOne({ verifyToken });
  if (!user) {
    throw new NotFound("User not found");
  }
  await User.findByIdAndUpdate(user._id, { verifyToken: null, verify: true });
  sendSuccess({
    res,
    data: { message: "Verification successful" },
  });
};

module.exports = verify;

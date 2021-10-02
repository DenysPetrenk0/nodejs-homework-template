/** @format */
const { sendSuccess } = require("../../helpers");
const { User } = require("../../models");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !user.comparePassword(password)) {
    sendSuccess({
      res,
      status: 401,
      statusMessage: "Unauthorized",
      data: { message: "Email or password is wrong" },
    });
    return;
  }
  const token = user.createToken();
  sendResponse({
    res,
    status: 200,
    statusMessage: "Login success",
    data: {
      token,
      user: {
        email: user.email,
        subscription: user.subscription,
      },
    },
  });
};

module.exports = login;

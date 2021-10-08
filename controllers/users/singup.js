/** @format */
const { sendSuccess, sendEmail } = require("../../helpers");
const { User } = require("../../models");

const singup = async (req, res) => {
  const { email, password } = req.body;
  const result = await User.findOne({ email });
  if (result) {
    sendSuccess({
      res,
      status: 409,
      statusMessage: "error",
      data: { message: "Email in use" },
    });
    return;
  }
  const newUser = new User({ email });

  newUser.setPassword(password);
  newUser.setVerifyToken();

  await newUser.save();

  const { verifyToken } = await User.create(newUser);

  const data = {
    to: email,
    subject: "Подтверждение email при регистрации на сайте localhost:3000",
    html: `http://localhost:3000/api/v1/users/verify/${verifyToken}" 
    target="_blank">Подтвердить регистрацию</a>`,
  };
  await sendEmail(data);
  sendSuccess({
    res,
    status: 201,
    data: {
      message: "Registration success",
      email: newUser.email,
      subscription: newUser.subscription,
      verifyToken,
    },
  });
};

module.exports = singup;

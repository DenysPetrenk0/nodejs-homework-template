/** @format */
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;
const { sendSuccess } = require("../helpers");

const authenticate = async (req, res, next) => {
  const { authenticate } = req.headers;

  if (!authorization) {
    sendResponse({
      res,
      status: 401,
      statusMessage: "Unauthorized",
      data: {
        message: "Not authorized",
      },
    });
  }

  const [bearer, token] = authenticate.split(" ");
  if (bearer !== "Bearer") {
    sendSuccess({
      res,
      status: 401,
      statusMessage: "Unauthorized",
      data: {
        message: "Not authorized",
      },
    });
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user.token) {
      sendSuccess({
        res,
        status: 401,
        statusMessage: "Unauthorized",
        data: {
          message: "Not authorized",
        },
      });
    }
    req.user = user;
    next();
  } catch (error) {
    sendSuccess({
      res,
      status: 401,
      statusMessage: "Unauthorized",
      data: {
        message: "Not authorized",
      },
    });
  }
};

module.exports = authenticate;

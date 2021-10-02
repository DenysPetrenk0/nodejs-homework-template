/** @format */

const current = async (req, res) => {
  sendResponse({
    res,
    data: {
      email: req.user.email,
      subscription: req.user.subscription,
    },
  });
};

module.exports = current;

/** @format */

const sendSuccess = ({
  res,
  data,
  statusMessage = "success",
  status = 200,
}) => {
  res.status(status).json({
    status: statusMessage,
    code: status,
    data,
  });
};

module.exports = sendSuccess;

/** @format */
const sgMail = require("@sendgrid/mail");

const sendEmail = async (data) => {
  try {
    const email = { ...data, from: "p.gesser2015@gmail.com" };
    const result = await sgMail.sendEmail(email);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = sendEmail;

const { v4: uuidv4 } = require("uuid");
const moment = require("moment");
const { sequelize } = require("../db/models/index");
const bcrypt = require("bcryptjs");

const db = require("../db/models/index");
const Mailer = require("../utils/mailer");

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

exports.sendForgotPasswordEmail = async (user, token) => {
  const m = new Mailer();
  await m.send({
    template: "forgotPassword",
    message: {
      to: user.email,
      subject: "Hello from ...",
      text: `To reset your password click here ${"http://www.domain.com/reset-password-change"}/passwordReset?token=${
        token.token
      } If you don't wish to reset your password, disregard this email and no action will be taken.
The Domain Team
https://domain.com`,
    },
    locals: {
      user: user.email,
      token,
    },
  });
};


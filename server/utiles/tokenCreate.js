const jwt = require("jsonwebtoken");
const dotevn = require("dotenv");
dotevn.config();
module.exports.createToken = async (data) => {
  const token = await jwt.sign(data, process.env.SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
  return token;
};

const adminModel = require("../models/adminModel");
const { responseReturn } = require("../utiles/response");
const bcrpty = require("bcrypt");
const { createToken } = require("../utiles/tokenCreate");
class authControllers {
  admin_login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const data = await adminModel.findOne({ email }).select("+password");

      if (data) {
        const match = await bcrpty.compare(password, data.password);
        if (password == data.password) {
          const token = await createToken({ id: data._id, role: data.role });
          res.cookie("accessToken", token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          });
          responseReturn(res, 200, { token, message: "login success" });
        } else {
          responseReturn(res, 404, { message: "Password not match" });
        }
      } else {
        responseReturn(res, 404, { message: "Email not found !" });
      }
    } catch (error) {
      responseReturn(res, 500, { message: error.message });
      console.log(error.message);
    }
  };
  getUser = async (req, res) => {
    try {
      if (req.role == "admin") {
        const data = await adminModel.findById(req.id);
        responseReturn(res, 200, { userInfo: data });
      }
    } catch (error) {
      responseReturn(res, 500, { message: error.message });
    }
  };
}

module.exports = new authControllers();

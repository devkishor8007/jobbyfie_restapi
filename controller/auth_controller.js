const Auth = require("../model/auth_model");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const register = await Auth.create({ ...req.body });
  const token = register.createJwt();
  res.status(StatusCodes.CREATED).json({
    success: StatusCodes.CREATED,
    data: register,
    token,
    user: { name: register.getName(), email: register.email },
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please Provide email and password ");
  }

  const user = await Auth.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Not Found your Account");
  }

  //compare
  const isPasswordCorrect = await user.comparePass(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid password");
  }
  const token = user.createJwt();

  res.status(StatusCodes.OK).json({ token });
};

const CustomAPIError = require("./custom-api");
const NotFoundError = require("./notfound");
const BadRequestError = require("./bad_request");
const UnauthenticatedError = require("./unauthenticated");

module.exports = {
  CustomAPIError,
  NotFoundError,
  BadRequestError,
  UnauthenticatedError,
};

const { User } = require("../models/index");
const ClientErrors = require("../utils/client-error");
const ValidationErrors = require("../utils/validation-error");
const { StatusCodes } = require("http-status-codes");

class UserRepository {
  async createUser(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      if (error.name == "SequelizeValidationError") {
        throw new ValidationErrors(error);
      }
      console.log("Something went wrong in Repository Layer");
      throw error;
    }
  }

  async destroyUser(userId) {
    try {
      await User.destroy({
        where: {
          id: userId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in Repository Layer");
      throw error;
    }
  }

  async updateUser(userId, data) {
    try {
      const response = await User.update(data, {
        where: {
          id: userId,
        },
        returning: true,
      });
      return response;
    } catch (error) {
      console.log("Something went wrong in Repository Layer");
      throw error;
    }
  }

  async getById(userId) {
    try {
      const user = await User.findByPk(userId, {
        attributes: ["email", "id"],
      });
      return user;
    } catch (error) {
      console.log("Something went wrong in Repository Layer");
      throw error;
    }
  }

  async getByEmail(userEmail) {
    try {
      const response = await User.findOne({
        where: {
          email: userEmail,
        },
      });
      if (!response) {
        throw new ClientErrors(
          "AttributeNotFound",
          "Invalid email sent in the request",
          "Please check the email",
          StatusCodes.NOT_FOUND
        );
      }
      return response;
    } catch (error) {
      console.log("Something went wrong in Repository Layer");
      throw error;
    }
  }
}

module.exports = UserRepository;

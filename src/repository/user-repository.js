const { User } = require("../models/index");
const ClientErrors = require("../utils/client-error");
const supabase = require("../utils/supabase");
const UniqueConstraintsError = require("../utils/unique-constraints-error");
const ValidationErrors = require("../utils/validation-error");
const { StatusCodes } = require("http-status-codes");

class UserRepository {
  async createUser(data) {
    try {
      const user = await User.create(data);
      // const user = await supabase.from("Users").insert(data).select();
      return user;
    } catch (error) {
      if (error.name == "SequelizeValidationError") {
        throw new ValidationErrors(error);
      }
      if (error.name == "SequelizeUniqueConstraintError") {
        throw new UniqueConstraintsError(error);
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
      // await supabase.from("Users").delete().eq("id", userId);
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
      // const response = await supabase
      //   .from("Users")
      //   .update(data)
      //   .eq("id", userId);
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
      // const user = await supabase.from("Users").select("*").eq("id", userId);
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
      // const response = await supabase
      //   .from("Users")
      //   .select("*")
      //   .eq("email", userEmail);
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

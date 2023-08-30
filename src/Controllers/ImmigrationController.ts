import { Request, Response } from "express";
import Immigration from "../models/Immigration";
import { getRepository } from "typeorm";
import RequestResponseMappings from "../utils/RequestResponseMappings";

export default {
  addBook: async (req: Request, res: Response) => {
    try {
      const { firstName, lastName, email, phone, message } = req.body;
      const userRepository = getRepository(Immigration);
      const newUser = new Immigration();
      newUser.firstname = firstName;
      newUser.lastname = lastName;
      newUser.email = email;
      newUser.phone = phone;
      newUser.message = message;
      const savedUser = await userRepository.save(newUser);
    //   return RequestResponseMappings.sendSuccessMessage(res);
      return res.status(201).json({ message: 'User response saved', user: savedUser });
    } catch (error) {
      console.error("Error getting response:", error);
      return RequestResponseMappings.sendErrorMessage(res);
      //   return res.status(500).json({ message: 'Internal server error' });
    }
  },
};

import { Request, Response } from "express";
import { getRepository } from "typeorm";
import RequestResponseMappings from "../utils/RequestResponseMappings";
import Admission from "../models/Admission";

export default {
  addBook: async (req: Request, res: Response) => {
    try {
      const {name ,
        contact,
        qualification,
        level,
        time,
        country,
        budget,
        interest
      } = req.body;
      const userRepository = getRepository(Admission);
      const newUser = new Admission();
      newUser.name = name;
      newUser.contact = contact;
      newUser.qualification = qualification;
      newUser.level = level;
      newUser.time = time;
      newUser.country = country;
      newUser.budget = budget;
      newUser.interest = interest;
      const savedUser = await userRepository.save(newUser);
      //   return RequestResponseMappings.sendSuccessMessage(res);
      return res
        .status(201)
        .json({ message: "User admission saved", user: savedUser });
    } catch (error) {
      console.error("Error getting response:", error);
      return RequestResponseMappings.sendErrorMessage(res);
      //   return res.status(500).json({ message: 'Internal server error' });
    }
  },
};

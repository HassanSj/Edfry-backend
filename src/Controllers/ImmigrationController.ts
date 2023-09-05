import { Request, Response } from "express";
import Immigration from "../models/Immigration";
import { getRepository } from "typeorm";
import RequestResponseMappings from "../utils/RequestResponseMappings";
import connection from "../utils/connection";

export default {
  addForm: async (req: Request, res: Response) => {
    try {
      const {
        age,
        contact,
        cost,
        experience,
        ieltsScore,
        ieltsTaken,
        name,
        qualification,
      } = req.body;

      const userRepository = getRepository(Immigration);
      const newUser = new Immigration();
      newUser.age = age;
      newUser.name = name;
      newUser.contact = contact;
      newUser.cost = cost;
      newUser.experience = experience;
      newUser.ieltsScore = ieltsScore;
      newUser.ieltsTaken = ieltsTaken;
      newUser.qualification = qualification;
      const savedUser = await userRepository.save(newUser);
      //   return RequestResponseMappings.sendSuccessMessage(res);
      return res
        .status(201)
        .json({ message: "User response saved", user: savedUser });
    } catch (error) {
      console.error("Error getting response:", error);
      return RequestResponseMappings.sendErrorMessage(res);
      //   return res.status(500).json({ message: 'Internal server error' });
    }
  },
  getRecord: async (req: Request, res: Response) => {
    try {
      const users = await getRepository(Immigration).find();
      res.json(users);
      console.log("DATA", users);
    } catch (e: any) {
      return RequestResponseMappings.sendErrorMessage(res, e.message);
    }
  },
  getRecordbyID: async (req: Request, res: Response) => {
    try {
      const results = await getRepository(Immigration).findOneBy({
        id: parseInt(req.params.id),
      });
      return res.send(results);
    } catch (e: any) {
      return RequestResponseMappings.sendErrorMessage(res, e.message);
    }
  },
};

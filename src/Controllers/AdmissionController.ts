import { Request, Response } from "express";
import { getRepository } from "typeorm";
import RequestResponseMappings from "../utils/RequestResponseMappings";
import Admission from "../models/Admission";

export default {
  addAdmission: async (req: Request, res: Response) => {
    try {
      const {
        name,
        contact,
        qualification,
        interestedEducation,
        budget,
        timeSlot,
        country,
        program,
      } = req.body;
      const userRepository = getRepository(Admission);
      const newUser = new Admission();
      newUser.name = name;
      newUser.contact = contact;
      newUser.qualification = qualification;
      newUser.interestedEducation = interestedEducation;
      newUser.budget = budget;
      newUser.timeSlot = timeSlot;
      newUser.country = country;
      newUser.program = program;
      const savedUser = await userRepository.save(newUser);
      //   return RequestResponseMappings.sendSuccessMessage(res);
      return res
        .status(201)
        .json({ message: "User admission saved", user: savedUser });
    } catch (error:any) {
      console.error("Error getting response:", error);
      return RequestResponseMappings.sendErrorMessage(res,error.message.toString());
      //   return res.status(500).json({ message: 'Internal server error' });
    }
  },
  getData: async (req: Request, res: Response) => {
    try {
      const admissions = await getRepository(Admission).find();
      res.json(admissions);
      console.log("DATA", admissions);
    } catch (e: any) {
      return RequestResponseMappings.sendErrorMessage(res, e.message);
    }
  },
  getAdmissionbyID: async (req: Request, res: Response) => {
    try {
      const results = await getRepository(Admission).findOneBy({
        id: parseInt(req.params.id),
      });
      return res.send(results);
    } catch (e: any) {
      return RequestResponseMappings.sendErrorMessage(res, e.message);
    }
  },
};

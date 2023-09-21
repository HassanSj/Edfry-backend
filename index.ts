// import "reflect-metadata";
// import { createConnection, Entity, PrimaryGeneratedColumn, Column, getRepository } from 'typeorm';
// import express, {Express} from 'express';
// import userRouter from "./src/routes/routes";
// import immigrationRoutes from "./src/routes/immigrationRoutes";
// import ImmigrationController from "./src/Controllers/ImmigrationController";
// const cors = require("cors");
// const bodyParser = require('body-parser');
// const app = express();
// const PORT = process.env.PORT || 3000;
// const router: Express = express();
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());

// async function startServer() {

//   try {
//     await createConnection({
//       type: 'postgres',
//       host: 'localhost',
//       port: 5432,
//       username: 'postgres',
//       password: 'admin',
//       database: 'edfryTest',
//       entities: [Response],
//       synchronize: true,
//     });

//     console.log('Connected to database');
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.error('Database connection error:', error);
//   }
// }
// // router.use('/users', userRouter);
// // router.use('/api/submit', immigrationRoutes);
// router.post('/', ImmigrationController.addBook)
// router.use((req, res, next) => {
//     // set the CORS policy
//     res.header('Access-Control-Allow-Origin', '*');
//     // set the CORS headers
//     res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
//     // set the CORS method headers
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
//         return res.status(200).json({});
//     }
//     next();
// });

// router.use((req, res, next) => {
//     const error = new Error('not found');
//     return res.status(404).json({
//         message: error.message
//     });
// });
// // app.use("/api/submit-form", home);
// // app.use("/api/hello", hello);
// // app.listen(port, () => {
// //   console.log(`Server is running on port ${port}`);
// // });
// startServer()

import express, { Express } from "express";
import dotenv from "dotenv";
import connection from "./src/utils/connection";
import immigrationRoutes from "./src/routes/immigrationRoutes";
import userRouter from "./src/routes/routes";
var cors = require("cors");
const bodyParser = require("body-parser");
const router: Express = express();

const allowedOrigins = ["https://edfry.co"];

const corsOptions = {
  origin: function (
    origin: string | undefined,
    callback: (error: Error | null, allow: boolean) => void
  ) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"), false);
    }
  },
};
dotenv.config();

router.use(cors(corsOptions));
router.use(bodyParser());
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use("/", userRouter);
// router.use((req, res, next) => {
//     // set the CORS policy
//     res.header('Access-Control-Allow-Origin', '*');
//     // set the CORS headers
//     res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
//     // set the CORS method headers
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
//         return res.status(200).json({});
//     }
//     next();
// });

router.use((req, res, next) => {
  const error = new Error("not found");
  return res.status(404).json({
    message: error.message,
  });
});

const PORT: any = process.env.PORT ?? 5000;
connection
  .then((data) => {
    router.listen(PORT, () => {
      console.log(`The server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

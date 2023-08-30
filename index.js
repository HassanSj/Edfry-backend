"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = __importDefault(require("./src/utils/connection"));
const routes_1 = __importDefault(require("./src/routes/routes"));
const router = (0, express_1.default)();
dotenv_1.default.config();
router.use(express_1.default.urlencoded({ extended: false }));
router.use(express_1.default.json());
router.use('/', routes_1.default);
router.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
connection_1.default.then((data) => {
    router.listen(PORT, () => {
        console.log(`The server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.log(error.message);
});

import {createConnection} from "typeorm";
import Response from "../models/Immigration";
// import Book from "./modules/Authentication/models/Books";

export default createConnection({
    host: "localhost",
    type: "postgres",
    database: 'edfryTest',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    entities: [Response],
    synchronize: true,
    logging: true,
})
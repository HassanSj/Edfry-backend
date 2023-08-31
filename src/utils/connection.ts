import {createConnection} from "typeorm";
import Immigration from "../models/Immigration";
// import Book from "./modules/Authentication/models/Books";

export default createConnection({
    host: "baasu.db.elephantsql.com",
    type: "postgres",
    database: 'fqbanytv',
    port: 5432,
    username: 'fqbanytv',
    password: 'zosGpXUwCF0WVAyji0zCq7uD9NslOkc9', 
    entities: [Immigration],
    synchronize: true,
    logging: true,
})

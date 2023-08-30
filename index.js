

const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const home  = require("./Routes/userRoute")
const hello  = require("./Routes/hello")
const app = express();

const port = 5000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Create a pool for handling database connections


// app.post('/api/submit-form', async (req, res) => {
//     console.log("req",req.body)
//   const { firstName , lastName , email , phone , message } = req.body;

//   try {
//     // Use the pool to execute an INSERT query
//     const query = 'INSERT INTO students (firstName , lastName, email, phone , message) VALUES ($1, $2, $3, $4, $5)';
//     await pool.query(query, [firstName , lastName , email , phone , message]);

//     res.status(200).json({ message: 'Form data submitted successfully' });
//   } catch (error) {
//     console.error('Error inserting data:', error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });
app.use("/api/submit-form", home);
app.use("/api/hello", hello);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



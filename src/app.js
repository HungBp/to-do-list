/*global process*/

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRoute');
const todoRouter = require('./routes/todoRoute');

// open port for server
const app = express();
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
})

// middleware
if (process.env.NODE_ENV === 'development') {
  app.use(cors());
}
app.use(express.json());

// API
app.use("/user", userRouter);
app.use("/todo", todoRouter);
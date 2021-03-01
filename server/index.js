// npm init -y in server folder
// npm install body-parser cors express mongoose nodemon
// add "type": "module" to package.json and "start": "nodemon index.js" to enable these types of imports and show where to start application
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
//import routes
import postRoutes from './routes/posts.js'
import userRouter from "./routes/user.js";

const app = express();
dotenv.config()

// parse our images
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/posts', postRoutes)
//reach routes using this url now the default route for everything in postRoutes is localhost:5000/posts


// mongodb cloud hosting
const PORT = process.env.PORT || 5000
const CONNECTION_URL = process.env.CONNECTION_URL
// use mongoose to connect to DB
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
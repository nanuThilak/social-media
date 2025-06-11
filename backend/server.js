import express from "express"
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import apiRouter from "./routes/index.js"
import bodyParser from "body-parser";
import {v2} from "cloudinary"
import dotenv from  "dotenv"
import cors from "cors"
import path from "path"
dotenv.config()
const PORT = process.env.PORT || 4000;
const __dirname = path.resolve()
const app = express();
connectDB();
v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
app.use(express.json({limit: "5mb"}));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors())
app.use(bodyParser.json());
app.use("/api", apiRouter);
if (process.env.NODE_ENV === "production") {
  try {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    });
  } catch (error) {
    console.log(error);
  }
}

if (process.env.NODE_ENV === "production") {
  try {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    });
  } catch (error) {
    console.log(error);
  }
}
app.listen(PORT, () => console.log(`server was started on ${PORT} PORT`));




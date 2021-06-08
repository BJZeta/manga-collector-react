import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();

app.use(express.json());

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));

  app.get("*", (req, ress) =>
    ress.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API IS RUNNING...");
  });
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running on PORT: ${PORT} in ${process.env.NODE_ENV} Mode...`
  )
);

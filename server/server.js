require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 5000; // port number local host
const router = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
app.use(express.json());

app.use("/api/auth", router);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running : ${PORT}`);
  });
});

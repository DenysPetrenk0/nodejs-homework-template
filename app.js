/** @format */

const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const { sendSuccess } = require("./helpers");

const contactsRouter = require("./routes/api/contacts");
const usersRouter = require("./routes/api/users");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/v1/contacts", contactsRouter);
app.use("/api/v1/users", usersRouter);

app.use((_, res) => {
  sendSuccess({
    res,
    data: { message: "Not found" },
    status: 404,
    statusMessage: "error",
  });
});

app.use((err, _, res, __) => {
  const { status = 500, message = "Server error" } = err;
  sendSuccess({
    res,
    data: { message: "Not found" },
    status,
    statusMessage: "error",
  });
});

module.exports = app;

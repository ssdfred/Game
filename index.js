const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const gameRouter = require("./routers/gameRouter");

const app = express();

app.use(express.json());
app.use(require("cors")());

mongoose.connect(process.env.MONGO_URI, {

});

app.use("/game", gameRouter);

app.listen(process.env.SERVER_PORT, () => {
    console.log("App running on port" + process.env.SERVER_PORT)
})
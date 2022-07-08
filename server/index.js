const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path")
require("dotenv").config();
const mongoose = require("mongoose");
const expenseRouter = require("./routes/expense.api");
const enviroment = process.env.ENVIROMENT
const mongoURI = process.env.MONGODB_URI

mongoose
    .connect(mongoURI)
    .then(() => {
        console.log("connected to DB");
    })
    .catch((error) => {
        console.log("error");
        console.log(JSON.stringify(error));
    });

if (enviroment == "development") {
    app.use(cors());
}
app.use(express.static(path.join(__dirname, "../build")))
app.use(express.json());
app.use("/expenses", expenseRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Expenses app listening on port ${PORT}!`));
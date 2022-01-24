const express = require("express");
const app = express();
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://user01:elmita19@cluster0.nu2dq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(() => console.log("DBConnection Successfull!"))
.catch((err) => {
    console.log(err);
});

app.listen(5000, () => {
    console.log("Backend server is running!");
});

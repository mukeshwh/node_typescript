const mongoose = require("mongoose");
mongoose.Promise = Promise;
const DB = `mongodb://localhost/typescript`
mongoose.connect(DB, {
    useNewUrlParser: true,

}).then(() => {
    console.log("Connected Successfully")
}).catch((err) => console.log("Error :", err))
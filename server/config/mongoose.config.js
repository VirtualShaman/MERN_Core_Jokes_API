const mongoose = require("mongoose");

//This line requires a unique database name.
mongoose.connect("mongodb://localhost/jokes_api_assignment", {
    useNewUrlParser:true,
    useUnifiedTopology: true
})
    .then(()=> console.log("Mongoose connection successful!"))
    .catch(err => console.log("Mongoose did not connect...", err))
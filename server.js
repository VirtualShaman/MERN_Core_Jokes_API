const express = require("express");
const app = express();
const port = 8000;

require("./server/config/mongoose.config");

//Make sure this line is close to the top. Above routes
app.use(express.json(), express.urlencoded({extended:true}));

const AllMyRoutes = require("./server/routes/joke.routes");
AllMyRoutes(app);

app.listen(port, () => console.log(`Running on port ${port}!!`));
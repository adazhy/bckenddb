// const RiwayatRouter = require("./router/RiwayatRouter.js")
const UserRoute = require("./router/UserRouter.js");
const express = require("express");
require('dotenv').config()

const app = express();
app.use(express.json());

app.use(UserRoute);

app.listen(process.env.PORT, ()=> console.log('Server up and Running...'));
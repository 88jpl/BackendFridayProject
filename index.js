//initates the express server with cors package

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());


//pull in schema for Emma's poops
const EP = require("./ep");

// pull in mongo database
const mongodb = require("./model");

// command line flags
const flags = require("flags");
flags.defineNumber("port", 8888, "listen port for the http server");
flags.parse();

// pull in dotenv
require("dotenv");

// set port hierarcy
const port =  flags.get("port") || process.env.PORT || 4000;

// start mongodb server
mongodb.setUpConnectionHandlers(() => {
    app.listen(port, () => {
        console.log(`server is running on port ${port}`);
    });
});
mongodb.connect();











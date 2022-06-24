//initates the express server with cors package

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());


//pull in schema for Emma's poops
const EP = require("ep");

// pull in mongo database
const mongodb = require("mongo");







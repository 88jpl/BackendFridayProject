
//pull in mongoose
const mongoose = require("mongoose");
// rename mongoose connection to something shorter
const db = mongoose.connection;



function connect(user, password, host, port, db) {
    const connectionString = 'mongodb+srv://codeschool:codeschool@cluster0.lok4hkl.mongodb.net/?retryWrites=true&w=majority';

    mongoose.connect(connectionString, {
        // backwards compatiable code always required
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

function setUpConnectionHandlers(callback) {
    //what should happen when it starts to connect
    db.once("connecting", () => {
        console.log("Connecting to MongoDB");
    });
    //what should happen when its connected
    db.once("connected", () => {
        console.log("Connected to MongoDB");
    });
    // what should happens when it opens
    db.once("open", () => {
        console.log("Open connection to MongoDB");
        callback();
    });
    //what should happen when it errors
    db.once("error", () => {
        console.log("error connecting to MongoDB");
    });
    
}
// db.listen(8080, () => {
//     console.log("listening at port 8080")

// })



//export the functions
module.exports = {
    connect: connect,
    setUpConnectionHandlers: setUpConnectionHandlers,
}

let express = require("express");
let app = express();
let users = require("./routes/user");
app.use(express.json());
app.use("/api/user",users);
let port = process.env.PORT||4500;
let auth = require("./routes/auth.js");
app.use("/api/auth",auth);

let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/CoordinateMongodb&Express",{ useNewUrlParser: true , useUnifiedTopology: true})
        .then(()=>console.log("db got connected"))
        .catch(error=>console.log("something went wrong",error.message));

app.listen(port,()=>console.log(`port is working on ${port}`));
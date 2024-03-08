const  express = require("express");
const  cors = require("cors");
const UserRouter = require("./routes/user");
const TaskRouter = require("./routes/task");

const app = express();

app.use( cors(
    {
        origin:"*"
    }
));

app.use(  express.json( {limit:"16kb"} ));
app.use( express.urlencoded( {extended:true , limit :"16kb"} ) );
app.use(express.static("public"));

app.use( "/user" , UserRouter );
app.use( "/task" , TaskRouter );


module.exports = app;
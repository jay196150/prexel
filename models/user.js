const  { Schema, default: mongoose, model } =  require("mongoose");
const userSchema = new Schema( 
    {
        name : {
            type : String,
            require:true 
        },
        role:{
            type: ["user" , "admin"],
            default : "emp",
            require:true,
        },
        task:[
            {
                type: Schema.Types.ObjectId,
                ref:"Task"
            }
        ],
    },
    {
        timestamps : true
    }
)

const User = mongoose.model("User" , userSchema);

module.exports = User;

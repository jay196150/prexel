const  { Schema, default: mongoose, model } =  require("mongoose");
const taskSchema = new Schema( 
    {
        title : {
            type : String,
            require:true 
        },
        description:{
            type: String,
            default : "emp",
            require:true,
        },
        user:{
                type: Schema.Types.ObjectId,
                ref:"User"
        },
        dueData:{
            type:Date,
            require:true
        },
        priority:{
            type:Number,
            require:true
        },
        status:{
            type:[ "completed" , "pending" , "inProgress" ],
            require:true
        }
        
    },
    {
        timestamps : true
    }
)

const Task = mongoose.model("Task" , taskSchema);

module.exports = Task;

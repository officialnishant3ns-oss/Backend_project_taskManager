import mongoose from "mongoose"

const taskschema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "Pls enter the title"]
    },
    description: {
        type: String
    },
    status:{
        type:String,
        required:true,
        enum: ["todo", "in-progress", "done"]
    },
    deadline: {
        type: Date
    },
    createdBy: {
        type: String,
        required: true
    }

},
    { timestamps: true }
)


const Task = mongoose.model('Task', taskschema)
export default Task

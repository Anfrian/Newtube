import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    UserId:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    imgUrl:{
        type:String,
        required:true,
    },
    videoUrl:{
        type:String,
        required:true,
    },
    views:{
        type:String,
        required:true,
    },
    tags: {
        type:[string],
        default:[]
    },
    likes:{
        type:[String],
        default:[]
    }, 
    dislikes:{
        type:[String],
        default:[]
    }, 
},{timestamps:true})

export default mongoose.model("Video", VideoSchema);
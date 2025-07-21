
import mongoose from "mongoose"

import { IVideo, VIDEO_DIMENSIONS } from "../video.types";



export const videoSchema = new mongoose.Schema<IVideo>({
     title: {type:String,required:true},
     description: {type:String,required:true},
     videoUrl:{type:String,required:true},
     thumbnailUrl:{type:String,required:true},
     controls:{type:Boolean,required:true},
     transformation:{
            height:{type:Number,default:VIDEO_DIMENSIONS.height},
            width:{type:Number,default:VIDEO_DIMENSIONS.width},
            quality:{type:Number,min:1,max:100}
     },
},
{
     timestamps:true
}
) 




  
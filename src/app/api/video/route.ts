
import { connectToDatabase } from "@/database/db"
import { authOptions } from "@/lib/authOptions";
import Video from "@/modules/videos/model/videoModel";
import { IVideo } from "@/modules/videos/video.types";
import { getServerSession } from "next-auth";
import { transform } from "next/dist/build/swc/generated-native";
import { NextRequest, NextResponse } from "next/server";




export const GET = async() => {
  try{
      await connectToDatabase();
      const videos = await Video.findOne({}).sort({createdAt: -1}).
      lean()


      if(!videos || videos.length === 0){
            return  NextResponse.json({status:200})
      }

      return NextResponse.json(videos)

  }catch(error){
      return NextResponse.json(
        {error:"failed to get video maybe"},
        {status:500}
      )
  }
}

export const POST = async(request:NextRequest) => {
  try{
        const session  = await getServerSession(authOptions)
        if(!session){
          return NextResponse.json(
        {error:"Unauthorized"},
        {status:401}
      );
        }

        await connectToDatabase()
       const body: IVideo = await request.json()
       if(
        !body.title ||
        !body.description ||
        !body.thumbnailUrl ||
        !body.videoUrl 
       ){
        return NextResponse.json(
        {error:"missing required fields"},
        {status:400}
      );
       }


       const videoData = {
        ...body,
        controls: body ?.controls ?? true,
        transformation:{
          height: 1920,
          width: 1080,
          quality: body.transformation?.quality ?? 100
        }
       };

       const newVideo = await Video.create(videoData)

       return NextResponse.json(newVideo)
  }catch(error){
        return NextResponse.json(
          {error:"failed to create video"},
          {status:500 }
        );
  }
}
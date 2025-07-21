


import mongoose from "mongoose";


const MONGODB_URL = process.env.MONGODB_URI! || ''

if(!MONGODB_URL){
  throw new Error("its not connecting")
}


let cached = global.mongoose;

if(!cached){
  cached = global.mongoose = {conn: null,promise:null}
}


export const connectToDatabase = async() => {
    if(cached.conn){
      return cached.conn
    }

   
    if(!cached.promise){
      const options = {
         bufferCommands:true,
         maxPoolSize:10,
          dbName:'social-app',
      }
      cached.promise=mongoose.connect(MONGODB_URL,options).
      then(()=>mongoose.connection)
    }
    try{
         cached.conn = await cached.promise
    }catch(error){
      cached.promise = null
      throw new Error("why not connecting budd")
    }
    return cached.conn
}



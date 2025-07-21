


import mongoose from "mongoose";


const MONGODB_URL = process.env.MONGODB_URL! || ''

if(!MONGODB_URL){
  throw new Error("its not connecting")
}


let cacthed = global.mongoose;

if(!cacthed){
  cacthed = global.mongoose = {conn: null,promise:null}
}


export const connectToDatabase = async() => {
    if(cacthed.conn){
      return cacthed.conn
    }

   
    if(!cacthed.promise){
      const options = {
         bufferCommands:true,
         maxPoolSize:10,
          dbName:'social-app',
      }
      cacthed.promise=mongoose.connect(MONGODB_URL,options).
      then(()=>mongoose.connection)
    }
    try{
         cacthed.conn = await cacthed.promise
    }catch(error){
      cacthed.promise = null
      throw new Error("why not connecting budd")
    }
    return cacthed.conn
}






import mongoose from "mongoose";
import { videoSchema } from "../schema/videoSchema";

import { IVideo } from "../video.types";

const Video = mongoose.models?.Video || mongoose.model<IVideo>("Video",videoSchema)

export default Video; 
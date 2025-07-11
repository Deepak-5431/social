


export interface Video {
  title: string,
  description: string,
  videoUse: string,
  thumbnailUrl: string,
  controls?: boolean,
  transformation?: {
    height:number,
    width:number,
    quality?:number
  }
}

export const VIDEO_DIMENSIONS = {
  height: 1920,
  width: 1080
} as const;
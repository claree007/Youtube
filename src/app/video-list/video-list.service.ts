import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoListService {

  private originlFileName: String;
  private modifiedFileName: String;

  constructor(private videoChannelName:String, private videoTitle:String, private videoThumbnailUrl:String, private videoId:String) {
    this.originlFileName = null;
    this.modifiedFileName = null;
  }

  getVideoChannelName() { return this.videoChannelName }
  getVideoTitle() { return this.getVideoTitle }
  getVieoThumbnailUrl() { return this.getVieoThumbnailUrl }
  getVideoId() { return this.getVideoId }
}

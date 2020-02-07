import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { VideoListService } from '../video-list/video-list.service';

declare var require: any;
//const fs = require('fs');
import * as ytdl from 'ytdl-core';
import { format } from 'url';
//const ytdl = require('ytdl-core');
//import ytdl from '../../../node_modules/ytdl-core/lib'

//System.import('fs')
//System.import('ytdl-core')
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private YOUTUBE_API_KEY = "AIzaSyDUEQDtVZP8x-I_acDvRsNZCa0H3ix7rdA";
  url = "https://www.googleapis.com/youtube/v3/search";
  videoList = []
  suggestUrl = "http://suggestqueries.google.com/complete/search"

  constructor(private http: HttpClient) { }

  search(query:string) {
    return this.http.get(this.url, {params:{
     'part':'snippet', 
     'q':query, 
     'key':this.YOUTUBE_API_KEY, 
     'maxResults':'10', 
     'type': 'video'}
   })
 }

  listVideos(videosArray:Object) {
    this.videoList = []
    var i = 0
    this.videoList = []
    for (var obj in videosArray["items"]) {
      var video = new VideoListService(videosArray["items"][i]["snippet"]["channelTitle"], videosArray["items"][i]["snippet"]["title"], 
      videosArray["items"][i]["snippet"]["thumbnails"]["default"]["url"], videosArray["items"][i]["id"]["videoId"])
      this.videoList.push(video)
      i += 1
    }
  }

  download(id: string) {
    let videoLink: string = "http://www.youtube.com/watch?v=" + id
    let stream = null
    try {
      stream = ytdl(videoLink, { filter: (format) => format.audioQuality === 'ADIO_QUALITY_LOW', quality: 'lowestaudio' })
    }
    catch(e) {
      console.log("There was an error", e)
    }
    return stream
  }
}

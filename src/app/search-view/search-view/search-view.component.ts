import { Component, OnInit, KeyValueDiffer, KeyValueDiffers, DoCheck } from '@angular/core';
import { YoutubeService } from 'src/app/youtube/youtube.service';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit, DoCheck {

  videos = []
  differ: KeyValueDiffer<string, any>;
  stream = null
  
  constructor(private yt:YoutubeService, private differs: KeyValueDiffers) {
    this.differ = this.differs.find({}).create();
  }

  download(id: string) {
    this.stream = this.yt.download(id)
  }

  ngDoCheck() {
    const change = this.differ.diff(this.yt.videoList)
    if (change) {
      this.videos = this.yt.videoList
    }
  }

  ngOnInit() {
  }

}

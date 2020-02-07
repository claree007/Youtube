import { Component, OnInit, OnChanges, DoCheck, KeyValueDiffers, KeyValueDiffer } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatFormFieldControl } from '@angular/material/form-field';
import { YoutubeService } from './youtube/youtube.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'youtube';
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  

  constructor(private yt: YoutubeService) {}

  getResults() {
    let query:String = this.myControl.value
    if (query != null && query.trim() != "") {
      let obj = this.yt.search(this.myControl.value).subscribe(
        data => {this.yt.listVideos(data)})
    }    
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}

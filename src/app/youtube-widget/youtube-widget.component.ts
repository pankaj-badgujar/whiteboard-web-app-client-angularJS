import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-widget',
  templateUrl: './youtube-widget.component.html',
  styleUrls: ['./youtube-widget.component.css']
})
export class YoutubeWidgetComponent implements OnInit {
  @Input() widget: any;

  constructor(public sanitizer: DomSanitizer) {
  }

  getVideoURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.widget.url);
  }
  ngOnInit() {
  }

}

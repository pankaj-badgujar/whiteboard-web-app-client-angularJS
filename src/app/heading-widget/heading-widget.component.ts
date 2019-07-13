import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-heading-widget',
  templateUrl: './heading-widget.component.html',
  styleUrls: ['./heading-widget.component.css']
})
export class HeadingWidgetComponent implements OnInit {

  @Input() widget: object;
  constructor() { }


  ngOnInit() {
  }

}

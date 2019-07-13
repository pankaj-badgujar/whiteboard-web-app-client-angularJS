import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-widget',
  templateUrl: './list-widget.component.html',
  styleUrls: ['./list-widget.component.css']
})
export class ListWidgetComponent implements OnInit {
  listItems = [];
  @Input() widget: any;

  constructor() {
  }

  ngOnInit() {
    this.listItems = this.widget.text.split('\\n');
  }

}

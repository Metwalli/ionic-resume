import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './app-title.component.html',
  styleUrls: ['./app-title.component.css', '../../home/style_rtl.css', '../../home/font_style.css']
})
export class AppTitleComponent implements OnInit {
  title: string = "سيرتي";
  constructor() { }

  ngOnInit() {
  }

}

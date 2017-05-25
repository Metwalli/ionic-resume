import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {
  @Input() color: string = "";
  constructor() { }

  ngOnInit() {  }

}

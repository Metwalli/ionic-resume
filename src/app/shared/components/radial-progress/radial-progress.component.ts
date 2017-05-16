import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'radial-progress',
  templateUrl: './radial-progress.component.html',
  styleUrls: ['./radial-progress.component.css']
})
export class RadialProgressComponent implements OnInit {
  @Input() value: number = 50;
  constructor() { }

  ngOnInit() {
  }

}

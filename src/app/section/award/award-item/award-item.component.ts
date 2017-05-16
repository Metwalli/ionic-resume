import { Component, OnInit, Input } from '@angular/core';
import { Award } from '../../../shared/models';
@Component({
  selector: 'award-item',
  templateUrl: './award-item.component.html',
  styleUrls: ['./award-item.component.css']
})
export class AwardItemComponent implements OnInit {
  @Input() item: Award = new Award();
  constructor() { }

  ngOnInit() {
  }

}

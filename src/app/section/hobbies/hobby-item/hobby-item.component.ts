import { Component, OnInit, Input } from '@angular/core';
import { Hobby } from '../../../shared/models';
@Component({
  selector: 'hobby-item',
  templateUrl: './hobby-item.component.html',
  styleUrls: ['./hobby-item.component.scss']
})
export class HobbyItemComponent implements OnInit {
  @Input() item: Hobby = new Hobby();
  constructor() { }

  ngOnInit() { }

  onChangeIcon(icon: string) {
    if (icon != null) {
      if (icon == 'none') {
        this.item.icon = "";
      } else this.item.icon = icon;
    }
  }
}

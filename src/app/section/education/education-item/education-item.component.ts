import { Component, OnInit, Input } from '@angular/core';
import { Education } from '../../../shared/models';

@Component({
  selector: 'education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {
  @Input() item: Education = new Education();
  constructor() { }

  ngOnInit() {
  }

}

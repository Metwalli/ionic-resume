import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../../../shared/models';


@Component({
  selector: 'template-4-section',
  templateUrl: './template-4-section.component.html',
  styleUrls: ['./template-4-section.component.scss']
})
export class Template4SectionComponent implements OnInit {
  @Input() section: Section = new Section();
  constructor() { }

  ngOnInit() {
  }

}

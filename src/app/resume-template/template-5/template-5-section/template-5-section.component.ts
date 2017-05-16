import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../../../shared/models';

@Component({
  selector: 'template-5-section',
  templateUrl: './template-5-section.component.html',
  styleUrls: ['./template-5-section.component.scss']
})
export class Template5SectionComponent implements OnInit {
  @Input() section: Section = new Section();
  constructor() { }

  ngOnInit() {
  }

}

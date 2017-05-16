import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../../../shared/models';

@Component({
  selector: 'template-3-section',
  templateUrl: './template-3-section.component.html',
  styleUrls: ['./template-3-section.component.scss']
})
export class Template3SectionComponent implements OnInit {
  @Input() section: Section = new Section();
  constructor() { }

  ngOnInit() {
  }

}

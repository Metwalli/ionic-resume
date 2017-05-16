import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../../../shared/models';

@Component({
  selector: 'template-2-section',
  templateUrl: './template-2-section.component.html',
  styleUrls: ['./template-2-section.component.scss']
})
export class Template2SectionComponent implements OnInit {
  @Input() section: Section = new Section();
  constructor() { }

  ngOnInit() {
  }

}

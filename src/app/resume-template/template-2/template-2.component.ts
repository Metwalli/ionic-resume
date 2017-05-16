import { Component, OnInit, Input } from '@angular/core';
import { ResumeVersion } from '../../shared/models';
import {ResumeVersionService} from '../../core/common/common.module';

@Component({
  selector: 'template-2',
  templateUrl: './template-2.component.html',
  styleUrls: ['./template-2.component.scss']
})
export class Template2Component implements OnInit {
  @Input() version: ResumeVersion = new ResumeVersion();
  name: string = 'template-2';
  id: string = '02';
  constructor(public versionService: ResumeVersionService) { }

  ngOnInit() {
  }

}

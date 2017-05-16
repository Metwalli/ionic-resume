import { Component, OnInit, Input } from '@angular/core';
import { ResumeVersion } from '../../shared/models';
import {ResumeVersionService} from '../../core/common/common.module';

@Component({
  selector: 'template-4',
  templateUrl: './template-4.component.html',
  styleUrls: ['./template-4.component.scss']
})
export class Template4Component implements OnInit {
  @Input() version: ResumeVersion = new ResumeVersion();
  constructor(public versionService: ResumeVersionService) { }

  ngOnInit() {
  }
}

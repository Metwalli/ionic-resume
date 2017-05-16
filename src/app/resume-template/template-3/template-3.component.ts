import { Component, OnInit, Input } from '@angular/core';
import { ResumeVersion } from '../../shared/models';
import {ResumeVersionService} from '../../core/common/common.module';


@Component({
  selector: 'template-3',
  templateUrl: './template-3.component.html',
  styleUrls: ['./template-3.component.scss']
})
export class Template3Component implements OnInit {
  @Input() version: ResumeVersion = new ResumeVersion();
  constructor(public versionService: ResumeVersionService) { }

  ngOnInit() {
  }
}

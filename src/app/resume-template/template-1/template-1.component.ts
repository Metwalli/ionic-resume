import { Component, OnInit, Input } from '@angular/core';
import { ResumeVersion } from '../../shared/models';
import {ResumeVersionService} from '../../core/common/common.module';

@Component({
  selector: 'template-1',
  templateUrl: './template-1.component.html',
  styleUrls: ['./template-1.component.css']
})
export class Template1Component implements OnInit {
  @Input() version: ResumeVersion = new ResumeVersion();
  version1: any;
  constructor(public versionService: ResumeVersionService) { }

  ngOnInit() {    
  }

}

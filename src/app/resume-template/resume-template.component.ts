import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResumeVersion } from '../shared/models';
import {ResumeVersionService} from '../core/common/common.module';



@Component({
  selector: 'resume-template',
  templateUrl: './resume-template.component.html',
  styleUrls: ['./resume-template.component.css']
})
export class ResumeTemplateComponent implements OnInit {
  @Input() version: ResumeVersion = new ResumeVersion();
  constructor(private _versionService: ResumeVersionService ) { }

  ngOnInit() {
    this.version = this._versionService.currentVersion;
  }
}

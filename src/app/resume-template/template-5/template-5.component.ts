import { Component, OnInit, Input } from '@angular/core';
import { ResumeVersion } from '../../shared/models';
import {ResumeVersionService} from '../../core/common/common.module';


@Component({
  selector: 'template-5',
  templateUrl: './template-5.component.html',
  styleUrls: ['./template-5.component.scss']
})
export class Template5Component implements OnInit {
  @Input() version: ResumeVersion = new ResumeVersion();
  constructor(public versionService: ResumeVersionService) { }

  ngOnInit() {
  }
}

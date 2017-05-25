import { Component, OnInit, EventEmitter, Input, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { ResumeVersionService } from '../../core/common/common.module';
import { PersonalInfo } from '../../shared/models';
import { Section } from '../../shared/models';
import { ResumeVersion } from '../../shared/models';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';

@Component({
  selector: 'app-standard-version',
  templateUrl: './standard-version.component.html',
  styleUrls: ['./standard-version.component.css']
})
export class StandardVersionComponent implements OnInit {
    @ViewChild(PersonalInfoComponent)
    personalInfoComponent: PersonalInfoComponent;
    stepperSteps = [
      { no: 0, title: "Select Languge" },
      { no: 1, title: "Select Template" },
      { no: 2, title: "Personal Info" },
      { no: 3, title: "Education" },
      { no: 4, title: "Experience" },
      { no: 5, title: "Preview" }
    ]
    sectionList: Section[] = [];    
    version: ResumeVersion = new ResumeVersion();
    stepNo: number = 0;
    maxStepNo: number= 0;
    personalInfoValidation: boolean = false;
    constructor(
        private router : Router,
        private _versionService: ResumeVersionService,        
    ){  }
    
    ngOnInit(){          
      this.addSection({"$key": "", "order": 0, "title": "Education", "icon": "ion-university", "type": "education", "itemList":[]});
      this.addSection({"$key": "", "order": 0, "title": "Expereince", "icon": "ion-briefcase", "type": "experience", "itemList": []});                        
    }  
    checkValidation(v: boolean){
      this.personalInfoValidation = v;
    }
    next(value?: any){
      switch(this.stepNo){
        case 0:{
          this.version.language = value;
          this.stepNo++;
          break;
        }
        case 1:{
          this.version.templateID = value;
          this.stepNo++;
          break;
        }
        case 2:{
          //debugger;
          this.personalInfoComponent.onSubmit();
          if(this.personalInfoComponent.checkValidation()){
            this.stepNo++;          
          }             
          break;
        }
        case 3:{// show Education
          this.stepNo++;
          break;
        }
        case 4:{// Show Work Expereince
          this._versionService.currentVersion = this.version;
          this.stepNo++;
          break;
        }
        case 5:{                                        
          break;
        }
      }
      if( this.stepNo > this.maxStepNo ) {
        this.maxStepNo = this.stepNo;
      }   
    }  
    gotoStep(no: number){
      if( no <= this.maxStepNo  ){
        this.stepNo = no;
      }
    }
    back(){
      this.stepNo--;
    }
    preview(){
      //this.stepNo++;
      // this._versionService.currentVersion = this.version;
      // this.router.navigate(['resume-template']);
    }
    addSection(s:Section){
        let section = new Section(s.title, s.icon, s.type, []);
        this.version.sectionList.push(section);
	  }
    saveVersion(){
        this._versionService.addVersion(this.version);             
    }

    selectTemplate(templateID : string) {            
      this.version.templateID = templateID;
    }
    

}

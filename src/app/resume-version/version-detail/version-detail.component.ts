import { Component, OnInit, EventEmitter, Input, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ResumeVersionService } from '../../core/common/services/resume-version.service';
import { PersonalInfo, Section, ResumeVersion } from '../../shared/models';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
// import { MakeDraggableDirective } from '../../shared/make-draggable.directive';
// import { MakeDroppableDirective } from '../../shared/make-droppable.directive';


@Component({
    selector: 'version-detail',
    templateUrl: './version-detail.component.html',
    styleUrls: ['./version-detail.component.css']
})
export class VersionDetailComponent implements OnInit, AfterViewInit {
    @ViewChild(PersonalInfoComponent)
    personalInfoComponent: PersonalInfoComponent;
    version: ResumeVersion = new ResumeVersion();
    constructor(
        private route: ActivatedRoute,
        private _versionService: ResumeVersionService
    ) { }
    ngAfterViewInit() {

    }
    ngOnInit() {
        if (this.route.snapshot.params['id'] != "new") {
            //debugger;
            this._versionService.getVersion(this.route.snapshot.params['id'])
                .subscribe(version => this.version = version);
            if (!this.version.sectionList) {
                this.version.sectionList = [];
            }
            for (let i = 0; i < this.version.sectionList.length; i++) {
                this.version.sectionList[i].order = i;
            }
        }
        // this.route.data
        //     .subscribe( data => {
        //         console.log(data['version']);
        //         this.version = data['version']? data['version']: new ResumeVersion(); 
        //     });                   
    }
    addSection(s: Section) {
        let section = new Section(s.title, s.icon, s.type, []);
        section.order = this.version.sectionList.length;
        this.version.sectionList.push(section);
    }
    removeSection(index: number) {
        this.version.sectionList.splice(index, 1);
    }

    saveVersion() {
        this.personalInfoComponent.onSubmit()
        if (this.personalInfoComponent.checkValidation()) {
            if (this.version.$key != "") {
                this._versionService.updateVersion(this.version);
            }
            else {
                this._versionService.addVersion(this.version);
            }
        }

    }

    //------- Drag & Drop Functionality ------
    onDrop(src: Section, trg: Section) {
        this._moveRow(src.order, trg.order);
    }

    _moveRow(src, trg) {
        src = parseInt(src);
        trg = parseInt(trg);
        // If the element was moved up
        if (src > trg) {
            for (let i = trg; i < src; i++) {
                this.version.sectionList[i].order++;
            }
        } else {  // if the element was moved down
            for (let i = src + 1; i <= trg; i++) {
                this.version.sectionList[i].order--;
            }
        }
        this.version.sectionList[src].order = trg;
        this.version.sectionList.sort((a, b) => a.order - b.order);
    }
}

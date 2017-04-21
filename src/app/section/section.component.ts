import {Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import {Section} from '../shared/models/section';
import { Award } from '../shared/models/award';
import { Certificate } from '../shared/models/certificate';
import { Education } from '../shared/models/education';
import { Experience } from '../shared/models/experience';
import { Hobby } from '../shared/models/hobby';
import { Language } from '../shared/models/language';
import { Publication } from '../shared/models/publication';
import { Reference } from '../shared/models/reference';
import { Skill, SkillCategory } from '../shared/models/skill';
import { Volunteering } from '../shared/models/volunteering';


@Component({
  selector: 'section',
  templateUrl: 'section.component.html',
  styleUrls: ['section.component.css']
})
export /**
 * SectionComponent
 */
class SectionComponent implements OnInit {
  
  @Input() section: Section;
  @Input() required: boolean = false;
  @Output() removeSectionClick = new EventEmitter<number>();
  currentItemIndex: number;
  constructor(){ }
  ngOnInit(){
    if(!this.section.itemList){
      this.section.itemList = [];      
    }
  }
  removeSection(){
    if(confirm("Are You Sure to Remove this Section!")){
      this.removeSectionClick.emit(1);
    }
  }
  addItem(){
    switch(this.section.type){
      case 'award':{
        this.section.itemList.push(new Award());
        break;
      }
      case 'certificate':{
        this.section.itemList.push(new Certificate());
        break;
      }
      case 'education':{
        this.section.itemList.push(new Education());
        break;
      }
      case 'experience':{
        this.section.itemList.push(new Experience());
        break;
      }
      case 'hobbies':{
        this.section.itemList.push(new Hobby());
        break;
      }
      case 'language':{
        this.section.itemList.push(new Language());
        break;
      }
      case 'publication':{
        this.section.itemList.push(new Publication());
        break;
      }
      case 'reference':{
        this.section.itemList.push(new Reference());
        break;
      }
      case 'skills':{
        this.section.itemList.push(new SkillCategory());
        break;
      }
      case 'skill-category':{
        this.section.itemList.push(new Skill());
        break;
      }
      case 'volunteering':{
        this.section.itemList.push(new Volunteering());
        break;
      }
    }
    this.currentItemIndex = this.section.itemList.length - 1;
  }
  removeItem(index: number){
    this.section.itemList.splice(index,1);    
  }
  itemSelected(index: number){    
    this.currentItemIndex = index;
  }
}

@Component({  
  selector: 'section-template',
  template: `
  <div class="tooltip" *ngFor="let s of sectionList">
    <button ion-fab color="light" (click)="selectedSection(s)">
      <ion-icon [name]="s.icon"></ion-icon>                
     </button> 
     <span class="tooltiptext">{{s.title}}</span>
    </div>
  `,
styleUrls: ['./section.component.css']
})
export /**
 * SectionTemplateComponent
 */
class SectionTemplateComponent {
 
  constructor(){
  }
  //section: Section = new Section();
  @Output() sectionClick = new EventEmitter<Section>(); 
  selectedSection(sctn: Section){
      this.sectionClick.emit(sctn);  

  }
  sectionList: Section[]=[
      {"$key": "", "title": "Language", "icon": "globe", "type": "language", "itemList":[]},
      {"$key": "", "order": 0, "title": "Education", "icon": "school", "type": "education", "itemList":[]},
      {"$key": "", "order": 0, "title": "Experience", "icon": "briefcase", "type": "experience", "itemList": []},
      {"$key": "", "order": 0, "title": "Skills", "icon": "options", "type": "skills", "itemList":[]},
      {"$key": "", "order": 0, "title": "Certificates", "icon": "bookmarks", "type": "certificate", "itemList":[]},
      {"$key": "", "order": 0, "title": "Publications", "icon": "book", "type": "publication", "itemList":[]},
      {"$key": "", "order": 0, "title": "Reference", "icon": "contacts", "type": "reference", "itemList":[]},
      {"$key": "", "order": 0, "title": "Awards", "icon": "ribbon", "type": "award", "itemList":[]},
      {"$key": "", "order": 0, "title": "Volunteerings", "icon": "finger-print", "type": "volunteering", "itemList":[]},
      {"$key": "", "order": 0, "title": "Hobbies", "icon": "bicycle", "type": "hobbies", "itemList":[]},
      {"$key": "", "order": 0, "title": "Others", "icon": "albums", "type": "other-text", "itemList":[]}
  ];
}


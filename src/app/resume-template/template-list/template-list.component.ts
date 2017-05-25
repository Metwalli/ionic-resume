import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent implements OnInit {
  @Input() currentId: string;
  @Output() templateClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  selectTemplate(index) {    
    this.currentId = this.templateList[index].id;
    this.templateClick.emit(this.currentId);    
  }

  templateList: any[] = [{
      id: '01',
      color: 'purple-700',
      thumpnail: '01.jpg',
      route: 'template-1',
      title: 'Template-1',
    },{
      id: '02',
      color: 'purple-700',
      thumpnail: '02.jpg',
      route: 'template-2',
      title: 'Template-2',
    },{
      id: '03',
      color: 'purple-700',
      thumpnail: '03.jpg',
      route: 'template-3',
      title: 'Template-3',
    },{
      id: '01',
      color: 'purple-700',
      thumpnail: '04.jpg',
      route: 'template-2',
      title: 'Template-2',
    },{
      id: '01',
      color: 'purple-700',
      thumpnail: '05.jpg',
      route: 'template-3',
      title: 'Template-3',
    },{
      id: '01',
      color: 'purple-700',
      thumpnail: '06.jpg',
      route: 'template-2',
      title: 'Template-2',
    },{
      id: '01',
      color: 'purple-700',
      thumpnail: '07.jpg',
      route: 'template-3',
      title: 'Template-3',
    },{
      id: '01',
      color: 'purple-700',
      thumpnail: '08.jpg',
      route: 'template-2',
      title: 'Template-2',
    },{
      id: '01',
      color: 'purple-700',
      thumpnail: '09.png',
      route: 'template-3',
      title: 'Template-3',
    },{
      id: '01',
      color: 'purple-700',
      thumpnail: '10.png',
      route: 'template-2',
      title: 'Template-2',
    },{
      id: '01',
      color: 'purple-700',
      thumpnail: '11.png',
      route: 'template-3',
      title: 'Template-3',
    },{
      id: '01',
      color: 'purple-700',
      thumpnail: '12.png',
      route: 'template-2',
      title: 'Template-2',
    },{
      id: '01',
      color: 'purple-700',
      thumpnail: '13.png',
      route: 'template-3',
      title: 'Template-3',
    },{
      id: '01',
      color: 'purple-700',
      thumpnail: '14.png',
      route: 'template-2',
      title: 'Template-2',
    },{
      id: '01',
      color: 'purple-700',
      thumpnail: '15.png',
      route: 'template-3',
      title: 'Template-3',
    }
  ];


}

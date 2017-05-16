import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResumeVersion } from '../../shared/models';
import {ResumeVersionService} from '../../core/common/common.module';

const v =    {"name":"2.6.0","language":"German","templateID":5,"personalInfo":{"title":"personal info","icon":"ion-android-contact","firstName":"Chris","lastName":"Gerald","name":"Gerald Hawkins","maritalStatus":"divorced","dob":"21/09/1987","gender":"Male","mobile":"1-(865)972-1175","email":"ghawkinse@mtv.com","nationality":"United States","address":"54390 Express Center","profile":"Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.","image":"https://robohash.org/nonnihilerror.png?size=50x50&set=set1","accountList":[{"label":"twitter","icon":"ion-social-linkedin","link":"@rodriguez"}]},"sectionList":[{"type":"language","title":"Language","icon":"ion-earth","itemList":[{"name":"German","level":60},{"name":"Spanish","level":70}]},{"type":"education","title":"Education","icon":"ion-university","itemList":[{"name":"Engineering","country":"China","institute":"Chinese People's Public Security University","details":"Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.","dateFrom":"13/08/2009","dateTo":"14/09/2006"}]},{"type":"experience","title":"Experience","icon":"ion-briefcase","itemList":[{"name":"Social Worker","company":"Podcat","country":"Portugal","city":"Torres Novas","dateFrom":"09/12/2007","dateTo":"15/10/2010","details":"In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."},{"name":"Senior Quality Engineer","company":"Katz","country":"Sweden","city":"Skanör","dateFrom":"21/01/2009","dateTo":"14/06/2015","details":"Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui."}]}]};

@Component({
  selector: 'main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.css']
})
export class MainTemplateComponent implements OnInit {
  version1: any = v;
  @Input() version: ResumeVersion = new ResumeVersion();
  constructor(private _versionService: ResumeVersionService) {  }
      
  ngOnInit() {
    //this.version1 = v;
    //this.version = this._versionService.currentVersion;    
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ContactAccount } from '../../../shared/models';
//import {IconListComponent} from '../../icon/icon-list.component';

@Component({
  selector: 'contact-account',
  templateUrl: './contact-account.component.html',
  styleUrls: ['./contact-account.component.css']
})
export class ContactAccountComponent implements OnInit {
  @Input() item: ContactAccount = new ContactAccount();
  constructor(
    ){  }  
  ngOnInit(){
         
  }
  
  onChangeIcon(icon: string){    
    if(icon != null){      
      if( icon == 'none'){
        this.item.icon = "";
      }else this.item.icon = icon;
    }      
  }  
}

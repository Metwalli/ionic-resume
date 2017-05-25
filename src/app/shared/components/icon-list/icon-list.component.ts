import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Icon} from '../../models';
import { PopoverController } from 'ionic-angular';
import {ViewController} from 'ionic-angular';


@Component({
    templateUrl: 'icon-list.component.html',
    styleUrls: ['icon-list.component.scss']
})

export /**
 * IconListComponent
 */
class IconListComponentPage {
    @Input() icon: string;
    category: string = '';
    @Output() onChangeIcon = new EventEmitter<string>(); 
    constructor(
        public viewCtrl: ViewController
    ) {
        
    }
    ngOnInit(){        
        let data = this.viewCtrl.data;
        this.category = data['category'];
    }
    
    selectedIcon(i: Icon){
        this.icon = i.name;   
        this.viewCtrl.dismiss(i.name);        
    }
    iconList: Icon[] =[
        {"category": "basic", "name":'globe'},
        {"category": "basic", "name":'contacts'},
        {"category": "basic", "name":'school'},
        {"category": "basic", "name":'briefcase'},
        {"category": "basic", "name":'options'},
        {"category": "basic", "name":'bookmarks'},
        {"category": "basic", "name":'book'},
        {"category": "basic", "name":'ribbon'},
        {"category": "basic", "name":'finger-print'},
        {"category": "basic", "name": 'bicycle'},
        {"category": "basic", "name": 'albums'},
        {"category": "social", "name": 'logo-wordpress'},
        {"category": "social", "name": 'logo-youtube'},
        {"category": "social", "name": 'logo-windows'},
        {"category": "social", "name": 'logo-whatsapp'},
        {"category": "social", "name": 'logo-facebook'},
        {"category": "social", "name": 'logo-google'},
        {"category": "social", "name": 'logo-instagram'},
        {"category": "social", "name": 'logo-linkedin'},        
        {"category": "social", "name": 'logo-pinterest'},
        {"category": "social", "name": 'logo-twitter'},        
        {"category": "social", "name": 'logo-skype'},
        {"category": "social", "name": 'at'},         
    ];

    
}
@Component({
    selector: 'icon-list',
    template: `
        <button ion-button clear small color="secondary" icon-only (click)="presentPopover($event)">
            <ion-icon name="more"></ion-icon>
        </button>
    `
})
export class IconListComponent {
    @Output() iconClick = new EventEmitter<string>();
    @Input() category: string = '';
    constructor(public popoverCtrl: PopoverController) {
    }

    presentPopover() {
        let popover = this.popoverCtrl.create(IconListComponentPage, { 'category': this.category});
        popover.present();
        popover.onDidDismiss((popoverData) => {
            this.iconClick.emit(popoverData);
        })
    }
    
}


import {Component, Input} from '@angular/core';

@Component({
  
  selector: 'other-text',
  template: `   
  <ion-card-content>
    <ion-row>		
			<!--< flex="100" rows="7" placeholder="{{ 'Other' | translate }}" [(ngModel)]="other" name="other"></md-textarea>-->
		</ion-row>
  </ion-card-content>
  `,
  
})

export class OtherTextComponent{  
  @Input() other: string;
  constructor(){}
}

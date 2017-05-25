import { Component, Input } from '@angular/core';
import { SectionComponent } from '../section.component';

@Component({

  selector: 'other-text',
  template: `   
  <ion-card-content>
    <form>
      <ion-row>        
        <quill-editor [(ngModel)]="otherText" name="otherText"></quill-editor>
      </ion-row>
    </form>
  </ion-card-content>
  `,

})

export class OtherTextComponent {
  @Input() otherText: string = "";
  constructor() {  }
}

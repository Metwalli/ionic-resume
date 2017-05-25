import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
//import { AuthComponent } from './auth/auth.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./home/styles.css','./home/font_style.css','./home/style_rtl.css','./home/dialog.css']
})
export class AppComponent {
  title = 'app works!';
  authType: string = 'login';  
  @ViewChild('editUserDialog') dialog: any;
  constructor(
    public modalCtrl: ModalController,
    private router: Router
    ) { }  
  goToAuth(at: string){
    this.router.navigate(['/auth']);
  }
  showDialog(at: string){
    this.authType= at;
    let modal = this.modalCtrl.create(ModalContentPage,{authType: this.authType});
    modal.present();
  }
}

@Component({
  template: `
    <app-auth [authType]="authType"></app-auth>
  `
})
export class ModalContentPage {
  authType: string = 'login';
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.authType = this.params.get('authType');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

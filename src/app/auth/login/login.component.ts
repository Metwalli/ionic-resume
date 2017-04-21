import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { TranslatePipe } from '../../shared/translate/translate.pipe';
import { TranslateService } from '../../shared/translate/translate.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title: string = "Login";
  public loginForm: any;
  emailChanged: boolean = false;
  passwordChanged: boolean = false;
  submitAttempt: boolean = false;
  public loginError: boolean = false;

  constructor(public authService: AuthService, public router: Router, 
    public formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
        'email': ['', Validators.compose([Validators.required])],
        'password': ['', Validators.compose([Validators.minLength(6),
        Validators.required])]
      });      
  }
  ngOnInit(){}
  elementChanged(field: any){
    this[field.name + "Changed"] = true;
  }
  
  loginByEmail(){    
    this.submitAttempt = true;
    if (!this.loginForm.valid){
        this.loginError = true;
    } else {        
        this.authService.loginByEmail(this.loginForm.value.email, this.loginForm.value.password)
          .then(auth => {
              this.router.navigate(['home']);
            },error => {
              this.loginError = true;
            }
          );
    }
  }

}

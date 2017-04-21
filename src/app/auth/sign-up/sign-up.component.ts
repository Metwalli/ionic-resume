import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss','../dialog.css']
})
export class SignUpComponent implements OnInit {
    title: string = 'Sign Up';
    public signupForm;
    emailChanged: boolean = false;
    passwordChanged: boolean = false;
    submitAttempt: boolean = false;
    signupError: boolean = false;
    constructor(public authService: AuthService, public router: Router,
                public formBuilder: FormBuilder) {
      this.signupForm = formBuilder.group({
        'email': ['', Validators.compose([Validators.required])],
        'password': ['', Validators.compose([Validators.minLength(6), Validators.required])]
      });
    }

    elementChanged(field: any){        
        this[field.name + "Changed"] = true;
    }

    signup(){
        this.submitAttempt = true;

        if (!this.signupForm.valid){
            this.signupError = true;
        } else {
            this.authService.signUp(this.signupForm.value.email, 
              this.signupForm.value.password).then(() => {
                  this.router.navigate(['home']);;
              }, (error) => {
                this.signupError = false;
              });      
        }
    }
  ngOnInit() { }
  
  cancel(){
    this.router.navigate(['home']);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/common/services/auth.service';

@Component({
    selector: 'reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
    title: string = 'Reset Password';
    public resetPasswordForm;
    emailChanged: boolean = false;
    passwordChanged: boolean = false;
    submitAttempt: boolean = false;

    constructor(
        public authService: AuthService, 
        public formBuilder: FormBuilder,        
        public router: Router
    ) {

        this.resetPasswordForm = formBuilder.group({
            'email': ['', Validators.compose([Validators.required])]
        })
    }

    elementChanged(field: any) {
        this[field.name + "Changed"] = true;
    }

    resetPassword() {
        this.submitAttempt = true;

        if (!this.resetPasswordForm.valid) {
            console.log(this.resetPasswordForm.value);
        } else {
            this.authService.resetPassword(this.resetPasswordForm.value.email)
                .then(auth => {
                    console.log("send")
                }, error => {
                    console.log("don't send");
                }
                );
        }
    }
    ngOnInit() {
    }
    createAccount() {
        this.router.navigate(['auth/sign-up']);
    }

}

import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../core/common/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css','./dialog.css']
})
export class AuthComponent implements OnInit {  
  title: string = "Sign Up";
  @Input() authType: string = 'login';
  constructor(
    public authService: AuthService, 
    public router: Router, 
    public route: ActivatedRoute    
    ) {
      this.authType = this.authService.authType;
  }
  ngOnInit(){
    setTimeout( ()=>{      
      if(this.authService.user){
        let url = this.authService.redirectUrl? this.authService.redirectUrl: '/home';
        this.router.navigate([url]);
      }
    },1000);
    this.authType = this.authService.authType;
  }

  login(provider: string){
    this.authService.login(provider);
  }
  
}

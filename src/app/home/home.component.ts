import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/common/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./styles.css','./font_style.css','./style_rtl.css','./dialog.css']
})
export class HomeComponent  {
  authType: string = 'login';
  constructor(private authService: AuthService, private router: Router ) { }

  gotoPage(){            
    this.router.navigate(['/resume-version/list/new']);
  }
    
}

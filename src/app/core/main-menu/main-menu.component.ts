import { Component, OnInit, EventEmitter , Output} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css', '../../home/style_rtl.css', '../../home/font_style.css']
})
export class MainMenuComponent implements OnInit {
  constructor(private authService: AuthService,
    private router: Router
    ) { }
  @Output() authAction = new EventEmitter<string>();
  ngOnInit() {
  }
  elementClick(action: string){
    this.authAction.emit(action);   
  }
  public goToVersionList() {       
    this.router.navigate(['/resume-version/list']);
  }


}
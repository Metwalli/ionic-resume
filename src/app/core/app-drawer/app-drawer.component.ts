import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/common/services/auth.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './app-drawer.component.html',
  styleUrls: ['./app-drawer.component.css']
})
export class AppDrawerComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}

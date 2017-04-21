import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-app-drawer',
  templateUrl: './app-drawer.component.html',
  styleUrls: ['./app-drawer.component.css']
})
export class AppDrawerComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}

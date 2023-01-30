import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {AuthService} from "../../../share/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-console-header',
  templateUrl: './main-console-header.component.html',
  styleUrls: ['./main-console-header.component.scss'],
  animations: [
    trigger('slideInOut',[
      transition(':enter',[
        style({transform:'translateX(-100%)'}),
        animate('200ms ease-in', style({transform:'translateX(0%)'}))
      ]),
      transition(':leave',[
        animate('200ms ease-in', style({transform:'translateX(-100%)'}))
      ])
    ])
  ]
})
export class MainConsoleHeaderComponent implements OnInit {
  sideNavState: boolean=false;

  constructor(private router:Router, private authService:AuthService) { }


  ngOnInit(): void {
  }

  logout() {
    this.authService.clearCookie();
    this.router.navigateByUrl('/security/login')
  }
}

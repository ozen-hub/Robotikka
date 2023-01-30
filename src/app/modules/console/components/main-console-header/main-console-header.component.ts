import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-console-header',
  templateUrl: './main-console-header.component.html',
  styleUrls: ['./main-console-header.component.scss']
})
export class MainConsoleHeaderComponent implements OnInit {
  sideNavState: boolean=false;

  constructor() { }


  ngOnInit(): void {
  }

}

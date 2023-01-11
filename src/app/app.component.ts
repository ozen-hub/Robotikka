import { Component } from '@angular/core';
import {LoadingService} from "./modules/share/services/loading/loading.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor(public loadingService: LoadingService) {
 }

}

import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private matSnackbar:MatSnackBar) { }

  showSnackbar(message:string,action:string){
    this.matSnackbar.open(message,action,{
      duration:5000,
      horizontalPosition:"end",
      verticalPosition:"top",
      direction:"ltr"
    })
  }
}

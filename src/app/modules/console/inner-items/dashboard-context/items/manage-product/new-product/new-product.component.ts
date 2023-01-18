import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  constructor() { }

  form= new FormGroup({
    displayName: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    unitPrice: new FormControl('',[Validators.required]),
    qty: new FormControl('',[Validators.required]),
    sellingPrice: new FormControl('',[Validators.required]),
  })

  ngOnInit(): void {
  }

  saveProduct() {
    //
  }

}

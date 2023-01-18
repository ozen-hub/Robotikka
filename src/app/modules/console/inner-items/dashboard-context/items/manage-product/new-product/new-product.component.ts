import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {ProductService} from "../../../../../../share/services/product/product.service";
import ProductDTO from "../../../../../../share/dto/ProductDTO";
import {SnackBarService} from "../../../../../../share/services/core/snack-bar.service";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  constructor(private snackbarService:SnackBarService, private productService: ProductService) {
  }

  form = new FormGroup({
    displayName: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    unitPrice: new FormControl('', [Validators.required]),
    qty: new FormControl('', [Validators.required]),
    sellingPrice: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {
  }

  saveProduct(formData:FormGroupDirective) {

    let data = new ProductDTO(
      this.form.get('displayName')?.value!,
      this.form.get('description')?.value!,
      Number.parseInt(this.form.get('unitPrice')?.value!),
      Number.parseInt(this.form.get('qty')?.value!),
      Number.parseInt(this.form.get('sellingPrice')?.value!),
    );
    this.productService.createProduct(data).subscribe(response => {
      if (response.code === 201) {
        this.snackbarService.showSnackbar('Success!','Close');
        this.refreshForm(formData);
      }
    }, error => {
      this.snackbarService.showSnackbar('Something went wrong','Close');
    })
  }

  private refreshForm(formData: FormGroupDirective) {
    formData.resetForm();
  }

}

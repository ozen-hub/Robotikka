import {Component, OnInit} from '@angular/core';
import {SnackBarService} from "../../../../../../share/services/core/snack-bar.service";
import {ProductService} from "../../../../../../share/services/product/product.service";
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import ProductDTO from "../../../../../../share/dto/ProductDTO";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  constructor(private snackbarService: SnackBarService, private productService: ProductService) {
  }

  form = new FormGroup({
    productId: new FormControl('', [Validators.required]),
    displayName: new FormControl(''),
    description: new FormControl(''),
    unitPrice: new FormControl(''),
    qty: new FormControl(''),
    sellingPrice: new FormControl(''),
  })

  ngOnInit(): void {
  }

  findProduct() {
    if (this.form.get('productId')?.value!) {
      this.productService.findProduct(this.form.get('productId')?.value!).subscribe(response => {
        if (response.code === 200) {
          this.form.patchValue({
            displayName: response.data.displayName,
            description: response.data.description,
            unitPrice: response.data.unitPrice,
            qty: response.data.qty,
            sellingPrice: response.data.sellingPrice
          })
        }
      }, error => {
        this.snackbarService.showSnackbar('Not Found', 'Close');
      })
    } else {
      this.snackbarService.showSnackbar('Please enter the id', 'Close');
    }
  }

  deleteProduct(formData: FormGroupDirective) {
    this.productService.deleteProduct(this.form.get('productId')?.value!).subscribe(response => {
      this.snackbarService.showSnackbar('Success!', 'Close');
      console.log(response)
      this.refreshForm(formData);
    }, error => {
      this.snackbarService.showSnackbar('Something went wrong', 'Close');
    })
  }

  private refreshForm(formData: FormGroupDirective) {
    formData.resetForm();
  }


}

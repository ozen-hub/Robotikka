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

  constructor(private snackbarService: SnackBarService, private productService: ProductService) {
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

  saveProduct(formData: FormGroupDirective) {

    let data = new ProductDTO(
      this.form.get('displayName')?.value!,
      this.form.get('description')?.value!,
      Number.parseInt(this.form.get('unitPrice')?.value!),
      Number.parseInt(this.form.get('qty')?.value!),
      Number.parseInt(this.form.get('sellingPrice')?.value!),
    );
    this.productService.createProduct(this.image!, data).subscribe(response => {
      if (response.code === 201) {
        this.snackbarService.showSnackbar('Success!', 'Close');
        this.refreshForm(formData);
      }
    }, error => {
      this.snackbarService.showSnackbar('Something went wrong', 'Close');
    })
  }

  private refreshForm(formData: FormGroupDirective) {
    formData.resetForm();
  }


  image: File | undefined;
  imageUri = '';

  // @ts-ignore
  onSelectImage(event) {
    this.image = event.target.files[0];
    if (this.image!.size > 4e+7) {
      alert('file is grater than 5MB');
      return false;
    }

    if (this.image!.type !== 'image/jpg'
      && this.image!.type !== 'image/png'
      && this.image!.type !== 'image/jpeg'
      && this.image!.type !== 'application/pdf'
    ) {
      alert('wrong file type');
      return false;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.image!);
    reader.onload = () => {
      this.imageUri = reader.result as string;
    }

  }
}

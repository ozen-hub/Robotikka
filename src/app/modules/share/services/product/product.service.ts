import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import ProductDTO from "../../dto/ProductDTO";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public createProduct(product: ProductDTO):Observable<any>{
    return this.http.post('http://localhost:8000/api/v1/products/member/create',{
      displayName:product.displayName,
      description:product.description,
      unitPrice:product.unitPrice,
      qty:product.qty,
      sellingPrice:product.sellingPrice,
    })
  }
}

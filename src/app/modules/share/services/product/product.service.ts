import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import ProductDTO from "../../dto/ProductDTO";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  public createProduct(image: File, product: ProductDTO): Observable<any> {

    const formData = new FormData();
    formData.append('image', image);

    const data={
      displayName: product.displayName,
      description: product.description,
      unitPrice: product.unitPrice,
      qty: product.qty,
      sellingPrice: product.sellingPrice
    }

    const blobVar = JSON.stringify(data);
    formData.append('data', blobVar);

    return this.http.post('http://localhost:8001/api/v1/products/member/create', formData)
  }

  public findProduct(id: string): Observable<any> {
    return this.http.get('http://localhost:8001/api/v1/products/member/find/' + id);
  }

  updateProduct(product: ProductDTO, id: string): Observable<any> {
    return this.http.put('http://localhost:8001/api/v1/products/member/modify/' + id, {
      displayName: product.displayName,
      description: product.description,
      unitPrice: product.unitPrice,
      qty: product.qty,
      sellingPrice: product.sellingPrice,
    })
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete('http://localhost:8001/api/v1/products/member/remove/' + id);
  }

  findAll(searchText: string, page: number, size: number):Observable<any> {
    return this.http.get('http://localhost:8001/api/v1/products/member/list?searchText=' + searchText+'&page='+page+'&size='+size);
  }
  findList(searchText: string, page: number, size: number):Observable<any> {
    return this.http.get('http://localhost:8001/api/v1/products/member/data-list?searchText=' + searchText+'&page='+page+'&size='+size);
  }
}

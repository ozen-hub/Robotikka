import {AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SnackBarService} from "../../../../../../share/services/core/snack-bar.service";
import {ProductService} from "../../../../../../share/services/product/product.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit{
  // @ts-ignore
  pageEvent: PageEvent;
  searchText = '';
  page = 0;
  size = 10;
  pageOptions = [10, 20, 30, 40, 50];
  dataLength = 0;
  data: any[] = [];

  constructor(private snackbarService: SnackBarService, private productService: ProductService) {
  }

  getServerData(event?: PageEvent): any {
    this.page = event?.pageIndex!;
    this.size = event?.pageSize!;
    this.loadAllData(this.searchText, this.page, this.size);
  }

  ngOnInit(): void {
    this.loadAllData(this.searchText, this.page, this.size);
  }

  private loadAllData(searchText: string, page: number, size: number) {
    this.productService.findAll(searchText, page, size).subscribe(response => {
      console.log(response);
      this.data = response.data.list;
      this.dataLength = response.data.count;
    }, error => {
      this.snackbarService.showSnackbar("Something went wrong!", "Close");
    })
  }



}

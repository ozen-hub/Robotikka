import { Component, OnInit } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {SnackBarService} from "../../../share/services/core/snack-bar.service";
import {ProductService} from "../../../share/services/product/product.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

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
    this.productService.findList(searchText, page, size).subscribe(response => {
      console.log(response);
      this.data = response.data.list;
      this.dataLength = response.data.count;
    }, error => {
      this.snackbarService.showSnackbar("Something went wrong!", "Close");
    })
  }


}

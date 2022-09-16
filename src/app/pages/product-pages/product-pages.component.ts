import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../models/product";
import {ProductsServices} from "../../services/products.services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-pages',
  templateUrl: './product-pages.component.html',
  styleUrls: ['./product-pages.component.scss']
})
export class ProductPagesComponent implements OnInit {
  title = 'angular test';
  data: IProduct[] = [];

  constructor(private productService: ProductsServices, private route: ActivatedRoute) {
    this.data = this.productService.getData();
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      if(params.getAll("tab")[0] == "0") {
        this.data = this.productService.getData().filter(product => product.type === "income")
      }
      if(params.getAll("tab")[0] == "1") {
        this.data = this.productService.getData().filter(product => product.type === "outcome")
      }
      if(params.getAll("tab")[0] == "2") {
        this.data = this.productService.getData().filter(product => product.type === "loan")
      }
      if(params.getAll("tab")[0] == "3") {
        this.data = this.productService.getData().filter(product => product.type === "investment")
      }
    })
  }



}

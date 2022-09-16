import {Injectable} from "@angular/core";
import data from "../data/data.json"
import {IProduct} from "../models/product";

@Injectable({
  providedIn: "root"
})

export class ProductsServices {
  products: IProduct[] = data;

  constructor() {
  }

  getData() {
    return this.products
  }
}

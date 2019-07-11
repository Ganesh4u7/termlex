import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  PurchasedVegetables = [];
  PurchasedVegetables1 = [];
  saleDetails = [];
  PurchasedVegitablesCost : number = 0 ;
  sales = [];
  saleAnalysis = [];
  startedEditing = new Subject<number>();
  totalSalesCost :number;
  suggestions = [];

  constructor( public httpService: HttpService) { }

  Init() {

    return new Promise<void>((resolve, reject) => {
      console.log("AppInitService.init() called");
      ////do your initialisation stuff here
      this.httpService.getWholesaleData().subscribe(
        (response) => this.PurchasedVegetables = response,
        (error) => console.log(error)
      );
      this.httpService.getWholesaleData().subscribe(
        (response) => this.PurchasedVegetables1 = response,
        (error) => console.log(error)
      );
      this.httpService.getSales().subscribe(
        (response) => this.sales = response,
        (error) => console.log(error)
      );
      this.httpService.getSalesAnalysis().subscribe(
        (response) => this.saleAnalysis = response,
        (error) => console.log(error)
      );
      this.httpService.getSuggestions().subscribe(
        (response) => this.suggestions = response,
        (error) => console.log(error)
      );
      this.httpService.getSalesDetails().subscribe(
        (response) => this.saleDetails = response,
        (error) => console.log(error)
      );
      setTimeout(() => {
        console.log('AppInitService Finished');
        resolve();
      }, 2000);

    });

  }


}

import {Component, OnDestroy, OnInit, ViewChild,ElementRef} from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl,NgForm } from '@angular/forms';
import {SalesService} from "../sales.service";
import {Subscription} from "rxjs/Subscription";
import {formatDate} from '@angular/common';
import {Router} from "@angular/router";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-wholesale',
  templateUrl: './wholesale.component.html',
  styleUrls: ['./wholesale.component.css']
})
export class WholesaleComponent implements OnInit,OnDestroy {
@ViewChild('f') slForm : NgForm;
  Vegetables = this.salesService.PurchasedVegetables1;
  TotalCost =  this.salesService.PurchasedVegitablesCost;
  suggestion : string ;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem = {};

  constructor(
    public salesService : SalesService,
    private formBuilder: FormBuilder,
    public httpService: HttpService,
    public router:Router
  ) { }

  ngOnInit() {
    this.subscription = this.salesService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.slForm.setValue({
            name: this.salesService.PurchasedVegetables[index].name,
            amount: this.salesService.PurchasedVegetables[index].amount,
            cost: this.salesService.PurchasedVegetables[index].cost
          })
        }
      );
this.suggestions()

  }
  onSubmit(form:NgForm){
    const value = form.value;
    var name1 = value.name;
    var cost = value.cost;
    var amount = value.amount;
    const value1 = form.value;
   // this.Vegetables.push(value);
    if(this.editMode){
      var cost = this.salesService.PurchasedVegetables[this.editedItemIndex].cost;
      this.salesService.PurchasedVegetables[this.editedItemIndex].name= value.name;
      this.salesService.PurchasedVegetables1[this.editedItemIndex].name= name1;
      this.salesService.saleDetails[this.editedItemIndex].name =name1;
      this.salesService.PurchasedVegetables[this.editedItemIndex].amount= value.amount;
      this.salesService.PurchasedVegetables1[this.editedItemIndex].amount= amount;
      this.salesService.saleDetails[this.editedItemIndex].left =amount;
      this.salesService.PurchasedVegetables[this.editedItemIndex].cost= value.cost;
      this.salesService.PurchasedVegetables1[this.editedItemIndex].cost= cost;
      this.salesService.saleDetails[this.editedItemIndex].boughtPrice =cost;
      this.TotalCost = this.TotalCost - cost + this.salesService.PurchasedVegetables[this.editedItemIndex].cost;

      var data = {
        name: name1,
        left:amount,
        boughtPrice:cost
      };
      var data1 = {
        name: name1,
        amount:amount,
        cost:cost
      };

      this.httpService.onSaveEdit(data1)
        .subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );
      this.httpService.onEditSaleDetails(data)
        .subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );
    }
    else {
      this.salesService.PurchasedVegetables.push(value);
      this.salesService.PurchasedVegetables1.push({name:name1,amount:amount,cost:cost});
      this.salesService.saleDetails.push({name:name1,sold:0,left:amount,boughtPrice:cost,priceMade:0});
    //  console.log(this.salesService.saleDetails.length);
    //  console.log(formatDate(new Date(), 'dd-MM-yyyy', 'en'));
      this.TotalCost = this.TotalCost + value.cost;

      this.salesService.PurchasedVegitablesCost = this.TotalCost;

      this.httpService.onSaveData(value)
        .subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );
      this.httpService.onSaveSaleDetails({name:name1,sold:0,left:amount,boughtPrice:cost,priceMade:0})
        .subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );

    }
  }
  onEditItem(index: number) {
    this.salesService.startedEditing.next(index) }

  suggestions(){

        var date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
       // console.log(this.salesService.suggestions[0].date == date);

        for( let i =0;i<this.salesService.suggestions.length;i++){
          if(date == this.salesService.suggestions[i].date){
           this.suggestion = this.salesService.suggestions[i].message;

             break;
          }
        }

  }
  onClear() {

    this.editMode = false;
  }

  onDelete() {

    this.httpService.onDeleteData({name:this.salesService.PurchasedVegetables[this.editedItemIndex].name})
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    this.httpService.onDeleteSaleDetails({name:this.salesService.PurchasedVegetables[this.editedItemIndex].name})
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    this.salesService.PurchasedVegetables.splice(this.editedItemIndex,1);
    this.salesService.PurchasedVegetables1.splice(this.editedItemIndex,1);
    this.salesService.saleDetails.splice(this.editedItemIndex,1);




    this.onClear();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

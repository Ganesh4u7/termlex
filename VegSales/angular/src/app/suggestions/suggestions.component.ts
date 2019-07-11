import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SalesService} from '../sales.service';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  constructor( public saleService: SalesService,
               public httpService: HttpService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    var value = form.value;
    this.saleService.suggestions.push(value);
    this.httpService.onSaveSuggestions(value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

}

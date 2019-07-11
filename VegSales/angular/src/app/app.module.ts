
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';

import {APP_INITIALIZER} from '@angular/core';

import { HeaderComponent} from './header/header.component';
import { WholesaleComponent } from './wholesale/wholesale.component';
import { StreetsalesComponent } from './streetsales/streetsales.component';
import { SaleAnalysisComponent } from './sale-analysis/sale-analysis.component';
import { SalesComponent } from './sales/sales.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import {HttpClientModule} from "@angular/common/http";
import {SalesService} from "./sales.service";


export function initializeApp1(appInitService: SalesService) {
  return (): Promise<any> => {
    return appInitService.Init();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WholesaleComponent,
    StreetsalesComponent,
    SaleAnalysisComponent,
    SalesComponent,
    SuggestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SalesService,
    { provide: APP_INITIALIZER,useFactory: initializeApp1, deps: [SalesService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

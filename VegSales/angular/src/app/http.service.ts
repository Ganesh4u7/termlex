import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

onSaveData(data){
return this.http.post('http://localhost:4000/wholesale',data,{ responseType: 'text' });

}
onSaveEdit(data){
  return  this.http.post('http://localhost:4000/wholesaleEdit',data,{ responseType: 'text' });
}

onDeleteData(data){
    return  this.http.post('http://localhost:4000/wholesaleDelete',data,{ responseType: 'text' });
  }


onSaveSales(data){
    return  this.http.post('http://localhost:4000/saveSales',data,{ responseType: 'text' });
  }

onSaveSaleAnalysis(data){
  return  this.http.post('http://localhost:4000/saveSalesAnalysis',data,{ responseType: 'text' });
}

  onSaveSaleDetails(data){
    return  this.http.post('http://localhost:4000/saveSaleDetails',data,{ responseType: 'text' });
  }

  onEditSaleDetails(data){
    return  this.http.post('http://localhost:4000/editSaleDetails',data,{ responseType: 'text' });
  }
  onDeleteSaleDetails(data){
    return  this.http.post('http://localhost:4000/deleteSaleDetails',data,{ responseType: 'text' });
  }

getWholesaleData(){

   return  this.http.get('http://localhost:4000/getWholesaleData',{ responseType: 'json' });

}
  getSales(){

    return  this.http.get('http://localhost:4000/getSales',{ responseType: 'json' });

  }
  getSalesAnalysis(){

    return  this.http.get('http://localhost:4000/getSalesAnalysis',{ responseType: 'json' });

  }

  getSalesDetails(){

    return  this.http.get('http://localhost:4000/getSalesDetails',{ responseType: 'json' });

  }

  onSaveSuggestions(data){
    return  this.http.post('http://localhost:4000/saveSuggestions',data,{ responseType: 'text' });
  }
  getSuggestions(){

    return  this.http.get('http://localhost:4000/getSuggestions',{ responseType: 'json' });

  }

}


import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SFakeStore {
  private readonly httpClient= inject(HttpClient)
  getDataStore():Observable<any>{
    return this.httpClient.get('https://fakestoreapi.com/products')
  }
} 

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

     URL:string='http://127.0.0.1:8000/'; //url pour de fastapi

  constructor(private http: HttpClient) { }

      sendBukup(file:any) {

         return this.http.post(this.URL+'bakup',file);
  
  }

}

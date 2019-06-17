import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class HttpService {


  baseUrl=environment.baseUrl;
  
  constructor( private http:HttpClient) { }


  post(url,body){
    url=this.baseUrl + url;
    const httpOption={
      headers: new HttpHeaders({
        'Content-Type':'',
        'Token':localStorage.getItem('token')
      })
    }
    return this.http.post(url,body);
  }
}

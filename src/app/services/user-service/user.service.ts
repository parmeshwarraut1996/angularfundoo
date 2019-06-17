import { Injectable } from '@angular/core';
import {HttpService} from "../http-service/http.service";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpService) { }

  signUp(body){

    return this.http.post('signUp',body)

  }
  
}

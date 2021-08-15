import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelperService } from './helper.service';
import { pluck } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private helper:HelperService,private http:HttpClient) { }

  getCalculatedData(num1:number, num2:number){

    let sum= num1+num2;
    let result=this.helper.getModifiedSumNumber(sum);
    return result;

  }

  getUserData(){

   return this.http.get('https://reqres.in/api/users/2').pipe(pluck('data'))

  }

}

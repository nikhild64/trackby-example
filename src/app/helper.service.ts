import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  getModifiedSumNumber(num:number){
    return 'SUM-'+num;
  }
}

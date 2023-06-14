import { Injectable } from '@angular/core';
import { NUMBER } from './num.enum';

@Injectable()
export class CalculationService {

  constructor() { }

  createElement(num: NUMBER) {
    return Array.from(Array(num).keys())
  }

  isEvenNum(n){
    return n%2===0 ? true : false;
  }
}
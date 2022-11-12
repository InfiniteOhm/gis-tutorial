import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  sum: number = 0;
  tempNumer: number = 0;
  tempOperand: string = 'i';
  sumFlag: boolean = false;
  minusFlag: boolean = false;
  multiFlag: boolean = false;
  devineFlag: boolean = false;
  constructor() {}

  getTest(): string {
    return 'TEST';
  }

  clear() {
    this.sum = 0;
  }

  add(number: number) {
    this.sum += number;
  }

  minus(number: number) {
    this.sum -= number;
  }

  multiply(number: number) {
    this.sum *= number;
  }

  devide(number: number) {
    this.sum /= number;
  }

  inputNumber(number: number) {
    this.tempNumer = number;
  }

  inputOperand(operand: string) {
    if (this.tempOperand == '+') {
      this.add(this.tempNumer);
    } else if (this.tempOperand == 'i') {
      this.add(this.tempNumer);
    } else if (this.tempOperand == 'X') {
      this.multiply(this.tempNumer);
    } else if (this.tempOperand == '-') {
      this.minus(this.tempNumer);
    } else if (this.tempOperand == '/') {
      this.devide(this.tempNumer);
    }

    this.tempOperand = operand;
  }
}

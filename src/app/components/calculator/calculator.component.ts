import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/calculator.service';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  showResult: string = '';
  showSum: number = 0;

  showDisplay: string = '';
  constructor(public calculatorService: CalculatorService) {}

  ngOnInit(): void {
    let textFromService: string = this.calculatorService.getTest();
    this.showResult = textFromService;

    console.log('textFromService = ', textFromService);
  }

  addSum(): void {
    this.calculatorService.sum += 10;

    this.showSum = this.calculatorService.sum;
  }

  pressNumber(number: number) {
    this.showDisplay += number.toString();
  }

  pressOperand(operand: string) {
    let number: number = Number(this.showDisplay);

    this.showDisplay = '';
    this.calculatorService.inputNumber(number);
    this.calculatorService.inputOperand(operand);

    if (operand == '=') {
      this.onCalClick();
    } else if (operand == 'c') {
    }
  }

  onCalClick() {
    this.showDisplay = this.calculatorService.sum.toString();
  }
}

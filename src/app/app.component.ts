import { Component } from '@angular/core';
import { CalculationService } from './calculation.service';

import { NUMBER } from './num.enum';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(private calculationService: CalculationService ) {}

  runWorker(){
    const t0 = performance.now();
    const elements = this.calculationService.createElement(NUMBER.TEN_MILLIONS);
    const worker = new Worker('./even-calc.worker', {type: module});
    worker.onmessage = ({ data }) => {
        console.log('From Web Worker:');
    };
  
    worker.postMessage({data: elements});

    const t1 = performance.now();
    console.log("Call to runWorker took " + (t1 - t0) + " milliseconds.");
  }

  runThread(){
    const t0 = performance.now();
    const elements = this.calculationService.createElement(NUMBER.TEN_MILLIONS);
    const evenList = elements.slice().filter( num => {
      return this.calculationService.isEvenNum(num);
    });
    console.log(`There are ${evenList.length} even element`);
    const t1 = performance.now();
    console.log("Call to runThread took " + (t1 - t0) + " milliseconds.");
  }
}

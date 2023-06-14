import { CalculationService } from './calculation.service';

declare function postMessage(message: any): void;

// export const EVEN_SCRIPT = input => {
//   const service = new CalculationService();
//   const evenList = input.map( num => {
//     return service.isEvenNum(num);
//   });

//   postMessage(evenList);
// };

addEventListener('message', ({ data }) => {
  const service = new CalculationService();
  const evenList = data.filter( num => {
    return service.isEvenNum(num);
  });

  postMessage(evenList);
});
import dotenv from 'dotenv-safe';
import add from './math/add';

dotenv.config();
console.log(process.env.MY_NAME);

console.log('whats new');
console.log('whatever');
console.log('lets go ');

function calculateSomething(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(calculateSomething(1, 3));

console.log(add(1, 4));

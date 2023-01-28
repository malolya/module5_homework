let otherNumbers = 0;
let evenNumbers = 0;
let oddNumbers = 0;
let array = [0, 5, 7, 3, 1, 4, 1, null, undefined, 'mama', 'Olya'];
for (let i = 0; i < array.length; i++) 
{
if 
  (array[i] === 0 || (typeof (array[i]) !== 'number')) 
{otherNumbers++;} 
else 
  {
if (array[i] % 2 === 0) 
{evenNumbers++;} 
else 
{oddNumbers++;}
  }
}
console.log('Количество чётных чисел = ' + evenNumbers);
console.log('Количество нечётных чисел = ' + oddNumbers);
console.log('Количество остальных чисел = ' + otherNumbers);

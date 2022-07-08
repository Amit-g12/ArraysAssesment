//Find the Sum.
//Write a program which takes an array as input from the user and find out the sum of the array elements.


const Find_Sum = (array, N) => 
{
let sum = 0;
  for (let i = 0;i<N;i++){
    sum += array[i];
  }
  return sum;  

};
 

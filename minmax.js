//Min and Max
//Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to iterate through the array, you will easily be able to solve this.


 function arrayMin(arr) {
    let min = arr.reduce((acc, curr) => (acc < curr ? acc : curr));
     return min;
   
 }
 
 function arrayMax(arr) {
   let max = arr.reduce((acc, curr) => (acc > curr ? acc : curr));
     return max;
  
 }
 
 
//Higher Age
//You are given an array A containing the age of persons in your locality, and your task is to find and return an array containing the age of persons that are over 18(18 included).


const highAge = (N, Arr) => 
{
 let age = [];
  for(let i = 0;i<N;i++){
    if(Arr[i] >= 18){
      age.push(Arr[i]);
    }
  }
  return age;
};
 

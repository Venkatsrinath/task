let txt1 = document.getElementById("one");
let txt2 = document.getElementById("output1");
let out  =  document.getElementById("btn1");
let txt3 = document.getElementById("output2");
let txt4 = document.getElementById("output3");
let txt5 = document.getElementById("output4");
function func1(){
    // txt2.innerHTML= txt1.value;
    if(txt1.value%2 !=0|| txt1.value == 2){
        txt2.innerHTML= txt1.value +" it is a prime number";
    }
    else if(txt1.value%2 == 0){
        txt2.innerHTML =txt1.value + "it is not  a prime number";
    }
 
}
function func2(){
    let main = txt1.value;
    let a =0;
    let b =1;
    let sum;
    for(let i=0;i<main;i++){
        sum =a+b;
        a=b;
        b= sum;
        }
        txt3.innerHTML = "fibonacci series is" +sum ;

}
function func3(){
    let fac = 1;
    let main2 = txt1.value;
    for(let v =1;v<=main2;v++){
        fac = fac * v;
    }
   txt4.innerHTML="factorial is" + fac ;

}
function func4(){
 let main3 = txt1.value;   
let output = "";
let letters = "abcde";

for(let i =0; i <main3; i++){
  if (i % 2===0){
    output = output+ "a" ;
  } 
  else{
    for (let j =1; j <= i+1; j++) {
      output = output+ j + " " ;
    }
  }

  if(i === 2 || i === 4){
    output = output+ letters.substring(1,i+1);
  }

  if(i<4){
    output = output+ " "+"\n";
  }
}
txt5.innerHTML ="pattern"+"\n" + output;
// console.log(output);

}

// func1();
out.addEventListener("click",func1);
out.addEventListener("click",func2);
out.addEventListener("click",func3);
out.addEventListener("click",func4);



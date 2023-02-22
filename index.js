let txt1 = document.getElementById("one");
let txt2 = document.getElementById("output1");
let out = document.getElementById("btn1");
let txt3 = document.getElementById("output2")
let txt4 = document.getElementById("output3")
function func1(){
    // txt2.innerHTML= txt1.value;
    if(txt1.value%2 == 0){
        txt2.innerHTML= txt1.value +" it is  not a prime number";
    }
    else{
        txt2.innerHTML =txt1.value + "it is  a prime number"
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
        txt3.innerHTML = "  fibonacci series is " +sum ;

}
function func3(){
    let fac = 1;
    let main2 = txt1.value;
    for(let v =1;v<=main2;v++){
        fac = fac * v;
    }
   txt4.innerHTML="factorial is" + fac;

}
// func1();
out.addEventListener("click",func1);
out.addEventListener("click",func2);
out.addEventListener("click",func3);



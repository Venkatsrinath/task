let n = 5;
// let string= "";
// // var i =0;
// let currentCharCode =65;
// for(let i=1;i<=n;i++){
//     for(let j=0;j<= i;j++){
//         string =  string+String.fromCharCode(currentCharCode +j);
//         //  currentCharCode++;
//         // string = string + j;
//         // string = array[i] +" \n ";
//     }
//     // string = string +j;
//     // string =string +"\n";
//     // stri"ng = string + String.fromCharCode(currentCharCode +i);
//     // \n";
//     string = string+ i+"\n"
//     // string =string+"\n";


// }
// console.log(string);



let output = "";
let letters = "abcde";

for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) {
    output += "a" ;
  } else {
    for (let j = 1; j <= i + 1; j++) {
      output += j +" " ;
    }
  }

  if (i === 2 || i === 4) {
    output += letters.substring(1, i + 1 );
  }

  if (i < 4) {
    output += " "+"\n";
  }
}

console.log(output);
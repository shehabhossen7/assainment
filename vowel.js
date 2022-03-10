function countVowel(sentence){
   const vowel = [];
    for(let i = 0; i <= sentence.length; i++){
        let letter = sentence[i];
        // console.log(letter);
        if(letter == 'a' || letter == 'e'|| letter == 'i'|| letter == 'o'|| letter == 'u'){
            vowel.push(letter);
        }
    }
    return vowel;
}

let sentences = "Quick brown for jumps over the lazy dog";
const vowelIs = countVowel(sentences);
console.log(vowelIs);



/* const first2kgPrice = 30;
const othersPrice = 25;

function mularDam(mularQuantity){
    if(mularQuantity <=2){
        price = mularQuantity * first2kgPrice;
    }
    else{
        price = mularQuantity * othersPrice;
    }
    return price;
}
console.log(mularDam(5)); */


const first2kgPrice = 30;
const othersPrice = 25;

function mularDam(mularQuantity){

if(typeof mularQuantity!='number'){
    return "please enter a valid quantity";
}
if(mularQuantity <=0){
    return "please give me a correct velue";
}

let price=0;

    if(mularQuantity <=2){
        price = mularQuantity * first2kgPrice;
    }
    else{
        price = mularQuantity * othersPrice;
    }
    return price;
}
const quantity = mularDam(7);
console.log(quantity);



// fibonacchiSerise

/* function fibonacchiSerise(num){
    const fibo = [0,1];
    for(let i=2; i<=num; i++){
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo;
}

const fiboSerise = fibonacchiSerise(13);
console.log(fiboSerise); */


function fibonacchiSerise(num){
    if(typeof num !='number'){
        return "please give a Number."
    }
    if(num < 2){
        return "please give a possitive number greater then 1."
    }

    const fibo = [0,1];
    for(let i=2; i<=num; i++){
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo;
}

const fiboSerise = fibonacchiSerise(-3);
console.log(fiboSerise);

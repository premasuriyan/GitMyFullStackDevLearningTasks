/*
1.Do the below programs in anonymous function & IIFE
a.Print odd numbers in an array
b.Convert all the strings to title caps in a string array
c.Sum of all numbers in an array
d.Return all the prime numbers in an array
e.Return all the palindromes in an array
f.Return median of two sorted arrays of the same size.
g.Remove duplicates from an array
h.Rotate an array by k times


2.Do the below programs in arrow functions.
a.Print odd numbers in an array
b.Convert all the strings to title caps in a string array
c.Sum of all numbers in an array
d.Return all the prime numbers in an array
e.Return all the palindromes in an array
*/

//1.a Print odd numbers in an array --> using anonymous function & IIFE
console.log(`Task 1.a : Print odd numbers in an array --> using anonymous function`)
var inputOddNumbers = function (inputArray)
{
    const oddNumbers = []
    for(const num of inputArray){
       
        if(!isNaN(num) && (typeof num != "boolean") && (num.toString().length>0)){
            if(Number(num) % 2 === 1)
            {
                oddNumbers.push(Number(num));
            } 
        }
    }
    return oddNumbers;
}

const arr = ['',1 , 2, 4, 9, 12, 13, 20,'11'];
let result = inputOddNumbers(arr);
console.log(`1.a Printing Odd Numbers using anonymous function`,result);

console.log(`Task 1.a: Print odd numbers in an array --> using IIFE function`)

;((function(inputArray){
    const oddNumbers = []
    for(const num of inputArray){
        if(!isNaN(num) && (typeof num != "boolean") && (num.toString().length>0)){
        if(Number(num) % 2 === 1)
            {
                oddNumbers.push(Number(num));
            } 
        }
    }
    console.log(`Printing Odd Numbers using IIFE function`,oddNumbers);
}
)(arr));

/////////////////////////////////

//1.b Convert all the strings to title caps in a string array --> using anonymous function & IIFE
console.log(`Task 1.b : Convert all the strings to title caps in a string array --> using anonymous function`)
var changeToCapitalLettersArray = function (inputstringArray)
{
    const capitalLettersArray = inputstringArray.map(
        function(x){return x.toUpperCase()}
    )
    return capitalLettersArray;
}

const stringArr = ["lotus","rose","kavin","APPPLE","lEmon"];;
let capresult = changeToCapitalLettersArray(stringArr);
console.log(`Printing CAPITAL LETTERS in an array using anonymous function`,capresult);

console.log(`Task 1.b: Convert all the strings to title caps in a string array --> using IIFE function`)

;((function(inputstringArray){
    const capitalLettersArray =inputstringArray.map(
        function(x){return x.toUpperCase()}
    )
    console.log(`Printing CAPITAL LETTERS in an array using IIFE function`,capitalLettersArray);
}
)(stringArr));

/////////////////////////////////

//1.c Sum of all numbers in an array --> using anonymous function & IIFE
console.log(`Task 1.c : Sum of all numbers in an array --> using anonymous function`)
var sumAllNumbersInAnArray = function (inputstringArray)
{
    let sumAllValidNumbersInArray = 0;
    inputstringArray.map(
        function(x){            
            if(!isNaN(x) && (typeof x != "boolean") && (x.toString().length>0))
            {
                sumAllValidNumbersInArray += Number(x);
            }            
        }
    )
    return sumAllValidNumbersInArray;
}

const sumArr = [true,"lotus","1",2,"","Four"];;
let sumresult = sumAllNumbersInAnArray(sumArr);
console.log(`1.c Sum of all numbers in an array using anonymous function`,sumresult);

console.log(`Task 1.c: Sum of all numbers in an array --> using IIFE function`)

;((function(inputstringArray){
    let sumAllValidNumbersInArray = 0;
    inputstringArray.map(
        function(x){
            
            if(!isNaN(x) && (typeof x != "boolean") && (x.toString().length>0))
            {
                sumAllValidNumbersInArray += Number(x);
            }
            
        }
    )
    console.log(`Task 1.c: Sum of all numbers in an array using IIFE function`,sumAllValidNumbersInArray);
}
)(sumArr));

/////////////////////////////////

//1.d 	Return all the prime numbers in an array --> using anonymous function & IIFE
console.log(`Task 1.d : Return all the prime numbers in an array --> using anonymous function`)
var allPrimeNumbersInAnArray = function (inputstringArray)
{
    let primeNumbersInArray = inputstringArray.filter(
        function(x){
            if((typeof x === "boolean") || (x.toString().length===0)) return false;
            if(!isNaN(x))
            {
                for (var i = 2; i <= Math.sqrt(x); i++) {
                    if (x % i === 0) return false;
                  }
                  return true;
            }            
        }
    )
    return primeNumbersInArray;
}

var numArray = ['A',true,2, 3, 4, 5, 6, 7, 8, 9,'', 10]
let primeNumresult = allPrimeNumbersInAnArray(numArray);
console.log(`1.d Return all the prime numbers in an array using anonymous function`,primeNumresult);

console.log(`Task 1.d: Return all the prime numbers in an array --> using IIFE function`)

;((function(inputstringArray){
    let primeNumbersInArray = inputstringArray.filter(
        function(x){
            if((typeof x === "boolean") || (x.toString().length===0)) return false;
            if(!isNaN(x))
            {
                for (var i = 2; i <= Math.sqrt(x); i++) {
                    if (x % i === 0) return false;
                  }
                  return true;
            }            
        }
    )
    console.log(`Task 1.d: Return all the prime numbers in an array using IIFE function`,primeNumbersInArray);
}
)(numArray));

/////////////////////////////////

//1.e Return all the palindromes in an array --> using anonymous function & IIFE
console.log(`Task 1.e : Return all the palindromes in an array --> using anonymous function`)
var checkForPalindromeArray = function (words)
{   
    return  words.filter((word) => word.split("").reverse().join("") === word);    
}

var palindromeArray = ["hello", "noon","mam","madam",""];
let palindromeArrayResult = checkForPalindromeArray(palindromeArray);
console.log(`1.e : Return all the palindromes in an array using anonymous function`,palindromeArrayResult);

console.log(`Task 1.e : Return all the palindromes in an array --> using IIFE function`)

;((function(words){
    let palindromeResultArray=words.filter((word) => word.split("").reverse().join("") === word)
    console.log(`Task 1.e : Return all the palindromes in an array using IIFE function`,palindromeResultArray);
}
)(palindromeArray));

//1.f Return median of two sorted arrays of the same size --> using anonymous function & IIFE
console.log(`Task 1.f : Return median of two sorted arrays of the same size --> using anonymous function`)
var getMedian = function (ar1,ar2,n)
{   
    var i = 0; /* Current index of i/p array ar1[] */
    var j = 0; /* Current index of i/p array ar2[] */
    var count;
    var m1 = -1, m2 = -1;
 
    /* Since there are 2n elements, median will be average
    of elements at index n-1 and n in the array obtained after
    merging ar1 and ar2 */
    for (count = 0; count <= n; count++)
    {
        /*Below is to handle case where all elements of ar1[] are
        smaller than smallest(or first) element of ar2[]*/
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
 
        /*Below is to handle case where all elements of ar2[] are
        smaller than smallest(or first) element of ar1[]*/
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        /* equals sign because if two
            arrays have some common elements */
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; /* Store the prev median */
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; /* Store the prev median */
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
var medianResult;
if (n1 == n2)
    medianResult=getMedian(ar1, ar2, n1);
else
    console.log("Doesn't work for arrays of unequal size");

console.log(`1.f : Return median of two sorted arrays of the same size using anonymous function`,medianResult);

console.log(`1.f : Return median of two sorted arrays of the same size --> using IIFE function`)

;((function(ar1,ar2,n){
    var i = 0; /* Current index of i/p array ar1[] */
    var j = 0; /* Current index of i/p array ar2[] */
    var count;
    var m1 = -1, m2 = -1;
 
    /* Since there are 2n elements, median will be average
    of elements at index n-1 and n in the array obtained after
    merging ar1 and ar2 */
    for (count = 0; count <= n; count++)
    {
        /*Below is to handle case where all elements of ar1[] are
        smaller than smallest(or first) element of ar2[]*/
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
 
        /*Below is to handle case where all elements of ar2[] are
        smaller than smallest(or first) element of ar1[]*/
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        /* equals sign because if two
            arrays have some common elements */
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; /* Store the prev median */
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; /* Store the prev median */
            m2 = ar2[j];
            j++;
        }
    }
 
    medianResult = (m1 + m2)/2;
    console.log(`1.f : Return median of two sorted arrays of the same size using IIFE function`,medianResult);
}
)(ar1, ar2, n1));

/////////////////////////////////////////////

//1.g Remove duplicates from an array --> using anonymous function & IIFE
console.log(`Task 1.g	Remove duplicates from an array --> using anonymous function`)
var removeDuplicates = function (inputArray)
{   
    let inputUniqueArray=inputArray.filter( function( item, index, inputArray ) {
        return inputArray.indexOf(item) == index;
    });

    return inputUniqueArray;
}
var arrDupli = ["apple", "bannana", "orange", "apple", "orange"];
let uniqueArrayResult=removeDuplicates(arrDupli);


console.log(`1.g : Remove duplicates from an array using anonymous function`,uniqueArrayResult);

console.log(`1.g Remove duplicates from an array --> using IIFE function`)

;((function(inputArray){
    
    let inputUniqueArray=inputArray.filter( function( item, index, inputArray ) {
        return inputArray.indexOf(item) == index;
    });
    console.log(`1.g Remove duplicates from an array using IIFE function`,inputUniqueArray);
}
)(arrDupli));

/////////////////////////////////////////////

//1.h Rotate an array by k times --> using anonymous function & IIFE
console.log(`Task 1.h : Rotate an array by k times --> using anonymous function`)
var rotateArray = function (a, n, k)
{   
    // If rotation is greater 
    // than size of array 
    k = k % n; 
    let rotateResultArray='';
  
    for (let i = 0; i < n; i++) { 
        if (i < k) { 
  
            // Printing rightmost 
            // kth elements 
            rotateResultArray += (a[n + i - k] + " "); 
        } 
        else { 
  
            // Prints array after 
            // 'k' elements 
            rotateResultArray += ((a[i - k]) + " "); 
        } 
    } 

    return rotateResultArray ;
}
let Array = [1, 2, 3, 4, 5]; 
let N = Array.length; 
let K = 2; 
var rotateResultArr = rotateArray(Array, N, K);

console.log(`1.h : Rotate an array by k times using anonymous function`,rotateResultArr);

console.log(`1.h : Rotate an array by k times --> using IIFE function`)

;((function(a, n, k){
    
   // If rotation is greater 
    // than size of array 
    k = k % n; 
    let rotateResultArray='';
  
    for (let i = 0; i < n; i++) { 
        if (i < k) { 
  
            // Printing rightmost 
            // kth elements 
            rotateResultArray += (a[n + i - k] + " "); 
        } 
        else { 
  
            // Prints array after 
            // 'k' elements 
            rotateResultArray += ((a[i - k]) + " "); 
        } 
    } 
    console.log(`1.h : Rotate an array by k times using IIFE function`,rotateResultArray);
}
)(Array, N, K));

/*
2.Do the below programs in arrow functions.
a.Print odd numbers in an array
b.Convert all the strings to title caps in a string array
c.Sum of all numbers in an array
d.Return all the prime numbers in an array
e.Return all the palindromes in an array
*/

// var x = () => {};

//2.a Print odd numbers in an array --> using arrow function 
console.log(`Task 2.a : Print odd numbers in an array --> using arrow function`)
var findOddNumbers = (inputArray) =>
{
    const oddNumbers = []
    for(const num of inputArray){
       
        if(!isNaN(num) && (typeof num != "boolean") && (num.toString().length>0)){
            if(Number(num) % 2 === 1)
            {
                oddNumbers.push(Number(num));
            } 
        }
    }
    return oddNumbers;
}

const arrMixed = ['',1 , 2, 4, 9, 12, 13, 20,'11'];
let oddresult = findOddNumbers(arrMixed);
console.log(`2.a Printing Odd Numbers using arrow function`,oddresult);

//2.b Convert all the strings to title caps in a string array --> using arrow function
console.log(`Task 2.b : Convert all the strings to title caps in a string array --> using arrow function`)
var changeToCapitalArray =  (inputstringArray) =>
{
    const capitalLettersArray = inputstringArray.map(
        function(x){return x.toUpperCase()}
    )
    return capitalLettersArray;
}

const stringsmallArr = ["lotus","rose","kavin","APPPLE","lEmon"];;
let capsresult = changeToCapitalArray(stringsmallArr);
console.log(`Printing CAPITAL LETTERS in an array using arrow function`,capsresult);

//2.c Sum of all numbers in an array --> using arrow function
console.log(`Task 2.c : Sum of all numbers in an array --> using arrow function`)
var sumAllNumbersArray = (inputstringArray) =>
{
    let sumAllValidNumbersInArray = 0;
    inputstringArray.map(
        function(x){            
            if(!isNaN(x) && (typeof x != "boolean") && (x.toString().length>0))
            {
                sumAllValidNumbersInArray += Number(x);
            }            
        }
    )
    return sumAllValidNumbersInArray;
}

const sumArray = [true,"lotus","1",2,"","Four",5];;
let sumOfresult = sumAllNumbersInAnArray(sumArray);
console.log(`2.c Sum of all numbers in an array using arrow function`,sumOfresult);

//2.d Return all the prime numbers in an array --> using arrow function
console.log(`Task 2.d : Return all the prime numbers in an array --> using arrow function`)
var allPrimeNumbersArray =  (inputstringArray) =>
{
    let primeNumbersInArray = inputstringArray.filter(
        function(x){
            if((typeof x === "boolean") || (x.toString().length===0)) return false;
            if(!isNaN(x))
            {
                for (var i = 2; i <= Math.sqrt(x); i++) {
                    if (x % i === 0) return false;
                  }
                  return true;
            }            
        }
    )
    return primeNumbersInArray;
}

var numArrays = ['A',true,2, 3, 4, 5, 6, 7, 8, 9,'', 10]
let primeNumresults = allPrimeNumbersArray(numArrays);
console.log(`1.d Return all the prime numbers in an array using arrow function`,primeNumresults);

//2.e Return all the palindromes in an array --> using arrow function
console.log(`Task 2.e : Return all the palindromes in an array --> using arrow function`)
var checkPalindromeArray = function (words)
{   
    return  words.filter((word) => word.split("").reverse().join("") === word);    
}

var palindromeArrayCollection = ["hello", "noon","mam","madam"];
let palindromeArrayResults = checkPalindromeArray(palindromeArrayCollection);
console.log(`2.e : Return all the palindromes in an array using arrow function`,palindromeArrayResults);
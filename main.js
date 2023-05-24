// "Task 1" 

// let createCounter = function (n) {
//     return function () {
//         return n++
//     };


// }

// let myCounter = createCounter(10);
// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());

// "Task 2"

// function sleep(millis) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(millis);

//         }, millis);
//     })
// }

// async function waitAndPrint(millis) {
//     let result = await sleep(millis);

//     console.log(result);
// }


// let promise = waitAndPrint(100);
// promise.then(() => {
//     console.log("Done");
// });


// "Task 3" 


// function reduceArray(nums ,  fn , init){
//     if(nums.length === 0){
//         return init;
//     }

//     let accumulator;
//     let index;
//     if(init !== undefined){
//         accumulator = init
     
//         index = 0;


//     }else{
//         accumulator = nums[0];
//         index= 1;
//     }

//     while (index < nums.length){
//         let currentValue = nums[index];
//         accumulator = fn(accumulator,currentValue);
//         index++;
//     }
//     return accumulator;
// }


// Task 4

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
// var reduce = function (nums, fn, init) {
//     if (nums.length === 0 && init === undefined) {
//         throw new TypeError("Reduce of empty array with initial value");
//     }
//     return nums.reduce(fn, init);
// };

// Task 5 

// function fn(functions){
//     if(functions.length === 0){
//         return x => x;


//     }
//     return functions.reduceRight((f,g)=> (...args)=> f(g(...args)))
// }

function fn(functions){
    if (functions.length === 0){
        return x => x;
    }

    return functions.reduceRight((f,g) => (...args) => f(g(...args)));
}
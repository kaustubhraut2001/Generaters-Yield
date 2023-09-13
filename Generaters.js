// Iterater patterns
// Generaters
// yiedl keyword in js



// Iteraters

// for (const val of[1, 2, 3, 4, 5]) {
//     console.log(val);

// }


function myiterater(start = 0, end = Infinity, stepsize) {

    let nextstart = 0;
    let iteratercount = 0;

    return {
        next: function() {
            if (iteratercount >= end) {
                return {
                    done: true
                }
            } else {
                nextstart = start;
                start = start + stepsize;
                iteratercount++;
                return {
                    value: nextstart,
                    done: false
                }
            }
        }
    }
}

// const myiter = myiterater(0, 10, 2);
// while (myiter.next().done == false) {
//     console.log(myiter.next().value);

// }

// while we wnats to craete an generetaer  function we needs to use
// function*  keyword

// yield key word use case

// function* count() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// }

// const mycount = count();
// console.log(mycount);


// for (const a of mycount) {
//     console.log(a)

// }


function* iterater(start, end, stepsize) {

    for (let i = start; i <= end; i++) {
        yield i;

    }


}

const myiter = iterater(0, 10, 2);
console.log(myiter); //it also has an next method like our custom iterater
for (const a of myiter) {
    console.log(a)

}

//In JavaScript, the yield keyword is primarily used in the context of generators. Generators are a special type of function that can pause their execution and yield control back to the caller while preserving their local state. This is useful for various asynchronous programming tasks, such as working with iterators, handling asynchronous code, and implementing custom control flow.

// Here are a few key reasons why you might use yield in JavaScript:

// Iteration Control: Generators are often used to create custom iterators. The yield keyword is used to produce values one at a time in an iterative manner. When the generator function is called, it runs until it encounters a yield statement, at which point it pauses and returns the yielded value. The caller can then decide when to resume the generator to get the next value.

//Asynchronous Programming: Generators can be used to simplify asynchronous code, especially in scenarios where you want to pause execution until an asynchronous operation is complete. Libraries like co and redux-saga leverage generators to manage asynchronous flow.

// Custom Control Flow: Generators allow you to create complex control flow patterns that are more readable and maintainable than deeply nested callbacks or promises. You can use yield to yield control back to the caller at specific points, making it easier to understand the flow of your code.

//In summary, the yield keyword is used in JavaScript to create and manage generators, which are helpful for controlling the flow of code execution, working with iterators, and simplifying asynchronous programming. It allows you to pause and resume the execution of a function, making your code more readable and efficient in certain situations.
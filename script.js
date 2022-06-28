// pass by value
let a = 10;
let b = 'hi';
let c = a; 

/*
    in pass by value, 
    10 is stored as value in the variable a
    'hi' is stored as value in the variable b

    so, when c is equals to a, the value of a will be saved in c

    So, c = 10


 */

c = c + 1;

/*
    since c's value is 10,
    now c's value will 10 + 1.

    but the value of a is not changed. It's still 10.
    
    this is the scenario pass value is only for the premitive data tyes like string, number, boolean etc.,


*/

let d = [1, 2];

/*

    in javascript other than primitive data types reaminaing all are pass by reference
    
    Now, Array is non-primitive type
    so, d stores a reference to the memory address where the array stored
    when we call d, we won't get the refernce but we will get the value in the memory of the address



*/

let e = d;

/*

    now e is equals to d means,
    it acts like same as primitive types but small variation is there and its very important to notice

    e is also refering  same memory address as the d

    one thing to notice here,

    both d and e are pointing to the exact same memory address
    means e is not creating any extra memory. It's just using the reference of the memory

*/

e.push(3);

/*

    e push the value into the array using the reference to the memory. Now the array changed to [1,2,3]

    since the d end e are refering to the same memory, value of the d also changed to [1,2,3]

*/

e = [4, 5, 6];

/*

    now e is referencing to the different memory address, now d and e are not referencing to the same memory address
     
    we are overriding the value of e. Since we re overriding the value of e, the value of d is not changing

    So, in non-primitive data types.,  only if we change what actully present at the memory, then only we will be able to change the value


*/

e.push(7);

/*

    a push the value into the new array.
    so, now e is changed to [4,5,6,7].

    but d is not changed its [1,2,3]

*/

e = [1, 2, 3];

/*

    since a =[1,2,3]

    if we now make e to [1,2,3],

    those are not a !=== e and also a!== e

    since e is asigning the value in separate line, it is creating another memory reference

    even though a and e values looks same, but they are storingin two different memories

*/

let x = [1, 2];

// now x is having [1,2]
let element = 3;
add(x, element);

/*

    now the of x is changed to [1,2,3].

    it happened like

*/

/*

    when we call add function, 
    array x will be passed and it pass the reference

    and when in the function add, when it push the value to the array, since the array and x sharing the same memory reference, the value of x also changed

    So, when we pass Array or Object down to the function, if we change them, it's going to change the array and object outside of the function as well

    instead of array.push(element),

    if we do like,  array = [element],

    now, array is pointing to new memory since we are asigning
    now x = [1,2] but not [1,2,3]

    if we do element = element + 2 within the function, 
    since the element is a number, it only changes the value within the function. it won't effect the value element out side the function since it is primitive type






*/

function add(array, element) {
    
    array.push(element);
}


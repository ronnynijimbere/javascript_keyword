//test
var call = {
  caller: 'mum',
  says: function() {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

call.says();

//Hey, mum just called.

/*Here we have a function declaration inside the call object. As a general rule, 
'this' is determined by the object invoking a function. Therefore, when the call 
object invokes says function (call.says()), the 'this' keyword inside the says 
function refers to the call object, making this.caller equal to "mom".*/

//test 2
var call = {
  caller: 'mum',
  says: () => {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

call.says();

//Hey, undefined just called.

/*Arrow functions, as part of ES6 syntax, 
do NOT have their own 'this' keyword. Instead, 
they will use the 'this' keyword of whatever 'this'
was outside the function when it was created.
In other words, 'this' inside the arrow function is 
not bound to our call object, but instead is already 
bound to where the call object is being created 
originally, which in this case is the global object. 
And because the global object does not have a caller 
property, this.caller is undefined. */

//test 3
var call = {
  caller: 'mum',
  says: function() {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

var newCall = call.says;

newCall();

//Hey, undefined just called.

/*Here, we assign a new variable to the says function 
inside the call object. And then we invoke the variable,
which is a simple function call. Notice where we invoke the function. 
Is it inside the call object? No. We are invoking newCall() function globally, 
which in turn makes the 'this' keyword equal to the global object. 
As demonstrated in Challenge#2, since the global object does 
not have a caller property, you get "undefined" as a result.*/

//Test4
function anotherCaller() {
  console.log(`${this.caller} called, too!`);
}

var call = {
  caller: 'mom',
  anotherCaller: anotherCaller,
  says: function() {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

var newCall = call.anotherCaller;
undefined
newCall();
//undefined called, too!

/*We are invoking newCall() function globally, which means 
the 'this' keyword is referring to the global object. It doesn't 
matter that we are assigning newCall to a function inside the call 
object. We are calling newCall globally, and globally is where 
'this' is assigned.*/
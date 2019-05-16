/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/ Gobal Object Binding- This principle tells us that that if we use the "this" keyword while within the global scope, 
*    it will bind to the window/ console object.

* 2. Implicit Binding- This principle tells us that we will use dot notation to invoke our function. Whenever an object is called 
*    followed by a dot within a function, we know that whatever proceeds the dot, will represent the "this" key.

* 3. New Binding- This principle tells us that the key word "this" will refer to a specified instance of an object that is ctreated 
*    and returned by a constructor function when the constructor funciton is used.

*
* 4. Explicit Binding- This principle demonmstrates a clearly defined binding technique, when we use call(), apply(), or bind() in JS becuase we 
*     we clearly pass the content to one of the mentioned methods.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function favFood(food) {
    console.log(this);
    return food;
}
favFood("Pizza");

// Principle 2
// code example for Implicit Binding
const melsObj = {
    statement: 'Who is she, you ask?',
    whoIsShe: function (name) {
        console.log(`${this.statement} My name is ${name}, it's nice to meet you.`);
        console.log(this);
    }
};
melsObj.whoIsShe('Melanie Harris');


// Principle 3
// code example for New Binding
function InMyPocket(item) {
    this.many = 'one ';
    this.item = item;
    this.speak = function () {
        console.log(this.many + this.item);
        console.log(this);
    };
}

const firstItem = new InMyPocket('wallet');
const secondItem = new InMyPocket('key');

firstItem.speak();
secondItem.speak();



// Principle 4
// code example for Explicit Binding

const me ={
    name: "Melanie Harris,",
    learning: "JavaScript",
}
function aboutMe(){
    return `Hello. My name is ${this.name} and I'm currently learning ${this.learning}`
}
console.log(aboutMe.call(me));


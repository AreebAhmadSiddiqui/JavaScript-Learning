# Lession 1

-> NodeJS is an environment used to run the JS files ( you can also use Deno )

# Lession 4 ( Variables )

-> Mota Mota try to avoid using var ( scope mein antar ni janta wo so agar block ya functional scope mein same variable galti se change kar diya to har jagah change ho jaega)
-> const ko declare karke initialise karna bhi zaruri hai
-> let ko sirf declare kar sakte ( uski value undefined hogi)
-> Let ko tum ek normal variable maan sakte ho jaise baaki lang mein hota hai

# Lession 5 ( Datatypes )

-> primitive (non referenced -> immutable ) (7 hote hai unke alawa koi bhi aur) non primitive ( reference wale -> mutable)
-> null vs undefined
-> typeof -> data type batata hai us particular varibale ka
-> Interview Question ( typeof null vs undefined )
-> typeof null object return kar deta hai ( jo ki non primitive hai ye kyun???)

    Why typeof null Returns "object" in JavaScript?

    The typeof null returning "object" is a long-standing bug in JavaScript that dates back to the language's early days. It was never fixed because fixing it would break many existing websites that rely on this behavior.

    The Historical Reason
    In the first version of JavaScript (1995), values were stored in 32-bit units:

# The first 3 bits indicated the TYPE TAG

    000 → object

    1 → integer

    010 → double (floating-point)

    100 → string

    110 → boolean

# null was represented as all zeros (00000000...), which matched the object tag (000).

# Thus, typeof null incorrectly returned "object".

    Why Wasn’t It Fixed?
    Backward Compatibility: Many existing websites and scripts relied on this behavior.

    Breaking Changes: Fixing it would cause many programs to fail unexpectedly.

    ECMAScript Spec Acknowledges It:
    The ECMAScript specification explicitly states:

    "The typeof operator returns "object" for null for legacy reasons."

    How to Properly Check for null?
    Since typeof null is misleading, the best way to check for null is:

    const value = null;

    // Correct way:
    console.log(value === null); // true

    // Wrong way (due to the bug):
    console.log(typeof value === "object"); // true (misleading)


# Lession 5 ( Conversion  )

-> NaN is of type Number
-> Boolean mein agar data ya 1 hai to true otherwise false
-> string mein jo doge wo convert ho jaega as it is
-> lekin object ko direct convert karoge to [object Object] aega to use JSON.stringify()

# Lession 5 ( Operations )

-> Math.floor(x/y) or Math.trunc(x/y) for quotient
-> floor gives you the floor as it suggest for neg numbers ( like -3.4) would be -4 but for trunc it will be -3, so use trunc for negatives
-> log("1"+2+3) vs log(1+2+"3")
-> Operator precedance time mile kabhi to padhna

Top 7 Operator Precedence Rules
Precedence	Operator(s)	        Example	            Associativity	Key Behavior
1           () (Grouping)	    (2 + 3) * 4	    →	Highest priority, always first
2	        ** (Exponent)	    2 ** 3 ** 2	    ←	Right-to-left: 2 ** (3 ** 2)
3	        * / %	            3 * 4 / 2 % 3	→	Left-to-right (equal precedence)
4	        + -	                5 + 3 - 1	    →	Left-to-right (equal precedence)
5	        > < >= <=	        5 > 3 === true	→	Comparisons happen before ==
6	        && (Logical AND)	`a && b		c`	→	Higher than ||
7	        = (Assignment)	    a = b = 5	    ←	Right-to-left (chains work)

# Lession 6 ( Comparison )

-> Basic comparison
-> Jab different type ko karo to make sure dono ko same type mein le ao ( like string > int ko ya to int > int karo ya fir str > str karo)
-> null ka comparison zero se

Expression	Result	Why?
null > 0	false	null → 0 (numeric), but 0 > 0 is false.
null == 0	false	null only equals undefined (null == undefined → true) in loosed equality
null >= 0	true	null → 0 (numeric), and 0 >= 0 is true.
null === 0	false	No type coercion; null (object) ≠ 0 (number).

Numeric comparisons (>, <, >=, <=):

null → 0 (null converts to zero ).

Loose equality (==):

null == undefined → true.

null == 0 → false (no numeric coercion here!).

Strict equality (===):

Always checks type + value → null is an object, not a number.


Mere notes

> , < ,>= ,<=  ismein null ko convert karenge in zero then check
== (lose equality) ismein null ko check karte hai undefined se 
=== (strict equality) ismein to type se check hota (object)!=number

Similarly  undefined convert hota hai NaN mein to sabhi conditions false hongi

## lekin undefined==null ( this is true)

-> strict checks


# Lession 7 ( Datatypes Summary)

->  Two Data Type Categories in JavaScript
JavaScript data types are categorized into 2 types based on how they are stored and accessed in memory:

Primitive (Call by Value)

Non-Primitive (Call by Reference)

-> Primitive Data Types (7 Types)
Stored directly in memory (copied when assigned).

Types: Number, String, Boolean, Null, Undefined, Symbol, BigInt.

Example Quirk:

javascript
const id1 = Symbol('123');
const id2 = Symbol('123');
console.log(id1 === id2); // false (unique symbols)
->  Non-Primitive Data Types (Reference Types)
Stored as references (changes affect all copies).

Types: Array, Object, Function, Date, RegExp.

-> JavaScript is Dynamically Typed
Types are checked at runtime (not compile time).

Variables can change types freely:

javascript
let x = 10;      // number  
x = "hello";     // string  
x = true;        // boolean  
-> Static Typing via TypeScript
TypeScript adds static typing (compile-time checks) to JavaScript.

Example:

typescript
let y: number = 10;  
y = "hello"; // Error (TypeScript prevents this).  
Key Takeaway:

Primitive = Copy | Non-Primitive = Reference.

JS flexibility = Dynamic Typing.

TypeScript = Optional Static Typing.

-> Return type of variables in JavaScript

1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

# Lession 8 ( Stack and Heap Memory )

-> Stack hold primitive data types 
-> Heap non primitive ( reference copy hota hai ek varibale change karoge to doosra bhi change hoga)

-> Ek note 
    Stack mein wo variable to jaega lets say object wala bas value ki jagah reference ko point karega example ni samjhe to (memory wala dekh lo)

    ![stack and heap](image.png)

# Lession 9 ( Strings )

-> String interpolation allows embedding variables/expressions directly into strings using template literals (enclosed in backticks `).
-> substring cant be used for negative indices use slice instead
-> All methods return a new string (original remains unchanged). ( Immutability )

# Lession 10 ( Nums and Maths )

-> Normal Functions 
-> parseFloat(string)
-> parseInt(string)

# Lession 11 ( Date and Time )

-> Basic date and time functions

# Lession 12 ( Arrays )

-> All built-in array-copy operations (spread syntax, Array.from(), Array.prototype.slice(), and Array.prototype.concat()) create shallow copies. If you instead want a deep copy of an array, you can use JSON.stringify() to convert the array to a JSON string, and then JSON.parse() to convert the string back into a new array that's completely independent from the original array.

-> Shallow means reference same hoga agar ek mein change kiya to doosra bhi change ho jaega
-> Deep copy mein alag alag reference hai to standalone array banega doosra

-> slice vs splice (splice alters the ori array while slice doesn't)

-> shift aur unshift ( naam ke viprit kaam karte (shift removes from beginning,unshift adds))

# Lession 13 ( Arrays 2)

-> Add one array to other
  -> use simple push and then flat(depth) kitne depth tak jana hai see example ( default 1)
  -> use concat ( can only add one array to another )
  -> (Best way) use spread operator 
-> Making array from iterables
  -> use Array.from() ( An iterable (like String, Array, Map, Set )
  -> use Array.of()  ( set of values )
-> if you want to have objects in the array
  -> then either you can get keys Array.from(Object.key(obj))
  -> or you can get values Array.from(Object.values(obj))
  -> one more thing it will place the [key,value] pair as an array in the other array see example
  Array.from(Object.entries(obj))


  # Lession 14 ( Objects 1)

  -> Two ways we can create object ( using constructor ( singleton object would be created) and literal)
  -> can access keys using . or ['key_name']
  -> to use symbol as a key create a symbol using Symbol() and its key would be under [mySymbol] and to access it object_name[mySymbol]

  ->if you want to freeze changes  Object.freeze(JsUser)

  -> If a function is there in any object you can use this keyword to access all the other fields of objects

  # Lession 15 ( Objects 2 )

  -> Merge objects easily using spread operator
  -> U can also use Object.assign wo ni padha maine
  -> Get array of keys using Object.keys(object_name)
  -> get aray of values using Object.values(object_name)
  -> get array of key value pair Object.entries(object_name)

  -> if you want to check if certain property is there in the object or not use object_name.hasOwnProperty('key')

  -> object destructuring {x,y,z,..}=object_name
  where (x,y,z,.. are the properties of object)

  # Lession 16 ( Functions )

  -> functionname is the reference
  -> functionname() is the function call
  -> function hello(x,y)   hello(a,b)  {x,y => parameters and a,b => arguments}
  -> agar parameter main value dal diya hai explicitly to wo le elga jaise hello(name='areeb') agar ni paas karte kuch to areeb le lega
  -> function ke andar function return bhi kar sakte ho
  -> use ... ( rest operator ) when not sure about the number of parameters
  # Lession 17 ( Scopes )

  Feature
              var	            let	             const
Scope	        Function	      Block	           Block
Hoisting	    Yes (undefined)	Yes (TDZ)	       Yes (TDZ)
Reassignment	✅ Yes	        ✅ Yes	          ❌ No
Redeclaration	✅ Yes	        ❌ No	          ❌ No
Use Case	    Legacy code	    Mutable variables	Constants

-> Ek important note var function scoped hai iska agar wo kisi function ke andar hai tab to bahar access ni hoga lekin agar kisi aur cheez ke andar jaise loops , {} tab accessible hoga

-> Basic functional scopes 
-> Hoisting intro ( Can access functions before initialization but not variable)

var is Function-Scoped (not Block-Scoped)

Variables declared with var are only scoped to functions, not to blocks ({}, if, for, while, etc.).

If var is inside a function, it cannot be accessed outside.

If var is inside a block (but not a function), it can be accessed outside.

Examples:

✅ Case 1: var Inside a Function (Not Accessible Outside)
javascript
function test() {
    var x = 10; // Function-scoped
    console.log(x); // 10 (works inside)
}
test();
console.log(x); // ReferenceError: x is not defined (cannot access outside)
✔️ Correct: var is trapped inside the function.

❌ Case 2: var Inside a Block (Accessible Outside)
javascript
if (true) {
    var y = 20; // Not block-scoped (leaks outside)
    console.log(y); // 20 (works inside)
}
console.log(y); // 20 (still accessible outside!)
⚠️ Problem: var ignores block scope ({}, if, for, etc.) and leaks outside.

❌ Case 3: var in a Loop (Leaks Outside)
javascript
for (var i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}
console.log(i); // 3 (still accessible outside the loop!)
⚠️ Problem: i leaks outside the loop (unlike let/const).

Block Scope (let, const)
Variables declared with let/const are block-scoped.

They are only accessible inside the block ({}) where they are declared.

They do NOT leak outside blocks (if, for, while).


Simple sa ye yaad rakho 

-> let and const are block scoped ({}) iske andar hi accessible hai
-> var is function scoped ( agar sirf function mein hoga to not accessible ousidee) otherwise sabmein hoga

# Lession 18 ( Arrow and This )

-> Browser mein log(this)  will return window Object which is the Global Object ( which acts as a container for all the variable declared globally )
-> in node environment {} 
-> this points to the current context ( obect mein this.key access kar sakte ho lekin this.var_name in function undefined degaa )
-> Why do we use this in normal functions and not in arrow function? ( dekha tha maine to function mein bahut kuch a rha tha , arrow mein ni aya sirf {} aya ( wo is liye kyun uska immediate parents scope was global scope ( node mein tha isliye {} aya browser mein hota to window ata)))

Simple answer hai normal mein they have their own binding is liye usmein ata hai wo sab data, lekin arrow func mein khud ki koi binding ni hoti hai isliye wo this keyword immediate parent ke scope ko refer karta hai ....

Learn more

The this keyword behaves differently in normal functions compared to arrow functions. Normal functions have their own this binding, which is determined by how the function is called (e.g., as a method, via new, call, apply, or bind).
 This allows the this value to be dynamically set based on the context of the call.

In contrast, arrow functions do not have their own this binding.
 Instead, they inherit the this value from the enclosing (lexical) scope where they are defined.
 This means that this inside an arrow function refers to the this value of the nearest non-arrow parent function or the global object if no such parent exists.

 # Lession 19 ( IIFE )

->In JavaScript, when you declare variables or functions without any protection, they automatically become part of the global scope (usually the window object in browsers). This leads to global namespace pollution, which can cause:
->Naming Collisions – If two scripts use the same variable name, they overwrite each other.
->Memory Leaks – Unused variables stay in memory because they’re globally accessible.
->Unpredictable Bugs – Other scripts can accidentally modify your variables.

How IIFE Solves This?
-> An IIFE creates a private scope where variables are confined inside the function and disappear after execution.

// standard IIFE
(function () {
  // statements…
})();

// arrow function variant
(() => {
  // statements…
})();

// async IIFE
(async () => {
  // statements…
})();

-> Named IIFE ( functional one) and Normal IIFE arrow function
-> We can use multiple iife just remember to add semi colon ( that can be anywhere before the start of the other function) 
-> In our code example I have taken one after the other ( lekin man lo doosra wala hazaar line ke baad hota lekin agar kahin bhi ; a jega to cancel ho jaega wo lekin hn dhyan rakhna ki semicolon turant laga do call hone ke just baad ()(); )


# Lession 20 ( Execution Context and Call Stack)

## Everything in JS happens inside an execution context

## JavaScript is synchronous single threaded language

->An Execution Context is the environment where JavaScript code runs, consisting of:

Variable Environment (hoisting, scope).

Scope Chain (access to outer variables).

this Binding (context-dependent).

It is created in two phases (Memory Allocation → Execution) and managed via the Call Stack.

-> For In depth look at the code


# Lession 21 ( Control Flow )

-> If you dont add break it will execute all the staments below it till it finds next break it can even execute default

-> So, inside a switch statement, once a case statement matches the given variable, all following statements will be executed ignoring the criteria until a break statement or closing curly bracket is encountered

-> default can be placed anywhere

-> Truthy values and Falsy Values

-> Learn falsy values 

false, 0 ,-0,BigInt 0n,"",null,undefined,NaN

-> Nullish Coalescing Operator (??)

-> // || drops falsy value ( Ex - cnst val = 0 || 2 -> val takes 2)


# Lession 22 ( Loops )

-> for, while and do while ( runs atleast once before checking the conditions)

-> for objects we can use for in and for maps use for of ( for of mein o ata hai yaad rakho no for objects )

for	        for (let i = 0; i < 5; i++)	  Fixed iterations (arrays, strings)
while	      while (condition)	            Looping until a condition is false
do...while	do { ... } while (condition)	Executes at least once before checking condition
for...in	  for (let key in object)	      Enumerating object properties (not recommended for arrays)
for...of	  for (let value of iterable)	  Iterating over iterables (arrays, strings, maps, sets, etc.) ( not in objects )
forEach()	  array.forEach((item) => {})	  Iterating over arrays (does not work on objects)


-> forEach Loop

-> they want a callback function (it doesn't have a name)
-> doesn't return anything
-> you can create a function outside and give it to it ( but use reference only dont add () after it in loop) arr.forEach(handleFunc) ( see example if not clear)

-> forEach has got multiple parameters some of them are
-> we have forEach((val,index,ori_array)) // names might change but the position of these params remains the same

# Lession 23 ( filter map reduce )

-> forEach doesn't return any value ( neither by its function nor will return explicitly )

![alt text](distinction-array-func.png)

-> filter , map , reduce in detail

# Lession 24 ( DOM )

-> DOM ( or Dcoument Object Model) represents the structure of the HTML/XML document as a tree of objects, allowing JavaScript to dynamically manipulate content, structure, and styles.

-> Tree-like structure where each HTML element is a node.

JavaScript can interact with the DOM to:

Change content (innerHTML, textContent).

Modify styles (style, classList).

Add/remove elements (appendChild, remove).

Handle events (click, keypress).

jaise ki one.html mein we have html as parent node
                     window

                     document

                      html
                head            body
attribute    <- meta   title    div -> attribute(classname etc)
                   text      p      div
                            text    text


2. DOM Node Types
Node Type	Example	Description
Element	<div>, <p>	HTML tags.
Text	"Hello World" (inside <p>)	Text content.
Attribute	class="header"	Attributes of elements.
Document	document	Root node.
Comment	<!-- comment -->	HTML comments.


3. HTML Collection , Object Collection array ni hai lekin array jaise hai

-> setAttribute hamesha override karega

-> HTMLCollection and NodeList

-> HTMLCollection mein forEach bhi ni hai to convert to array Array.from(source) and then use , ismein bhi map ni hai

-> NodeList mein we dont have map but we have forEach


two.html()

-> parent and child relation ( also sibling ones)

-> Important childNodes thing

three.html()

-> createTextNode('Text')


four.html()

for text remeber use dom.createTextNode(text) ( dont use innerHTML,textContent and all)


-> how to edit? ( use replaceWith)
-> also u can hardocre using outerHTML

for delete

select the tag to be deleted

tag.remove()


# Lession 25 ( Events )

Events are actions or occurrences that happen in the browser that JavaScript can respond to. They're a fundamental part of interactive web applications, allowing your code to react to user actions, browser activities, and other triggers.

Common Types of Events
Mouse Events
click - When an element is clicked

dblclick - Double click

mouseenter - Mouse pointer enters an element

mouseleave - Mouse pointer leaves an element

mousemove - Mouse moves over an element

mousedown - Mouse button is pressed down

mouseup - Mouse button is released

Keyboard Events
keydown - A key is pressed down

keyup - A key is released

keypress - A key is pressed (deprecated)

Form Events
submit - When a form is submitted

change - When an input element's value changes

focus - When an element gets focus

blur - When an element loses focus

input - When an input element's value changes (fires immediately)

Window/Document Events
load - When the page has finished loading

DOMContentLoaded - When the DOM is fully loaded (no need to wait for stylesheets, images)

resize - When the browser window is resized

scroll - When the user scrolls

Event Handling Methods
1. HTML Attribute
html
<button onclick="alert('Clicked!')">Click me</button>
2. DOM Property
javascript
const btn = document.querySelector('button');
btn.onclick = function() {
  alert('Clicked!');
};
3. addEventListener() (Recommended)
javascript
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
  alert('Clicked!');
});
Event Object
When an event occurs, the browser creates an event object containing information about the event, which is passed to the event handler:

javascript
element.addEventListener('click', function(event) {
  console.log(event.type); // "click"
  console.log(event.target); // The element that was clicked
});


-> why no second approach

a) Only one handler allowed in onclick while multiple handlers you can write those will execute at the same time

// Using onclick (BAD)
button.onclick = function() { console.log('First'); };
button.onclick = function() { console.log('Second'); }; // Overwrites the first!

// Using addEventListener (GOOD)
button.addEventListener('click', () => console.log('First'));
button.addEventListener('click', () => console.log('Second')); // Both run!


b) No control over Event Phase( Bubbling or capturing phase)
c) Sometimes event object is not passed to the handler function unless explicitly given

document.querySelector('.classname').addEventListener('event',function(){},false) // this last false is default so whether u write it or not not no effect

-> false is for bubbling phase ( child-to-parent) ( bubble analogy)
-> true is for capturing phase ( par-to-chil)

-> function ka agar naam ni hai to that function ko remove ni kar paoge
-> Hamesha dhyan dena ki sirf reference likho, () add na karna end mein warna turant invoke ho jaega or undefined store ho jaega event listerner mein

1. Event Basics (type, timestamp, preventDefault())
type (String)
Returns the name of the event (e.g., "click", "keydown").

javascript
button.addEventListener("click", (e) => {
  console.log(e.type); // "click"
});
timestamp (Number)
Returns the time (in milliseconds) when the event occurred (relative to page load).

javascript
document.addEventListener("mousemove", (e) => {
  console.log(e.timeStamp); // e.g., 1234.56
});
preventDefault() (Method)
Stops the default browser behavior (e.g., preventing a form submission or link navigation).

javascript
link.addEventListener("click", (e) => {
  e.preventDefault(); // Stops the link from navigating
});
2. Event Target Properties (target, toElement, srcElement)
target (Element)
The element that triggered the event (deepest in the DOM).

javascript
document.addEventListener("click", (e) => {
  console.log(e.target); // <button>Click</button>
});
currentTarget (Element)
The element the listener is attached to (useful in event delegation).

javascript
parent.addEventListener("click", (e) => {
  console.log(e.currentTarget); // Always <div id="parent">
});
toElement & srcElement (Legacy)
Deprecated versions of target (used in old IE).

Modern code should use target instead.

3. Mouse/Touch Position Properties
clientX, clientY (Number)
Coordinates relative to the viewport (window).

javascript
document.addEventListener("mousemove", (e) => {
  console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
});
screenX, screenY (Number)
Coordinates relative to the entire screen (includes scroll and OS toolbars).

javascript
document.addEventListener("click", (e) => {
  console.log(`Screen X: ${e.screenX}, Screen Y: ${e.screenY}`);
});
pageX, pageY (Number)
Coordinates relative to the full page (accounts for scrolling).

javascript
document.addEventListener("click", (e) => {
  console.log(`Page X: ${e.pageX}, Page Y: ${e.pageY}`);
});
offsetX, offsetY (Number)
Coordinates relative to the target element's border.

javascript
button.addEventListener("click", (e) => {
  console.log(`Inside button: X=${e.offsetX}, Y=${e.offsetY}`);
});
4. Keyboard/Modifier Key Properties
altKey, ctrlKey, shiftKey, metaKey (Boolean)
Returns true if the key was pressed during the event.

javascript
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault(); // Block Ctrl+S save
  }
});
keyCode (Deprecated)
Legacy property for keyboard key codes (avoid; use key or code instead).

javascript
document.addEventListener("keydown", (e) => {
  console.log(e.key); // "Enter", "a", "ArrowUp" (modern)
  console.log(e.code); // "KeyA", "Space" (physical key position)
});
Modern Replacements:
Legacy	Modern Equivalent
e.keyCode	e.key or e.code
e.which	e.key
5. Practical Example
javascript
document.addEventListener("click", (e) => {
  console.log("Event type:", e.type);
  console.log("Target element:", e.target);
  console.log("Mouse position (viewport):", e.clientX, e.clientY);
  
  if (e.ctrlKey) {
    console.log("Ctrl was held during click!");
  }
});

-> EVENTS PROPAGATION ( Please look into the code v.v.v.imp)

Main ek table bana raha hun thik ki kab kaunsa true hai 
            1  2  3  4  5  6 7  8
Child       T  T  T  T  F  F F  F
parent      T  T  F  F  T  T F  F
grandparent T  F  T  F  T  F T  F

1 -> g p c
2 -> p c g
3 -> g c p
4 -> c p g
5 -> g p c
6 -> p c g
7 -> g c p
8 -> c p g


### ALGO

### pehle upar se neeche aega check karta hua ki kis kis mein T hai agar tru hai to wo event chal jaega agar ni hai to phase 1 mein kuch ni hoga

### -> phase 2 mein neeche se upar jaega ye check karta hu ki false kitne mien hai




->


Event Propagation in JavaScript: A Deep Dive
Event propagation describes how events travel through the DOM tree. Understanding it is crucial for proper event handling. There are three phases in event propagation:

1. The Three Phases of Event Propagation
(1) Capturing Phase (Top-Down)
Event travels from the window down to the target element.

Rarely used, but useful for intercepting events early.

To listen in this phase, set capture: true in addEventListener.

(2) Target Phase
Event reaches the actual target element that triggered it.

(3) Bubbling Phase (Bottom-Up)
Event bubbles back up from the target to the window.

Default behavior for most event listeners.

html
<div id="grandparent">
  <div id="parent">
    <button id="child">Click Me</button>
  </div>
</div>
javascript
const elements = ["grandparent", "parent", "child"];

elements.forEach(id => {
  document.getElementById(id).addEventListener("click", () => {
    console.log(`Capturing: ${id}`);
  }, true); // Capturing phase

  document.getElementById(id).addEventListener("click", () => {
    console.log(`Bubbling: ${id}`);
  }, false); // Bubbling phase (default)
});
Output when clicking the button:

text
Capturing: grandparent  
Capturing: parent  
Capturing: child  
Bubbling: child  
Bubbling: parent  
Bubbling: grandparent  
2. Controlling Propagation
event.stopPropagation()
Stops the event from moving further in both capturing and bubbling phases.

Example: Prevent parent elements from receiving the event.

javascript
child.addEventListener("click", (e) => {
  e.stopPropagation(); // Stops at target phase
  console.log("Child clicked (propagation stopped)");
});
event.stopImmediatePropagation()
Stops all remaining listeners (even on the same element).

javascript
child.addEventListener("click", (e) => {
  e.stopImmediatePropagation(); // Blocks other listeners
  console.log("First listener (blocks others)");
});

child.addEventListener("click", () => {
  console.log("This won't run!");
});
event.preventDefault() vs stopPropagation()
Method	Purpose
preventDefault()	Stops default browser behavior (e.g., form submission).
stopPropagation()	Stops event bubbling/capturing (but default action still happens).
3. Event Delegation (Bubbling in Practice)
Instead of attaching listeners to every child, use bubbling to listen on a parent:

html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
javascript
document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(`Clicked: ${e.target.textContent}`);
  }
});
✅ Benefits:
✔ Works for dynamically added elements.
✔ Uses less memory (single listener instead of many).

4. When to Use Capturing vs Bubbling
Phase	Use Case
Capturing (true)	Intercept events before they reach the target (e.g., analytics tracking).
Bubbling (false)	Default for most cases (e.g., handling button clicks).
5. Summary Table
Concept	Description
Capturing Phase	window → Target (use capture: true).
Target Phase	Event reaches the target element.
Bubbling Phase	Target → window (default).
stopPropagation()	Stops further event travel.
stopImmediatePropagation()	Stops all remaining listeners.
Event Delegation	Listen on parent, check e.target.
Best Practices
Prefer bubbling unless you need early interception.

Use event delegation for dynamic elements.

Avoid excessive stopPropagation() (can break expected behavior).

Clean up listeners with removeEventListener.

Understanding propagation helps you control event flow and write efficient, scalable event handlers. 🚀

## jis jis pe event laga hoga wo execute hota jaega in any phase ( bubbing or capturing )

# Lession 26 ( Events continues ( event delegation))

-> Event delegation is a powerful pattern in JavaScript where instead of attaching event listeners to individual child elements, you attach a single listener to a parent element and let events "bubble up" from the children. This leverages event propagation (bubbling) to handle events efficiently.

-> Hamare example mein li mein to event laga ni hai , to kya hua bubble to karega na parent pe ( to parent wala run ho jaega)

-> we also studied how to remove a child in this case


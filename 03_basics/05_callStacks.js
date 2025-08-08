// Very Very Important For Interview Perspective

// JavaScript Execution Context
JavaScript runs line by line and can only go to the next line once it has finished executing ( Hence JavaScript is synchronous single threaded language)


Everything in JS happens inside an execution context


An Execution Context (EC) is an abstract environment where JavaScript code is evaluated and executed.

Types of Execution Context

a) Global Execution Context ( ye to hoga hi hoga)
b) Functional Execution Context
c) Eval Execution Context

Global Execution Context (GEC)

->Created when the script first runs.
->Represents the global scope (window in browsers, global in Node.js). this binding
->Only one GEC exists per program.

Function Execution Context (FEC)

->Created every time a function is called.
->Each function call gets its own EC.
->Deleted after the function finishes execution.
-> this binding
-> Har function ke liye new variable env( Execution Context ) + execution thread

Eval Execution Context (rarely used)

->Created inside eval() (not recommended for security reasons).

How Execution Context is Created (Two Phases) ?

a) Memory Allocation Phase
b) Code Execution Phase

Memory Allocation Phase

-> Ismein sabhi variables ko memoery allocate ki jati hai and usmein undefined bhar diya jata hai
-> Sare functions ki definition uthake rakh di jati hai

Code Execution Phase

-> ab code run hota hai dhere dheere aur jo values hoti hai variables ki unhi laki de di jati hai 
-> Agar koi function hota hai to uska alag execution context banta hai

-> Fir uske do phase honge MCP and CEP
-> Jab uska kaam ho jaega to wo poora context delete kar diya jaega

-> jab ham JS file ke end mein a jaenge to Global Context Bhi delete kar diya jaega


-> Acha ye kaise kaam karta hai matlab how does it execute

Using call stack

stack -> global execution context to rahega hi rahega -> function1 -> function2 

-> Jaise jaise work hota jaega functions ka unka context delete hoga aur wo yahan se popped out


Agar example aur diagram dekhna hai to see the video

let a=10
let b=5
function addNum(num1,num2){
    let total=num1+num2
    return total
}
let result1=addNum(val1,val2)
let result2=addNum(10,2)


Lets write that too

Steps

-> sabse pehle GEC banega with this keyword pointing to it ( window object in case of browser and {} in case of node)

Abe Memory Phase

a -> undefined
b -> undefined
addNum -> funcDef
result1 -> undefined
restul2 -> undefined

Ab CEP

a -> 10
b -> 5
addNum -> funcDef
result1 -> addNUm ka EC
            |
        addNum ka EC
Har function ke liye new variable env + execution thread

Memory Phase           CEP

num1 -> unde        num1 -> 10
num2 -> unde        num2 -> 5
total -> unde       total -> 15
returns total to jahan se call hua tha ( line 99 )

a -> 10
b -> 5
addNum -> funcDef
result1 -> 15 after the above function was called and returned And the above Function Context will be deleted

result2 -> addNum(10,2) -> ab iska bhi same cheez hogi

when this is done then global context bhi delete ho jaega


stack looks like this

[GEC] -> [GEC -> addNum(10,5)] -> [GEC] -> [GEC -> addNum(10,2)]

ab agar function ke andar function hota to wo upar ata jata stack ke


// To show this to an interviewer

-> Go to browser 
-> Inspect
-> source
-> Create Snippet
-> add Breakpoint


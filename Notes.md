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
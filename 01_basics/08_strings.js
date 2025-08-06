const name='Areeb'
const age=100

// Dont use it
console.log("My name is "+name+" and age is "+age)

// Use String interpolation
console.log(`My name is ${name} and my age is ${age}`)
console.log(`My name is ${name} and my age is ${10+20+5*4}`)


const gameName=new String('Hello')
console.log(gameName.substring(0,2))
console.log(gameName.charAt(2))
console.log(gameName.indexOf('H'))
console.log(gameName.slice(-3,5)) //llo

// Feature	            substring	                        slice
// Negative Indices	Treated as 0 (ignores negatives).	Counts from the end of the string (-1 = last character).
// Immutability	    Both return a new string (original remains unchanged).

// if you give - index to substring it will convert it to 0
console.log(gameName.substring(-4,3)) // expected el got Hel
console.log(gameName.slice(-4,3)) // expect el got el


const newString=gameName.replace('H','h')
console.log(newString);

const temp="Hello How Are You?"
console.log(temp.split(' '))


Here’s a table of the most common JavaScript string functions, their definitions, and examples:

Function	            Definition	                                    Example	                Output
length	                Returns the length of the string.	            "hello".length;	5
toUpperCase()	        Converts the string to uppercase.	            "hello".toUpperCase();	"HELLO"
toLowerCase()	        Converts the string to lowercase.	            "HELLO".toLowerCase();	"hello"
charAt(index)	        Returns the character at the specified index.	"hello".charAt(1);	"e"
indexOf(str)	        Returns the first index of a substring (or -1).	"hello".indexOf("l");	2
lastIndexOf(str)	    Returns the last index of a substring (or -1).	"hello".lastIndexOf("l");	3
substring(s, e)	        Extracts chars between indices (end exclusive).	"hello".substring(1, 3);	"el"
slice(s, e)	            Extracts chars (supports negative indices).	    "hello".slice(-3);	"llo"
split(separator)	    Splits the string into an array by a separator.	"a,b,c".split(",");	["a", "b", "c"]
trim()	                Removes whitespace from both ends.	            " hello ".trim();	"hello"
replace(old, new)	    Replaces the first match of old with new.	    "hello".replace("l", "x");	"hexlo"
includes(str)	        Checks if the string contains a substring.	    "hello".includes("ell");	true
startsWith(str)	        Checks if the string starts with a substring.	"hello".startsWith("he");	true
endsWith(str)	        Checks if the string ends with a substring.	    "hello".endsWith("lo");	true
concat(str)	            Combines two strings.	                        "hello".concat(" world");	"hello world"
repeat(count)	        Repeats the string count times.	                "ha".repeat(3);	"hahaha"
padStart(len, padStr)	Pads the start until reaching len.	            "5".padStart(3, "0");	"005"
padEnd(len, padStr)	    Pads the end until reaching len.	            "5".padEnd(3, "0");	"500"
match(regex)	        Searches for matches using a regex.	            "hello".match(/e/);	["e"] (or null)
search(regex)	        Returns the index of the first regex match.	    "hello".search(/e/);	1


Key Notes:
Immutable: All methods return a new string (original remains unchanged).
Case Sensitivity: Methods like includes(), startsWith() are case-sensitive.
Regex Support: match() and search() accept regular expressions.
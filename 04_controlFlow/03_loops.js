// for ( i ; i< ;i++){

// }

for (var i = 0; i <=10; i++) {
    const element = i;
    console.log(element*2);
    function heloo(){
        console.log('noob');
        var test='hi'
    }
    heloo()
    // console.log(test); // test is not defined
}

console.log(i);  //prints 11 ( as var is function scoped ( sirf wahan pe bahar access ni hoga))

// Keywords

// a) continue b) break

for (let i = 0;  i<=10; i++) {
    if( i>5) break;
    else{
        console.log(i);
        continue;
    }
}






if ( 2!='2'){
    console.log('if');
 }else{
    console.log('else');
}
// prints else
 
 if ( 2!=='2'){
    console.log('if');
 }else{
    console.log('else');
 }

 // prints if

//  == just compare the value
//  === compares type

 
 if ( 2==2.0){
    console.log('if');
 }else{
    console.log('else');
 }

if ( 2===2.0){
    console.log('if');
 }else{
    console.log('else');
}

// both prints if ( because dono number hi to hai)

// Basic if and else

const month=5

switch (month) {
    case 1:
        console.log('Mon');
        break;
    case 2:
        console.log('Tue');
        break;
    case 3:
        console.log('Wed');
        break;
    case 4:
        console.log('Thur');
        break;
    case 5:
        console.log('FRI');
       
    case 7:
        console.log('Sat');
        
    case 7:
        console.log('Sun');
        
    default:
        console.log('Error');
}

// If you dont add break it will execute all the staments below it till it finds next break it can even execute default

// So, inside a switch statement, once a case statement matches the given variable, all following statements will be executed ignoring the criteria until a break statement or closing curly bracket is encountered

// default can be placed anywhere




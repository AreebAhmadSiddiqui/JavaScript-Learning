const form=document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const h=parseFloat(document.getElementById('height').value)
    const w=parseFloat(document.getElementById('weight').value)
    console.log(h,w);
    
    const bmi=(w/(h/100)**2).toPrecision(3)
    console.log(bmi);
    let result='Overweight'
    if(bmi< 18.6) result='Under Weight'
    else if ( bmi < 24.9) result='Normal'

    let results=document.getElementById('results')
    // results.appendChild(document.createTextNode(bmi))
    // results.appendChild(document.createTextNode(result))
    results.innerHTML=`<h3> BMI is ${bmi} </h3> <h3> BMI is ${result} </h3>`
    
})



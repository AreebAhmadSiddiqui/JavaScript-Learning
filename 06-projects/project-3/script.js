const clock=document.querySelectorAll('#clock')[0]

setInterval( function () {
    clock.innerHTML=(new Date()).toLocaleString()
},500)
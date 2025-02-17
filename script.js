// console.log("heejo ji")

let body = document.body;
let modeBtn = document.getElementById('mode');
modeBtn.addEventListener('click', (e) => {
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
});






let displayText = document.getElementById('input-txt');
// console.log(displayText);

let buttons = document.getElementsByClassName('button');
// console.log(buttons);

const ArrayBtn = Array.from(buttons);
// console.log(ArrayBtn);

let displayString='';

ArrayBtn.forEach((btn) => {
    // console.log(btn); // Logs each button individually
    btn.addEventListener('click',(e)=>{
         //  console.log(e.target.innerHTML);  //innerHTML

         if(e.target.innerHTML==='X'){
            displayString = displayString.substring(0,displayString.length-1);
            displayText.value = displayString;
         }
        else if(e.target.innerHTML==='AC'){
            displayString = '';
            displayText.value = displayString;
        }
        else if(e.target.innerHTML==='='){
            displayString = eval(displayString);
            displayText.value = displayString;
        }
        else{
            displayString += e.target.innerHTML;
            displayText.value = displayString;
        }
        

    })
});

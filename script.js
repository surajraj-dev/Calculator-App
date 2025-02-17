// console.log("heejo ji")
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

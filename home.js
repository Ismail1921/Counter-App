const increase= document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");
const countSpace = document.getElementById("count");
const input = document.getElementById("initial");
const initialBtn = document.getElementById("initial-btn");
const display = document.getElementById("display");
let initial = input.value;
 let count = 0;
countSpace.textContent = count;
increase.addEventListener("click",function(){
     count++;
      countSpace.textContent = count;
 });
 reset.addEventListener("click", function() { count = 0;
     countSpace.textContent = count;
});
decrease.addEventListener("click", function() { if (count > 0){
 count--;
 countSpace.textContent = count;
}
});
initialBtn.addEventListener("click", function() { if (input.value.trim() === "") { display.textContent = "please enter a number";
  return;
}    display.textContent = ""; 
      count = Number(input.value);
           countSpace.textContent = count;
           input.value = "";
          
});
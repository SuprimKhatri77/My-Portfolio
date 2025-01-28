const result = document.querySelector(".result");
const plusBtn = document.querySelector(".increase");
const minusBtn = document.querySelector(".decrease");

let count = 0;
plusBtn.addEventListener("click",()=>{
    count++;
    result.textContent = count;
})



minusBtn.addEventListener("click",()=>{
    if(count <= 0){
        count = 0;
        result.textContent = count;
    } else{
        count--;
    result.textContent = count;
    }
})


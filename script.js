let clrnpts=document.querySelectorAll("input");
let body=document.querySelector("body");
let button=document.querySelector("button");
let res=document.querySelector("#res");

const test = (e) =>{
    console.log("lol");
} 

button.addEventListener("click", ()=>{
    body.style.background = `linear-gradient(to right, ${clrnpts[0].value} 10%, ${clrnpts[1].value} 100%)`;
    res.innerHTML=body.style.background;
});

// body.style.background = `linear-gradient(to right, ${clrnpts[0].value} 10%, ${clrnpts[1].value} 100%)`;
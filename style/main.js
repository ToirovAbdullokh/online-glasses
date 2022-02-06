let searchForm = document.querySelector(".navbar .search-form");

document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle("active")
};

// Menu js

let menuBar = document.querySelector(".navbar .ul");

document.querySelector(".bar").onclick = () =>{
    menuBar.classList.toggle("active")
};

// slide js

let slides = document.querySelectorAll(".banner .slide"),
    index = 0;

function next(){
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}
function prev(){
    slides[index].classList.remove("active");
    index = (index + 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
}


// LOGIN html

const rmCheck = document.getElementById("rememberMe"),
      emailInput = document.getElementById("email");
    
if (localStorage.checkbox && localStorage.checkbox !== ""){
    rmCheck.setAttribute("checked", "checked");
    emailInput.value = localStorage.username;
}

function IsRememberMe(){
    if (rmCheck.checked && emailInput.value !== ""){
        localStorage.username = emailInput.value;
        localStorage.checkbox = rmCheck.value;
    }else{
        localStorage.username = "";
        localStorage.checkbox = "";
    }
}

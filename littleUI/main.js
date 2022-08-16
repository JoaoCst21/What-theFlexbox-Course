const menuBtn = document.querySelector(".toogleNav");
const list = document.querySelector(".flex-nav").querySelector("ul");

menuBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (!list.style.display) list.style.display = "flex"
    else list.style.display = "";
})
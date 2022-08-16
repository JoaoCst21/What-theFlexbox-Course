const list = [...document.querySelectorAll(".song")];
console.log(list);

list.at(0).dataset.position = 1
list.reduce((bef, curr) => {
    curr.dataset.position = +bef.dataset.position + 1
    return curr;
})

list.forEach(li => li.firstElementChild.insertAdjacentHTML("afterbegin",
    `<span>${li.dataset.position}. </span>`))

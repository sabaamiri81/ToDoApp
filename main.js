const DATA = [];


let input = document.querySelector("input");
let ul = document.querySelector("ul");
let counter = document.querySelector(".footer__counter");
let btn = document.querySelector(".text__btn");



function addTodo(evt) {
    if (evt.keyCode === 13) {
        DATA.push(input.value)
        input.value = ""
    }
    render();
}



function removeTodo(itemIndex) {
    btn.classList.add("text__btn--done")
}



function render() {
    let template = DATA.map((todo, index) => {
        return `<li class="text__list">
               <button class= "text__btn" onclick="removeTodo(${index})"></button>
               ${todo}
               </li>`
    }).join("")
    ul.innerHTML = template;
    counter.textContent = DATA.length + " items left"
}




window.addEventListener("keyup", addTodo)
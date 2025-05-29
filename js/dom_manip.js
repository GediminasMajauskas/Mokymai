let element = document.createElement("div");

element.innerText = "Naujas elementas";

document.querySelector("#home").appendChild(element);

element.addEventListener("click",() => {
    element.style.backgroundColor = "green";
    element.style.color = "pink";
    element.innerText = "Paspaudei";
});
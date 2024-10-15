function makeContact(event) {
     event.PreventDefault();
}
let buttonElement = document.querySelector("#contact");
buttonElement.addEventListener("click", makeContact);
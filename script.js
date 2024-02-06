const clickEl = document.querySelector("#clickBtn");
const list = document.querySelector("#taskList");
const inputEl = document.querySelector("#inputBox");

clickEl.addEventListener("click", () => {
  if (inputEl.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputEl.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputEl.value = "";
  saveData();
});

inputEl.addEventListener("keydown", (key) => {
  if (key.code === "Enter") {
    clickEl.click();
  }
});

list.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function showData() {
  list.innerHTML = localStorage.getItem("data");
}
showData();

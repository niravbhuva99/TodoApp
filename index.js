"use strict";

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const closeBtn = document.querySelector(".todo-container");
const todoContainer = document.querySelector(".todo-container");
const notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
  notes.forEach((notetext) => {
    createToDo(notetext);
  });
}

function createToDo(todo) {
  if (todo) {
    const list = ` <ul class="todos"><li class="list">${todo}</li><button class="close"><i class="fa-solid fa-xmark"></i></button></ul>`;
    todoContainer.insertAdjacentHTML("afterbegin", list);
  }

  input.value = "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = input.value;
  createToDo(todo);
  locasl();
});

// store in localStorage
const locasl = function () {
  const list = document.querySelectorAll(".list");
  const notes = [];
  list.forEach((ele) => notes.push(ele.innerText));
  localStorage.setItem("notes", JSON.stringify([...notes]));
};

// get temfrom localstrage
// const getLs = function () {
//   const a = JSON.parse(localStorage.getItem("notes"));
//   console.log(a);
// };
// getLs();
// remove Notes
closeBtn.addEventListener("click", (e) => {
  console.log(e.target);
  // if your todo is completed.
  // bassically it will over line the text by clicking on text
  if (e.target.classList.contains("list")) {
    e.target.classList.toggle("line-through");
  }
  if (e.target.classList.contains("fa-solid")) {
    e.target.closest(".todos").remove();
    locasl();
  }
});
// localStorage.clear();

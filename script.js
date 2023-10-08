const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something.");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    inputBox.value = "";

    // Add a click event listener to toggle task completion
    li.addEventListener("click", function () {
      li.classList.toggle("checked");
    });
  }
}


    const addButton = document.getElementById("add-button");
    const clearButton = document.getElementById("clear-button");
    const input = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    addButton.addEventListener("click", function () {
      const taskText = input.value.trim();

      if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        listItem.addEventListener("click", function () {
          listItem.classList.toggle("completed");
        });

        todoList.appendChild(listItem);
        input.value = "";
      }
    });

    clearButton.addEventListener("click", function () {
      todoList.innerHTML = "";
    });
 
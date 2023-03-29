let tasksInput = document.querySelector(".tasks__input");
let tasksAdd = document.querySelector(".tasks__add");
let tasksList = document.querySelector(".tasks__list");

tasksAdd.addEventListener("click", (el) => {
  el.preventDefault();
  let userTask = tasksInput.value.trim();
  if (userTask) {
    let task = document.createElement("div");
    tasksList.appendChild(task);
    task.innerHTML = `<div class="task">
                          <div class="task__title">
                            ${userTask}
                          </div>
                          <a href="#" class="task__remove">&times;</a>
                      </div>`;
    let remover = task.querySelector(".task__remove");
    remover.addEventListener("click", (e) => {
      e.preventDefault();
      task.remove();
    });
  }
  tasksInput.value = "";
});
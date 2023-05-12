import { generateBoard } from "../generateBoard";

export const handleAddTask = () => {
   // ** select elements
   const boards = document.querySelector(".board__list") as HTMLElement;
   const addTaskButton = document.querySelector(".add-task-box__button") as HTMLButtonElement;
   const addTaskInputBox = document.querySelector(".add-task-box__input-box") as HTMLDivElement;
   const addTaskInput = document.querySelector(".add-task-box__input") as HTMLInputElement;
   const addTaskAcceptButton = document.querySelector(".add-task-box__accept-button") as HTMLButtonElement;
   const addTaskCancelButton = document.querySelector(".add-task-box__cancel-button") as HTMLButtonElement;
   
   addTaskButton.classList.add("disable");
   addTaskInputBox.classList.remove("disable");

   addTaskAcceptButton.addEventListener("click", (event) => {
      event.stopPropagation();
      if (addTaskInput.value.length > 0) {
         const newBoard = generateBoard(addTaskInput.value);
         boards.append(newBoard);
         addTaskButton.classList.remove("disable");
         addTaskInputBox.classList.add("disable");
         addTaskInput.value = ``
      };
   });

   addTaskCancelButton.addEventListener("click", (event) => {    
      event.stopPropagation();
      addTaskButton.classList.remove("disable");
      addTaskInputBox.classList.add("disable");
      addTaskInput.value = ``
   });
}
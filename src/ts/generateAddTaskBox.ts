import addIcon from "../assets/icons/plus-circle.svg";
import { generateTaskItem } from "./generateTaskItem";


export const generateAddTaskBox = (boardList: HTMLUListElement): HTMLDivElement => {
   //  ** create button element   
   const addTaskBox = document.createElement("div");
   const addTaskButton = document.createElement("button")
   const addTaskButtonImage = document.createElement("img");
   const addTaskInputBox = document.createElement("div");
   const addTaskInput = document.createElement("input");
   const addTaskButtons = document.createElement("div");
   const addTaskAcceptButton = document.createElement("button");
   const addTaskCancelButton = document.createElement("button");
   

   // ** add classes to elements
   addTaskBox.classList.add("add-task-box");
   addTaskButton.classList.add("add-task-box__button");
   addTaskButtonImage.classList.add("add-task-box__button-image")
   addTaskInputBox.classList.add("add-task-box__input-box", "disable");
   addTaskInput.classList.add("add-task-box__input");
   addTaskButtons.classList.add("add-task-box__buttons");
   addTaskAcceptButton.classList.add("add-task-box__accept-button");
   addTaskCancelButton.classList.add("add-task-box__cancel-button");


   // ** add attributes and text to elements
   addTaskButton.textContent = `Add another list`;
   addTaskButtonImage.src = addIcon;
   addTaskAcceptButton.textContent = `Add card`;
   addTaskCancelButton.textContent = `Cancel`;

   
   // ** add elements to DOM

   addTaskButton.append(
      addTaskButtonImage,
   )

   addTaskButtons.append(
      addTaskAcceptButton,
      addTaskCancelButton,
   )

   addTaskInputBox.append(
      addTaskInput,
      addTaskButtons,
   );

   addTaskBox.append(
      addTaskButton, 
      addTaskInputBox
   );

   addTaskBox.addEventListener("click", () => {
      addTaskButton.classList.add("disable");
      addTaskInputBox.classList.remove("disable");
   
      addTaskAcceptButton.addEventListener("click", (event) => {
         event.stopPropagation();
         if (addTaskInput.value.length > 0) {
         
            const newTask = generateTaskItem(addTaskInput.value);
            boardList.append(newTask);
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
   });


   return addTaskBox;
}
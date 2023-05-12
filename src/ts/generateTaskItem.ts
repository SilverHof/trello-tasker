import editIcon from "../assets/icons/edit.svg";
import acceptIcon from "../assets/icons/check.svg";
import trashIcon from "../assets/icons/trash.svg";
import { handleDelete } from "./handlers/handleDelete";
import { handleEditTask } from "./handlers/handleEditTask";
import { dragEndTask, dragStartTask } from "./functions/dndTasks";


export const generateTaskItem = (name: string) => {   
   // ** create task's elements
   const taskItem = document.createElement("div");
   const taskField = document.createElement("div");
   const taskTitle = document.createElement("h2");
   const taskInput = document.createElement("input");
   const taskButtons = document.createElement("div");
   const taskChangeButtons = document.createElement("div");
   const taskEditButton = document.createElement("button");
   const taskEditButtonImage = document.createElement("img");
   const taskAcceptButton = document.createElement("button");
   const taskAcceptButtonImage = document.createElement("img");
   const taskDeleteButton = document.createElement("button");
   const taskDeleteButtonImage = document.createElement("img");


   // ** add classes to elements
   taskItem.classList.add("task-item");
   taskField.classList.add("task-item__field");
   taskTitle.classList.add("task-item__title");
   taskInput.classList.add("task-item__input", "disable");
   taskButtons.classList.add("task-item__buttons");
   taskChangeButtons.classList.add("task-item__change-buttons");
   taskEditButton.classList.add("task-item__edit-button");
   taskEditButtonImage.classList.add("task-item__edit-button-image");
   taskAcceptButton.classList.add("task-item__accept-button", "disable");
   taskAcceptButtonImage.classList.add("task-item__accept-button-image");
   taskDeleteButton.classList.add("task-item__delete-button");
   taskDeleteButtonImage.classList.add("task-item__delete-button-image");

   
   // ** add atributes and text to elements
   taskItem.draggable = true;
   taskButtons.draggable = false;
   taskTitle.textContent = name;
   taskInput.value = taskTitle.textContent;
   
   taskEditButtonImage.src = editIcon;
   taskAcceptButtonImage.src = acceptIcon;
   taskDeleteButtonImage.src = trashIcon;

   taskEditButtonImage.draggable = false;
   taskAcceptButtonImage.draggable = false;
   taskDeleteButtonImage.draggable = false;


   // ** add elements to DOM
   taskField.append(
      taskTitle,
      taskInput,
   );

   taskEditButton.append(taskEditButtonImage);
   taskAcceptButton.append(taskAcceptButtonImage);
   taskDeleteButton.append(taskDeleteButtonImage);

   taskChangeButtons.append(
      taskEditButton,
      taskAcceptButton,
   )

   taskButtons.append(
      taskChangeButtons,
      taskDeleteButton,
   );

   taskItem.append(
      taskField,
      taskButtons,
   );


   taskDeleteButton.addEventListener("click", handleDelete);
   taskEditButton.addEventListener("click", handleEditTask);

   taskItem.addEventListener("dragstart", dragStartTask);
   taskItem.addEventListener("dragend", dragEndTask);


   return taskItem;
}
import { handleDelete } from "./handleDelete";

export const handleEditTask = (event: MouseEvent) => {
   // ** select elements
   
   const taskEditButtonImage = event.target as HTMLImageElement;
   const taskEditButton = taskEditButtonImage.closest(".task-item__edit-button") as HTMLButtonElement;
   const taskChangeButtons = taskEditButton.closest(".task-item__change-buttons") as HTMLDivElement;
   const taskButtons = taskChangeButtons.closest(".task-item__buttons") as HTMLDivElement;
   const taskDeleteButton = taskButtons.querySelector(".task-item__delete-button") as HTMLButtonElement;
   
   const taskAcceptButton = taskEditButton.nextSibling as HTMLImageElement;

   const taskItem = taskEditButton.closest(".task-item") as HTMLDivElement;
   const taskTitle = taskItem.querySelector(".task-item__title") as HTMLHeadingElement;
   const taskInput = taskItem.querySelector(".task-item__input") as HTMLInputElement;

   
   // ** add classes to elements
   taskTitle.classList.add("disable");
   taskInput.classList.remove("disable");

   taskEditButton.classList.add("disable");
   taskAcceptButton.classList.remove("disable");
   
   // ** add attributes to elements


   // ** append elements to DOM

   taskAcceptButton.addEventListener("click", () => {
      taskTitle.textContent = taskInput.value;
      taskTitle.classList.remove("disable");
      taskInput.classList.add("disable");
   
      taskEditButton.classList.remove("disable");
      taskAcceptButton.classList.add("disable");
   })
   
   taskDeleteButton.addEventListener("click", handleDelete);
   

}
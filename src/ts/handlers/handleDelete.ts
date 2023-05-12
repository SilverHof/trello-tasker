import { generateModalWindow } from "../generateModalWindow";


export const handleDelete = (event: any) => {
   const wrapper = document.querySelector(".wrapper") as HTMLDivElement;   

   let elementName: string = ""

   if (event.target.closest(".task-item")) {
      elementName = "task";
   } else if (event.target.closest(".board")) {
      elementName = "board";
   }

   const modal = generateModalWindow(elementName);

   wrapper.append(modal);
   
   const yesButton = document.querySelector(".modal-window__yes-button") as HTMLButtonElement;
   const noButton = document.querySelector(".modal-window__no-button") as HTMLButtonElement;
   
   yesButton.addEventListener("click", () => {
      modal.remove();
      if (event.target.closest(".task-item")) {
         event.target.closest(".task-item").remove();
      } else if (event.target.closest(".board")) {
         event.target.closest(".board").remove();
      }
   });

   noButton.addEventListener("click", () => {
      modal.remove();
   });
}
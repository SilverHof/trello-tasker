import { generateBoard } from "../generateBoard";

export const handleAddBoard = () => {
   // ** select elements
   const boards = document.querySelector(".boards__list") as HTMLElement;
   const addBoardButton = document.querySelector(".add-board-box__button") as HTMLButtonElement;
   const addBoardInputBox = document.querySelector(".add-board-box__input-box") as HTMLDivElement;
   const addBoardInput = document.querySelector(".add-board-box__input") as HTMLInputElement;
   const addBoardAcceptButton = document.querySelector(".add-board-box__accept-button") as HTMLButtonElement;
   const addBoardCancelButton = document.querySelector(".add-board-box__cancel-button") as HTMLButtonElement;
   
   addBoardButton.classList.add("disable");
   addBoardInputBox.classList.remove("disable");

   addBoardAcceptButton.addEventListener("click", (event) => {
      event.stopPropagation();
      if (addBoardInput.value.length > 0) {
         const newBoard = generateBoard(addBoardInput.value);
         boards.append(newBoard);
         addBoardButton.classList.remove("disable");
         addBoardInputBox.classList.add("disable");
         addBoardInput.value = ``
      };
   });

   addBoardCancelButton.addEventListener("click", (event) => {    
      event.stopPropagation();
      addBoardButton.classList.remove("disable");
      addBoardInputBox.classList.add("disable");
      addBoardInput.value = ``
   });
}
import addIcon from "../assets/icons/plus-circle.svg";
import { handleAddBoard } from "./handlers/handleAddBoard";


export const generateAddBoardBox = (): HTMLDivElement => {
   //  ** create button element
   const addBoardBox = document.createElement("div");
   const addBoardButton = document.createElement("button")
   const addBoardButtonImage = document.createElement("img");
   const addBoardInputBox = document.createElement("div");
   const addBoardInput = document.createElement("input");
   const addBoardButtons = document.createElement("div");
   const addBoardAcceptButton = document.createElement("button");
   const addBoardCancelButton = document.createElement("button");
   

   // ** add classes to elements
   addBoardBox.classList.add("add-board-box");
   addBoardButton.classList.add("add-board-box__button");
   addBoardButtonImage.classList.add("add-board-box__button-image")
   addBoardInputBox.classList.add("add-board-box__input-box", "disable");
   addBoardInput.classList.add("add-board-box__input");
   addBoardButtons.classList.add("add-board-box__buttons");
   addBoardAcceptButton.classList.add("add-board-box__accept-button");
   addBoardCancelButton.classList.add("add-board-box__cancel-button");


   // ** add attributes and text to elements
   addBoardButton.textContent = `Add another list`;
   addBoardButtonImage.src = addIcon;
   addBoardAcceptButton.textContent = `Add card`;
   addBoardCancelButton.textContent = `Cancel`;

   
   // ** add elements to DOM

   addBoardButton.append(
      addBoardButtonImage,
   )

   addBoardButtons.append(
      addBoardAcceptButton,
      addBoardCancelButton,
   )

   addBoardInputBox.append(
      addBoardInput,
      addBoardButtons,
   );

   addBoardBox.append(
      addBoardButton, 
      addBoardInputBox
   );

   addBoardBox.addEventListener("click", handleAddBoard);


   return addBoardBox;
}
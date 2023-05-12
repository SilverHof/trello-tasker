import { dragEndBoards, dragOverBoards, dragStartBoards } from "./functions/dndBoards";
import { generateAddBoardBox } from "./generateAddBoardBox";
import { generateBoard } from "./generateBoard";


export const generateBoards = (): HTMLElement => {
   // ** create board's elements
   const boardsBlock = document.createElement("section");
   const boardsContainer = document.createElement("div");
   const boardsInner = document.createElement("div");
   const boardsList = document.createElement("ul");


   // ** add classes to elements
   boardsBlock.classList.add("boards");
   boardsContainer.classList.add("boards__container", "container");
   boardsInner.classList.add("boards__inner");
   boardsList.classList.add("boards__list");


   // ** add attributes and text to elements


   // ** add elements to DOM
   const todoBoard = generateBoard("ToDo");
   const doingBoard = generateBoard("Doing");
   const doneBoard = generateBoard("Done");


   boardsBlock.append(boardsContainer);
   boardsContainer.append(boardsInner);

   const boardsAddButton = generateAddBoardBox()

   boardsInner.append(
      boardsList,
      boardsAddButton,
   )

   boardsList.append(
      todoBoard,
      doingBoard,
      doneBoard,
   );

   

   boardsList.addEventListener("dragstart", dragStartBoards);
   boardsList.addEventListener("dragend", dragEndBoards);
   boardsList.addEventListener("dragover", dragOverBoards);


   
   return boardsBlock;
}
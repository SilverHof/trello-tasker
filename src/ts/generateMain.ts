import { generateBoards } from "./generateBoards";

export const generateMain = (): HTMLElement => {

   // ** create mains's elements
   const mainBlock = document.createElement("main");

   // ** add classes and attributes to elements
   mainBlock.classList.add("main");

   const boards = generateBoards();

   // ** add elements to dom
   mainBlock.append(boards)


   return mainBlock
}
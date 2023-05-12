import checkIcon from "../assets/icons/check.svg";
import trashIcon from "../assets/icons/trash.svg";
// import { dragEndBoard, dragStartBoard } from "./functions/dndBoards";
import { dragOverTask } from "./functions/dndTasks";
import { generateAddTaskBox } from './generateAddTaskBox';
import { handleChangeBoardName } from './handlers/handleChangeBoardName';
import { handleDelete } from './handlers/handleDelete';


export const generateBoard = (name: string): HTMLLIElement => {
   // ** create header's elements
   const boardBlock = document.createElement("li");

   const boardHead = document.createElement("div");

   const headField = document.createElement("div");
   const headTitle = document.createElement("h2");
   const headInputBox = document.createElement("div");
   const headInput = document.createElement("input");
   const headAcceptButton = document.createElement("button");
   const headAcceptButtonImage = document.createElement("img");
   const headDeleteButton = document.createElement("button");
   const headDeleteButtonImage = document.createElement("img");

   const boardList = document.createElement("ul");


   // ** add classes to elements
   boardBlock.classList.add("board");

   boardHead.classList.add("board__head", "head");
   headField.classList.add("head__field");
   headTitle.classList.add("head__title");
   headInputBox.classList.add("head__input-box", "disable");
   headInput.classList.add("head__input");
   headAcceptButton.classList.add("head__accept-button");
   headAcceptButtonImage.classList.add("head__accept-button-image");

   headDeleteButton.classList.add("head__delete-button");
   headDeleteButtonImage.classList.add("head__delete-button-image");

   boardList.classList.add("board__list");


   // ** add attributes and text to elements
   headTitle.textContent = name;
   headInput.value = headTitle.textContent;
   headAcceptButtonImage.src = checkIcon;
   headDeleteButtonImage.src = trashIcon;

   headDeleteButtonImage.draggable = false


   // ** add elements to DOM
   boardHead.append(
      headField,
      headDeleteButton,
   );

   headField.append(
      headTitle,
      headInputBox,
   );

   headInputBox.append(
      headInput,
      headAcceptButton,
   );

   headAcceptButton.append(headAcceptButtonImage);

   headDeleteButton.append(headDeleteButtonImage);

   const addTaskBox = generateAddTaskBox(boardList);

   boardBlock.append(
      boardHead,
      boardList,
      addTaskBox,
   );

   
   // ** add event listener for functionality
   headTitle.addEventListener("click", handleChangeBoardName);
   headDeleteButton.addEventListener("click", handleDelete);

   
   // ** add event listener for drag and drop
   // boardList.addEventListener("dragover", dragOverTask);


   boardHead.addEventListener("mouseenter", () => {
      boardBlock.draggable = true;
      boardList.addEventListener("dragover", dragOverTask);
   });

   boardHead.addEventListener("mouseleave", () => {
      boardBlock.draggable = false;
   });
      

   return boardBlock;
}
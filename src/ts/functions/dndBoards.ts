export const dragStartBoards = (event: DragEvent): void => {
   console.log(event);
   
   const elementTarget = event.target as HTMLUListElement;
   // console.log(elementTarget);
   
   elementTarget.classList.add("selected");
};

export const dragEndBoards = (event: DragEvent): void => {
   const elementTarget = event.target as HTMLUListElement;
   elementTarget.classList.remove("selected");
};

const getNextElement = (cursorPosition: number,currentElement: any) => {
   const currentElementCoord = currentElement.getBoundingClientRect();
   const currentElementCenter = currentElementCoord.x + currentElementCoord.height / 2;
   
   let nextElement: any;

   if (cursorPosition < currentElementCenter) {
      nextElement = currentElement;
   } else {
      nextElement = currentElement.nextElementSibling;
   }

   
   return nextElement;
};

export const dragOverBoards = (event: any) => {
   event.preventDefault();

   const zone = event.target.closest(".boards__list");
   
   const activeElement = zone.querySelector(`.selected`)!;
   const currentElement = event.target;
   const isMoveable = 
         activeElement !== 
         currentElement &&
         currentElement.classList.contains(`board`);
      
    
   if (!isMoveable) {
      return;
   }
  
   const nextElement = getNextElement(event.clientX, currentElement);
  
   if (
      nextElement && 
      activeElement === nextElement.previousElementSibling ||
      activeElement === nextElement
   ) {
      return;
   }
		
	zone.insertBefore(activeElement, nextElement);
};
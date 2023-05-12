export const handleChangeBoardName = (event: MouseEvent) => {
   // ** select elements
   const headTitle = event.target as HTMLHeadingElement; 
   const headInputBox = headTitle.nextSibling as HTMLInputElement;
   const headInput = headInputBox.querySelector(".head__input") as HTMLInputElement;
   const headAcceptButton = headInputBox.querySelector(".head__accept-button") as HTMLButtonElement; 
   
   // ** add classes to elements
   headInputBox.classList.remove("disable");
   

   // ** append elements to DOM
   headAcceptButton.addEventListener("click", () => {
      headTitle.textContent = headInput.value;
      headInputBox.classList.add("disable");
   });

}
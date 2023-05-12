export const generateModalWindow = (name: string): HTMLDivElement => {
   // create modal window
   const modalWindow = document.createElement("div");
   const modalWindowBody = document.createElement("div");
   const modalWindowTitle = document.createElement("span");
   const modalWindowButtons = document.createElement("div");
   const modalWindowYesButton = document.createElement("button");
   const modalWindowNoButton = document.createElement("button");

   // add classes to modal window
   modalWindow.classList.add("modal-window");
   modalWindowBody.classList.add("modal-window__body");
   modalWindowTitle.classList.add("modal-window__title");
   modalWindowButtons.classList.add("modal-window__buttons");
   modalWindowYesButton.classList.add("modal-window__yes-button");
   modalWindowNoButton.classList.add("modal-window__no-button");

   // add attributes and text
   modalWindowTitle.textContent = `Delete ${name}?`
   modalWindowYesButton.textContent = `Yes`;
   modalWindowNoButton.textContent = `No`;

   modalWindow.append(modalWindowBody);

   modalWindowBody.append(
      modalWindowTitle,
      modalWindowButtons,
   );

   modalWindowButtons.append(
      modalWindowYesButton,
      modalWindowNoButton,
   );


   return modalWindow;
}
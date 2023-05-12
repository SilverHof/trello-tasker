import chevronIcon from '../assets/icons/chevron-down.svg';
import menuIcon from '../assets/icons/box.svg';
import addIcon from '../assets/icons/plus-circle.svg';
import questionIcon from '../assets/icons/help-circle.svg';
import notificationIcon from '../assets/icons/bell.svg';
import moreIcon from '../assets/icons/chevrons-down.svg';


export const generateHeader = (): Node => {

   // create header's elements
   const headerBlock = document.createElement("header");
   const headerContainer = document.createElement("div");
   const headerInner = document.createElement("div");

   const menuButton = document.createElement("button");
   const menuButtonImage = document.createElement("img");

   const titleBox = document.createElement("div");
   const titleLeftPart = document.createElement("h2");
   const titleRightPart = document.createElement("h2");

   const navbarBox = document.createElement("nav");

   const emptyBox = document.createElement("div");

   const utilsBox = document.createElement("div");
   const utilsAddButton = document.createElement("button");
   const utilsAddButtonText = document.createElement("span")
   const utilsQuestionButton = document.createElement("button");
   const utilsNotificationButton = document.createElement("button");
   const utilsAddButtonImage = document.createElement("img");
   const utilsQuestionButtonImage = document.createElement("img");
   const utilsNotificationButtonImage = document.createElement("img");
   
   const profileBox = document.createElement("div");
   const profileImage = document.createElement("img");
   const profileName = document.createElement("span");
   const profileMoreButton = document.createElement("button");
   const profileMoreButtonImage = document.createElement("img");


   // add classes to elements
   headerBlock.classList.add("header");
   headerContainer.classList.add("header__container", "container");
   headerInner.classList.add("header__inner");

   menuButton.classList.add("header__menu-button", "menu-button");
   menuButtonImage.classList.add("menu-button__image");

   titleBox.classList.add("header__title-box", "title-box");
   titleLeftPart.classList.add("title-box__left-part");
   titleRightPart.classList.add("title-box__right-part");

   navbarBox.classList.add("header__navbar", "navbar");

   emptyBox.classList.add("empty-box");

   utilsBox.classList.add("header__utils-box", "utils-box");
   utilsAddButton.classList.add("utils-box__button", "utils-box__button_add");
   utilsAddButtonText.classList.add("utils-box__button-text");
   utilsQuestionButton.classList.add("utils-box__button");
   utilsNotificationButton.classList.add("utils-box__button");
   utilsAddButtonImage.classList.add("utils-box__button-image");
   utilsQuestionButtonImage.classList.add("utils-box__button-image");
   utilsNotificationButtonImage.classList.add("utils-box__button-image");

   profileBox.classList.add("profile");
   profileImage.classList.add("profile__image");
   profileName.classList.add("profile__name");
   profileMoreButton.classList.add("profile__more-button");
   profileMoreButtonImage.classList.add("profile__more-button-image")


   // add attributes and text to elements
   menuButtonImage.src = menuIcon;

   titleLeftPart.textContent = `Task`;
   titleRightPart.textContent = `er`;

   navbarBox.insertAdjacentHTML(
      `afterbegin`, 
      `<button class="navbar__button">
         <span class="navbar__button-text">
            Workspaces
         </span>
         <img src=${chevronIcon} alt="" class="navbar__button-icon">
      </button>
      <button class="navbar__button">
         <span class="navbar__button-text">
           Recent
         </span>
         <img src=${chevronIcon} alt="" class="navbar__button-icon">
       </button>
       <button class="navbar__button">
         <span class="navbar__button-text">
           Starred
         </span>
         <img src=${chevronIcon} alt="" class="navbar__button-icon">
       </button>
      <button class="navbar__button">
         <span class="navbar__button-text">
           Templates
         </span>
         <img src=${chevronIcon} alt="" class="navbar__button-icon">
      </button>`);
   
   utilsAddButtonImage.src = addIcon;
   utilsAddButtonText.textContent = `Add task`
   utilsQuestionButtonImage.src = questionIcon;
   utilsNotificationButtonImage.src = notificationIcon;

   profileName.textContent = `Vladimir`;
   profileMoreButtonImage.src = moreIcon;


   // add elements to dom
   headerBlock.append(headerContainer);
   headerContainer.append(headerInner);

   menuButton.append(menuButtonImage);

   titleBox.append(
      titleLeftPart,
      titleRightPart,
   );

   utilsBox.append(
      utilsAddButton,
      utilsQuestionButton,
      utilsNotificationButton,
   );

   utilsAddButton.append(utilsAddButtonText);
   utilsAddButton.append(utilsAddButtonImage);
   utilsQuestionButton.append(utilsQuestionButtonImage);
   utilsNotificationButton.append(utilsNotificationButtonImage);

   profileBox.append(
      profileImage,
      profileName,
      profileMoreButton,
   );

   profileMoreButton.append(profileMoreButtonImage);

   headerInner.append(
      menuButton,
      titleBox,
      navbarBox,
      emptyBox,
      utilsBox,
      profileBox,
   );


   return headerBlock;
}
import branchIcon from '../assets/icons/git-branch.svg';
import switchIcon from '../assets/icons/chevron-down.svg';
import memberIcon from '../assets/icons/user.svg';
import tableIcon from '../assets/icons/table.svg';
import calendarIcon from '../assets/icons/calendar.svg';
import settingsIcon from '../assets/icons/settings.svg';


export const generateFooter = (): Node => {

   // create footer's elements
   const footerBlock = document.createElement("header");
   const footerContainer = document.createElement("div");
   const footerInner = document.createElement("div");

   const workflowBox = document.createElement("div");
   const workflowIcon = document.createElement("img");
   const workflowButton = document.createElement("button");
   const workflowButtonText = document.createElement("span");
   const workflowButtonSwitchImage = document.createElement("img");

   const buttonsBox = document.createElement("div");

   const buttonMembers = document.createElement("button");
   const buttonMembersImage = document.createElement("img");

   const buttonTable = document.createElement("button");
   const buttonTableImage = document.createElement("img");
   
   const buttonCalendar = document.createElement("button");
   const buttonCalendarImage = document.createElement("img");

   const buttonSettings = document.createElement("button");
   const buttonSettingsImage = document.createElement("img");

   /// add classes to elements
   footerBlock.classList.add("footer");
   footerContainer.classList.add("footer__container", "container");
   footerInner.classList.add("footer__inner");

   workflowBox.classList.add("footer__workflow-box", "workflow-box");
   workflowIcon.classList.add("workflow-box__branch-icon");
   workflowButton.classList.add("workflow-box__button");
   workflowButtonText.classList.add("workflow-box__button-text");
   workflowButtonSwitchImage.classList.add("workflow-box__button-icon");

   buttonsBox.classList.add("footer__buttons-box", "buttons-box");

   buttonMembers.classList.add("buttons-box__button");
   buttonMembersImage.classList.add("buttons-box__button-icon");

   buttonTable.classList.add("buttons-box__button");
   buttonTableImage.classList.add("buttons-box__button-icon");

   buttonCalendar.classList.add("buttons-box__button");
   buttonCalendarImage.classList.add("buttons-box__button-icon");

   buttonSettings.classList.add("buttons-box__button");
   buttonSettingsImage.classList.add("buttons-box__button-icon", "buttons-box__button-icon_rotate");
   

   // add attributes and text to elements
   workflowIcon.src = branchIcon;
   workflowButtonText.textContent = `Test branch`;

   workflowButtonSwitchImage.src = switchIcon;

   buttonMembersImage.src = memberIcon;
   buttonTableImage.src = tableIcon;
   buttonCalendarImage.src = calendarIcon;
   buttonSettingsImage.src = settingsIcon;


   // add elements to DOM
   footerBlock.append(footerContainer);
   footerContainer.append(footerInner);

   workflowButton.append(
      workflowButtonText,
      workflowButtonSwitchImage,
   );

   workflowBox.append(
      workflowIcon,
      workflowButton,
   )

   buttonMembers.append(buttonMembersImage);
   buttonCalendar.append(buttonCalendarImage);
   buttonTable.append(buttonTableImage);
   buttonSettings.append(buttonSettingsImage);

   buttonsBox.append(
      buttonMembers,
      buttonTable,
      buttonCalendar,
      buttonSettings,
   )

   footerInner.append(
      workflowBox,
      buttonsBox,
   )

   return footerBlock;
}
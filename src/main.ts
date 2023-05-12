import './scss/style.scss'
import { generateFooter } from './ts/generateFooter';
import { generateHeader } from './ts/generateHeader'
import { generateMain } from './ts/generateMain';


const main = () => {
   const bodyBlock = document.querySelector("body") as HTMLBodyElement;
   const wrapperBlock = document.createElement("div");
   wrapperBlock.classList.add("wrapper");

   bodyBlock.append(wrapperBlock);

   const header = generateHeader();
   const main = generateMain();
   const footer = generateFooter();
   

   wrapperBlock.append(
      header,
      main,
      footer
   );


}

main();



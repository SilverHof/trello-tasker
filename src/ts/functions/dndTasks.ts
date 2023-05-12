export const dragStartTask = (event: DragEvent): void => {

   const elementTarget = event.target as HTMLDivElement | HTMLHeadingElement | HTMLImageElement;
   const element = elementTarget.closest(".task-item") as HTMLDivElement;
   
   element.classList.add("is-dragging-task"); 
};

export const dragEndTask = (event: DragEvent): void => {
   const elementTarget = event.target as HTMLDivElement | HTMLHeadingElement | HTMLImageElement;
   const element = elementTarget.closest(".task-item") as HTMLDivElement;

   element.classList.remove("is-dragging-task");
};

export const dragOverTask = (event: DragEvent): void => {

   event.preventDefault();

   const elementTarget = event.target as HTMLDivElement | HTMLHeadingElement | HTMLImageElement;
   const zone = elementTarget.closest(".board__list") as HTMLUListElement;

   const bottomTask = insertAboveTask(zone, event.clientY);
   const currentTask = document.querySelector(".is-dragging-task") as HTMLDivElement;
   

   if (currentTask !== null) {
      if (!bottomTask) {
         zone.appendChild(currentTask);
      } else {
         zone.insertBefore(currentTask, bottomTask);
      }
   }

};

const insertAboveTask = (zone: HTMLUListElement, mouseY: number): HTMLDivElement | null => {
   const notDraggingTasks = zone.querySelectorAll(".task-item:not(.is-dragging-task)") as NodeListOf<HTMLDivElement>;
   
   let closestTask: HTMLDivElement | null = null;
   let closestOffset = Number.NEGATIVE_INFINITY;
 
   notDraggingTasks.forEach((task: HTMLDivElement) => {
     const { top } = task.getBoundingClientRect();
 
     const offset = mouseY - top;
 
      if (offset < 0 && offset > closestOffset) {
         closestOffset = offset;
         closestTask = task;
     }
   });
   
 
   return closestTask;
};
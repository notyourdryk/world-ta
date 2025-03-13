import { showAlert } from "@/components/Alert/store.ts";

export const itemAdded = (listTitle, description) => {
  showAlert(`Задача создана в «${listTitle}»`, description);
};
export const itemMoved = (listTitle, description) => {
  showAlert(`Задача перенесена в «${listTitle}»`, description);
};
export const itemDeleted = (description) => {
  showAlert(`Задача удалена`, description);
};

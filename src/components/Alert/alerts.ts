import { showAlert } from "@/components/Alert/store.ts";

export const itemAdded = (listTitle: string, description: string) => {
  showAlert(`Задача создана в «${listTitle}»`, description);
};
export const itemMoved = (listTitle: string, description: string) => {
  showAlert(`Задача перенесена в «${listTitle}»`, description);
};
export const itemDeleted = (description: string) => {
  showAlert(`Задача удалена`, description);
};

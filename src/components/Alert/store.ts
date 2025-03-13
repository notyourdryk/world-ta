import { ref } from "vue";
import { type Alert as AlertType } from "@/types";

export const alertStore = ref<Array<AlertType>>([]);

export const showAlert = (title: AlertType["title"], text: AlertType["text"]) => {
  alertStore.value.push({
    id: crypto.randomUUID(),
    title, text
  })
};

export const deleteAlert = (alertId: AlertType["id"]) => {
  const alertIndex = alertStore.value.findIndex(({ id }) => id === alertId);

  alertStore.value.splice(alertIndex, 1);
}

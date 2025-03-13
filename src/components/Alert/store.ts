import { ref } from "vue";

export const alertStore = ref([]);

export const showAlert = (title: string, text: string) => {
  alertStore.value.push({
    id: crypto.randomUUID(),
    title, text
  })
};

export const deleteAlert = (alertId: string) => {
  const alertIndex = alertStore.value.findIndex(({ id }) => id === alertId);

  alertStore.value.splice(alertIndex, 1);
}

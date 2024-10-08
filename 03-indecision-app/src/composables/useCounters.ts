import { computed, ref } from 'vue'

export const useCounter = (initialValue: number, initialText: string = '') => {
  const texto = ref(initialText)
  const counter = ref(initialValue)
  const square = computed(() => counter.value ** 2) // el computed es para que sea como solo lectura en la interfaz

  return {
    counter,
    square,
    texto
  }
}

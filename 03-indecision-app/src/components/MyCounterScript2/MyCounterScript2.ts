import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    value: Number
  },

  setup(props) {
    const counter = ref(props.value ?? 5)
    const square = computed(() => counter.value ** 2)

    return {
      counter,
      square,
      props
    }
  }
})

<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ square }}</h3>
    <div>
      <button v-on:click="() => counter++">+1</button>
      <button v-on:click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
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
</script>

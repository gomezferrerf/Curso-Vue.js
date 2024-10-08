<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ square }}</h3>
    <h4>{{ texto }}</h4>
    <div>
      <button class="btn" v-on:click="() => counter++">+1</button>
      <button class="btn" v-on:click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounters'

const props = defineProps({
  value: { type: Number, required: true },
  text: { type: String }
})

const { counter, square, texto } = useCounter(props.value, props.text)
//import { computed, ref } from 'vue'

//const counter = ref(props.value)
//const square = computed(() => counter.value ** 2)
</script>

<style scoped>
.btn {
  @apply p-2 bg-slate-400 rounded mr-2 hover:bg-slate-500;
}
</style>

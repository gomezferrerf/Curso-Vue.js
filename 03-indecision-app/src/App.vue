<template>
  <h1>Mi primera app</h1>
  <hr />

  <MyCounter v-bind:value="1" text="Hola Mundo" />
  <MyCounterScript v-bind:value="2" />
  <MyCounterScript2 v-bind:value="3" />
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue'
import MyCounterScript from './components/MyCounterScript.vue'
import MyCounterScript2 from './components/MyCounterScript2/MyCounterScript2.vue'
</script>

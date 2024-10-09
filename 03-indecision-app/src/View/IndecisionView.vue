<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <ChatMessages :messages />

    <ChatBox />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue'
import ChatBox from '@/components/chat/ChatBox.vue'
import type { ChatMessage } from '@/interface/chat-message-interface'
import { ref } from 'vue'

const messages = ref<ChatMessage[]>([
  {
    id: new Date().getTime(),
    message: 'Marianaaaaaa!!!',
    itsMine: true
  },
  {
    id: new Date().getTime() + 1,
    message: 'Hola',
    itsMine: false
  },
  {
    id: new Date().getTime() + 2,
    message: 'Vamos a bañarnos',
    itsMine: true
  },
  {
    id: new Date().getTime(),
    message: 'Vamos',
    itsMine: false,
    image: 'https://yesno.wtf/assets/yes/4-c53643ecec77153eefb461e053fb4947.gif'
  }
])
</script>

<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <ChatMessages :messages />

    <ChatBox @send-message="onMessage($event)"></ChatBox>
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue'
import ChatBox from '@/components/chat/ChatBox.vue'
import { useChat } from '@/composables/useChat'

const { messages, onMessage } = useChat()
</script>

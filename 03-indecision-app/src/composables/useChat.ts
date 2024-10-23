import type { ChatMessage } from '@/interface/chat-message-interface'
import type { YesNoResponse } from '@/interface/yes-no.response'
import { ref } from 'vue'

export const useChat = () => {
  const messages = ref<ChatMessage[]>([])

  const getHerResponse = async () => {
    const resp = await fetch('https://yesno.wtf/api')
    const data = (await resp.json()) as YesNoResponse

    return data
  }

  const onMessage = async (text: string) => {
    if (text.length === 0) return

    messages.value.push({
      id: new Date().getTime(),
      message: text,
      itsMine: true
    })

    if (!text.endsWith('?')) return

    const { answer, image } = await getHerResponse()

    setTimeout(() => {
      messages.value.push({
        id: new Date().getTime(),
        message: answer,
        itsMine: false,
        image: image
      })
    }, 1000)
  }

  return {
    // Properties
    messages,

    // Methods
    onMessage
  }
}

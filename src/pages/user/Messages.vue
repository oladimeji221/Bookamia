<template>
  <main>
    <section class="pt-3">
      <div class="container">
        <div class="row g-2 g-lg-4">
          <!-- Sidebar START -->
          <UserSidebar />
          <!-- Sidebar END -->

          <!-- Main content START -->
          <div class="col-lg-8 col-xl-9 ps-xl-5">
            <div class="d-grid mb-0 d-lg-none w-100">
              <button class="btn btn-primary mb-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
                <i class="fas fa-sliders-h"></i> Menu
              </button>
            </div>

            <div class="vstack gap-4">
              <!-- Dashboard Header -->
              <UserDashboardHeader title="Messages" />

              <div class="card border bg-transparent">
                <div class="card-header bg-transparent border-bottom">
                  <h4 class="card-header-title">Messages</h4>
                </div>

                <div class="card-body p-0">
                  <div class="row g-0">
                    <!-- Chat list -->
                    <div class="col-md-4 border-end">
                      <div class="list-group list-group-flush h-100 overflow-auto" style="max-height: 500px;">
                        <a v-for="chat in chats" :key="chat.id" href="#" 
                           class="list-group-item list-group-item-action border-0 py-3"
                           :class="{ active: activeChatId === chat.id }"
                           @click.prevent="activeChatId = chat.id">
                          <div class="d-flex align-items-center">
                            <div class="avatar avatar-sm flex-shrink-0">
                              <img class="avatar-img rounded-circle" :src="chat.avatar" alt="">
                            </div>
                            <div class="ms-2">
                              <h6 class="mb-0">{{ chat.name }}</h6>
                              <p class="small mb-0 text-truncate" style="max-width: 120px;">{{ chat.lastMessage }}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <!-- Message view -->
                    <div class="col-md-8">
                      <div class="d-flex flex-column h-100" style="min-height: 500px;">
                        <div class="flex-grow-1 p-3 overflow-auto" style="max-height: 400px;">
                           <div v-if="activeHistory.length > 0">
                              <div v-for="msg in activeHistory" :key="msg.id" class="mb-3" :class="{ 'text-end': msg.fromMe }">
                                 <div class="d-inline-block p-3 rounded" :class="msg.fromMe ? 'bg-primary text-white' : 'bg-light'">
                                    {{ msg.text }}
                                 </div>
                                 <div class="small text-muted mt-1">{{ msg.time }}</div>
                              </div>
                           </div>
                           <div v-else class="h-100 d-flex align-items-center justify-content-center text-center">
                              <div>
                                 <i class="bi bi-chat-dots fs-1 text-muted"></i>
                                 <p>Select a conversation to start chatting</p>
                              </div>
                           </div>
                        </div>
                        <div class="p-3 border-top mt-auto" v-if="activeChatId">
                          <div class="input-group">
                            <input type="text" class="form-control" placeholder="Type a message" v-model="newMessage" @keyup.enter="sendMessage">
                            <button class="btn btn-primary mb-0" @click="sendMessage">Send</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Main content END -->
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import UserSidebar from '@/components/UserSidebar.vue'
import UserDashboardHeader from '@/components/UserDashboardHeader.vue'

const activeChatId = ref(1)
const newMessage = ref('')

const chats = ref([
  { id: 1, name: 'Support Team', lastMessage: 'How can we help you today?', avatar: '/assets/images/avatar/01.jpg' },
  { id: 2, name: 'Victoria Island Hotel', lastMessage: 'Your booking is confirmed.', avatar: '/assets/images/avatar/02.jpg' }
])

const messages = ref([
  { id: 1, chatId: 1, text: 'Hello, I have a question about my booking.', fromMe: true, time: '10:00 AM' },
  { id: 2, chatId: 1, text: 'Sure, how can we help you today?', fromMe: false, time: '10:05 AM' },
  { id: 3, chatId: 2, text: 'Is early check-in available?', fromMe: true, time: 'Yesterday' },
  { id: 4, chatId: 2, text: 'Yes, your booking is confirmed and early check-in is noted.', fromMe: false, time: 'Yesterday' }
])

const activeHistory = computed(() => {
  return messages.value.filter(m => m.chatId === activeChatId.value)
})

const sendMessage = () => {
    if(!newMessage.value.trim()) return
    messages.value.push({
        id: Date.now(),
        chatId: activeChatId.value,
        text: newMessage.value,
        fromMe: true,
        time: 'Just now'
    })
    newMessage.value = ''
}
</script>

<style scoped>
/* Scoped styles integrated with template classes */
</style>

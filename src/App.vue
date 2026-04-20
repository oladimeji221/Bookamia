<template>
  <div class="app">
    <AppHeader v-if="!isAuthPage" />
    <RouterView />
    <AppFooter v-if="!isAuthPage" />

    <!-- Floating WhatsApp Button -->
    <a href="https://wa.me/" target="_blank" class="whatsapp-float" title="Chat with us on WhatsApp">
      <i class="fab fa-whatsapp"></i>
    </a>

    <!-- Coming Soon Modal -->
    <div class="modal fade" id="comingSoonModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content text-center p-4">
          <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal"></button>
          <div class="modal-body px-4 pb-4">
            <img src="/assets/images/bookamia.png" class="mb-4" style="max-height:80px;" alt="Bookamia Logo">
            <h4 class="mb-2">Coming Soon!</h4>
            <p class="text-muted mb-4">This feature is currently under development. We're working hard to bring it to you — stay tuned!</p>
            <button class="btn btn-primary px-4" data-bs-dismiss="modal">Got it</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Coming Soon Modal END -->
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

const route = useRoute()
const isAuthPage = computed(() => route.path.startsWith('/auth'))
</script>

<style>
.app {
  min-height: 100vh;
}

@keyframes pulse-whatsapp {
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
  70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
}
.whatsapp-float {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
  background-color: #25d366;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  animation: pulse-whatsapp 2s infinite;
  transition: all 0.3s ease;
  text-decoration: none;
}
.whatsapp-float:hover {
  transform: scale(1.1);
  color: white;
}
</style>

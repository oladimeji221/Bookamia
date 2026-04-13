<template>
  <div class="app">
    <AppHeader v-if="!isAuthPage" />
    <RouterView />
    <AppFooter v-if="!isAuthPage" />
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
</style>

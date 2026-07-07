<template>
  <!-- Mobile bottom navigation (visible < 576px via theme CSS) -->
  <nav class="navbar navbar-mobile">
    <ul class="navbar-nav">
      <li v-for="tab in tabs" :key="tab.to" class="nav-item">
        <router-link class="nav-link" :class="{ active: isActive(tab) }" :to="tab.to">
          <i :class="tab.icon + ' fa-fw'"></i>
          <span class="mb-0 nav-text">{{ tab.label }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const tabs = [
  { label: 'Home', to: '/', icon: 'bi bi-house-door' },
  { label: 'My Trips', to: '/user/bookings', icon: 'bi bi-briefcase' },
  { label: 'Wishlist', to: '/user/wishlists', icon: 'bi bi-heart' },
  { label: 'Account', to: '/user/profile', icon: 'bi bi-person-circle' },
]

const isActive = (tab) =>
  tab.to === '/' ? route.path === '/' : route.path.startsWith(tab.to)
</script>

<style scoped>
/* Evenly distribute the tabs — the theme's space-between misaligns
   items whose labels differ in width. */
.navbar-mobile {
  padding-left: 0.5rem !important;
  padding-right: 0.5rem !important;
}
.navbar-mobile .navbar-nav {
  width: 100%;
}
.navbar-mobile .nav-item {
  flex: 1 1 0;
}
.navbar-mobile .nav-item .nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

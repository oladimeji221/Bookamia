<template>
  <main class="admin-layout">
    <AdminSidebar />

    <!-- Page content START -->
    <div class="page-content">
      <AdminTopbar />

      <!-- Page main content START -->
      <div class="page-content-wrapper p-xxl-4">
        <router-view />
      </div>
      <!-- Page main content END -->
    </div>
    <!-- Page content END -->
  </main>
</template>

<script setup>
import AdminSidebar from '@/components/admin/AdminSidebar.vue';
import AdminTopbar from '@/components/admin/AdminTopbar.vue';
</script>

<style scoped>
.page-content-wrapper {
  padding: 1rem;
}
</style>

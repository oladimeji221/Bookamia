<template>
  <!-- Sidebar START -->
  <nav class="navbar sidebar navbar-expand-xl navbar-light">
    <!-- Navbar brand for xl START -->
    <div class="d-flex align-items-center">
      <router-link class="navbar-brand" to="/admin/dashboard">
        <img class="navbar-brand-item" src="/assets/images/bookamia.png" alt="Bookamia logo">
      </router-link>
    </div>
    <!-- Navbar brand for xl END -->

    <div class="offcanvas offcanvas-start flex-row custom-scrollbar h-100" data-bs-backdrop="true" tabindex="-1" id="adminSidebar">
      <div class="offcanvas-body sidebar-content d-flex flex-column pt-4">

        <!-- Sidebar menu START -->
        <ul class="navbar-nav flex-column" id="navbar-sidebar">
          <li class="nav-item">
            <router-link to="/admin/dashboard" class="nav-link" active-class="active"><i class="bi bi-house-door fa-fw me-2"></i>Dashboard</router-link>
          </li>

          <li class="nav-item ms-2 my-2 small text-uppercase fw-semibold opacity-75">Management</li>

          <li class="nav-item">
            <router-link to="/admin/bookings" class="nav-link" active-class="active"><i class="bi bi-bookmark-heart fa-fw me-2"></i>Bookings</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/vendors" class="nav-link" active-class="active">
              <i class="bi bi-shop fa-fw me-2"></i>Vendors
              <span v-if="store.pendingVendors.length" class="badge bg-warning bg-opacity-10 text-warning ms-2">{{ store.pendingVendors.length }} new</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/users" class="nav-link" active-class="active"><i class="bi bi-people fa-fw me-2"></i>Users</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/reviews" class="nav-link" active-class="active">
              <i class="bi bi-star fa-fw me-2"></i>Reviews
              <span v-if="store.flaggedReviews" class="badge bg-danger bg-opacity-10 text-danger ms-2">{{ store.flaggedReviews }} flagged</span>
            </router-link>
          </li>

          <li class="nav-item ms-2 my-2 small text-uppercase fw-semibold opacity-75">Finance</li>

          <li class="nav-item">
            <router-link to="/admin/earnings" class="nav-link" active-class="active">
              <i class="bi bi-graph-up-arrow fa-fw me-2"></i>Earnings
              <span v-if="store.pendingPayouts.length" class="badge bg-primary bg-opacity-10 text-primary ms-2">{{ store.pendingPayouts.length }}</span>
            </router-link>
          </li>

          <li class="nav-item ms-2 my-2 small text-uppercase fw-semibold opacity-75">Account</li>

          <li class="nav-item">
            <router-link to="/admin/settings" class="nav-link" active-class="active"><i class="bi bi-gear fa-fw me-2"></i>Admin Settings</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link"><i class="bi bi-globe2 fa-fw me-2"></i>View Website</router-link>
          </li>
        </ul>
        <!-- Sidebar menu end -->

        <!-- Sidebar footer START -->
        <div class="d-flex align-items-center justify-content-between text-primary-hover mt-auto p-3">
          <a class="h6 fw-light mb-0 text-body" href="#" @click.prevent>
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Log out
          </a>
          <router-link class="h6 mb-0 text-body" to="/admin/settings" aria-label="Settings">
            <i class="bi bi-gear-fill"></i>
          </router-link>
        </div>
        <!-- Sidebar footer END -->

      </div>
    </div>
  </nav>
  <!-- Sidebar END -->
</template>

<script setup>
import { useAdminStore } from '@/stores/admin';

const store = useAdminStore();
</script>

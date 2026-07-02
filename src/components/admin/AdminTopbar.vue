<template>
  <!-- Top bar START -->
  <nav class="navbar top-bar navbar-light py-0 py-xl-3">
    <div class="container-fluid p-0">
      <div class="d-flex align-items-center w-100">

        <!-- Logo for mobile -->
        <div class="d-flex align-items-center d-xl-none">
          <router-link class="navbar-brand" to="/admin/dashboard">
            <img class="navbar-brand-item h-40px" src="/assets/images/bookamia.png" alt="Bookamia">
          </router-link>
        </div>

        <!-- Toggler for sidebar -->
        <div class="navbar-expand-xl sidebar-offcanvas-menu">
          <button class="navbar-toggler me-auto p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#adminSidebar" aria-controls="adminSidebar" aria-label="Toggle sidebar">
            <i class="bi bi-list text-primary fa-fw"></i>
          </button>
        </div>

        <!-- Search -->
        <div class="navbar-expand-lg ms-auto ms-xl-0">
          <div class="nav my-3 my-xl-0 flex-nowrap align-items-center d-none d-lg-flex">
            <div class="nav-item w-100">
              <form class="position-relative" @submit.prevent>
                <input class="form-control bg-light pe-5" type="search" placeholder="Search bookings, vendors, users..." aria-label="Search">
                <button class="bg-transparent px-2 py-0 border-0 position-absolute top-50 end-0 translate-middle-y" type="submit"><i class="fas fa-search fs-6 text-primary"></i></button>
              </form>
            </div>
          </div>
        </div>

        <!-- Top bar right START -->
        <ul class="nav flex-row align-items-center list-unstyled ms-xl-auto">

          <!-- Notification dropdown START -->
          <li class="nav-item dropdown ms-3 position-relative">
            <a class="nav-notification btn btn-light p-0 mb-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
              <i class="bi bi-bell fa-fw"></i>
            </a>
            <span v-if="store.unreadNotifications" class="notif-badge animation-blink"></span>

            <div class="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md shadow-lg p-0">
              <div class="card bg-transparent">
                <div class="card-header bg-transparent d-flex justify-content-between align-items-center border-bottom">
                  <h6 class="m-0">Notifications
                    <span v-if="store.unreadNotifications" class="badge bg-danger bg-opacity-10 text-danger ms-2">{{ store.unreadNotifications }} new</span>
                  </h6>
                  <a class="small" href="#" @click.prevent="store.markAllNotificationsRead()">Mark all read</a>
                </div>
                <div class="card-body p-0">
                  <ul class="list-group list-group-flush list-unstyled p-2">
                    <li v-for="n in store.notifications" :key="n.id">
                      <a href="#" @click.prevent class="list-group-item list-group-item-action rounded border-0 mb-1 p-3" :class="{ 'notif-unread': !n.read }">
                        <h6 class="mb-1"><i :class="'bi ' + n.icon + ' fa-fw me-2 ' + n.iconClass"></i>{{ n.title }}</h6>
                        <p class="mb-0 small">{{ n.text }}</p>
                        <span class="small text-muted">{{ n.time }}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <!-- Notification dropdown END -->

          <!-- Profile dropdown START -->
          <li class="nav-item dropdown ms-3">
            <a class="avatar avatar-sm p-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img class="avatar-img rounded-2" :src="store.profile.avatar" alt="avatar">
            </a>

            <ul class="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3">
              <li class="px-3 mb-3">
                <div class="d-flex align-items-center">
                  <div class="avatar me-3">
                    <img class="avatar-img rounded-circle shadow" :src="store.profile.avatar" alt="avatar">
                  </div>
                  <div>
                    <h6 class="mb-0">{{ store.profile.name }}</h6>
                    <small class="text-muted">{{ store.profile.role }}</small>
                  </div>
                </div>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link class="dropdown-item" to="/admin/settings"><i class="bi bi-gear fa-fw me-2"></i>Settings</router-link></li>
              <li><router-link class="dropdown-item" to="/"><i class="bi bi-globe2 fa-fw me-2"></i>View Website</router-link></li>
              <li><a class="dropdown-item bg-danger-soft-hover" href="#" @click.prevent><i class="bi bi-power fa-fw me-2"></i>Sign Out</a></li>
            </ul>
          </li>
          <!-- Profile dropdown END -->

        </ul>
        <!-- Top bar right END -->
      </div>
    </div>
  </nav>
  <!-- Top bar END -->
</template>

<script setup>
import { useAdminStore } from '@/stores/admin';

const store = useAdminStore();
</script>

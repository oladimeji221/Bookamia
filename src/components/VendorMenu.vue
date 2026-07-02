<template>
  <section class="pt-4">
    <div class="container">
      <div class="card rounded-3 border p-3 pb-2">
        <!-- Avatar and info START -->
        <div class="d-sm-flex align-items-center">
          <div class="avatar avatar-xl mb-2 mb-sm-0">
            <img class="avatar-img rounded-circle" :src="store.profile.avatar" alt="">
          </div>
          <h4 class="mb-2 mb-sm-0 ms-sm-3"><span class="fw-light">Hi</span> {{ store.profile.name }}</h4>

          <div class="d-flex align-items-center gap-2 ms-auto flex-shrink-0">
            <!-- Notifications dropdown -->
            <div class="dropdown position-relative">
              <a class="btn btn-sm btn-round btn-light mb-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                <i class="bi bi-bell fa-fw"></i>
              </a>
              <span v-if="store.unreadNotifications" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="font-size: 0.6rem;">{{ store.unreadNotifications }}</span>

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
                        <a href="#" @click.prevent="store.markNotificationRead(n.id)" class="list-group-item list-group-item-action rounded border-0 mb-1 p-3" :class="{ 'notif-unread': !n.read }">
                          <h6 class="mb-1"><i :class="'bi ' + n.icon + ' fa-fw me-2 ' + n.iconClass"></i>{{ n.title }}</h6>
                          <p class="mb-0 small">{{ n.text }}</p>
                          <span class="small text-muted">{{ n.time }}</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <router-link to="/vendor/create-listing" class="btn btn-sm btn-primary-soft mb-0">
              <i class="bi bi-plus-lg fa-fw me-2"></i>Add New Listing
            </router-link>
          </div>
        </div>
        <!-- Avatar and info END -->
        
        <!-- Responsive navbar toggler -->
        <button class="btn btn-primary w-100 d-block d-xl-none mt-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#dashboardMenu" aria-controls="dashboardMenu">
          <i class="bi bi-list"></i> Dashboard Menu
        </button>

        <!-- Nav links START -->
        <div class="offcanvas-xl offcanvas-end mt-xl-3" tabindex="-1" id="dashboardMenu">
          <div class="offcanvas-header border-bottom p-3">
            <h5 class="offcanvas-title">Menu</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#dashboardMenu" aria-label="Close"></button>
          </div>
          <!-- Offcanvas body -->
          <div class="offcanvas-body p-3 p-xl-0">
            <!-- Nav item -->
            <div class="navbar navbar-expand-xl">
              <ul class="navbar-nav navbar-offcanvas-menu">
                <li class="nav-item"> 
                  <router-link class="nav-link" active-class="active" to="/vendor/dashboard"><i class="bi bi-house-door fa-fw me-1"></i>Dashboard</router-link>
                </li>
                <li class="nav-item"> 
                  <router-link class="nav-link" active-class="active" to="/vendor/listings"><i class="bi bi-journals fa-fw me-1"></i>Listings</router-link>
                </li>
                <li class="nav-item"> 
                  <router-link class="nav-link" active-class="active" to="/vendor/bookings"><i class="bi bi-bookmark-heart fa-fw me-1"></i>Bookings</router-link>
                </li>
                <li class="nav-item"> 
                  <router-link class="nav-link" active-class="active" to="/vendor/earnings"><i class="bi bi-graph-up-arrow fa-fw me-1"></i>Earnings</router-link>
                </li>
                <li class="nav-item"> 
                  <router-link class="nav-link" active-class="active" to="/vendor/reviews"><i class="bi bi-star fa-fw me-1"></i>Reviews</router-link>
                </li>
                <li class="nav-item"> 
                  <router-link class="nav-link" active-class="active" to="/vendor/settings"><i class="bi bi-gear fa-fw me-1"></i>Settings</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Nav links END -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { useVendorStore } from '@/stores/vendor';

const store = useVendorStore();
</script>

<style scoped>
.navbar-nav .nav-link {
  padding: 0.5rem 1rem;
  color: var(--bs-gray-600);
}
.navbar-nav .nav-link.active {
  color: var(--bs-primary);
  background: var(--bs-primary-bg-subtle);
  border-radius: 0.375rem;
}
</style>

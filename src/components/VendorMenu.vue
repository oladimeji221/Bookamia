<template>
  <section class="pt-4">
    <div class="container">
      <div class="card rounded-3 border p-3 pb-2">
        <!-- Avatar and info START -->
        <div class="d-sm-flex align-items-center">
          <div class="avatar avatar-xl mb-2 mb-sm-0">
            <img class="avatar-img rounded-circle" src="/assets/images/avatar/04.jpg" alt="">
          </div>
          <h4 class="mb-2 mb-sm-0 ms-sm-3"><span class="fw-light">Hi</span> John Doe</h4>
          <router-link to="/vendor/create-listing" class="btn btn-sm btn-primary-soft mb-0 ms-auto flex-shrink-0">
            <i class="bi bi-plus-lg fa-fw me-2"></i>Add New Listing
          </router-link>
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
// No specific logic needed for now
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

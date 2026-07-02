<template>
  <header class="navbar-light header-sticky">
    <!-- Logo Nav START -->
    <nav class="navbar navbar-expand-xl">
      <div class="container">
        <!-- Logo START -->
        <RouterLink class="navbar-brand" to="/">
          <img class="light-mode-item navbar-brand-item" src="/assets/images/bookamia.png" alt="logo">
          <img class="dark-mode-item navbar-brand-item" src="/assets/images/bookamia.png" alt="logo">
        </RouterLink>
        <!-- Logo END -->

        <!-- Responsive navbar toggler -->
        <button class="navbar-toggler ms-auto ms-sm-0 p-0 p-sm-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-animation">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span class="d-none d-sm-inline-block small">Menu</span>
        </button>

        <!-- Responsive category toggler -->
        <button class="navbar-toggler ms-sm-auto mx-3 me-md-0 p-0 p-sm-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCategoryCollapse" aria-controls="navbarCategoryCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <i class="bi bi-grid-3x3-gap-fill fa-fw"></i><span class="d-none d-sm-inline-block small">Category</span>
        </button>

        <!-- Main navbar START -->
        <div class="navbar-collapse collapse" id="navbarCollapse">
          <ul class="navbar-nav navbar-nav-scroll me-auto">
            <!-- Nav item Home -->
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            <!-- Nav item Blog -->
            <li class="nav-item">
              <RouterLink class="nav-link" to="/blog">Blog</RouterLink>
            </li>
            <!-- Nav item Contact -->
            <li class="nav-item">
              <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
            </li>
          </ul>
        </div>
        <!-- Main navbar END -->

        <!-- Nav category menu START -->
        <div class="navbar-collapse collapse" id="navbarCategoryCollapse">
          <ul class="navbar-nav navbar-nav-scroll nav-pills-primary-soft text-center ms-auto p-2 p-xl-0">
            <li class="nav-item"> <RouterLink class="nav-link" to="/categories/hotels"><i class="fa-solid fa-hotel me-2"></i>Hotels</RouterLink> </li>
            <li class="nav-item"> <RouterLink class="nav-link" to="/categories/eatery"><i class="fa-solid fa-utensils me-2"></i>Eatery</RouterLink> </li>
            <li class="nav-item"> <RouterLink class="nav-link" to="/categories/events"><i class="fa-solid fa-calendar-days me-2"></i>Events</RouterLink> </li>
            <li class="nav-item"> <RouterLink class="nav-link" to="/categories/cabs"><i class="fa-solid fa-car me-2"></i>Cabs</RouterLink> </li>
            <li class="nav-item"> <RouterLink class="nav-link" to="/categories/movies"><i class="fa-solid fa-film me-2"></i>Movies</RouterLink> </li>

            <!-- Profile Dropdown START -->
            <li class="nav-item dropdown ms-xl-3">
              <!-- Avatar -->
              <a class="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                <img class="avatar-img rounded-2" src="/assets/images/avatar/04.jpg" alt="avatar">
              </a>

              <!-- Profile dropdown START -->
              <ul class="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">
                <!-- Profile info -->
                <li class="px-3 mb-3">
                  <div class="d-flex align-items-center">
                    <!-- Avatar -->
                    <div class="avatar me-3">
                      <img class="avatar-img rounded-circle shadow" src="/assets/images/avatar/04.jpg" alt="avatar">
                    </div>
                    <div>
                      <RouterLink class="h6 mt-2 mt-sm-0" to="/user/profile">John Doe</RouterLink>
                      <p class="small m-0">hello@gmail.com</p>
                    </div>
                  </div>
                </li>

                <!-- Links: User Account -->
                <li><hr class="dropdown-divider"></li>
                <li><span class="dropdown-header small text-muted text-uppercase ps-3">My Account</span></li>
                <li><RouterLink class="dropdown-item" to="/user/profile"><i class="bi bi-person fa-fw me-2"></i>My Profile</RouterLink></li>
                <li><RouterLink class="dropdown-item" to="/user/bookings"><i class="bi bi-ticket-perforated fa-fw me-2"></i>My Bookings</RouterLink></li>
                <li><RouterLink class="dropdown-item" to="/user/reviews"><i class="bi bi-star fa-fw me-2"></i>My Reviews</RouterLink></li>
                <li><RouterLink class="dropdown-item" to="/user/wallet"><i class="bi bi-wallet fa-fw me-2"></i>Wallet</RouterLink></li>
                <li><RouterLink class="dropdown-item" to="/user/wishlists"><i class="bi bi-heart fa-fw me-2"></i>My Wishlist</RouterLink></li>
                <li><RouterLink class="dropdown-item" to="/user/settings"><i class="bi bi-gear fa-fw me-2"></i>Settings</RouterLink></li>

                <!-- Links: Agent Dashboard -->
                <li><hr class="dropdown-divider"></li>
                <li><span class="dropdown-header small text-muted text-uppercase ps-3">Agent Dashboard</span></li>
                <li><RouterLink class="dropdown-item" to="/vendor/dashboard"><i class="bi bi-house-door fa-fw me-2"></i>Dashboard</RouterLink></li>
                <li><RouterLink class="dropdown-item" to="/vendor/listings"><i class="bi bi-journals fa-fw me-2"></i>My Listings</RouterLink></li>
                <li><RouterLink class="dropdown-item" to="/vendor/bookings"><i class="bi bi-bookmark-heart fa-fw me-2"></i>Bookings</RouterLink></li>
                <li><RouterLink class="dropdown-item" to="/vendor/earnings"><i class="bi bi-graph-up-arrow fa-fw me-2"></i>Earnings</RouterLink></li>
                <li><RouterLink class="dropdown-item" to="/vendor/create-listing"><i class="bi bi-plus-circle fa-fw me-2"></i>Add Listing</RouterLink></li>

                <!-- Links: Admin Dashboard (testing) -->
                <li><hr class="dropdown-divider"></li>
                <li><span class="dropdown-header small text-muted text-uppercase ps-3">Admin (testing)</span></li>
                <li><RouterLink class="dropdown-item" to="/admin/dashboard"><i class="bi bi-shield-lock fa-fw me-2"></i>Admin Dashboard</RouterLink></li>

                <!-- Sign out -->
                <li><hr class="dropdown-divider"></li>
                <li><RouterLink class="dropdown-item" to="/auth/login"><i class="bi bi-power fa-fw me-2"></i>Sign Out</RouterLink></li>
              </ul>
            </li>
            <!-- Profile Dropdown END -->
          </ul>
        </div>
        <!-- Nav category menu END -->

      </div>
    </nav>
    <!-- Logo Nav END -->
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Optional: Ensure dropdown animation is smooth if theme requires it */
</style>

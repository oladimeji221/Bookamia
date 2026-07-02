<template>
  <div class="col-lg-4 col-xl-3">
    <!-- Responsive offcanvas body START -->
    <div class="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasSidebar">
      <!-- Offcanvas header -->
      <div class="offcanvas-header justify-content-end pb-2">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar" aria-label="Close"></button>
      </div>

      <!-- Offcanvas body -->
      <div class="offcanvas-body p-3 p-lg-0">
        <div class="card bg-light w-100">
          <!-- Edit profile button -->
          <div class="position-absolute top-0 end-0 p-3">
            <router-link to="/user/profile" class="text-primary-hover" data-bs-toggle="tooltip" data-bs-title="Edit profile">
              <i class="bi bi-pencil-square"></i>
            </router-link>
          </div>

          <!-- Card body START -->
          <div class="card-body p-3">
            <!-- Avatar and content -->
            <div class="text-center mb-3">
              <!-- Avatar -->
              <div class="avatar avatar-xl mb-2">
                <img class="avatar-img rounded-circle border border-2 border-white" src="/assets/images/avatar/04.jpg" alt="">
              </div>
              <h6 class="mb-0">John Doe</h6>
              <router-link to="/user/profile" class="text-reset text-primary-hover small">hello@gmail.com</router-link>
              <hr>
            </div>

            <!-- Sidebar menu item START -->
            <ul class="nav nav-pills-primary-soft flex-column">
              <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/user/profile"><i class="bi bi-person fa-fw me-2"></i>My Profile</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/user/bookings"><i class="bi bi-ticket-perforated fa-fw me-2"></i>My Bookings</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/user/reviews"><i class="bi bi-star fa-fw me-2"></i>My Reviews</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/user/messages"><i class="bi bi-chat-dots fa-fw me-2"></i>Messages</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/user/wallet"><i class="bi bi-wallet fa-fw me-2"></i>Wallet</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/user/wishlists"><i class="bi bi-heart fa-fw me-2"></i>Wishlist</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/user/settings"><i class="bi bi-gear fa-fw me-2"></i>Settings</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link text-danger bg-danger-soft-hover" href="#" @click.prevent><i class="bi bi-box-arrow-right fa-fw me-2"></i>Sign Out</a>
              </li>
            </ul>
            <!-- Sidebar menu item END -->
          </div>
          <!-- Card body END -->
        </div>
      </div>
    </div>
    <!-- Responsive offcanvas body END -->
  </div>
</template>

<script setup>
// Props or state could be added here if needed to dynamicize name/email/avatar
</script>

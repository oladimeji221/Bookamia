<template>
  <main>
    <section class="pt-3">
      <div class="container">
        <div class="row g-2 g-lg-4">
          <!-- Sidebar START -->
          <UserSidebar />
          <!-- Sidebar END -->

          <!-- Main content START -->
          <div class="col-lg-8 col-xl-9 ps-xl-5">
            <div class="d-grid mb-0 d-lg-none w-100">
              <button class="btn btn-primary mb-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
                <i class="fas fa-sliders-h"></i> Menu
              </button>
            </div>

            <div class="vstack gap-4">
              <!-- Dashboard Header -->
              <UserDashboardHeader title="Settings" />

              <div class="card border bg-transparent">
                <div class="card-header bg-transparent border-bottom">
                  <h4 class="card-header-title">Settings</h4>
                </div>
                <div class="card-body">
                  <!-- Account Settings -->
                  <div class="mb-4">
                    <h5>Account Settings</h5>
                    <div class="list-group list-group-flush">
                      <div class="list-group-item d-flex justify-content-between align-items-center px-0">
                        <div>
                          <h6 class="mb-0">Two-Factor Authentication</h6>
                          <p class="small mb-0">Secure your account with 2FA</p>
                        </div>
                        <div class="form-check form-switch cursor-pointer">
                          <input class="form-check-input" type="checkbox" role="switch" checked>
                        </div>
                      </div>
                      <div class="list-group-item d-flex justify-content-between align-items-center px-0">
                        <div>
                          <h6 class="mb-0">Active Sessions</h6>
                          <p class="small mb-0">Manage your logged in devices</p>
                        </div>
                        <a href="#" class="btn btn-sm btn-light mb-0" data-bs-toggle="modal" data-bs-target="#comingSoonModal">View all</a>
                      </div>
                    </div>
                  </div>

                  <!-- Email Notifications -->
                  <div class="mb-4">
                    <h5>Email Notifications</h5>
                    <div class="list-group list-group-flush">
                      <div v-for="notif in notifications" :key="notif.id" class="list-group-item d-flex justify-content-between align-items-center px-0">
                        <div>
                          <h6 class="mb-0">{{ notif.label }}</h6>
                          <p class="small mb-0">{{ notif.description }}</p>
                        </div>
                        <div class="form-check form-switch cursor-pointer">
                          <input class="form-check-input" type="checkbox" role="switch" v-model="notif.enabled">
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="text-end">
                    <button class="btn btn-primary mb-0">Save Changes</button>
                  </div>
                </div>
              </div>

              <!-- Delete Profile START -->
              <div class="card border border-danger bg-transparent">
                <div class="card-header bg-transparent border-bottom">
                  <h4 class="card-header-title text-danger">Delete Profile</h4>
                </div>
                <div class="card-body">
                  <h6>Before you go...</h6>
                  <p>Deleting your account is permanent and will remove all your data, including bookings, wishlists, and reviews.</p>
                  <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" id="deleteConfirm" v-model="confirmDelete">
                    <label class="form-check-label" for="deleteConfirm">
                      I understand the consequences and I want to delete my profile.
                    </label>
                  </div>
                  <button class="btn btn-danger-soft mb-0" :disabled="!confirmDelete" @click="deleteAccount">Delete My Profile</button>
                </div>
              </div>
              <!-- Delete Profile END -->
            </div>
          </div>
          <!-- Main content END -->
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import UserSidebar from '@/components/UserSidebar.vue'
import UserDashboardHeader from '@/components/UserDashboardHeader.vue'

const notifications = ref([
  { id: 1, label: 'Booking Confirmation', description: 'Get emails about your successful bookings.', enabled: true },
  { id: 2, label: 'Promotional Emails', description: 'Receive updates on latest offers and deals.', enabled: false },
  { id: 3, label: 'Account Security Alerts', description: 'Get notified of unusual login activity.', enabled: true }
])

const confirmDelete = ref(false)

const deleteAccount = () => {
    if(confirm('Are you sure you want to delete your profile permanently?')) {
        alert('Profile deletion request submitted.')
    }
}
</script>

<style scoped>
/* Scoped styles integrated with template classes */
</style>

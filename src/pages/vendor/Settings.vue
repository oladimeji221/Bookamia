<template>
  <main>
    <VendorMenu />

    <section class="pt-0">
      <div class="container vstack gap-4">
        <!-- Title START -->
        <div class="row">
          <div class="col-12">
            <h1 class="fs-4 mb-0"><i class="bi bi-gear fa-fw me-1"></i>Settings</h1>
          </div>
        </div>
        <!-- Title END -->

        <!-- Tabs START -->
        <div class="row g-4">
          <div class="col-12">
            <div class="bg-light pb-0 px-2 px-lg-0 rounded-top">
              <ul class="nav nav-tabs nav-bottom-line nav-responsive border-0 nav-justified">
                <li class="nav-item"> <a class="nav-link mb-0" :class="{active: activeTab === 'profile'}" @click="activeTab = 'profile'" href="#"><i class="fas fa-cog fa-fw me-2"></i>Edit Profile</a> </li>
                <li class="nav-item"> <a class="nav-link mb-0" :class="{active: activeTab === 'notifications'}" @click="activeTab = 'notifications'" href="#"><i class="fas fa-bell fa-fw me-2"></i>Notifications</a> </li>
                <li class="nav-item"> <a class="nav-link mb-0" :class="{active: activeTab === 'account'}" @click="activeTab = 'account'" href="#"><i class="fas fa-user-circle fa-fw me-2"></i>Account Settings</a> </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Tabs END -->

        <!-- Tabs Content START -->
        <div class="row g-4">
          <div class="col-12">
            <div class="tab-content">
              <!-- Profile Tab -->
              <div v-if="activeTab === 'profile'" class="tab-pane show active">
                <div class="card border">
                  <div class="card-header border-bottom">
                    <h5 class="card-header-title mb-0">Edit Profile</h5>
                  </div>
                  <div class="card-body">
                    <div class="mb-3">
                      <label class="form-label">Name</label>
                      <input type="text" class="form-control" value="John Doe">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Email</label>
                      <input type="email" class="form-control" value="john@example.com">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Mobile</label>
                      <input type="text" class="form-control" value="+1 222 555 666">
                    </div>
                    <div class="d-flex justify-content-end mt-4">
                      <button class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Notifications Tab -->
              <div v-if="activeTab === 'notifications'" class="tab-pane show active">
                <div class="card border">
                  <div class="card-header border-bottom">
                    <h5 class="card-header-title mb-0">Notification Settings</h5>
                  </div>
                  <div class="card-body">
                    <div class="form-check form-switch form-check-md d-flex justify-content-between mb-4">
                      <label class="form-check-label ps-0 pe-4">Notify me via email when logging in</label>
                      <input class="form-check-input" type="checkbox" checked>
                    </div>
                    <div class="form-check form-switch form-check-md d-flex justify-content-between mb-4">
                      <label class="form-check-label ps-0 pe-4">Receive booking reminders</label>
                      <input class="form-check-input" type="checkbox" checked>
                    </div>
                    <div class="d-flex justify-content-end mt-4">
                      <button class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Account Tab -->
              <div v-if="activeTab === 'account'" class="tab-pane show active">
                <div class="card border">
                  <div class="card-header border-bottom">
                    <h5 class="card-header-title mb-0">Account Settings</h5>
                  </div>
                  <div class="card-body">
                    <h6>Two-factor authentication</h6>
                    <p class="small">Add a phone number to set up two-factor authentication</p>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" placeholder="Enter mobile number">
                      <button class="btn btn-primary">Send Code</button>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-between align-items-center">
                      <div>
                        <h6>Delete Account</h6>
                        <p class="small mb-0">Once you delete your account, there is no going back. Please be certain.</p>
                      </div>
                      <button class="btn btn-danger-soft">Delete Account</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Tabs Content END -->
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import VendorMenu from '@/components/VendorMenu.vue';

const activeTab = ref('profile');
</script>

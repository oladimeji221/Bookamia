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
                <li class="nav-item"> <a class="nav-link mb-0" :class="{active: activeTab === 'profile'}" @click.prevent="activeTab = 'profile'" href="#"><i class="fas fa-cog fa-fw me-2"></i>Edit Profile</a> </li>
                <li class="nav-item"> <a class="nav-link mb-0" :class="{active: activeTab === 'payout'}" @click.prevent="activeTab = 'payout'" href="#"><i class="fas fa-university fa-fw me-2"></i>Payout Details</a> </li>
                <li class="nav-item"> <a class="nav-link mb-0" :class="{active: activeTab === 'notifications'}" @click.prevent="activeTab = 'notifications'" href="#"><i class="fas fa-bell fa-fw me-2"></i>Notifications</a> </li>
                <li class="nav-item"> <a class="nav-link mb-0" :class="{active: activeTab === 'account'}" @click.prevent="activeTab = 'account'" href="#"><i class="fas fa-user-circle fa-fw me-2"></i>Account Settings</a> </li>
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
                    <div class="d-flex align-items-center mb-4">
                      <div class="avatar avatar-xl me-3">
                        <img class="avatar-img rounded-circle" :src="store.profile.avatar" alt="avatar">
                      </div>
                      <label class="btn btn-sm btn-primary-soft mb-0" for="vendor-avatar-upload">Change photo</label>
                      <input id="vendor-avatar-upload" class="d-none" type="file" accept="image/*">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Business / Display name</label>
                      <input type="text" class="form-control" v-model="profileForm.name">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Email</label>
                      <input type="email" class="form-control" v-model="profileForm.email">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Mobile</label>
                      <input type="text" class="form-control" v-model="profileForm.phone">
                    </div>
                    <div class="d-flex justify-content-end mt-4">
                      <button class="btn btn-primary mb-0" @click="saveProfile"><i class="bi bi-check-lg fa-fw me-1"></i>Save changes</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Payout Tab -->
              <div v-if="activeTab === 'payout'" class="tab-pane show active">
                <div class="card border">
                  <div class="card-header border-bottom">
                    <h5 class="card-header-title mb-0">Payout Details</h5>
                    <p class="mb-0 small text-muted">Withdrawals from your Earnings wallet are paid into this account.</p>
                  </div>
                  <div class="card-body">
                    <div class="mb-3">
                      <label class="form-label">Bank name</label>
                      <select class="form-select" v-model="payoutForm.bankName">
                        <option v-for="bank in banks" :key="bank">{{ bank }}</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Account number</label>
                      <input type="text" class="form-control" maxlength="10" v-model="payoutForm.accountNumber">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Account name</label>
                      <input type="text" class="form-control" v-model="payoutForm.accountName">
                    </div>
                    <div class="d-flex justify-content-end mt-4">
                      <button class="btn btn-primary mb-0" @click="savePayout"><i class="bi bi-check-lg fa-fw me-1"></i>Save payout details</button>
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
                      <label class="form-check-label ps-0 pe-4">New booking alerts</label>
                      <input class="form-check-input" type="checkbox" checked>
                    </div>
                    <div class="form-check form-switch form-check-md d-flex justify-content-between mb-4">
                      <label class="form-check-label ps-0 pe-4">New review alerts</label>
                      <input class="form-check-input" type="checkbox" checked>
                    </div>
                    <div class="form-check form-switch form-check-md d-flex justify-content-between mb-4">
                      <label class="form-check-label ps-0 pe-4">Payout confirmation emails</label>
                      <input class="form-check-input" type="checkbox" checked>
                    </div>
                    <div class="d-flex justify-content-end mt-4">
                      <button class="btn btn-primary mb-0" @click="notifySaved"><i class="bi bi-check-lg fa-fw me-1"></i>Save changes</button>
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
                      <button class="btn btn-primary mb-0">Send Code</button>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-between align-items-center">
                      <div>
                        <h6>Delete Account</h6>
                        <p class="small mb-0">Once you delete your account, there is no going back. Please be certain.</p>
                      </div>
                      <button class="btn btn-danger-soft mb-0"><i class="bi bi-trash3 fa-fw me-1"></i>Delete Account</button>
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
import { ref, reactive } from 'vue';
import VendorMenu from '@/components/VendorMenu.vue';
import { useVendorStore } from '@/stores/vendor';

const store = useVendorStore();
const activeTab = ref('profile');

const banks = ['Access Bank', 'First Bank', 'GTBank', 'Kuda', 'Moniepoint', 'Opay', 'Stanbic IBTC', 'UBA', 'Zenith Bank'];

const profileForm = reactive({
  name: store.profile.name,
  email: 'john@example.com',
  phone: '+234 705 871 0433',
});

const payoutForm = reactive({
  bankName: store.profile.bankName,
  accountNumber: store.profile.accountNumber,
  accountName: store.profile.accountName,
});

const saveProfile = () => {
  store.profile.name = profileForm.name;
  alert('Profile updated successfully.');
};

const savePayout = () => {
  store.profile.bankName = payoutForm.bankName;
  store.profile.accountNumber = payoutForm.accountNumber;
  store.profile.accountName = payoutForm.accountName;
  alert('Payout details updated successfully.');
};

const notifySaved = () => alert('Notification preferences saved.');
</script>

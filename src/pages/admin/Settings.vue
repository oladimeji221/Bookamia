<template>
  <div class="vstack gap-4">
    <!-- Title -->
    <div class="row">
      <div class="col-12">
        <h1 class="h4 mb-0"><i class="bi bi-gear fa-fw me-1"></i>Admin Settings</h1>
      </div>
    </div>

    <div class="row g-4">
      <!-- Platform settings -->
      <div class="col-lg-7">
        <div class="card shadow h-100">
          <div class="card-header border-bottom">
            <h5 class="card-header-title mb-0">Platform settings</h5>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label">Platform name</label>
                <input type="text" class="form-control" v-model="form.platformName">
              </div>
              <div class="col-md-6">
                <label class="form-label">Currency</label>
                <input type="text" class="form-control" :value="form.currency" disabled>
              </div>
              <div class="col-md-6">
                <label class="form-label">Support email</label>
                <input type="email" class="form-control" v-model="form.supportEmail">
              </div>
              <div class="col-md-6">
                <label class="form-label">Support phone</label>
                <input type="text" class="form-control" v-model="form.supportPhone">
              </div>
              <div class="col-md-6">
                <label class="form-label">Commission rate (%)</label>
                <div class="input-group">
                  <input type="number" min="0" max="100" step="0.5" class="form-control" v-model.number="form.commissionRate">
                  <span class="input-group-text">%</span>
                </div>
                <small class="text-muted">Bookamia's cut of every completed booking.</small>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-4">
              <button class="btn btn-primary mb-0" @click="saveSettings"><i class="bi bi-check-lg fa-fw me-1"></i>Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Toggles + profile -->
      <div class="col-lg-5">
        <div class="vstack gap-4">
          <!-- Preferences -->
          <div class="card shadow">
            <div class="card-header border-bottom">
              <h5 class="card-header-title mb-0">Platform preferences</h5>
            </div>
            <div class="card-body">
              <div class="form-check form-switch form-check-md d-flex justify-content-between mb-4">
                <label class="form-check-label ps-0 pe-4">Auto-approve new vendors<br><small class="text-muted">Skip manual review for vendor applications</small></label>
                <input class="form-check-input" type="checkbox" v-model="form.autoApproveVendors">
              </div>
              <div class="form-check form-switch form-check-md d-flex justify-content-between mb-4">
                <label class="form-check-label ps-0 pe-4">Email notifications<br><small class="text-muted">Payouts, flagged reviews and applications</small></label>
                <input class="form-check-input" type="checkbox" v-model="form.emailNotifications">
              </div>
              <div class="form-check form-switch form-check-md d-flex justify-content-between mb-0">
                <label class="form-check-label ps-0 pe-4">Maintenance mode<br><small class="text-muted">Temporarily take the public site offline</small></label>
                <input class="form-check-input" type="checkbox" v-model="form.maintenanceMode">
              </div>
            </div>
          </div>

          <!-- Admin profile -->
          <div class="card shadow">
            <div class="card-header border-bottom">
              <h5 class="card-header-title mb-0">Admin profile</h5>
            </div>
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="avatar avatar-lg me-3">
                  <img class="avatar-img rounded-circle" :src="store.profile.avatar" alt="avatar">
                </div>
                <div>
                  <h6 class="mb-0">{{ store.profile.name }}</h6>
                  <span class="small text-muted">{{ store.profile.email }} · {{ store.profile.role }}</span>
                </div>
              </div>
              <div class="hstack gap-2">
                <button class="btn btn-sm btn-primary-soft mb-0"><i class="bi bi-pencil-square fa-fw me-1"></i>Edit profile</button>
                <button class="btn btn-sm btn-light mb-0"><i class="bi bi-shield-lock fa-fw me-1"></i>Change password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Danger zone -->
    <div class="row">
      <div class="col-12">
        <div class="card border border-danger">
          <div class="card-header border-bottom">
            <h5 class="card-header-title text-danger mb-0">Danger zone</h5>
          </div>
          <div class="card-body d-sm-flex justify-content-between align-items-center">
            <div class="mb-3 mb-sm-0">
              <h6 class="mb-0">Reset demo data</h6>
              <p class="small mb-0 text-muted">Restore all vendors, users, bookings and payouts to their original demo state.</p>
            </div>
            <button class="btn btn-danger-soft mb-0" @click="resetData"><i class="bi bi-arrow-counterclockwise fa-fw me-1"></i>Reset data</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useAdminStore } from '@/stores/admin';

const store = useAdminStore();

const form = reactive({ ...store.settings });

const saveSettings = () => {
  Object.assign(store.settings, form);
  alert('Platform settings saved.');
};

const resetData = () => {
  if (confirm('Reset all admin demo data back to its original state?')) {
    store.$reset();
    Object.assign(form, store.settings);
  }
};
</script>

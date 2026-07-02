<template>
  <div class="vstack gap-4">
    <!-- Title -->
    <div class="row">
      <div class="col-12">
        <h1 class="h4 mb-0"><i class="bi bi-shop fa-fw me-1"></i>Vendors</h1>
      </div>
    </div>

    <!-- Quick stats -->
    <div class="row g-4">
      <div class="col-sm-6 col-xl-4">
        <div class="card card-body border p-4 h-100">
          <div class="d-flex align-items-center">
            <div class="icon-lg bg-success bg-opacity-10 text-success rounded-3"><i class="bi bi-patch-check"></i></div>
            <div class="ms-3">
              <h5 class="mb-0">{{ store.activeVendors }}</h5>
              <span class="small">Active vendors</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xl-4">
        <div class="card card-body border p-4 h-100">
          <div class="d-flex align-items-center">
            <div class="icon-lg bg-warning bg-opacity-10 text-warning rounded-3"><i class="bi bi-hourglass-split"></i></div>
            <div class="ms-3">
              <h5 class="mb-0">{{ store.pendingVendors.length }}</h5>
              <span class="small">Awaiting approval</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xl-4">
        <div class="card card-body border p-4 h-100">
          <div class="d-flex align-items-center">
            <div class="icon-lg bg-danger bg-opacity-10 text-danger rounded-3"><i class="bi bi-slash-circle"></i></div>
            <div class="ms-3">
              <h5 class="mb-0">{{ store.suspendedVendors }}</h5>
              <span class="small">Suspended</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Vendor table START -->
    <div class="row">
      <div class="col-12">
        <div class="card shadow">
          <div class="card-header border-bottom d-flex justify-content-between align-items-center flex-wrap gap-2">
            <h5 class="card-header-title mb-0">All Vendors <span class="badge bg-primary bg-opacity-10 text-primary ms-2">{{ filteredVendors.length }} shown</span></h5>
            <select class="form-select form-select-sm w-auto" v-model="statusFilter">
              <option value="">All statuses</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Suspended</option>
            </select>
          </div>

          <div class="card-body">
            <div class="table-responsive border-0">
              <table class="table align-middle p-4 mb-0 table-hover table-shrink">
                <thead class="table-light">
                  <tr>
                    <th class="border-0 rounded-start">Vendor</th>
                    <th class="border-0">Categories</th>
                    <th class="border-0">Listings</th>
                    <th class="border-0">Revenue</th>
                    <th class="border-0">Joined</th>
                    <th class="border-0">Status</th>
                    <th class="border-0 rounded-end">Action</th>
                  </tr>
                </thead>
                <tbody class="border-top-0">
                  <tr v-for="v in filteredVendors" :key="v.id">
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="avatar avatar-sm flex-shrink-0">
                          <img class="avatar-img rounded-circle" :src="v.avatar" alt="">
                        </div>
                        <div class="ms-2">
                          <h6 class="mb-0">{{ v.business }}</h6>
                          <span class="small text-muted">{{ v.name }} · {{ v.email }}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span v-for="c in v.categories" :key="c" class="badge me-1" :class="meta[c].badge">{{ c }}</span>
                    </td>
                    <td>{{ v.listings }}</td>
                    <td>₦{{ v.revenue.toLocaleString() }}</td>
                    <td><span class="small">{{ v.joined }}</span></td>
                    <td><div class="badge" :class="statusBadge(v.status)">{{ v.status }}</div></td>
                    <td>
                      <div class="hstack gap-1 flex-wrap">
                        <template v-if="v.status === 'Pending'">
                          <button class="btn btn-sm btn-success-soft mb-0" @click="store.approveVendor(v.id)"><i class="bi bi-check-lg fa-fw me-1"></i>Approve</button>
                          <button class="btn btn-sm btn-danger-soft mb-0" @click="store.rejectVendor(v.id)"><i class="bi bi-x-lg fa-fw me-1"></i>Reject</button>
                        </template>
                        <template v-else-if="v.status === 'Active'">
                          <button class="btn btn-sm btn-warning-soft mb-0" @click="store.suspendVendor(v.id)"><i class="bi bi-slash-circle fa-fw me-1"></i>Suspend</button>
                        </template>
                        <template v-else>
                          <button class="btn btn-sm btn-success-soft mb-0" @click="store.activateVendor(v.id)"><i class="bi bi-arrow-counterclockwise fa-fw me-1"></i>Reactivate</button>
                        </template>
                        <button class="btn btn-sm btn-round btn-light mb-0" title="View" @click="openView(v)"><i class="bi bi-eye"></i></button>
                        <button class="btn btn-sm btn-round btn-primary-soft mb-0" title="Edit" @click="openEdit(v)"><i class="bi bi-pencil-square"></i></button>
                        <button class="btn btn-sm btn-round btn-danger-soft mb-0" title="Delete" @click="deleting = v"><i class="bi bi-trash3"></i></button>
                      </div>
                    </td>
                  </tr>
                  <tr v-if="!filteredVendors.length">
                    <td colspan="7" class="text-center text-muted py-4">No vendors match this filter.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Vendor table END -->

    <!-- View modal -->
    <div v-if="viewing" class="modal-backdrop-custom" @click.self="viewing = null">
      <div class="card border-0 shadow modal-card-custom">
        <div class="card-header border-bottom d-flex justify-content-between align-items-center">
          <h5 class="mb-0">Vendor details</h5>
          <button class="btn btn-sm btn-round btn-light mb-0" @click="viewing = null"><i class="bi bi-x-lg"></i></button>
        </div>
        <div class="card-body">
          <div class="d-flex align-items-center mb-3">
            <div class="avatar avatar-lg flex-shrink-0">
              <img class="avatar-img rounded-circle" :src="viewing.avatar" alt="">
            </div>
            <div class="ms-3">
              <h5 class="mb-0">{{ viewing.business }}</h5>
              <span class="small text-muted">{{ viewing.name }}</span>
            </div>
            <div class="badge ms-auto" :class="statusBadge(viewing.status)">{{ viewing.status }}</div>
          </div>
          <ul class="list-group list-group-borderless mb-0">
            <li class="list-group-item px-0 d-flex justify-content-between"><span class="text-muted"><i class="bi bi-envelope me-2"></i>Email</span><span>{{ viewing.email }}</span></li>
            <li class="list-group-item px-0 d-flex justify-content-between"><span class="text-muted"><i class="bi bi-tags me-2"></i>Categories</span><span><span v-for="c in viewing.categories" :key="c" class="badge ms-1" :class="meta[c].badge">{{ c }}</span></span></li>
            <li class="list-group-item px-0 d-flex justify-content-between"><span class="text-muted"><i class="bi bi-journals me-2"></i>Listings</span><span>{{ viewing.listings }}</span></li>
            <li class="list-group-item px-0 d-flex justify-content-between"><span class="text-muted"><i class="bi bi-cash-stack me-2"></i>Lifetime revenue</span><h6 class="mb-0">₦{{ viewing.revenue.toLocaleString() }}</h6></li>
            <li class="list-group-item px-0 d-flex justify-content-between"><span class="text-muted"><i class="bi bi-calendar2 me-2"></i>Joined</span><span>{{ viewing.joined }}</span></li>
          </ul>
        </div>
        <div class="card-footer border-top d-flex justify-content-end gap-2">
          <button class="btn btn-danger-soft mb-0" @click="deleting = viewing; viewing = null"><i class="bi bi-trash3 fa-fw me-1"></i>Delete</button>
          <button class="btn btn-primary mb-0" @click="openEdit(viewing)"><i class="bi bi-pencil-square fa-fw me-1"></i>Edit</button>
        </div>
      </div>
    </div>

    <!-- Edit modal -->
    <div v-if="editing" class="modal-backdrop-custom" @click.self="editing = null">
      <div class="card border-0 shadow modal-card-custom">
        <div class="card-header border-bottom d-flex justify-content-between align-items-center">
          <h5 class="mb-0">Edit vendor</h5>
          <button class="btn btn-sm btn-round btn-light mb-0" @click="editing = null"><i class="bi bi-x-lg"></i></button>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label class="form-label">Business name</label>
            <input type="text" class="form-control" v-model="editForm.business">
          </div>
          <div class="mb-3">
            <label class="form-label">Contact name</label>
            <input type="text" class="form-control" v-model="editForm.name">
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" v-model="editForm.email">
          </div>
          <div class="mb-0">
            <label class="form-label">Status</label>
            <select class="form-select" v-model="editForm.status">
              <option>Active</option>
              <option>Pending</option>
              <option>Suspended</option>
            </select>
          </div>
        </div>
        <div class="card-footer border-top d-flex justify-content-end gap-2">
          <button class="btn btn-light mb-0" @click="editing = null">Cancel</button>
          <button class="btn btn-primary mb-0" @click="saveEdit"><i class="bi bi-check-lg fa-fw me-1"></i>Save changes</button>
        </div>
      </div>
    </div>

    <!-- Delete confirm modal -->
    <div v-if="deleting" class="modal-backdrop-custom" @click.self="deleting = null">
      <div class="card border-0 shadow modal-card-custom">
        <div class="card-body text-center p-4">
          <div class="icon-xl bg-danger bg-opacity-10 text-danger rounded-circle mx-auto mb-3"><i class="bi bi-trash3"></i></div>
          <h5 class="mb-2">Delete {{ deleting.business }}?</h5>
          <p class="text-muted small mb-4">This permanently removes the vendor, including their {{ deleting.listings }} listing(s). This action cannot be undone.</p>
          <div class="d-flex justify-content-center gap-2">
            <button class="btn btn-light mb-0" @click="deleting = null">Cancel</button>
            <button class="btn btn-danger mb-0" @click="confirmDelete"><i class="bi bi-trash3 fa-fw me-1"></i>Delete vendor</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useAdminStore, CATEGORY_META } from '@/stores/admin';

const store = useAdminStore();
const meta = CATEGORY_META;
const statusFilter = ref('');

const viewing = ref(null);
const editing = ref(null);
const deleting = ref(null);
const editForm = reactive({ business: '', name: '', email: '', status: 'Active' });

const filteredVendors = computed(() =>
  statusFilter.value ? store.vendors.filter((v) => v.status === statusFilter.value) : store.vendors
);

const statusBadge = (status) => ({
  Active: 'bg-success bg-opacity-10 text-success',
  Pending: 'bg-warning bg-opacity-10 text-warning',
  Suspended: 'bg-danger bg-opacity-10 text-danger',
}[status]);

const openView = (v) => { viewing.value = v; };

const openEdit = (v) => {
  viewing.value = null;
  editing.value = v;
  Object.assign(editForm, { business: v.business, name: v.name, email: v.email, status: v.status });
};

const saveEdit = () => {
  Object.assign(editing.value, editForm);
  editing.value = null;
};

const confirmDelete = () => {
  store.deleteVendor(deleting.value.id);
  deleting.value = null;
};
</script>

<style scoped>
.modal-backdrop-custom {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1055;
  padding: 1rem;
}
.modal-card-custom {
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
}
</style>

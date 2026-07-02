<template>
  <div class="vstack gap-4">
    <!-- Title -->
    <div class="row">
      <div class="col-12">
        <h1 class="h4 mb-0"><i class="bi bi-bookmark-heart fa-fw me-1"></i>Bookings</h1>
      </div>
    </div>

    <!-- Quick stats -->
    <div class="row g-4">
      <div class="col-sm-6 col-xl-3">
        <div class="card card-body border p-4 h-100">
          <div class="d-flex align-items-center">
            <div class="icon-lg bg-primary bg-opacity-10 text-primary rounded-3"><i class="bi bi-journal-check"></i></div>
            <div class="ms-3">
              <h5 class="mb-0">{{ store.bookings.length }}</h5>
              <span class="small">Recent bookings</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xl-3">
        <div class="card card-body border p-4 h-100">
          <div class="d-flex align-items-center">
            <div class="icon-lg bg-success bg-opacity-10 text-success rounded-3"><i class="bi bi-check2-circle"></i></div>
            <div class="ms-3">
              <h5 class="mb-0">{{ countByStatus('Confirmed') }}</h5>
              <span class="small">Confirmed</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xl-3">
        <div class="card card-body border p-4 h-100">
          <div class="d-flex align-items-center">
            <div class="icon-lg bg-warning bg-opacity-10 text-warning rounded-3"><i class="bi bi-hourglass-split"></i></div>
            <div class="ms-3">
              <h5 class="mb-0">{{ countByStatus('Pending') }}</h5>
              <span class="small">Pending</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xl-3">
        <div class="card card-body border p-4 h-100">
          <div class="d-flex align-items-center">
            <div class="icon-lg bg-danger bg-opacity-10 text-danger rounded-3"><i class="bi bi-x-octagon"></i></div>
            <div class="ms-3">
              <h5 class="mb-0">{{ countByStatus('Cancelled') }}</h5>
              <span class="small">Cancelled</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Booking table START -->
    <div class="row">
      <div class="col-12">
        <div class="card shadow">
          <!-- Category tabs -->
          <div class="card-header border-bottom pb-0">
            <div class="d-sm-flex justify-content-between align-items-center mb-3">
              <h5 class="card-header-title mb-2 mb-sm-0">All Bookings</h5>
              <div class="d-flex gap-2">
                <form class="rounded position-relative" @submit.prevent>
                  <input class="form-control form-control-sm pe-5" type="search" v-model="search" placeholder="Search bookings" aria-label="Search">
                  <button class="btn border-0 px-3 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit"><i class="fas fa-search fs-6"></i></button>
                </form>
                <select class="form-select form-select-sm w-auto" v-model="statusFilter">
                  <option value="">All statuses</option>
                  <option>Confirmed</option>
                  <option>Pending</option>
                  <option>Cancelled</option>
                </select>
              </div>
            </div>

            <ul class="nav nav-tabs nav-bottom-line border-0 flex-nowrap overflow-auto text-nowrap">
              <li class="nav-item">
                <a class="nav-link mb-0" :class="{ active: activeCategory === '' }" href="#" @click.prevent="setCategory('')">
                  <i class="bi bi-grid fa-fw me-1"></i>All
                  <span class="badge bg-dark bg-opacity-10 text-dark ms-1">{{ store.bookings.length }}</span>
                </a>
              </li>
              <li v-for="c in categoryList" :key="c" class="nav-item">
                <a class="nav-link mb-0" :class="{ active: activeCategory === c }" href="#" @click.prevent="setCategory(c)">
                  <i :class="meta[c].icon + ' fa-fw me-1'"></i>{{ c }}s
                  <span class="badge ms-1" :class="meta[c].badge">{{ countByCategory(c) }}</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="card-body">
            <!-- Category summary strip -->
            <div class="bg-light rounded p-3 mb-3 d-flex flex-wrap gap-4">
              <div>
                <span class="small text-muted d-block">{{ activeCategory ? activeCategory + ' bookings' : 'Bookings shown' }}</span>
                <h6 class="mb-0">{{ filteredBookings.length }}</h6>
              </div>
              <div>
                <span class="small text-muted d-block">Total value</span>
                <h6 class="mb-0 text-success">₦{{ filteredTotal.toLocaleString() }}</h6>
              </div>
              <div>
                <span class="small text-muted d-block">Pending</span>
                <h6 class="mb-0 text-warning">{{ filteredBookings.filter(b => b.status === 'Pending').length }}</h6>
              </div>
              <div>
                <span class="small text-muted d-block">Cancelled</span>
                <h6 class="mb-0 text-danger">{{ filteredBookings.filter(b => b.status === 'Cancelled').length }}</h6>
              </div>
            </div>

            <!-- Table -->
            <div class="table-responsive border-0">
              <table class="table align-middle p-4 mb-0 table-hover table-shrink">
                <thead class="table-light">
                  <tr>
                    <th class="border-0 rounded-start">Reference</th>
                    <th class="border-0">Listing</th>
                    <th v-if="!activeCategory" class="border-0">Category</th>
                    <th class="border-0">Customer</th>
                    <th class="border-0">Vendor</th>
                    <th class="border-0">Date</th>
                    <th class="border-0">Amount</th>
                    <th class="border-0">Status</th>
                    <th class="border-0 rounded-end">Action</th>
                  </tr>
                </thead>
                <tbody class="border-top-0">
                  <tr v-for="b in paginatedBookings" :key="b.id">
                    <td><h6 class="mb-0"><a href="#" @click.prevent="openView(b)">{{ b.id }}</a></h6></td>
                    <td>{{ b.listing }}</td>
                    <td v-if="!activeCategory"><span class="badge" :class="meta[b.category].badge">{{ b.category }}</span></td>
                    <td>{{ b.customer }}</td>
                    <td><span class="small">{{ b.vendor }}</span></td>
                    <td><span class="small">{{ b.date }}</span></td>
                    <td>₦{{ b.amount.toLocaleString() }}</td>
                    <td><div :class="'badge text-bg-' + b.statusClass">{{ b.status }}</div></td>
                    <td>
                      <div class="hstack gap-1">
                        <button class="btn btn-sm btn-round btn-light mb-0" title="View" @click="openView(b)"><i class="bi bi-eye"></i></button>
                        <button class="btn btn-sm btn-round btn-primary-soft mb-0" title="Edit" @click="openEdit(b)"><i class="bi bi-pencil-square"></i></button>
                        <button class="btn btn-sm btn-round btn-danger-soft mb-0" title="Delete" @click="askDelete(b)"><i class="bi bi-trash3"></i></button>
                      </div>
                    </td>
                  </tr>
                  <tr v-if="!filteredBookings.length">
                    <td :colspan="activeCategory ? 8 : 9" class="text-center text-muted py-4">No bookings match your filters.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="card-footer pt-0">
            <DashboardPagination :totalItems="filteredBookings.length" :itemsPerPage="itemsPerPage" v-model:currentPage="currentPage" />
          </div>
        </div>
      </div>
    </div>
    <!-- Booking table END -->

    <!-- View / Edit modal START -->
    <div v-if="selected" class="modal-backdrop-custom" @click.self="closeModal">
      <div class="card border-0 shadow modal-card-custom">
        <div class="card-header border-bottom d-flex justify-content-between align-items-center">
          <h5 class="mb-0">{{ mode === 'edit' ? 'Edit booking' : 'Booking details' }}</h5>
          <button class="btn btn-sm btn-round btn-light mb-0" @click="closeModal"><i class="bi bi-x-lg"></i></button>
        </div>
        <div class="card-body">
          <div class="d-flex align-items-center mb-3">
            <span class="badge me-2" :class="meta[selected.category].badge"><i :class="meta[selected.category].icon + ' me-1'"></i>{{ selected.category }}</span>
            <div class="badge" :class="'text-bg-' + selected.statusClass">{{ selected.status }}</div>
          </div>
          <h5 class="mb-1">{{ selected.listing }}</h5>
          <p class="text-muted mb-3">Reference {{ selected.id }}</p>

          <ul class="list-group list-group-borderless mb-0">
            <li class="list-group-item px-0 d-flex justify-content-between"><span class="text-muted"><i class="bi bi-person me-2"></i>Customer</span><span>{{ selected.customer }}</span></li>
            <li class="list-group-item px-0 d-flex justify-content-between"><span class="text-muted"><i class="bi bi-shop me-2"></i>Vendor</span><span>{{ selected.vendor }}</span></li>
            <li class="list-group-item px-0 d-flex justify-content-between"><span class="text-muted"><i class="bi bi-calendar2 me-2"></i>Date</span><span>{{ selected.date }}</span></li>
            <li class="list-group-item px-0 d-flex justify-content-between"><span class="text-muted"><i class="bi bi-credit-card me-2"></i>Payment</span><span>{{ selected.payment }}</span></li>
            <li class="list-group-item px-0 d-flex justify-content-between"><span class="text-muted"><i class="bi bi-cash me-2"></i>Amount</span><h6 class="mb-0">₦{{ selected.amount.toLocaleString() }}</h6></li>
          </ul>

          <div v-if="mode === 'edit'" class="mt-3">
            <label class="form-label">Change status</label>
            <select class="form-select" v-model="editStatus">
              <option>Confirmed</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>
          </div>
        </div>
        <div class="card-footer border-top d-flex justify-content-end gap-2">
          <template v-if="mode === 'edit'">
            <button class="btn btn-light mb-0" @click="closeModal">Cancel</button>
            <button class="btn btn-primary mb-0" @click="saveEdit"><i class="bi bi-check-lg fa-fw me-1"></i>Save changes</button>
          </template>
          <template v-else>
            <button class="btn btn-danger-soft mb-0" @click="askDelete(selected)"><i class="bi bi-trash3 fa-fw me-1"></i>Delete</button>
            <button class="btn btn-primary mb-0" @click="mode = 'edit'"><i class="bi bi-pencil-square fa-fw me-1"></i>Edit</button>
          </template>
        </div>
      </div>
    </div>
    <!-- View / Edit modal END -->

    <!-- Delete confirm modal START -->
    <div v-if="deleting" class="modal-backdrop-custom" @click.self="deleting = null">
      <div class="card border-0 shadow modal-card-custom">
        <div class="card-body text-center p-4">
          <div class="icon-xl bg-danger bg-opacity-10 text-danger rounded-circle mx-auto mb-3"><i class="bi bi-trash3"></i></div>
          <h5 class="mb-2">Delete booking {{ deleting.id }}?</h5>
          <p class="text-muted small mb-4">This permanently removes the booking for <strong>{{ deleting.listing }}</strong> by {{ deleting.customer }}. This action cannot be undone.</p>
          <div class="d-flex justify-content-center gap-2">
            <button class="btn btn-light mb-0" @click="deleting = null">Cancel</button>
            <button class="btn btn-danger mb-0" @click="confirmDelete"><i class="bi bi-trash3 fa-fw me-1"></i>Delete booking</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Delete confirm modal END -->
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import DashboardPagination from '@/components/DashboardPagination.vue';
import { useAdminStore, CATEGORY_META } from '@/stores/admin';

const store = useAdminStore();
const meta = CATEGORY_META;
const categoryList = Object.keys(CATEGORY_META);

const search = ref('');
const activeCategory = ref('');
const statusFilter = ref('');
const currentPage = ref(1);
const itemsPerPage = 8;

const selected = ref(null);
const mode = ref('view');
const editStatus = ref('');
const deleting = ref(null);

const countByStatus = (status) => store.bookings.filter((b) => b.status === status).length;
const countByCategory = (cat) => store.bookings.filter((b) => b.category === cat).length;

const setCategory = (c) => { activeCategory.value = c; };

const filteredBookings = computed(() =>
  store.bookings.filter((b) => {
    const q = search.value.trim().toLowerCase();
    const matchSearch = !q || [b.id, b.customer, b.vendor, b.listing].some((f) => f.toLowerCase().includes(q));
    const matchCat = !activeCategory.value || b.category === activeCategory.value;
    const matchStatus = !statusFilter.value || b.status === statusFilter.value;
    return matchSearch && matchCat && matchStatus;
  })
);

const filteredTotal = computed(() =>
  filteredBookings.value.filter((b) => b.status !== 'Cancelled').reduce((a, b) => a + b.amount, 0)
);

watch([search, activeCategory, statusFilter], () => { currentPage.value = 1; });

const paginatedBookings = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredBookings.value.slice(start, start + itemsPerPage);
});

const openView = (b) => { selected.value = b; mode.value = 'view'; };
const openEdit = (b) => { selected.value = b; mode.value = 'edit'; editStatus.value = b.status; };
const closeModal = () => { selected.value = null; mode.value = 'view'; };

const saveEdit = () => {
  if (editStatus.value === 'Confirmed') store.confirmBooking(selected.value.id);
  else if (editStatus.value === 'Cancelled') store.cancelBooking(selected.value.id);
  else {
    selected.value.status = 'Pending';
    selected.value.statusClass = 'warning';
  }
  closeModal();
};

const askDelete = (b) => { deleting.value = b; selected.value = null; };
const confirmDelete = () => {
  store.deleteBooking(deleting.value.id);
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

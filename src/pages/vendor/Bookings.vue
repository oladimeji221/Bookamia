<template>
  <main>
    <VendorMenu />

    <section class="pt-0">
      <div class="container vstack gap-4">
        <!-- Title START -->
        <div class="row">
          <div class="col-12">
            <h1 class="fs-4 mb-0"><i class="bi bi-bookmark-heart fa-fw me-1"></i>Bookings</h1>
          </div>
        </div>
        <!-- Title END -->

        <!-- Booking table START -->
        <div class="row">
          <div class="col-12">
            <div class="card border">
              <div class="card-header border-bottom">
                <h5 class="card-header-title mb-0">Bookings<span class="badge bg-primary bg-opacity-10 text-primary ms-2">{{ store.totalBookings }} Bookings</span></h5>
              </div>

              <div class="card-body">
                <!-- Search and select -->
                <div class="row g-3 align-items-center justify-content-between mb-3">
                  <div class="col-md-8">
                    <form class="rounded position-relative" @submit.prevent>
                      <input class="form-control pe-5" type="search" v-model="search" placeholder="Search by customer or listing" aria-label="Search">
                      <button class="btn border-0 px-3 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit"><i class="fas fa-search fs-6"></i></button>
                    </form>
                  </div>
                  <div class="col-md-3">
                    <select class="form-select" v-model="filter">
                      <option value="">All categories</option>
                      <option v-for="c in categoryList" :key="c">{{ c }}</option>
                    </select>
                  </div>
                </div>

                <!-- Bookings list -->
                <div class="table-responsive border-0">
                  <table class="table align-middle p-4 mb-0 table-hover table-shrink">
                    <thead class="table-light">
                      <tr>
                        <th scope="col" class="border-0 rounded-start">#</th>
                        <th scope="col" class="border-0">Listing</th>
                        <th scope="col" class="border-0">Category</th>
                        <th scope="col" class="border-0">Customer</th>
                        <th scope="col" class="border-0">Date</th>
                        <th scope="col" class="border-0">Status</th>
                        <th scope="col" class="border-0">Payment</th>
                        <th scope="col" class="border-0 rounded-end">Action</th>
                      </tr>
                    </thead>
                    <tbody class="border-top-0">
                      <tr v-for="(booking, index) in filteredBookings" :key="booking.id">
                        <td><h6 class="mb-0">{{ index + 1 }}</h6></td>
                        <td><h6 class="mb-0"><a href="#" @click.prevent="openBooking(booking)">{{ booking.name }}</a></h6><small class="text-muted">{{ booking.detail }}</small></td>
                        <td><span class="badge" :class="meta[booking.category].badge">{{ booking.category }}</span></td>
                        <td>{{ booking.customer }}</td>
                        <td><h6 class="mb-0 fw-light">{{ booking.date }}</h6></td>
                        <td><div :class="'badge text-bg-' + booking.statusClass">{{ booking.status }}</div></td>
                        <td><div :class="'badge bg-' + booking.paymentClass + ' bg-opacity-10 text-' + booking.paymentClass">{{ booking.payment }}</div></td>
                        <td><button class="btn btn-sm btn-light mb-0" @click="openBooking(booking)">View</button></td>
                      </tr>
                      <tr v-if="!filteredBookings.length">
                        <td colspan="8" class="text-center text-muted py-4">No bookings match your filters.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="card-footer pt-0">
                <DashboardPagination />
              </div>
            </div>
          </div>
        </div>
        <!-- Booking table END -->
      </div>
    </section>

    <!-- Booking detail modal START -->
    <div v-if="selected" class="modal-backdrop-custom" @click.self="selected = null">
      <div class="card border-0 shadow modal-card-custom">
        <div class="card-header border-bottom d-flex justify-content-between align-items-center">
          <h5 class="mb-0">Booking details</h5>
          <button class="btn btn-sm btn-round btn-light mb-0" @click="selected = null"><i class="bi bi-x-lg"></i></button>
        </div>
        <div class="card-body">
          <div class="d-flex align-items-center mb-3">
            <span class="badge me-2" :class="meta[selected.category].badge"><i :class="meta[selected.category].icon + ' me-1'"></i>{{ selected.category }}</span>
            <div class="badge" :class="'text-bg-' + selected.statusClass">{{ selected.status }}</div>
          </div>
          <h5 class="mb-1">{{ selected.name }}</h5>
          <p class="text-muted mb-3">{{ selected.detail }}</p>

          <ul class="list-group list-group-borderless mb-0">
            <li class="list-group-item px-0 d-flex justify-content-between"><span class="text-muted"><i class="bi bi-person me-2"></i>Customer</span><span>{{ selected.customer }}</span></li>
            <li class="list-group-item px-0 d-flex justify-content-between"><span class="text-muted"><i class="bi bi-envelope me-2"></i>Email</span><span>{{ selected.email }}</span></li>
            <li class="list-group-item px-0 d-flex justify-content-between"><span class="text-muted"><i class="bi bi-telephone me-2"></i>Phone</span><span>{{ selected.phone }}</span></li>
            <li class="list-group-item px-0 d-flex justify-content-between"><span class="text-muted"><i class="bi bi-calendar2 me-2"></i>Date</span><span>{{ selected.date }}</span></li>
            <li class="list-group-item px-0 d-flex justify-content-between"><span class="text-muted"><i class="bi bi-credit-card me-2"></i>Payment</span><span>{{ selected.payment }}</span></li>
            <li class="list-group-item px-0 d-flex justify-content-between"><span class="text-muted"><i class="bi bi-cash me-2"></i>Amount</span><h6 class="mb-0">₦{{ selected.amount.toLocaleString() }}</h6></li>
          </ul>
        </div>
        <div class="card-footer border-top d-flex justify-content-end gap-2">
          <template v-if="selected.status === 'Pending'">
            <button class="btn btn-danger-soft mb-0" @click="cancel(selected)"><i class="bi bi-x-circle fa-fw me-1"></i>Decline</button>
            <button class="btn btn-primary mb-0" @click="confirm(selected)"><i class="bi bi-check-circle fa-fw me-1"></i>Confirm booking</button>
          </template>
          <template v-else-if="selected.status === 'Booked'">
            <button class="btn btn-danger-soft mb-0" @click="cancel(selected)"><i class="bi bi-x-circle fa-fw me-1"></i>Cancel booking</button>
          </template>
          <button v-else class="btn btn-light mb-0" @click="selected = null">Close</button>
        </div>
      </div>
    </div>
    <!-- Booking detail modal END -->
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import VendorMenu from '@/components/VendorMenu.vue';
import DashboardPagination from '@/components/DashboardPagination.vue';
import { useVendorStore, CATEGORY_META } from '@/stores/vendor';

const store = useVendorStore();
const meta = CATEGORY_META;
const filter = ref('');
const search = ref('');
const selected = ref(null);
const categoryList = Object.keys(CATEGORY_META);

const filteredBookings = computed(() =>
  store.bookings.filter((b) => {
    const matchCat = !filter.value || b.category === filter.value;
    const q = search.value.trim().toLowerCase();
    const matchSearch = !q || b.customer.toLowerCase().includes(q) || b.name.toLowerCase().includes(q);
    return matchCat && matchSearch;
  })
);

const openBooking = (b) => { selected.value = b; };
const confirm = (b) => { store.confirmBooking(b.id); selected.value = null; };
const cancel = (b) => { store.cancelBooking(b.id); selected.value = null; };
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

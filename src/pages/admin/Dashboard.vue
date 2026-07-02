<template>
  <div class="vstack gap-4">
    <!-- Title -->
    <div class="row">
      <div class="col-12 d-sm-flex justify-content-between align-items-center">
        <h1 class="h4 mb-2 mb-sm-0">Dashboard <span class="fs-6 fw-light text-muted">— platform overview</span></h1>
        <router-link to="/admin/bookings" class="btn btn-sm btn-primary-soft mb-0"><i class="bi bi-bookmark-heart fa-fw me-1"></i>Manage Bookings</router-link>
      </div>
    </div>

    <!-- Counter boxes START -->
    <div class="row g-4">
      <div class="col-md-6 col-xxl-3">
        <div class="card card-body bg-warning bg-opacity-10 border border-warning border-opacity-25 p-4 h-100">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h4 class="mb-0">{{ store.totalVendors }}</h4>
              <span class="h6 fw-light mb-0">Total Vendors</span>
            </div>
            <div class="icon-lg rounded-circle bg-warning text-white mb-0"><i class="bi bi-shop fa-fw"></i></div>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-xxl-3">
        <div class="card card-body bg-success bg-opacity-10 border border-success border-opacity-25 p-4 h-100">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h4 class="mb-0">₦{{ (store.grossRevenue / 1000000).toFixed(1) }}M</h4>
              <span class="h6 fw-light mb-0">Gross Revenue</span>
            </div>
            <div class="icon-lg rounded-circle bg-success text-white mb-0"><i class="fa-solid fa-hand-holding-dollar fa-fw"></i></div>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-xxl-3">
        <div class="card card-body bg-primary bg-opacity-10 border border-primary border-opacity-25 p-4 h-100">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h4 class="mb-0">{{ store.totalUsers }}</h4>
              <span class="h6 fw-light mb-0">Registered Users</span>
            </div>
            <div class="icon-lg rounded-circle bg-primary text-white mb-0"><i class="bi bi-people fa-fw"></i></div>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-xxl-3">
        <div class="card card-body bg-info bg-opacity-10 border border-info border-opacity-25 p-4 h-100">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h4 class="mb-0">{{ store.totalBookings.toLocaleString() }}</h4>
              <span class="h6 fw-light mb-0">Total Bookings</span>
            </div>
            <div class="icon-lg rounded-circle bg-info text-white mb-0"><i class="bi bi-bookmark-check fa-fw"></i></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Counter boxes END -->

    <!-- Charts START -->
    <div class="row g-4">
      <!-- Revenue chart -->
      <div class="col-xxl-8">
        <div class="card shadow h-100">
          <div class="card-header border-bottom d-flex justify-content-between align-items-center">
            <h5 class="card-header-title mb-0">Revenue (last 12 months)</h5>
            <span class="badge bg-success bg-opacity-10 text-success">₦{{ (store.revenueThisMonth / 1000000).toFixed(1) }}M this month</span>
          </div>
          <div class="card-body">
            <div class="revenue-chart d-flex align-items-end gap-2">
              <div v-for="m in store.monthlyRevenue" :key="m.month" class="flex-grow-1 text-center">
                <div class="bar-wrap d-flex align-items-end justify-content-center">
                  <div
                    class="bar bg-primary rounded-top"
                    :class="{ 'opacity-50': m.value !== maxRevenue }"
                    :style="{ height: (m.value / maxRevenue) * 100 + '%' }"
                    :title="m.month + ': ₦' + m.value.toLocaleString()"
                  ></div>
                </div>
                <small class="text-muted">{{ m.month }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bookings by category -->
      <div class="col-xxl-4">
        <div class="card shadow h-100">
          <div class="card-header border-bottom">
            <h5 class="card-header-title mb-0">Bookings by category</h5>
          </div>
          <div class="card-body">
            <div v-for="c in store.categoryBookings" :key="c.category" class="mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span class="small"><i :class="meta[c.category].icon + ' fa-fw me-2'"></i>{{ c.category }}</span>
                <span class="small fw-semibold">{{ c.count }}</span>
              </div>
              <div class="progress" style="height: 8px;">
                <div class="progress-bar" :class="progressClass(c.category)" :style="{ width: (c.count / store.totalBookings) * 100 + '%' }"></div>
              </div>
            </div>
            <p class="small text-muted mb-0 mt-3">{{ store.totalBookings.toLocaleString() }} bookings across all categories</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Charts END -->

    <!-- Pending approvals + recent bookings START -->
    <div class="row g-4">
      <!-- Pending vendor approvals -->
      <div class="col-xxl-4">
        <div class="card shadow h-100">
          <div class="card-header border-bottom d-flex justify-content-between align-items-center">
            <h5 class="card-header-title mb-0">Pending approvals</h5>
            <router-link to="/admin/vendors" class="btn btn-sm btn-primary-soft mb-0">View all</router-link>
          </div>
          <div class="card-body">
            <div v-if="store.pendingVendors.length" class="vstack gap-3">
              <div v-for="v in store.pendingVendors" :key="v.id" class="d-flex align-items-center">
                <div class="avatar avatar-sm flex-shrink-0">
                  <img class="avatar-img rounded-circle" :src="v.avatar" alt="">
                </div>
                <div class="ms-2 overflow-hidden">
                  <h6 class="mb-0 text-truncate">{{ v.business }}</h6>
                  <span class="small text-muted">{{ v.categories.join(', ') }} · applied {{ v.joined }}</span>
                </div>
                <div class="hstack gap-1 ms-auto flex-shrink-0">
                  <button class="btn btn-sm btn-success-soft btn-round mb-0" title="Approve" @click="store.approveVendor(v.id)"><i class="bi bi-check-lg"></i></button>
                  <button class="btn btn-sm btn-danger-soft btn-round mb-0" title="Reject" @click="store.rejectVendor(v.id)"><i class="bi bi-x-lg"></i></button>
                </div>
              </div>
            </div>
            <div v-else class="text-center text-muted py-4">
              <i class="bi bi-check2-circle fs-1 opacity-25"></i>
              <p class="small mb-0 mt-2">No pending vendor applications.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent bookings -->
      <div class="col-xxl-8">
        <div class="card shadow h-100">
          <div class="card-header border-bottom d-flex justify-content-between align-items-center">
            <h5 class="card-header-title mb-0">Recent bookings</h5>
            <router-link to="/admin/bookings" class="btn btn-sm btn-primary-soft mb-0"><i class="bi bi-eye fa-fw me-1"></i>View All</router-link>
          </div>
          <div class="card-body">
            <div class="table-responsive border-0">
              <table class="table align-middle mb-0 table-hover table-shrink">
                <thead class="table-light">
                  <tr>
                    <th class="border-0 rounded-start">Reference</th>
                    <th class="border-0">Listing</th>
                    <th class="border-0">Category</th>
                    <th class="border-0">Customer</th>
                    <th class="border-0">Amount</th>
                    <th class="border-0 rounded-end">Status</th>
                  </tr>
                </thead>
                <tbody class="border-top-0">
                  <tr v-for="b in recentBookings" :key="b.id">
                    <td><h6 class="mb-0">{{ b.id }}</h6></td>
                    <td>{{ b.listing }}</td>
                    <td><span class="badge" :class="meta[b.category].badge">{{ b.category }}</span></td>
                    <td>{{ b.customer }}</td>
                    <td>₦{{ b.amount.toLocaleString() }}</td>
                    <td><div :class="'badge text-bg-' + b.statusClass">{{ b.status }}</div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Pending approvals + recent bookings END -->

    <!-- Latest reviews START -->
    <div class="row">
      <div class="col-12">
        <div class="card shadow">
          <div class="card-header border-bottom d-flex justify-content-between align-items-center">
            <h5 class="card-header-title mb-0">Latest reviews</h5>
            <router-link to="/admin/reviews" class="btn btn-sm btn-primary-soft mb-0"><i class="bi bi-eye fa-fw me-1"></i>View All</router-link>
          </div>
          <div class="card-body">
            <div class="row g-4">
              <div v-for="r in latestReviews" :key="r.id" class="col-md-4">
                <div class="bg-light rounded p-3 h-100">
                  <div class="d-flex align-items-center mb-2">
                    <div class="avatar avatar-sm flex-shrink-0">
                      <img class="avatar-img rounded-circle" :src="r.avatar" alt="">
                    </div>
                    <div class="ms-2">
                      <h6 class="mb-0">{{ r.customer }}</h6>
                      <ul class="list-inline mb-0 small">
                        <li v-for="star in 5" :key="star" class="list-inline-item me-0">
                          <i :class="star <= r.rating ? 'fas fa-star text-warning' : 'far fa-star text-warning'"></i>
                        </li>
                      </ul>
                    </div>
                    <span class="badge ms-auto" :class="r.status === 'Flagged' ? 'bg-danger bg-opacity-10 text-danger' : 'bg-success bg-opacity-10 text-success'">{{ r.status }}</span>
                  </div>
                  <h6 class="small fw-normal mb-1 text-muted">on {{ r.listing }}</h6>
                  <p class="small mb-0 review-clamp">{{ r.comment }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Latest reviews END -->
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useAdminStore, CATEGORY_META } from '@/stores/admin';

const store = useAdminStore();
const meta = CATEGORY_META;

const maxRevenue = computed(() => Math.max(...store.monthlyRevenue.map((m) => m.value)));
const recentBookings = computed(() => store.bookings.slice(0, 6));
const latestReviews = computed(() => store.reviews.slice(0, 3));

const progressClass = (cat) => ({
  Hotel: 'bg-success',
  Cab: 'bg-info',
  Eatery: 'bg-warning',
  Event: 'bg-primary',
  Movie: 'bg-danger',
}[cat] || 'bg-primary');
</script>

<style scoped>
.revenue-chart {
  height: 230px;
}
.bar-wrap {
  height: 200px;
}
.bar {
  width: 60%;
  min-height: 4px;
  transition: opacity 0.2s;
}
.bar:hover {
  opacity: 1 !important;
}
.review-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

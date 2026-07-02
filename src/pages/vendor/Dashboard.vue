<template>
  <main>
    <VendorMenu />

    <section class="pt-0">
      <div class="container vstack gap-4">

        <!-- Title START -->
        <div class="row">
          <div class="col-12 d-sm-flex justify-content-between align-items-center">
            <h1 class="fs-4 mb-2 mb-sm-0"><i class="bi bi-house-door fa-fw me-1"></i>Dashboard</h1>
            <span class="badge bg-info bg-opacity-10 text-info"><i class="bi bi-eye fa-fw me-1"></i>{{ store.visitors.toLocaleString() }} profile visits this month</span>
          </div>
        </div>
        <!-- Title END -->

        <!-- Quick actions START -->
        <div class="row">
          <div class="col-12">
            <div class="d-flex flex-wrap gap-2">
              <router-link to="/vendor/create-listing" class="btn btn-sm btn-primary-soft mb-0"><i class="bi bi-plus-lg fa-fw me-1"></i>Add listing</router-link>
              <router-link to="/vendor/bookings" class="btn btn-sm btn-primary-soft mb-0"><i class="bi bi-bookmark-heart fa-fw me-1"></i>Confirm bookings</router-link>
              <router-link to="/vendor/reviews" class="btn btn-sm btn-primary-soft mb-0"><i class="bi bi-reply fa-fw me-1"></i>Reply reviews</router-link>
              <router-link to="/vendor/earnings" class="btn btn-sm btn-primary-soft mb-0"><i class="bi bi-arrow-up-right-circle fa-fw me-1"></i>Withdraw earnings</router-link>
            </div>
          </div>
        </div>
        <!-- Quick actions END -->

        <!-- Counter START -->
        <div class="row g-4">
          <div v-for="stat in counters" :key="stat.label" class="col-sm-6 col-xl-3">
            <div class="card card-body border p-3 h-100">
              <div class="d-flex align-items-center">
                <div class="icon-lg rounded-3 text-white flex-shrink-0" :class="stat.bg"><i :class="stat.icon"></i></div>
                <div class="ms-3 overflow-hidden">
                  <h5 class="mb-0 text-truncate">{{ stat.value }}</h5>
                  <span class="small text-muted">{{ stat.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Counter END -->

        <!-- Needs attention START -->
        <div class="row g-4">
          <div class="col-12">
            <div class="card border">
              <div class="card-header border-bottom">
                <h5 class="card-header-title mb-0"><i class="bi bi-exclamation-circle text-warning me-2"></i>Needs your attention</h5>
              </div>
              <div class="card-body">
                <div class="row g-3">
                  <div class="col-md-4">
                    <router-link to="/vendor/bookings" class="card border h-100 text-reset text-decoration-none p-3 d-flex flex-row align-items-center">
                      <div class="icon-lg bg-warning bg-opacity-10 text-warning rounded-3 me-3"><i class="bi bi-hourglass-split"></i></div>
                      <div>
                        <h5 class="mb-0">{{ store.pendingBookings.length }}</h5>
                        <span class="small">Bookings to confirm</span>
                      </div>
                    </router-link>
                  </div>
                  <div class="col-md-4">
                    <router-link to="/vendor/reviews" class="card border h-100 text-reset text-decoration-none p-3 d-flex flex-row align-items-center">
                      <div class="icon-lg bg-danger bg-opacity-10 text-danger rounded-3 me-3"><i class="bi bi-chat-left-dots"></i></div>
                      <div>
                        <h5 class="mb-0">{{ store.unaddressedReviews }}</h5>
                        <span class="small">Unaddressed reviews</span>
                      </div>
                    </router-link>
                  </div>
                  <div class="col-md-4">
                    <router-link to="/vendor/earnings" class="card border h-100 text-reset text-decoration-none p-3 d-flex flex-row align-items-center">
                      <div class="icon-lg bg-success bg-opacity-10 text-success rounded-3 me-3"><i class="bi bi-cash-coin"></i></div>
                      <div>
                        <h5 class="mb-0">₦{{ store.wallet.pendingBalance.toLocaleString() }}</h5>
                        <span class="small">Pending payout</span>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Needs attention END -->

        <!-- Graph START -->
        <div class="row g-4">
          <div class="col-lg-7 col-xl-8">
            <div class="card border h-100">
              <div class="card-header border-bottom d-flex justify-content-between align-items-center">
                <h5 class="card-header-title mb-0">Sales (last 12 months)</h5>
                <span class="badge bg-success bg-opacity-10 text-success">₦{{ (store.wallet.salesThisMonth / 1000000).toFixed(1) }}M this month</span>
              </div>
              <div class="card-body">
                <div class="sales-chart d-flex align-items-end gap-2">
                  <div v-for="m in store.monthlySales" :key="m.month" class="flex-grow-1 text-center">
                    <div class="bar-wrap d-flex align-items-end justify-content-center">
                      <div
                        class="bar bg-primary rounded-top"
                        :class="{ 'opacity-50': m.value !== maxSales }"
                        :style="{ height: (m.value / maxSales) * 100 + '%' }"
                        :title="m.month + ': ₦' + m.value.toLocaleString()"
                      ></div>
                    </div>
                    <small class="text-muted">{{ m.month }}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-5 col-xl-4">
            <div class="card border h-100">
              <div class="card-header border-bottom">
                <h5 class="card-header-title">Listings by category</h5>
              </div>
              <div class="card-body p-3">
                <ul class="list-group list-group-borderless">
                  <li v-for="(count, cat) in listingsByCategory" :key="cat" class="list-group-item p-0">
                    <router-link to="/vendor/listings" class="d-flex justify-content-between align-items-center text-reset text-decoration-none rounded px-2 py-2 bg-light-hover">
                      <span><i :class="meta[cat].icon + ' me-2'"></i>{{ cat }}</span>
                      <span class="badge" :class="meta[cat].badge">{{ count }}</span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Graph END -->

        <!-- Booking table START -->
        <div class="row g-4">
          <div class="col-xl-8">
            <div class="card border rounded-3 h-100">
              <div class="card-header border-bottom">
                <div class="d-sm-flex justify-content-between align-items-center">
                  <h5 class="mb-2 mb-sm-0">Upcoming Bookings</h5>
                  <RouterLink to="/vendor/bookings" class="btn btn-sm btn-primary-soft mb-0"><i class="bi bi-eye fa-fw me-1"></i>View All</RouterLink>
                </div>
              </div>

              <div class="card-body">
                <div class="table-responsive border-0">
                  <table class="table align-middle p-4 mb-0 table-hover table-shrink">
                    <thead class="table-light">
                      <tr>
                        <th class="border-0 rounded-start">#</th>
                        <th class="border-0">Listing</th>
                        <th class="border-0">Category</th>
                        <th class="border-0">Customer</th>
                        <th class="border-0">Date</th>
                        <th class="border-0">Status</th>
                        <th class="border-0 rounded-end">Payment</th>
                      </tr>
                    </thead>
                    <tbody class="border-top-0">
                      <tr v-for="(booking, i) in store.upcomingBookings" :key="booking.id">
                        <td><h6 class="mb-0">{{ String(i + 1).padStart(2, '0') }}</h6></td>
                        <td><h6 class="mb-0"><RouterLink to="/vendor/bookings">{{ booking.name }}</RouterLink></h6></td>
                        <td><span class="badge" :class="meta[booking.category].badge">{{ booking.category }}</span></td>
                        <td>{{ booking.customer }}</td>
                        <td>{{ booking.date }}</td>
                        <td><div :class="`badge text-bg-${booking.statusClass}`">{{ booking.status }}</div></td>
                        <td><div :class="`badge bg-${booking.paymentClass} bg-opacity-10 text-${booking.paymentClass}`">{{ booking.payment }}</div></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <!-- Recent activity feed -->
          <div class="col-xl-4">
            <div class="card border rounded-3 h-100">
              <div class="card-header border-bottom d-flex justify-content-between align-items-center">
                <h5 class="card-header-title mb-0">Recent activity</h5>
                <a v-if="store.unreadNotifications" href="#" class="small" @click.prevent="store.markAllNotificationsRead()">Mark all read</a>
              </div>
              <div class="card-body">
                <div v-for="n in store.notifications" :key="n.id" class="d-flex mb-3">
                  <div class="icon-md bg-light rounded-circle flex-shrink-0" :class="n.iconClass"><i :class="'bi ' + n.icon"></i></div>
                  <div class="ms-3">
                    <h6 class="mb-0 small fw-semibold">{{ n.title }} <span v-if="!n.read" class="badge bg-primary bg-opacity-10 text-primary ms-1">new</span></h6>
                    <p class="mb-0 small text-muted">{{ n.text }}</p>
                    <span class="small text-muted">{{ n.time }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Booking table END -->

      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import VendorMenu from '@/components/VendorMenu.vue';
import { useVendorStore, CATEGORY_META } from '@/stores/vendor';

const store = useVendorStore();
const meta = CATEGORY_META;

const listingsByCategory = computed(() => {
  const counts = {};
  store.listings.forEach((l) => { counts[l.category] = (counts[l.category] || 0) + 1; });
  return counts;
});

const maxSales = computed(() => Math.max(...store.monthlySales.map((m) => m.value)));

const counters = computed(() => [
  { label: 'Total Listings', value: store.totalListings, icon: 'bi bi-journals', bg: 'bg-success' },
  { label: 'Earning (this month)', value: '₦' + store.wallet.salesThisMonth.toLocaleString(), icon: 'bi bi-graph-up-arrow', bg: 'bg-info' },
  { label: 'Total Bookings', value: store.totalBookings, icon: 'bi bi-bookmark-heart', bg: 'bg-warning' },
  { label: 'Average Rating', value: store.averageRating, icon: 'bi bi-star', bg: 'bg-primary' },
]);
</script>

<style scoped>
.sales-chart {
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
</style>

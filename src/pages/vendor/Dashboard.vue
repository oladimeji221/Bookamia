<template>
  <main>
    <VendorMenu />

    <section class="pt-0">
      <div class="container vstack gap-4">

        <!-- Title START -->
        <div class="row">
          <div class="col-12">
            <h1 class="fs-4 mb-0"><i class="bi bi-house-door fa-fw me-1"></i>Dashboard</h1>
          </div>
        </div>
        <!-- Title END -->

        <!-- Counter START -->
        <div class="row g-4">
          <div class="col-sm-6 col-xl-3">
            <div class="card card-body border">
              <div class="d-flex align-items-center">
                <div class="icon-xl bg-success rounded-3 text-white"><i class="bi bi-journals"></i></div>
                <div class="ms-3">
                  <h4 class="mb-0">{{ store.totalListings }}</h4>
                  <span>Total Listings</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xl-3">
            <div class="card card-body border">
              <div class="d-flex align-items-center">
                <div class="icon-xl bg-info rounded-3 text-white"><i class="bi bi-graph-up-arrow"></i></div>
                <div class="ms-3">
                  <h4 class="mb-0">₦{{ store.wallet.salesThisMonth.toLocaleString() }}</h4>
                  <span>Earning (this month)</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xl-3">
            <div class="card card-body border">
              <div class="d-flex align-items-center">
                <div class="icon-xl bg-warning rounded-3 text-white"><i class="bi bi-bookmark-heart"></i></div>
                <div class="ms-3">
                  <h4 class="mb-0">{{ store.totalBookings }}</h4>
                  <span>Total Bookings</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xl-3">
            <div class="card card-body border">
              <div class="d-flex align-items-center">
                <div class="icon-xl bg-primary rounded-3 text-white"><i class="bi bi-star"></i></div>
                <div class="ms-3">
                  <h4 class="mb-0">{{ store.averageRating }}</h4>
                  <span>Average Rating</span>
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
              <div class="card-header border-bottom">
                <h5 class="card-header-title">Booking stats</h5>
              </div>
              <div class="card-body d-flex align-items-center justify-content-center text-muted">
                <div class="text-center py-5">
                  <i class="bi bi-bar-chart-line display-4 opacity-25"></i>
                  <p class="mt-2 mb-0 small">Chart coming soon</p>
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
                  <li v-for="(count, cat) in listingsByCategory" :key="cat" class="list-group-item d-flex justify-content-between align-items-center">
                    <span><i :class="meta[cat].icon + ' me-2'"></i>{{ cat }}</span>
                    <span class="badge" :class="meta[cat].badge">{{ count }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Graph END -->

        <!-- Booking table START -->
        <div class="row">
          <div class="col-12">
            <div class="card border rounded-3">
              <div class="card-header border-bottom">
                <div class="d-sm-flex justify-content-between align-items-center">
                  <h5 class="mb-2 mb-sm-0">Upcoming Bookings</h5>
                  <RouterLink to="/vendor/bookings" class="btn btn-sm btn-primary mb-0">View All</RouterLink>
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
                        <td><h6 class="mb-0"><a href="#">{{ booking.name }}</a></h6></td>
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
</script>

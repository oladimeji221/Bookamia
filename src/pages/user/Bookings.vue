<template>
  <main>
    <!-- ======================= Content START -->
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
              <UserDashboardHeader title="My Bookings" />

              <div class="card border bg-transparent">
                <div class="card-header bg-transparent border-bottom">
                  <h4 class="card-header-title">Booking History</h4>
                </div>

                <div class="card-body p-0">
                  <!-- Tabs -->
                  <ul class="nav nav-tabs nav-bottom-line nav-responsive nav-justified">
                    <li class="nav-item" v-for="tab in statusTabs" :key="tab.id">
                      <a class="nav-link mb-0" 
                         :class="{ active: activeStatus === tab.id }" 
                         href="#" 
                         @click.prevent="activeStatus = tab.id; currentPage = 1">
                        <i :class="tab.icon"></i> {{ tab.label }}
                      </a>
                    </li>
                  </ul>

                  <!-- Tabs content START -->
                  <div class="tab-content p-2 p-sm-4">
                    <div class="tab-pane fade show active">
                      <h6>{{ activeStatusLabel }} booking ({{ totalFilteredBookings }})</h6>

                      <div v-if="totalFilteredBookings > 0">
                        <div v-for="booking in paginatedBookings" :key="booking.id" class="card border mb-4 shadow-sm h-100">
                          <div class="card-header border-bottom d-md-flex justify-content-md-between align-items-center bg-light bg-opacity-25">
                            <div class="d-flex align-items-center">
                              <div class="icon-lg bg-primary bg-opacity-10 text-primary rounded-circle flex-shrink-0">
                                <i :class="getCategoryIcon(booking.type)"></i>
                              </div>
                              <div class="ms-3">
                                <h6 class="card-title mb-0">{{ booking.title }}</h6>
                                <ul class="nav nav-divider small">
                                  <li class="nav-item">ID: {{ booking.bookingId }}</li>
                                  <li class="nav-item">Type: {{ booking.subType }}</li>
                                </ul>
                              </div>
                            </div>
                            <div class="mt-2 mt-md-0 text-md-end">
                              <span :class="getStatusClass(booking.status)" class="badge mb-2 d-block d-md-inline-block">{{ booking.status }}</span>
                              <div>
                                  <a href="#" class="btn btn-sm btn-primary-soft mb-0">Manage</a>
                              </div>
                            </div>
                          </div>
                          <div class="card-body">
                            <div class="row g-3">
                              <div class="col-sm-6 col-md-4">
                                <small class="text-muted d-block">{{ booking.label1 }}</small>
                                <h6 class="mb-0">{{ booking.value1 }}</h6>
                              </div>
                              <div class="col-sm-6 col-md-4">
                                <small class="text-muted d-block">{{ booking.label2 }}</small>
                                <h6 class="mb-0">{{ booking.value2 }}</h6>
                              </div>
                              <div class="col-md-4">
                                <small class="text-muted d-block">Location / Item</small>
                                <h6 class="mb-0 text-truncate" :title="booking.location">{{ booking.location }}</h6>
                              </div>
                            </div>
                          </div>
                          <div class="card-footer bg-transparent border-top py-2">
                              <div class="d-flex justify-content-between align-items-center">
                                  <span class="small"><i class="bi bi-person me-1"></i>Booked by: <strong>{{ booking.bookedBy }}</strong></span>
                                  <span class="h6 mb-0 text-primary">₦{{ booking.amount.toLocaleString() }}</span>
                              </div>
                          </div>
                        </div>

                        <!-- Pagination -->
                        <DashboardPagination 
                          :totalItems="totalFilteredBookings" 
                          :itemsPerPage="itemsPerPage" 
                          v-model:currentPage="currentPage" 
                        />
                      </div>

                      <!-- Empty State -->
                      <div v-else class="bg-mode shadow p-4 rounded overflow-hidden">
                        <div class="row g-4 align-items-center">
                          <div class="col-md-9">
                            <h6>Looks like you have no {{ activeStatusLabel.toLowerCase() }} bookings</h6>
                            <h4 class="mb-2">When you book, your trip will be shown here.</h4>
                            <router-link to="/" class="btn btn-primary-soft mb-0">Start booking now</router-link>
                          </div>
                          <div class="col-md-3 text-end">
                            <img src="" class="mb-n5" alt="">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Main content END -->
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import UserSidebar from '@/components/UserSidebar.vue'
import UserDashboardHeader from '@/components/UserDashboardHeader.vue'
import DashboardPagination from '@/components/DashboardPagination.vue'

const activeStatus = ref('upcoming')
const currentPage = ref(1)
const itemsPerPage = ref(3) // Showing 3 items per page for demo

const statusTabs = [
  { id: 'upcoming', label: 'Upcoming', icon: 'bi bi-briefcase-fill fa-fw me-1' },
  { id: 'canceled', label: 'Canceled', icon: 'bi bi-x-octagon fa-fw me-1' },
  { id: 'completed', label: 'Completed', icon: 'bi bi-patch-check fa-fw me-1' }
]

const activeStatusLabel = computed(() => {
  return statusTabs.find(t => t.id === activeStatus.value).label
})

const bookings = ref([
  { id: 1, type: 'Hotels', title: 'Eko Hotels & Suites', bookingId: 'BK-H7421', subType: 'Executive Suite', status: 'Upcoming', label1: 'Check-in', value1: 'Tue 05 Aug', label2: 'Check-out', value2: 'Fri 08 Aug', location: 'Victoria Island, Lagos', amount: 150000, bookedBy: 'John Doe' },
  { id: 2, type: 'Cabs', title: 'Lagos Airport Transfer', bookingId: 'BK-C9902', subType: 'Private SUV', status: 'Upcoming', label1: 'Pickup Time', value1: 'Tue 05 Aug 09:00 AM', label2: 'Duration', value2: '1.5 Hours', location: 'JFK to Manhattan', amount: 25000, bookedBy: 'John Doe' },
  { id: 3, type: 'Eatery', title: 'Nok by Alara', bookingId: 'BK-E1103', subType: 'Fine Dining', status: 'Canceled', label1: 'Reservation', value1: 'Wed 12 Aug 07:30 PM', label2: 'Guests', value2: '4 People', location: 'Victoria Island, Lagos', amount: 45000, bookedBy: 'John Doe' },
  { id: 4, type: 'Events', title: 'Davido Timeless Tour', bookingId: 'BK-V5582', subType: 'VIP Access', status: 'Completed', label1: 'Event Date', value1: 'Sat 10 Jul 06:00 PM', label2: 'Seats', value2: 'Block B, Row 5', location: 'Eko Convention Centre', amount: 50000, bookedBy: 'John Doe' },
  { id: 5, type: 'Movies', title: 'Black Panther: Wakanda Forever', bookingId: 'BK-M4419', subType: '4DX Cinema', status: 'Upcoming', label1: 'Showtime', value1: 'Sun 15 Aug 08:00 PM', label2: 'Screen', value2: 'Cinema 3, Seat G12', location: 'Filmhouse IMAX, Lekki', amount: 7500, bookedBy: 'John Doe' },
  { id: 6, type: 'Hotels', title: 'Transcorp Hilton', bookingId: 'BK-H7422', subType: 'Presidential Suite', status: 'Upcoming', label1: 'Check-in', value1: 'Mon 01 Sep', label2: 'Check-out', value2: 'Thu 04 Sep', location: 'Maitama, Abuja', amount: 250000, bookedBy: 'John Doe' }
])

const allFilteredBookings = computed(() => {
  return bookings.value.filter(b => b.status.toLowerCase() === activeStatus.value)
})

const totalFilteredBookings = computed(() => allFilteredBookings.value.length)

const paginatedBookings = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return allFilteredBookings.value.slice(start, end)
})

const getCategoryIcon = (type) => {
  switch (type) {
    case 'Hotels': return 'fa-solid fa-hotel'
    case 'Cabs': return 'fa-solid fa-car'
    case 'Eatery': return 'fa-solid fa-utensils'
    case 'Events': return 'fa-solid fa-calendar-alt'
    case 'Movies': return 'fa-solid fa-film'
    default: return 'fa-solid fa-briefcase'
  }
}

const getStatusClass = (status) => {
  switch (status) {
    case 'Upcoming': return 'bg-success bg-opacity-10 text-success'
    case 'Canceled': return 'bg-danger bg-opacity-10 text-danger'
    case 'Completed': return 'bg-info bg-opacity-10 text-info'
    default: return 'bg-secondary bg-opacity-10 text-secondary'
  }
}
</script>

<style scoped>
.icon-lg {
    width: 3.5rem;
    height: 3.5rem;
    line-height: 3.5rem;
    text-align: center;
    font-size: 1.5rem;
}
</style>

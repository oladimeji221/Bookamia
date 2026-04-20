<template>
  <div>

    <!-- =======================
    Main Banner START -->
    <section class="pt-0">
      <div class="container">
        <div class="rounded-3 p-3 p-sm-5" style="background-image: url('/assets/images/category/event/concert.jpg'); background-position: center center; background-repeat: no-repeat; background-size: cover;">
          <div class="row my-2 my-xl-5">
            <div class="col-md-8 mx-auto">
              <h1 class="text-center text-white">Top Events in Nigeria</h1>
            </div>
          </div>

          <!-- Search form -->
          <form class="bg-mode shadow rounded-3 position-relative p-4 pe-md-5 pb-5 pb-md-4 mb-4">
            <div class="row g-4 align-items-center">
              <!-- Location -->
              <div class="col-lg-4">
                <div class="d-flex">
                  <i class="bi bi-geo-alt fs-3 me-2 mt-2"></i>
                  <div class="flex-grow-1">
                    <label class="form-label">City</label>
                    <select class="form-select" v-model="location">
                      <option value="">Select city</option>
                      <option>Lagos</option>
                      <option>Abuja</option>
                      <option>Port Harcourt</option>
                      <option>Ibadan</option>
                      <option>Enugu</option>
                      <option>Kano</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Date -->
              <div class="col-lg-4">
                <div class="d-flex">
                  <i class="bi bi-calendar fs-3 me-2 mt-2"></i>
                  <div class="flex-grow-1">
                    <label class="form-label">Event Date</label>
                    <input type="text" class="form-control" ref="dateInput" placeholder="Select date" readonly>
                  </div>
                </div>
              </div>

              <!-- Event Type -->
              <div class="col-lg-4">
                <div class="d-flex">
                  <i class="bi bi-ticket-perforated fs-3 me-2 mt-2"></i>
                  <div class="flex-grow-1">
                    <label class="form-label">Event Type</label>
                    <select class="form-select" v-model="eventType">
                      <option value="">All Types</option>
                      <option>Concert</option>
                      <option>Conference</option>
                      <option>Sports</option>
                      <option>Comedy</option>
                      <option>Festival</option>
                      <option>Fashion</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-position-md-middle">
              <button type="button" class="icon-lg btn btn-round btn-primary mb-0"><i class="bi bi-search fa-fw"></i></button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <!-- =======================
    Main Banner END -->

    <!-- =======================
    Recent Searches START -->
    <section class="pt-4 pb-0" v-if="recentSearches.length">
      <div class="container">
        <div class="row g-2 align-items-center">
          <div class="col-lg-2">
            <h5 class="mb-0">Recent Searches</h5>
          </div>
          <div class="col-lg-10">
            <div class="hstack flex-wrap gap-2">
              <div class="alert bg-light fade show small px-3 py-1 mb-0" role="alert" v-for="(item, i) in recentSearches" :key="i">
                <span class="me-1">{{ item }}</span>
                <button type="button" class="btn-close small p-2" @click="recentSearches.splice(i, 1)"></button>
              </div>
              <button type="button" class="btn btn-sm btn-primary-soft mb-0" @click="recentSearches = []">Clear all</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- =======================
    Recent Searches END -->

    <!-- =======================
    Event list START -->
    <section class="pt-0">
      <div class="container">
        <!-- Controls row -->
        <div class="row mb-4">
          <div class="col-12">
            <div class="hstack gap-3 justify-content-between justify-content-md-end mt-3">
              <button class="btn btn-primary-soft mb-0 d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasEventFilters">
                <i class="fa-solid fa-sliders-h me-1"></i> Show filters
              </button>
              <span class="text-muted small">{{ events.length }} events found</span>
            </div>
          </div>
        </div>

        <div class="row">
          <!-- Sidebar START -->
          <aside class="col-xl-4 col-xxl-3">
            <div class="offcanvas-xl offcanvas-end" tabindex="-1" id="offcanvasEventFilters">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title">Advance Filters</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasEventFilters"></button>
              </div>
              <div class="offcanvas-body flex-column p-3 p-xl-0">
                <form class="rounded-3 shadow">

                  <!-- Event Type -->
                  <div class="card card-body rounded-0 rounded-top p-4">
                    <h6 class="mb-2">Event Type</h6>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ev1"><label class="form-check-label" for="ev1">Concert</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ev2"><label class="form-check-label" for="ev2">Conference</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ev3"><label class="form-check-label" for="ev3">Sports</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ev4"><label class="form-check-label" for="ev4">Comedy</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ev5"><label class="form-check-label" for="ev5">Festival</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ev6"><label class="form-check-label" for="ev6">Fashion Show</label></div>
                  </div>

                  <hr class="my-0">

                  <!-- Price Range -->
                  <div class="card card-body rounded-0 p-4">
                    <h6 class="mb-2">Ticket Price</h6>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ep1"><label class="form-check-label" for="ep1">Under ₦5,000</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ep2"><label class="form-check-label" for="ep2">₦5,000 – ₦15,000</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ep3"><label class="form-check-label" for="ep3">₦15,000 – ₦30,000</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ep4"><label class="form-check-label" for="ep4">₦30,000+</label></div>
                  </div>

                  <hr class="my-0">

                  <!-- Date Range -->
                  <div class="card card-body rounded-0 p-4">
                    <h6 class="mb-2">When</h6>
                    <div class="form-check"><input class="form-check-input" type="radio" name="dateRange" id="dr1"><label class="form-check-label" for="dr1">Today</label></div>
                    <div class="form-check"><input class="form-check-input" type="radio" name="dateRange" id="dr2"><label class="form-check-label" for="dr2">This Weekend</label></div>
                    <div class="form-check"><input class="form-check-input" type="radio" name="dateRange" id="dr3"><label class="form-check-label" for="dr3">This Month</label></div>
                    <div class="form-check"><input class="form-check-input" type="radio" name="dateRange" id="dr4"><label class="form-check-label" for="dr4">Next 3 Months</label></div>
                  </div>

                  <hr class="my-0">

                  <!-- City -->
                  <div class="card card-body rounded-0 rounded-bottom p-4">
                    <h6 class="mb-2">City</h6>
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item mb-1"><input type="checkbox" class="btn-check" id="city1"><label class="btn btn-sm btn-light" for="city1">Lagos</label></li>
                      <li class="list-inline-item mb-1"><input type="checkbox" class="btn-check" id="city2"><label class="btn btn-sm btn-light" for="city2">Abuja</label></li>
                      <li class="list-inline-item mb-1"><input type="checkbox" class="btn-check" id="city3"><label class="btn btn-sm btn-light" for="city3">PH</label></li>
                      <li class="list-inline-item mb-1"><input type="checkbox" class="btn-check" id="city4"><label class="btn btn-sm btn-light" for="city4">Ibadan</label></li>
                    </ul>
                  </div>

                </form>
                <div class="d-flex justify-content-between p-2 p-xl-0 mt-xl-4">
                  <button class="btn btn-link p-0 mb-0">Clear all</button>
                  <button class="btn btn-primary mb-0">Filter Result</button>
                </div>
              </div>
            </div>
          </aside>
          <!-- Sidebar END -->

          <!-- Main content START -->
          <div class="col-xl-8 col-xxl-9">

            <!-- Info alert -->
            <div class="alert alert-info alert-dismissible fade show small mb-4" role="alert">
              <i class="bi bi-info-circle me-2"></i>
              Book tickets for concerts, sports, comedy shows, conferences and more across Nigeria — all in one place.
              <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>

            <!-- Events grid -->
            <div class="row g-4">
              <div class="col-sm-6 col-lg-4" v-for="event in paginatedEvents" :key="event.id">
                <div class="card shadow h-100">
                  <!-- Image -->
                  <div class="position-relative">
                    <img :src="event.image" class="card-img-top" :alt="event.name" style="height: 180px; object-fit: cover;">
                    <span class="badge text-bg-primary position-absolute top-0 start-0 m-2">{{ event.type }}</span>
                    <span class="badge text-bg-warning position-absolute top-0 end-0 m-2" v-if="event.featured">Featured</span>
                  </div>
                  <!-- Body -->
                  <div class="card-body d-flex flex-column">
                    <h6 class="card-title fw-bold mb-1">
                      <a href="#" class="stretched-link text-dark text-decoration-none" data-bs-toggle="modal" data-bs-target="#comingSoonModal">{{ event.name }}</a>
                    </h6>
                    <small class="text-muted mb-1"><i class="bi bi-geo-alt me-1"></i>{{ event.venue }}</small>
                    <small class="text-muted mb-3"><i class="bi bi-calendar me-1"></i>{{ event.date }}</small>
                    <div class="mt-auto d-flex align-items-center justify-content-between">
                      <div>
                        <span class="text-muted small">From</span>
                        <span class="fw-bold ms-1">₦{{ event.price.toLocaleString() }}</span>
                      </div>
                      <a href="#" class="btn btn-sm btn-dark mb-0" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Get Tickets</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pagination -->
            <nav class="mt-5" v-if="totalPages > 1">
              <ul class="pagination pagination-sm justify-content-center">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                  <a class="page-link" href="#" @click.prevent="currentPage--">
                    <i class="bi bi-chevron-left"></i>
                  </a>
                </li>
                <li class="page-item" v-for="n in totalPages" :key="n" :class="{ active: currentPage === n }">
                  <a class="page-link" href="#" @click.prevent="currentPage = n">{{ n }}</a>
                </li>
                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                  <a class="page-link" href="#" @click.prevent="currentPage++">
                    <i class="bi bi-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </nav>

          </div>
          <!-- Main content END -->
        </div>
      </div>
    </section>
    <!-- =======================
    Event list END -->

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const location = ref('')
const date = ref('')
const dateInput = ref(null)
const eventType = ref('')
const currentPage = ref(1)
const perPage = 6

const recentSearches = ref(['Afrobeats Concert Lagos', 'Tech Summit Nigeria', 'Super Eagles Match', 'Night of 1000 Laughs', 'Eko Hotel Events'])

onMounted(() => {
  if (window.flatpickr && dateInput.value) {
    window.flatpickr(dateInput.value, {
      dateFormat: 'M j, Y',
      minDate: 'today',
      onChange(selectedDates, dateStr) { date.value = dateStr },
    })
  }
})

const events = [
  {
    id: 1,
    name: 'Afrobeats Live Concert',
    venue: 'Eko Hotel & Suites, Lagos',
    date: 'Apr 26, 2026',
    type: 'Concert',
    price: 15000,
    featured: true,
    image: '/assets/images/category/event/concert.jpg',
  },
  {
    id: 2,
    name: 'Tech Summit Nigeria 2026',
    venue: 'ICC, Abuja',
    date: 'May 2, 2026',
    type: 'Conference',
    price: 20000,
    featured: false,
    image: '/assets/images/category/event/conference.jpg',
  },
  {
    id: 3,
    name: 'Super Eagles vs Ghana',
    venue: 'MKO Abiola Stadium, Lagos',
    date: 'May 10, 2026',
    type: 'Sports',
    price: 10000,
    featured: true,
    image: '/assets/images/category/event/sports.jpg',
  },
  {
    id: 4,
    name: 'Night of 1000 Laughs',
    venue: 'Terra Kulture, Lagos',
    date: 'May 17, 2026',
    type: 'Comedy',
    price: 12000,
    featured: false,
    image: '/assets/images/category/event/comedy.jpg',
  },
  {
    id: 5,
    name: 'Lagos Carnival & Street Festival',
    venue: 'Tafawa Balewa Square, Lagos',
    date: 'May 25, 2026',
    type: 'Festival',
    price: 5000,
    featured: true,
    image: '/assets/images/category/event/festival.jpg',
  },
  {
    id: 6,
    name: 'Lagos Fashion Week 2026',
    venue: 'Oriental Hotel, Lagos',
    date: 'Jun 5, 2026',
    type: 'Fashion',
    price: 8000,
    featured: false,
    image: '/assets/images/category/event/fashion.jpg',
  },
  {
    id: 7,
    name: 'Davido Live in Concert',
    venue: 'Coca-Cola Arena, Abuja',
    date: 'Jun 14, 2026',
    type: 'Concert',
    price: 25000,
    featured: true,
    image: '/assets/images/category/event/concert2.jpg',
  },
  {
    id: 8,
    name: 'Nigerian Startup Summit',
    venue: 'Landmark Centre, Lagos',
    date: 'Jun 20, 2026',
    type: 'Conference',
    price: 15000,
    featured: false,
    image: '/assets/images/category/event/conference.jpg',
  },
]

const totalPages = computed(() => Math.ceil(events.length / perPage))

const paginatedEvents = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return events.slice(start, start + perPage)
})
</script>

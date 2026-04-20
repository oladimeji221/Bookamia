<template>
  <div>

    <!-- =======================
    Main Banner START -->
    <section class="pt-0">
      <div class="container">
        <div class="rounded-3 p-3 p-sm-5" style="background-image: url('/assets/images/category/eateries/nkoyo.jpg'); background-position: center center; background-repeat: no-repeat; background-size: cover;">
          <div class="row my-2 my-xl-5">
            <div class="col-md-8 mx-auto">
              <h1 class="text-center text-white">Top Eateries in Nigeria</h1>
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
                      <option>Kano</option>
                      <option>Enugu</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Cuisine -->
              <div class="col-lg-4">
                <div class="d-flex">
                  <i class="bi bi-egg-fried fs-3 me-2 mt-2"></i>
                  <div class="flex-grow-1">
                    <label class="form-label">Cuisine Type</label>
                    <select class="form-select" v-model="cuisine">
                      <option value="">All Cuisines</option>
                      <option>Nigerian</option>
                      <option>Continental</option>
                      <option>Fast Food</option>
                      <option>Fine Dining</option>
                      <option>Seafood</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Date -->
              <div class="col-lg-4">
                <div class="d-flex">
                  <i class="bi bi-calendar fs-3 me-2 mt-2"></i>
                  <div class="flex-grow-1">
                    <label class="form-label">Reservation Date</label>
                    <input type="text" class="form-control" ref="dateInput" placeholder="Select date" readonly>
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
    Eatery list START -->
    <section class="pt-0">
      <div class="container">
        <div class="row mb-4">
          <div class="col-12">
            <div class="hstack gap-3 justify-content-between justify-content-md-end mt-3">
              <button class="btn btn-primary-soft mb-0 d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasEateryFilters">
                <i class="fa-solid fa-sliders-h me-1"></i> Show filters
              </button>
              <span class="text-muted small">{{ eateries.length }} eateries found</span>
            </div>
          </div>
        </div>

        <div class="row">
          <!-- Sidebar START -->
          <aside class="col-xl-4 col-xxl-3">
            <div class="offcanvas-xl offcanvas-end" tabindex="-1" id="offcanvasEateryFilters">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title">Advance Filters</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasEateryFilters"></button>
              </div>
              <div class="offcanvas-body flex-column p-3 p-xl-0">
                <form class="rounded-3 shadow">

                  <!-- Cuisine Type -->
                  <div class="card card-body rounded-0 rounded-top p-4">
                    <h6 class="mb-2">Cuisine Type</h6>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="cu1"><label class="form-check-label" for="cu1">Nigerian</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="cu2"><label class="form-check-label" for="cu2">Continental</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="cu3"><label class="form-check-label" for="cu3">Fast Food</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="cu4"><label class="form-check-label" for="cu4">Fine Dining</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="cu5"><label class="form-check-label" for="cu5">Seafood</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="cu6"><label class="form-check-label" for="cu6">Grill & BBQ</label></div>
                  </div>

                  <hr class="my-0">

                  <!-- Average Price -->
                  <div class="card card-body rounded-0 p-4">
                    <h6 class="mb-2">Average Spend</h6>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ep1"><label class="form-check-label" for="ep1">Under ₦5,000</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ep2"><label class="form-check-label" for="ep2">₦5,000 – ₦15,000</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ep3"><label class="form-check-label" for="ep3">₦15,000 – ₦30,000</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ep4"><label class="form-check-label" for="ep4">₦30,000+</label></div>
                  </div>

                  <hr class="my-0">

                  <!-- Dining Style -->
                  <div class="card card-body rounded-0 p-4">
                    <h6 class="mb-2">Dining Style</h6>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ds1"><label class="form-check-label" for="ds1">Dine-in</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ds2"><label class="form-check-label" for="ds2">Takeaway</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ds3"><label class="form-check-label" for="ds3">Delivery</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ds4"><label class="form-check-label" for="ds4">Outdoor Seating</label></div>
                  </div>

                  <hr class="my-0">

                  <!-- Customer Rating -->
                  <div class="card card-body rounded-0 rounded-bottom p-4">
                    <h6 class="mb-2">Customer Rating</h6>
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item mb-1"><input type="checkbox" class="btn-check" id="er1"><label class="btn btn-sm btn-light" for="er1">3+</label></li>
                      <li class="list-inline-item mb-1"><input type="checkbox" class="btn-check" id="er2"><label class="btn btn-sm btn-light" for="er2">3.5+</label></li>
                      <li class="list-inline-item mb-1"><input type="checkbox" class="btn-check" id="er3"><label class="btn btn-sm btn-light" for="er3">4+</label></li>
                      <li class="list-inline-item mb-1"><input type="checkbox" class="btn-check" id="er4"><label class="btn btn-sm btn-light" for="er4">4.5+</label></li>
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
            <div class="vstack gap-4">

              <div class="card shadow p-2" v-for="place in paginatedEateries" :key="place.id">
                <div class="row g-0">
                  <!-- Image -->
                  <div class="col-md-5 position-relative">
                    <span class="badge text-bg-success position-absolute top-0 start-0 m-2 z-1">Open</span>
                    <img :src="place.image" class="card-img rounded-2" :alt="place.name" style="height: 100%; min-height: 200px; object-fit: cover;">
                  </div>
                  <!-- Body -->
                  <div class="col-md-7">
                    <div class="card-body py-md-2 d-flex flex-column h-100">
                      <!-- Rating stars -->
                      <div class="d-flex justify-content-between align-items-center">
                        <ul class="list-inline mb-0">
                          <li class="list-inline-item me-0 small"><i class="fa-solid fa-star text-warning"></i></li>
                          <li class="list-inline-item me-0 small"><i class="fa-solid fa-star text-warning"></i></li>
                          <li class="list-inline-item me-0 small"><i class="fa-solid fa-star text-warning"></i></li>
                          <li class="list-inline-item me-0 small"><i class="fa-solid fa-star text-warning"></i></li>
                          <li class="list-inline-item me-0 small"><i class="fa-solid fa-star-half-alt text-warning"></i></li>
                          <li class="list-inline-item ms-1 small fw-bold">{{ place.rating }}</li>
                        </ul>
                        <span class="badge text-bg-warning">{{ place.cuisine }}</span>
                      </div>
                      <!-- Name -->
                      <h5 class="card-title mb-1 mt-2">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#comingSoonModal">{{ place.name }}</a>
                      </h5>
                      <small><i class="bi bi-geo-alt me-2"></i>{{ place.location }}</small>
                      <!-- Tags -->
                      <ul class="nav nav-divider mt-3">
                        <li class="nav-item" v-for="tag in place.tags" :key="tag">{{ tag }}</li>
                      </ul>
                      <!-- Info -->
                      <ul class="list-group list-group-borderless small mb-0 mt-2">
                        <li class="list-group-item d-flex text-success p-0">
                          <i class="bi bi-clock me-2"></i>{{ place.hours }}
                        </li>
                        <li class="list-group-item d-flex p-0 text-muted">
                          <i class="bi bi-telephone me-2"></i>{{ place.phone }}
                        </li>
                      </ul>
                      <!-- Price + Button -->
                      <div class="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
                        <div>
                          <span class="text-muted small">Avg spend: </span>
                          <span class="fw-bold">₦{{ place.avgPrice.toLocaleString() }}</span>
                        </div>
                        <div class="mt-3 mt-sm-0">
                          <a href="#" class="btn btn-sm btn-dark mb-0 w-100" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Reserve Table</a>
                        </div>
                      </div>
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
    Eatery list END -->

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const location = ref('')
const cuisine = ref('')
const date = ref('')
const dateInput = ref(null)
const currentPage = ref(1)
const perPage = 4
const recentSearches = ref(['Mama Cass Restaurant', 'Yellow Chilli Abuja', 'Buka Express Lagos', 'Nkoyo Fine Dining', 'Sweet Sensation Ikeja'])

onMounted(() => {
  if (window.flatpickr && dateInput.value) {
    window.flatpickr(dateInput.value, {
      dateFormat: 'M j, Y',
      minDate: 'today',
      onChange(selectedDates, dateStr) { date.value = dateStr },
    })
  }
})

const eateries = [
  {
    id: 1,
    name: 'Buka Express Lagos',
    location: 'Victoria Island, Lagos',
    cuisine: 'Nigerian',
    rating: 4.7,
    avgPrice: 8000,
    tags: ['Dine-in', 'Takeaway', 'Outdoor'],
    hours: 'Open 8am – 10pm',
    phone: '+234 (0) 801 234 5678',
    image: '/assets/images/category/eateries/buka.webp',
  },
  {
    id: 2,
    name: 'Mama Cass Restaurant',
    location: 'GRA, Port Harcourt',
    cuisine: 'Nigerian',
    rating: 4.8,
    avgPrice: 12000,
    tags: ['Dine-in', 'Delivery', 'Private Dining'],
    hours: 'Open 9am – 11pm',
    phone: '+234 (0) 803 456 7890',
    image: '/assets/images/category/eateries/mamacass.jpeg',
  },
  {
    id: 3,
    name: 'Yellow Chilli Abuja',
    location: 'Wuse II, Abuja',
    cuisine: 'Fine Dining',
    rating: 4.6,
    avgPrice: 25000,
    tags: ['Dine-in', 'Bar', 'Outdoor'],
    hours: 'Open 12pm – 11pm',
    phone: '+234 (0) 805 678 9012',
    image: '/assets/images/category/eateries/yellowchilli.jpg',
  },
  {
    id: 4,
    name: 'The Place Restaurant',
    location: 'Lekki Phase 1, Lagos',
    cuisine: 'Nigerian',
    rating: 4.5,
    avgPrice: 10000,
    tags: ['Dine-in', 'Takeaway', 'Delivery'],
    hours: 'Open 7am – 10pm',
    phone: '+234 (0) 807 890 1234',
    image: '/assets/images/category/eateries/the_place.jpg',
  },
  {
    id: 5,
    name: 'Nkoyo Fine Dining',
    location: 'Garki, Abuja',
    cuisine: 'Fine Dining',
    rating: 4.9,
    avgPrice: 35000,
    tags: ['Dine-in', 'Private Events', 'Bar'],
    hours: 'Open 12pm – 12am',
    phone: '+234 (0) 809 012 3456',
    image: '/assets/images/category/eateries/nkoyo.jpg',
  },
  {
    id: 6,
    name: 'Sweet Sensation',
    location: 'Ikeja, Lagos',
    cuisine: 'Fast Food',
    rating: 4.3,
    avgPrice: 4000,
    tags: ['Dine-in', 'Takeaway', 'Delivery'],
    hours: 'Open 7am – 9pm',
    phone: '+234 (0) 804 567 8901',
    image: '/assets/images/category/eateries/sweet_sensation.png',
  },
]

const totalPages = computed(() => Math.ceil(eateries.length / perPage))

const paginatedEateries = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return eateries.slice(start, start + perPage)
})
</script>

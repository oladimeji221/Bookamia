<template>
  <div>

    <!-- =======================
    Main Banner START -->
    <section class="pt-0">
      <div class="container">
        <div class="rounded-3 p-3 p-sm-5" style="background-image: url('/assets/images/category/hotel/resort/bg-01.jpg'); background-position: center center; background-repeat: no-repeat; background-size: cover;">
          <!-- Banner title -->
          <div class="row my-2 my-xl-5">
            <div class="col-md-8 mx-auto">
              <h1 class="text-center text-white">Hotels Across Nigeria</h1>
            </div>
          </div>

          <!-- Search form -->
          <form class="bg-mode shadow rounded-3 position-relative p-4 pe-md-5 pb-5 pb-md-4 mb-4">
            <div class="row g-4 align-items-center">
              <!-- Location -->
              <div class="col-lg-4">
                <div class="form-control-border form-control-transparent form-fs-md d-flex">
                  <i class="bi bi-geo-alt fs-3 me-2 mt-2"></i>
                  <div class="flex-grow-1">
                    <label class="form-label">Location</label>
                    <select class="form-select" v-model="location">
                      <option value="">Select city</option>
                      <option>Lagos</option>
                      <option>Abuja</option>
                      <option>Port Harcourt</option>
                      <option>Ibadan</option>
                      <option>Kano</option>
                      <option>Enugu</option>
                      <option>Uyo</option>
                      <option>Owerri</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Check in/out -->
              <div class="col-lg-4">
                <div class="d-flex">
                  <i class="bi bi-calendar fs-3 me-2 mt-2"></i>
                  <div class="flex-grow-1">
                    <label class="form-label">Check in – out</label>
                    <input type="text" class="form-control" ref="datesInput" placeholder="Check-in – Check-out" readonly>
                  </div>
                </div>
              </div>

              <!-- Guests -->
              <div class="col-lg-4">
                <div class="form-control-border form-control-transparent form-fs-md d-flex">
                  <i class="bi bi-person fs-3 me-2 mt-2"></i>
                  <div class="flex-grow-1">
                    <label class="form-label">Guests &amp; Rooms</label>
                    <input type="text" class="form-control" v-model="guests" placeholder="2 Guests, 1 Room">
                  </div>
                </div>
              </div>
            </div>
            <!-- Search button -->
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
    Hotel list START -->
    <section class="pt-0">
      <div class="container">
        <!-- Tabs and controls -->
        <div class="row mb-4">
          <div class="col-12">
            <div class="hstack gap-3 justify-content-between justify-content-md-end mt-3">
              <button class="btn btn-primary-soft mb-0 d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasHotelFilters">
                <i class="fa-solid fa-sliders-h me-1"></i> Show filters
              </button>
              <span class="text-muted small">{{ hotels.length }} hotels found</span>
            </div>
          </div>
        </div>

        <div class="row">
          <!-- Sidebar START -->
          <aside class="col-xl-4 col-xxl-3">
            <div class="offcanvas-xl offcanvas-end" tabindex="-1" id="offcanvasHotelFilters">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title">Advance Filters</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasHotelFilters"></button>
              </div>
              <div class="offcanvas-body flex-column p-3 p-xl-0">
                <form class="rounded-3 shadow">

                  <!-- Hotel Type -->
                  <div class="card card-body rounded-0 rounded-top p-4">
                    <h6 class="mb-2">Hotel Type</h6>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="htype1"><label class="form-check-label" for="htype1">Hotel</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="htype2"><label class="form-check-label" for="htype2">Apartment</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="htype3"><label class="form-check-label" for="htype3">Resort</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="htype4"><label class="form-check-label" for="htype4">Villa</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="htype5"><label class="form-check-label" for="htype5">Guest House</label></div>
                  </div>

                  <hr class="my-0">

                  <!-- Price Range -->
                  <div class="card card-body rounded-0 p-4">
                    <h6 class="mb-2">Price per Night</h6>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="pr1"><label class="form-check-label" for="pr1">Under ₦20,000</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="pr2"><label class="form-check-label" for="pr2">₦20,000 – ₦50,000</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="pr3"><label class="form-check-label" for="pr3">₦50,000 – ₦100,000</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="pr4"><label class="form-check-label" for="pr4">₦100,000+</label></div>
                  </div>

                  <hr class="my-0">

                  <!-- Popular Type -->
                  <div class="card card-body rounded-0 p-4">
                    <h6 class="mb-2">Popular Type</h6>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="pt1"><label class="form-check-label" for="pt1">Free Breakfast Included</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="pt2"><label class="form-check-label" for="pt2">Pay At Hotel Available</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="pt3"><label class="form-check-label" for="pt3">Free Cancellation</label></div>
                  </div>

                  <hr class="my-0">

                  <!-- Star Rating -->
                  <div class="card card-body rounded-0 p-4">
                    <h6 class="mb-2">Star Rating</h6>
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item mb-1"><input type="checkbox" class="btn-check" id="star3"><label class="btn btn-sm btn-light" for="star3">3<i class="bi bi-star-fill ms-1"></i></label></li>
                      <li class="list-inline-item mb-1"><input type="checkbox" class="btn-check" id="star4"><label class="btn btn-sm btn-light" for="star4">4<i class="bi bi-star-fill ms-1"></i></label></li>
                      <li class="list-inline-item mb-1"><input type="checkbox" class="btn-check" id="star5"><label class="btn btn-sm btn-light" for="star5">5<i class="bi bi-star-fill ms-1"></i></label></li>
                    </ul>
                  </div>

                  <hr class="my-0">

                  <!-- Amenities -->
                  <div class="card card-body rounded-0 rounded-bottom p-4">
                    <h6 class="mb-2">Amenities</h6>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="am1"><label class="form-check-label" for="am1">Air Conditioning</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="am2"><label class="form-check-label" for="am2">Free WiFi</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="am3"><label class="form-check-label" for="am3">Swimming Pool</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="am4"><label class="form-check-label" for="am4">Restaurant</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="am5"><label class="form-check-label" for="am5">Gym</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="am6"><label class="form-check-label" for="am6">Parking</label></div>
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

              <div class="card shadow p-2" v-for="hotel in paginatedHotels" :key="hotel.id">
                <div class="row g-0">
                  <!-- Image -->
                  <div class="col-md-5">
                    <img :src="hotel.image" class="card-img rounded-2" :alt="hotel.name" style="height: 100%; min-height: 200px; object-fit: cover;">
                  </div>
                  <!-- Body -->
                  <div class="col-md-7">
                    <div class="card-body py-md-2 d-flex flex-column h-100">
                      <!-- Stars + icons -->
                      <div class="d-flex justify-content-between align-items-center">
                        <ul class="list-inline mb-0">
                          <li class="list-inline-item me-0 small" v-for="n in hotel.stars" :key="n"><i class="fa-solid fa-star text-warning"></i></li>
                        </ul>
                      </div>
                      <!-- Name -->
                      <h5 class="card-title mb-1 mt-2">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#comingSoonModal">{{ hotel.name }}</a>
                      </h5>
                      <small><i class="bi bi-geo-alt me-2"></i>{{ hotel.location }}</small>
                      <!-- Amenities -->
                      <ul class="nav nav-divider mt-3">
                        <li class="nav-item" v-for="a in hotel.amenities" :key="a">{{ a }}</li>
                      </ul>
                      <!-- Perks -->
                      <ul class="list-group list-group-borderless small mb-0 mt-2">
                        <li class="list-group-item d-flex p-0" :class="hotel.cancellation ? 'text-success' : 'text-danger'">
                          <i class="bi bi-patch-check-fill me-2"></i>{{ hotel.cancellation ? 'Free Cancellation Available' : 'Non Refundable' }}
                        </li>
                        <li class="list-group-item d-flex text-success p-0" v-if="hotel.breakfast">
                          <i class="bi bi-patch-check-fill me-2"></i>Free Breakfast
                        </li>
                      </ul>
                      <!-- Price + Button -->
                      <div class="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
                        <div class="d-flex align-items-center">
                          <h5 class="fw-bold mb-0 me-1">₦{{ hotel.price.toLocaleString() }}</h5>
                          <span class="mb-0">/night</span>
                        </div>
                        <div class="mt-3 mt-sm-0">
                          <a href="#" class="btn btn-sm btn-dark mb-0 w-100" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Select Room</a>
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
    Hotel list END -->

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const location = ref('')
const dates = ref('')
const datesInput = ref(null)
const guests = ref('')
const currentPage = ref(1)
const perPage = 3
const recentSearches = ref(['Eko Hotels Lagos', 'Transcorp Hilton Abuja', 'Port Harcourt Hotels', 'Ibadan Hotels', 'Lagos Island Hotels'])

onMounted(() => {
  if (window.flatpickr && datesInput.value) {
    window.flatpickr(datesInput.value, {
      mode: 'range',
      dateFormat: 'M j, Y',
      minDate: 'today',
      onChange(selectedDates, dateStr) { dates.value = dateStr },
    })
  }
})

const hotels = [
  {
    id: 1,
    name: 'Eko Hotels & Suites',
    location: 'Victoria Island, Lagos',
    stars: 5,
    price: 85000,
    amenities: ['Air Conditioning', 'WiFi', 'Pool', 'Restaurant'],
    cancellation: true,
    breakfast: true,
    image: '/assets/images/category/hotel/01.jpg',
  },
  {
    id: 2,
    name: 'Transcorp Hilton Abuja',
    location: 'Maitama, Abuja',
    stars: 5,
    price: 120000,
    amenities: ['Air Conditioning', 'WiFi', 'Gym', 'Pool'],
    cancellation: true,
    breakfast: false,
    image: '/assets/images/category/hotel/02.jpg',
  },
  {
    id: 3,
    name: 'Novotel Port Harcourt',
    location: 'GRA Phase 2, Port Harcourt',
    stars: 4,
    price: 55000,
    amenities: ['Air Conditioning', 'WiFi', 'Restaurant'],
    cancellation: false,
    breakfast: false,
    image: '/assets/images/category/hotel/03.jpg',
  },
  {
    id: 4,
    name: 'Premier Hotel Ibadan',
    location: 'Old Bodija, Ibadan',
    stars: 4,
    price: 38000,
    amenities: ['Air Conditioning', 'WiFi', 'Parking'],
    cancellation: true,
    breakfast: true,
    image: '/assets/images/category/hotel/04.jpg',
  },
]

const totalPages = computed(() => Math.ceil(hotels.length / perPage))

const paginatedHotels = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return hotels.slice(start, start + perPage)
})
</script>

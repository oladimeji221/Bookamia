<template>
  <div>

    <!-- =======================
    Main Banner START -->
    <section class="pt-0">
      <div class="container">
        <div class="rounded-3 p-3 p-sm-5" style="background-image: url('/assets/images/category/cab/header.jpg'); background-position: center center; background-repeat: no-repeat; background-size: cover;">
          <div class="row my-2 my-xl-5">
            <div class="col-md-8 mx-auto">
              <h1 class="text-center text-white">Book a Cab Across Nigeria</h1>
            </div>
          </div>

          <!-- Cab search form -->
          <div class="bg-mode shadow rounded-3 p-4 mb-4">
            <!-- One Way / Round Trip tabs -->
            <div class="nav nav-pills mb-3">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="tripType" id="oneWay" value="oneway" v-model="tripType">
                <label class="form-check-label fw-semibold" for="oneWay">One Way</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="tripType" id="roundTrip" value="roundtrip" v-model="tripType">
                <label class="form-check-label fw-semibold" for="roundTrip">Round Trip</label>
              </div>
            </div>

            <!-- One Way fields -->
            <div v-if="tripType === 'oneway'">
              <div class="row g-4 align-items-end">
                <div class="col-xl-10">
                  <div class="row g-4">
                    <div class="col-md-6 col-xl-4">
                      <label class="form-label">Pickup Location</label>
                      <select class="form-select form-select-lg" v-model="pickup">
                        <option value="">Select city</option>
                        <option>Lagos</option>
                        <option>Abuja</option>
                        <option>Port Harcourt</option>
                        <option>Ibadan</option>
                        <option>Kano</option>
                        <option>Enugu</option>
                      </select>
                    </div>
                    <div class="col-md-6 col-xl-4">
                      <label class="form-label">Drop Location</label>
                      <select class="form-select form-select-lg" v-model="drop">
                        <option value="">Select city</option>
                        <option>Lagos</option>
                        <option>Abuja</option>
                        <option>Port Harcourt</option>
                        <option>Ibadan</option>
                        <option>Kano</option>
                        <option>Enugu</option>
                      </select>
                    </div>
                    <div class="col-md-6 col-xl-2">
                      <label class="form-label">Pickup Date</label>
                      <input type="text" class="form-control form-control-lg" ref="pickupDateInput" placeholder="Select date" readonly>
                    </div>
                    <div class="col-md-6 col-xl-2">
                      <label class="form-label">Pickup Time</label>
                      <input type="time" class="form-control form-control-lg" v-model="pickupTime">
                    </div>
                  </div>
                </div>
                <div class="col-xl-2 d-grid">
                  <button type="button" class="btn btn-lg btn-primary mb-0">Search</button>
                </div>
              </div>
            </div>

            <!-- Round Trip fields -->
            <div v-if="tripType === 'roundtrip'">
              <div class="row g-4 align-items-end">
                <div class="col-xl-12">
                  <div class="row g-4">
                    <div class="col-md-6 col-xl-3">
                      <label class="form-label">Pickup Location</label>
                      <select class="form-select form-select-lg" v-model="pickup">
                        <option value="">Select city</option>
                        <option>Lagos</option>
                        <option>Abuja</option>
                        <option>Port Harcourt</option>
                        <option>Ibadan</option>
                      </select>
                    </div>
                    <div class="col-md-6 col-xl-3">
                      <label class="form-label">Drop Location</label>
                      <select class="form-select form-select-lg" v-model="drop">
                        <option value="">Select city</option>
                        <option>Lagos</option>
                        <option>Abuja</option>
                        <option>Port Harcourt</option>
                        <option>Ibadan</option>
                      </select>
                    </div>
                    <div class="col-md-6 col-xl-2">
                      <label class="form-label">Pickup Date</label>
                      <input type="text" class="form-control form-control-lg" ref="pickupDateInputRT" placeholder="Select date" readonly>
                    </div>
                    <div class="col-md-6 col-xl-2">
                      <label class="form-label">Pickup Time</label>
                      <input type="time" class="form-control form-control-lg" v-model="pickupTime">
                    </div>
                    <div class="col-md-6 col-xl-2">
                      <label class="form-label">Return Date</label>
                      <input type="text" class="form-control form-control-lg" ref="returnDateInput" placeholder="Select date" readonly>
                    </div>
                  </div>
                </div>
                <div class="col-xl-2 d-grid mt-2">
                  <button type="button" class="btn btn-lg btn-primary mb-0">Search</button>
                </div>
              </div>
            </div>
          </div>
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
    Cab list START -->
    <section class="pt-4">
      <div class="container">
        <!-- Title bar -->
        <div class="row mb-4">
          <div class="col-12">
            <div class="d-sm-flex justify-content-sm-between align-items-center">
              <div class="mb-2 mb-sm-0">
                <h1 class="fs-3 mb-2">{{ cabs.length }} Cabs Available</h1>
                <ul class="nav nav-divider h6 mb-0">
                  <li class="nav-item">{{ tripType === 'roundtrip' ? 'Round Trip' : 'One-way trip' }}</li>
                  <li class="nav-item">Nigeria-wide</li>
                </ul>
              </div>
              <button class="btn btn-primary-soft mb-0 d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCabFilters">
                <i class="fa-solid fa-sliders-h me-1"></i> Show filters
              </button>
            </div>
          </div>
        </div>

        <div class="row">
          <!-- Sidebar START -->
          <aside class="col-xl-4 col-xxl-3">
            <div class="offcanvas-xl offcanvas-end" tabindex="-1" id="offcanvasCabFilters">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title">Advance Filters</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasCabFilters"></button>
              </div>
              <div class="offcanvas-body flex-column p-3 p-xl-0">
                <form class="rounded-3 shadow">

                  <!-- Passenger Capacity -->
                  <div class="card card-body rounded-0 rounded-top p-4">
                    <h6 class="mb-2">Passenger Capacity</h6>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="cp1"><label class="form-check-label" for="cp1">4 passenger seats</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="cp2"><label class="form-check-label" for="cp2">6 passenger seats</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="cp3"><label class="form-check-label" for="cp3">7+ passenger seats</label></div>
                  </div>

                  <hr class="my-0">

                  <!-- Price -->
                  <div class="card card-body rounded-0 p-4">
                    <h6 class="mb-2">Price Range</h6>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="cp4"><label class="form-check-label" for="cp4">Under ₦5,000</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="cp5"><label class="form-check-label" for="cp5">₦5,000 – ₦15,000</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="cp6"><label class="form-check-label" for="cp6">₦15,000 – ₦30,000</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="cp7"><label class="form-check-label" for="cp7">₦30,000+</label></div>
                  </div>

                  <hr class="my-0">

                  <!-- Car Type -->
                  <div class="card card-body rounded-0 rounded-bottom p-4">
                    <h6 class="mb-2">Car Type</h6>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ct1"><label class="form-check-label" for="ct1">Economy / Sedan</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ct2"><label class="form-check-label" for="ct2">SUV</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ct3"><label class="form-check-label" for="ct3">Executive / Luxury</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ct4"><label class="form-check-label" for="ct4">Minibus / Van</label></div>
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
            <div class="alert alert-warning border-warning rounded-3 mb-4" role="alert">
              <h5>Why book a cab with Bookamia?</h5>
              <ul class="list-group list-group-borderless mb-0">
                <li class="list-group-item d-flex text-body mb-0"><i class="fa-solid fa-check text-warning me-2"></i>Verified, licensed drivers across Nigeria.</li>
                <li class="list-group-item d-flex text-body mb-0"><i class="fa-solid fa-check text-warning me-2"></i>No hidden charges — transparent pricing always.</li>
                <li class="list-group-item d-flex text-body mb-0"><i class="fa-solid fa-check text-warning me-2"></i>Safe, clean, and comfortable vehicles guaranteed.</li>
              </ul>
            </div>

            <div class="vstack gap-4">

              <div class="card border p-4" v-for="cab in paginatedCabs" :key="cab.id">
                <div class="card-body p-0">
                  <div class="row g-2 g-sm-4 mb-4">
                    <!-- Car image -->
                    <div class="col-md-4 col-xl-3">
                      <img :src="cab.image" :alt="cab.name" class="rounded-3 w-100" style="height: 120px; object-fit: cover;">
                    </div>
                    <!-- Details -->
                    <div class="col-sm-6 col-md-4 col-xl-6">
                      <h4 class="card-title mb-2">{{ cab.name }}</h4>
                      <ul class="nav nav-divider h6 fw-normal mb-2">
                        <li class="nav-item">{{ cab.type }}</li>
                        <li class="nav-item">AC</li>
                        <li class="nav-item">{{ cab.seats }} Seats</li>
                      </ul>
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item h6 fw-normal me-1 mb-0">{{ cab.rating }}</li>
                        <li class="list-inline-item me-0"><i class="fa-solid fa-star text-warning"></i></li>
                        <li class="list-inline-item me-0"><i class="fa-solid fa-star text-warning"></i></li>
                        <li class="list-inline-item me-0"><i class="fa-solid fa-star text-warning"></i></li>
                        <li class="list-inline-item me-0"><i class="fa-solid fa-star text-warning"></i></li>
                        <li class="list-inline-item"><i class="fa-solid fa-star-half-alt text-warning"></i></li>
                      </ul>
                    </div>
                    <!-- Price -->
                    <div class="col-sm-6 col-md-4 col-xl-3 text-sm-end">
                      <p class="text-danger mb-0" v-if="cab.discount">{{ cab.discount }}% Off</p>
                      <ul class="list-inline mb-1">
                        <li class="list-inline-item text-decoration-line-through me-1 text-muted" v-if="cab.originalPrice">₦{{ cab.originalPrice.toLocaleString() }}</li>
                        <li class="list-inline-item h5 mb-0">₦{{ cab.price.toLocaleString() }}</li>
                      </ul>
                      <a href="#" class="btn btn-dark mb-0" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Book Now</a>
                    </div>
                  </div>
                </div>
                <!-- Footer -->
                <div class="card-footer border-top p-0 pt-3">
                  <div class="row">
                    <div class="col-md-6">
                      <ul class="list-group list-group-borderless mb-0">
                        <li class="list-group-item d-flex pb-0 mb-0">
                          <span class="h6 fw-normal mb-0"><i class="bi bi-check-circle me-2"></i>{{ cab.details[0] }}</span>
                        </li>
                        <li class="list-group-item d-flex pb-0 mb-0">
                          <span class="h6 fw-normal mb-0"><i class="bi bi-check-circle me-2"></i>{{ cab.details[1] }}</span>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <ul class="list-group list-group-borderless mb-0">
                        <li class="list-group-item d-flex h6 fw-light text-success pb-0 mb-0">Free Cancellation, up to 1 hour before pickup</li>
                        <li class="list-group-item d-flex h6 fw-light text-success pb-0 mb-0">Free waiting up to 30 minutes</li>
                      </ul>
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
    Cab list END -->

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const tripType = ref('oneway')
const pickup = ref('')
const drop = ref('')
const pickupDate = ref('')
const pickupDateInput = ref(null)
const pickupDateInputRT = ref(null)
const pickupTime = ref('')
const returnDate = ref('')
const returnDateInput = ref(null)
const currentPage = ref(1)
const perPage = 3
const recentSearches = ref(['Lagos to Abuja', 'Port Harcourt to Enugu', 'Abuja to Kaduna', 'Lagos to Ibadan', 'Kano to Kaduna'])

onMounted(() => {
  const fpOpts = {
    dateFormat: 'M j, Y',
    minDate: 'today',
    onChange(selectedDates, dateStr) { pickupDate.value = dateStr },
  }
  if (window.flatpickr) {
    if (pickupDateInput.value) window.flatpickr(pickupDateInput.value, fpOpts)
    if (pickupDateInputRT.value) window.flatpickr(pickupDateInputRT.value, fpOpts)
    if (returnDateInput.value) {
      window.flatpickr(returnDateInput.value, {
        dateFormat: 'M j, Y',
        minDate: 'today',
        onChange(selectedDates, dateStr) { returnDate.value = dateStr },
      })
    }
  }
})

const cabs = [
  {
    id: 1,
    name: 'Toyota Corolla / Camry',
    type: 'SEDAN',
    seats: 4,
    rating: 4.5,
    price: 8000,
    originalPrice: 10000,
    discount: 20,
    image: '/assets/images/category/cab/corolla.jpg',
    details: ['Up to 200km included', '2 luggage bags'],
  },
  {
    id: 2,
    name: 'Toyota Prado / Land Cruiser',
    type: 'SUV',
    seats: 6,
    rating: 4.7,
    price: 18000,
    originalPrice: 22000,
    discount: 18,
    image: '/assets/images/category/cab/prado.jpg',
    details: ['Up to 300km included', '4 luggage bags'],
  },
  {
    id: 3,
    name: 'Mercedes E-Class / BMW 5',
    type: 'EXECUTIVE',
    seats: 4,
    rating: 4.9,
    price: 35000,
    originalPrice: null,
    discount: null,
    image: '/assets/images/category/cab/mercedes.jpg',
    details: ['Up to 150km included', 'Complimentary water'],
  },
  {
    id: 4,
    name: 'Toyota Hiace / Sienna',
    type: 'MINIBUS',
    seats: 7,
    rating: 4.4,
    price: 25000,
    originalPrice: 30000,
    discount: 17,
    image: '/assets/images/category/cab/hiace.jpg',
    details: ['Up to 250km included', 'Group-friendly'],
  },
]

const totalPages = computed(() => Math.ceil(cabs.length / perPage))

const paginatedCabs = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return cabs.slice(start, start + perPage)
})
</script>

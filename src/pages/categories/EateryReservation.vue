<template>
  <div v-if="eatery">

    <!-- =======================
    Page Banner START -->
    <section class="py-0">
      <div class="container">
        <div class="card bg-light overflow-hidden px-sm-5">
          <div class="row align-items-center g-4">
            <div class="col-12">
              <div class="card-body">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb breadcrumb-dots mb-0">
                    <li class="breadcrumb-item"><router-link to="/"><i class="bi bi-house me-1"></i>Home</router-link></li>
                    <li class="breadcrumb-item"><router-link to="/categories/eatery">Eateries</router-link></li>
                    <li class="breadcrumb-item"><router-link :to="`/categories/eatery/${eatery.id}`">{{ eatery.name }}</router-link></li>
                    <li class="breadcrumb-item active">Reserve a Table</li>
                  </ol>
                </nav>
                <h1 class="m-0 h2 card-title">Reserve a Table</h1>
                <p class="mb-0 text-muted">{{ eatery.name }} &bull; {{ eatery.location }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- =======================
    Page Banner END -->

    <!-- =======================
    Page Content START -->
    <section>
      <div class="container">
        <div class="row g-4 g-lg-5">

          <!-- Left content START -->
          <div class="col-xl-8">
            <div class="vstack gap-5">

              <!-- Restaurant Info START -->
              <div class="card shadow">
                <div class="card-header p-4 border-bottom">
                  <h3 class="mb-0"><i class="fa-solid fa-utensils me-2"></i>Restaurant Information</h3>
                </div>
                <div class="card-body p-4">
                  <div class="card mb-4">
                    <div class="row align-items-center">
                      <div class="col-sm-6 col-md-3">
                        <img :src="eatery.image" class="card-img" :alt="eatery.name"
                          style="height:120px;object-fit:cover;">
                      </div>
                      <div class="col-sm-6 col-md-9">
                        <div class="card-body pt-3 pt-sm-0 p-0">
                          <h5 class="card-title">{{ eatery.name }}</h5>
                          <p class="small mb-2"><i class="bi bi-geo-alt me-2"></i>{{ eatery.location }}</p>
                          <p class="small mb-2"><i class="bi bi-clock me-2"></i>{{ eatery.openingHours }}</p>
                          <ul class="list-inline mb-0">
                            <li class="list-inline-item me-0 small" v-for="n in Math.floor(eatery.rating)" :key="n">
                              <i class="fa-solid fa-star text-warning"></i>
                            </li>
                            <li class="list-inline-item ms-2 h6 small fw-bold mb-0">{{ eatery.rating }}/5.0</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Date / Time / Guests -->
                  <div class="row g-4">
                    <div class="col-lg-4">
                      <div class="bg-light py-3 px-4 rounded-3">
                        <h6 class="fw-light small mb-1">Reservation Date</h6>
                        <input type="text" class="form-control border-0 bg-transparent p-0 fw-semibold"
                          ref="dateInput" placeholder="Select date" readonly v-model="form.date">
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="bg-light py-3 px-4 rounded-3">
                        <h6 class="fw-light small mb-1">Preferred Time</h6>
                        <select class="form-select border-0 bg-transparent p-0 fw-semibold" v-model="form.time">
                          <option value="">Select time</option>
                          <option v-for="t in timeSlots" :key="t" :value="t">{{ t }}</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="bg-light py-3 px-4 rounded-3">
                        <h6 class="fw-light small mb-1">Number of Guests</h6>
                        <select class="form-select border-0 bg-transparent p-0 fw-semibold" v-model="form.guests">
                          <option v-for="n in 20" :key="n" :value="n">{{ n }} Guest{{ n > 1 ? 's' : '' }}</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <!-- Seating preference -->
                  <div class="mt-4">
                    <h6 class="mb-3">Seating Preference</h6>
                    <div class="hstack gap-3 flex-wrap">
                      <div class="form-check" v-for="pref in seatingPrefs" :key="pref">
                        <input class="form-check-input" type="radio" name="seating"
                          :id="`seat-${pref}`" :value="pref" v-model="form.seating">
                        <label class="form-check-label" :for="`seat-${pref}`">{{ pref }}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Restaurant Info END -->

              <!-- Guest Details START -->
              <div class="card shadow">
                <div class="card-header border-bottom p-4">
                  <h4 class="card-title mb-0"><i class="bi bi-people-fill me-2"></i>Guest Details</h4>
                </div>
                <div class="card-body p-4">
                  <form class="row g-4">
                    <div class="col-12">
                      <div class="bg-light rounded-2 px-4 py-3">
                        <h6 class="mb-0">Primary Guest</h6>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <label class="form-label">Title</label>
                      <select class="form-select" v-model="form.title">
                        <option>Mr</option><option>Mrs</option><option>Ms</option><option>Dr</option>
                      </select>
                    </div>
                    <div class="col-md-5">
                      <label class="form-label">First Name</label>
                      <input type="text" class="form-control form-control-lg"
                        placeholder="First name" v-model="form.firstName">
                    </div>
                    <div class="col-md-5">
                      <label class="form-label">Last Name</label>
                      <input type="text" class="form-control form-control-lg"
                        placeholder="Last name" v-model="form.lastName">
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Email Address</label>
                      <input type="email" class="form-control form-control-lg"
                        placeholder="Enter your email" v-model="form.email">
                      <div class="form-text">Reservation confirmation sent here</div>
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Phone Number</label>
                      <input type="tel" class="form-control form-control-lg"
                        placeholder="e.g. 08012345678" v-model="form.phone">
                    </div>
                    <div class="col-12">
                      <label class="form-label">Special Requests <span class="text-muted">(optional)</span></label>
                      <textarea class="form-control" rows="2"
                        placeholder="Occasion, dietary requirements, accessibility needs..."
                        v-model="form.specialRequests"></textarea>
                    </div>
                  </form>

                  <div class="alert alert-info my-4 mb-0" role="alert">
                    <router-link to="/auth/login" class="alert-heading h6">Login</router-link>
                    to prefill your details and manage your reservations.
                  </div>
                </div>
              </div>
              <!-- Guest Details END -->

              <!-- Special Requests Checkboxes START -->
              <div class="card shadow">
                <div class="card-header border-bottom p-4">
                  <h5 class="card-title mb-0">Special Arrangements</h5>
                </div>
                <div class="card-body p-4">
                  <div class="hstack flex-wrap gap-3">
                    <div class="form-check" v-for="req in arrangements" :key="req.id">
                      <input class="form-check-input" type="checkbox"
                        :id="`arr-${req.id}`" v-model="req.checked">
                      <label class="form-check-label" :for="`arr-${req.id}`">{{ req.label }}</label>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Special Requests END -->

              <!-- Payment START -->
              <div class="card shadow">
                <div class="card-header border-bottom p-4">
                  <h4 class="card-title mb-0"><i class="bi bi-wallet-fill me-2"></i>Secure Reservation</h4>
                </div>
                <div class="card-body p-4 pb-0">
                  <div class="bg-primary bg-opacity-10 rounded-3 mb-4 p-3">
                    <div class="d-sm-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center mb-2 mb-sm-0">
                        <i class="bi bi-shield-fill-check text-primary fs-2 me-3"></i>
                        <div>
                          <h5 class="card-title mb-0">Hold your table via Paystack</h5>
                          <p class="mb-0 small">A refundable deposit confirms your reservation</p>
                        </div>
                      </div>
                      <img src="/assets/images/element/mastercard.svg" class="h-30px" alt="">
                    </div>
                  </div>

                  <div class="d-sm-flex justify-content-sm-between align-items-center">
                    <h4 class="mb-0">
                      ₦{{ depositAmount.toLocaleString() }}
                      <span class="small fs-6 fw-light"> deposit (refundable)</span>
                    </h4>
                    <button class="btn btn-primary mb-0 mt-3 mt-sm-0"
                      type="button" @click="payWithPaystack">
                      <i class="bi bi-lock-fill me-2"></i>Confirm Reservation
                    </button>
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 mt-3">
                  <p class="mb-0">By confirming, you accept Bookamia
                    <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                  </p>
                </div>
              </div>
              <!-- Payment END -->

            </div>
          </div>
          <!-- Left content END -->

          <!-- Right sidebar START -->
          <aside class="col-xl-4">
            <div class="sticky-top" style="top:80px;">

              <!-- Summary Card -->
              <div class="card shadow rounded-2 mb-4">
                <div class="card-header border-bottom">
                  <h5 class="card-title mb-0">Reservation Summary</h5>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-borderless mb-0">
                    <li class="list-group-item px-0 d-flex justify-content-between">
                      <span class="text-muted">Restaurant</span>
                      <span class="fw-semibold text-end">{{ eatery.name }}</span>
                    </li>
                    <li class="list-group-item px-0 d-flex justify-content-between">
                      <span class="text-muted">Date</span>
                      <span class="fw-semibold">{{ form.date || '—' }}</span>
                    </li>
                    <li class="list-group-item px-0 d-flex justify-content-between">
                      <span class="text-muted">Time</span>
                      <span class="fw-semibold">{{ form.time || '—' }}</span>
                    </li>
                    <li class="list-group-item px-0 d-flex justify-content-between">
                      <span class="text-muted">Guests</span>
                      <span class="fw-semibold">{{ form.guests }}</span>
                    </li>
                    <li class="list-group-item px-0 d-flex justify-content-between">
                      <span class="text-muted">Seating</span>
                      <span class="fw-semibold">{{ form.seating }}</span>
                    </li>
                  </ul>
                </div>
                <div class="card-footer border-top">
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="h5 mb-0">Deposit</span>
                    <span class="h5 mb-0 text-success">₦{{ depositAmount.toLocaleString() }}</span>
                  </div>
                  <small class="text-muted">Fully refundable if cancelled 24hrs before</small>
                </div>
              </div>

              <!-- Offer & Discount -->
              <div class="card shadow mb-4">
                <div class="card-header border-bottom">
                  <h5 class="mb-0">Offer &amp; Discount</h5>
                </div>
                <div class="card-body">
                  <div class="input-group">
                    <input class="form-control" placeholder="Coupon code">
                    <button type="button" class="btn btn-primary">Apply</button>
                  </div>
                </div>
              </div>

              <!-- Why Sign Up -->
              <div class="card shadow">
                <div class="card-header border-bottom">
                  <h5 class="card-title mb-0">Why Sign Up or Log In</h5>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-borderless">
                    <li class="list-group-item d-flex mb-0">
                      <i class="fa-solid fa-check text-success me-2"></i>
                      <span class="h6 fw-normal">Manage your reservations online</span>
                    </li>
                    <li class="list-group-item d-flex mb-0">
                      <i class="fa-solid fa-check text-success me-2"></i>
                      <span class="h6 fw-normal">Get exclusive dining offers</span>
                    </li>
                    <li class="list-group-item d-flex mb-0">
                      <i class="fa-solid fa-check text-success me-2"></i>
                      <span class="h6 fw-normal">Earn loyalty rewards</span>
                    </li>
                  </ul>
                  <router-link to="/auth/signup" class="btn btn-primary-soft w-100 mt-3 mb-0">
                    Create Free Account
                  </router-link>
                </div>
              </div>

            </div>
          </aside>
          <!-- Right sidebar END -->

        </div>
      </div>
    </section>
    <!-- =======================
    Page Content END -->

  </div>

  <div v-else class="container py-5 text-center">
    <h3>Eatery not found</h3>
    <router-link to="/categories/eatery" class="btn btn-primary mt-3">Back to Eateries</router-link>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { eateries } from '@/data/eateries.js'

const route  = useRoute()
const router = useRouter()

const eatery = computed(() => eateries.find(e => e.id === Number(route.params.id)))

const dateInput = ref(null)

const form = ref({
  title: 'Mr',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: 2,
  seating: 'Indoor',
  specialRequests: '',
})

const timeSlots = [
  '12:00 pm', '12:30 pm', '1:00 pm', '1:30 pm', '2:00 pm', '2:30 pm',
  '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '6:30 pm', '7:00 pm',
  '7:30 pm', '8:00 pm', '8:30 pm', '9:00 pm',
]

const seatingPrefs = ['Indoor', 'Outdoor', 'Private Room', 'Bar Area', 'No preference']

const arrangements = ref([
  { id: 1, label: 'Birthday celebration',    checked: false },
  { id: 2, label: 'Anniversary dinner',       checked: false },
  { id: 3, label: 'High chair needed',        checked: false },
  { id: 4, label: 'Wheelchair access',        checked: false },
  { id: 5, label: 'Halal menu required',      checked: false },
  { id: 6, label: 'Allergy — please specify in special requests', checked: false },
])

// Deposit: ₦2,000 per guest for fine dining, ₦1,000 for others
const depositAmount = computed(() => {
  const fineRestaurants = ['Fine Dining']
  const isFine = fineRestaurants.includes(eatery.value?.cuisine)
  return form.value.guests * (isFine ? 2000 : 1000)
})

onMounted(() => {
  if (window.flatpickr && dateInput.value) {
    window.flatpickr(dateInput.value, {
      dateFormat: 'D, M j, Y',
      minDate: 'today',
      onChange(selectedDates, dateStr) { form.value.date = dateStr },
    })
  }
})

function payWithPaystack() {
  if (!form.value.email) {
    alert('Please enter your email address to proceed.')
    return
  }
  if (!form.value.date || !form.value.time) {
    alert('Please select a reservation date and time.')
    return
  }

  const handler = window.PaystackPop.setup({
    key: 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    email: form.value.email,
    amount: depositAmount.value * 100,
    currency: 'NGN',
    ref: `BOOKAMIA-RES-${Date.now()}`,
    metadata: {
      custom_fields: [
        { display_name: 'Restaurant', variable_name: 'restaurant', value: eatery.value?.name },
        { display_name: 'Date',       variable_name: 'date',       value: form.value.date },
        { display_name: 'Time',       variable_name: 'time',       value: form.value.time },
        { display_name: 'Guests',     variable_name: 'guests',     value: form.value.guests },
        { display_name: 'Guest Name', variable_name: 'guest_name', value: `${form.value.firstName} ${form.value.lastName}` },
      ],
    },
    callback(response) {
      router.push({
        path: '/booking-confirmed',
        query: {
          ref: response.reference,
          category: 'eatery',
          hotel: eatery.value?.name,
          amount: depositAmount.value,
        },
      })
    },
    onClose() {},
  })

  handler.openIframe()
}
</script>

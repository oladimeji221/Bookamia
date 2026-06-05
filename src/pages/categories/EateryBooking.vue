<template>
  <div v-if="eatery">

    <!-- =======================
    Page Banner START -->
    <section class="py-0">
      <div class="container">
        <div class="card bg-light overflow-hidden px-sm-5">
          <div class="row align-items-center g-4">
            <div class="col-sm-9">
              <div class="card-body">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb breadcrumb-dots mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/"><i class="bi bi-house me-1"></i>Home</router-link>
                    </li>
                    <li class="breadcrumb-item">
                      <router-link :to="`/categories/eatery/${eatery.id}`">{{ eatery.name }}</router-link>
                    </li>
                    <li class="breadcrumb-item active">Reservation</li>
                  </ol>
                </nav>
                <h1 class="m-0 h2 card-title">Review your Reservation</h1>
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

              <!-- Restaurant Information START -->
              <div class="card shadow">
                <div class="card-header p-4 border-bottom">
                  <h3 class="mb-0"><i class="fa-solid fa-utensils me-2"></i>Restaurant Information</h3>
                </div>
                <div class="card-body p-4">

                  <!-- Restaurant card -->
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
                          <ul class="list-inline mb-0">
                            <li class="list-inline-item me-0 small" v-for="n in Math.floor(eatery.rating)" :key="n">
                              <i class="fa-solid fa-star text-warning"></i>
                            </li>
                            <li class="list-inline-item ms-2 h6 small fw-bold mb-0">
                              {{ eatery.rating }}/5.0
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Reservation Date / Time / Guests -->
                  <div class="row g-4">
                    <div class="col-lg-4">
                      <div class="bg-light py-3 px-4 rounded-3">
                        <h6 class="fw-light small mb-1">Reservation Date</h6>
                        <h5 class="mb-1">{{ reservationDate || 'Select date' }}</h5>
                        <small><i class="bi bi-calendar me-1"></i>Dine-in</small>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="bg-light py-3 px-4 rounded-3">
                        <h6 class="fw-light small mb-1">Arrival Time</h6>
                        <select class="form-select form-select-sm border-0 bg-transparent fw-bold fs-5 px-0 py-0"
                          v-model="arrivalTime" style="max-width:160px;">
                          <option>12:00 pm</option>
                          <option>12:30 pm</option>
                          <option>1:00 pm</option>
                          <option>1:30 pm</option>
                          <option>2:00 pm</option>
                          <option>6:00 pm</option>
                          <option>6:30 pm</option>
                          <option>7:00 pm</option>
                          <option>7:30 pm</option>
                          <option>8:00 pm</option>
                        </select>
                        <small><i class="bi bi-alarm me-1"></i>{{ eatery.hours }}</small>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="bg-light py-3 px-4 rounded-3">
                        <h6 class="fw-light small mb-1">Number of Guests</h6>
                        <select class="form-select form-select-sm border-0 bg-transparent fw-bold fs-5 px-0 py-0"
                          v-model="numberOfGuests" style="max-width:140px;">
                          <option v-for="n in 12" :key="n" :value="n">{{ n }} {{ n === 1 ? 'Guest' : 'Guests' }}</option>
                        </select>
                        <small><i class="bi bi-people me-1"></i>Seating for {{ eatery.about.seatingCapacity }}</small>
                      </div>
                    </div>
                  </div>

                  <!-- Dining option -->
                  <div class="card border mt-4">
                    <div class="card-header border-bottom d-md-flex justify-content-md-between">
                      <h5 class="card-title mb-0">Dining Preference</h5>
                    </div>
                    <div class="card-body">
                      <div class="d-flex gap-3 flex-wrap">
                        <div class="form-check" v-for="opt in diningOptions" :key="opt">
                          <input class="form-check-input" type="radio" name="diningOption"
                            :id="`dining-${opt}`" :value="opt" v-model="selectedDining">
                          <label class="form-check-label" :for="`dining-${opt}`">{{ opt }}</label>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <!-- Restaurant Information END -->

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
                        <option>Mr</option>
                        <option>Mrs</option>
                        <option>Ms</option>
                        <option>Dr</option>
                      </select>
                    </div>
                    <div class="col-md-5">
                      <label class="form-label">First Name</label>
                      <input type="text" class="form-control form-control-lg"
                        placeholder="Enter your first name" v-model="form.firstName">
                    </div>
                    <div class="col-md-5">
                      <label class="form-label">Last Name</label>
                      <input type="text" class="form-control form-control-lg"
                        placeholder="Enter your last name" v-model="form.lastName">
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Email Address</label>
                      <input type="email" class="form-control form-control-lg"
                        placeholder="Enter your email" v-model="form.email">
                      <div class="form-text">(Booking confirmation will be sent to this email)</div>
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Mobile Number</label>
                      <input type="tel" class="form-control form-control-lg"
                        placeholder="e.g. 08012345678" v-model="form.phone">
                    </div>
                  </form>

                  <!-- Login alert -->
                  <div class="alert alert-info my-4" role="alert">
                    <router-link to="/auth/login" class="alert-heading h6">Login</router-link>
                    to prefill all details and access exclusive dining deals
                  </div>

                  <!-- Special requests -->
                  <div class="card border mt-4">
                    <div class="card-header border-bottom">
                      <h5 class="card-title mb-0">Special Request</h5>
                    </div>
                    <div class="card-body">
                      <div class="hstack flex-wrap gap-3">
                        <div class="form-check" v-for="req in specialRequests" :key="req.id">
                          <input class="form-check-input" type="checkbox"
                            :id="`req-${req.id}`" v-model="req.checked">
                          <label class="form-check-label" :for="`req-${req.id}`">{{ req.label }}</label>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <!-- Guest Details END -->

              <!-- Payment Options START -->
              <div class="card shadow">
                <div class="card-header border-bottom p-4">
                  <h4 class="card-title mb-0">
                    <i class="bi bi-wallet-fill me-2"></i>Payment Options
                  </h4>
                </div>
                <div class="card-body p-4 pb-0">

                  <!-- Paystack promo box -->
                  <div class="bg-primary bg-opacity-10 rounded-3 mb-4 p-3">
                    <div class="d-md-flex justify-content-md-between align-items-center">
                      <div class="d-sm-flex align-items-center mb-2 mb-md-0">
                        <i class="bi bi-shield-fill-check text-primary fs-1 me-3"></i>
                        <div>
                          <h5 class="card-title mb-0">Secure Payment via Paystack</h5>
                          <p class="mb-0">Your payment is protected by 256-bit SSL encryption</p>
                        </div>
                      </div>
                      <img src="/assets/images/element/mastercard.svg" class="h-30px mt-2 mt-md-0" alt="">
                    </div>
                  </div>

                  <!-- Accordion START -->
                  <div class="accordion accordion-icon accordion-bg-light" id="accordionPayment">

                    <!-- Card / Transfer / USSD START -->
                    <div class="accordion-item mb-3">
                      <h6 class="accordion-header" id="heading-1">
                        <button class="accordion-button rounded" type="button"
                          data-bs-toggle="collapse" data-bs-target="#collapse-1"
                          aria-expanded="true" aria-controls="collapse-1">
                          <i class="bi bi-credit-card text-primary me-2"></i>
                          <span class="me-5">Card / Bank Transfer / USSD</span>
                        </button>
                      </h6>
                      <div id="collapse-1" class="accordion-collapse collapse show"
                        aria-labelledby="heading-1" data-bs-parent="#accordionPayment">
                        <div class="accordion-body">
                          <div class="d-sm-flex justify-content-sm-between my-3">
                            <h6 class="mb-2 mb-sm-0">We Accept:</h6>
                            <ul class="list-inline my-0">
                              <li class="list-inline-item">
                                <img src="/assets/images/element/visa.svg" class="h-30px" alt="Visa">
                              </li>
                              <li class="list-inline-item">
                                <img src="/assets/images/element/mastercard.svg" class="h-30px" alt="Mastercard">
                              </li>
                              <li class="list-inline-item">
                                <img src="/assets/images/element/expresscard.svg" class="h-30px" alt="Verve">
                              </li>
                            </ul>
                          </div>
                          <p class="text-muted mb-3">
                            Click <strong>Pay Now</strong> to securely complete your reservation deposit via Paystack.
                            You can pay with card, bank transfer, or USSD — all handled securely by Paystack.
                          </p>
                          <div class="d-sm-flex justify-content-sm-between align-items-center">
                            <h4 class="mb-0">
                              &#8358;{{ totalAmount.toLocaleString() }}
                              <span class="small fs-6 fw-light"> due now</span>
                            </h4>
                            <button class="btn btn-primary mb-0 mt-3 mt-sm-0"
                              type="button" @click="payWithPaystack">
                              <i class="bi bi-lock-fill me-2"></i>Pay Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Card/Transfer END -->

                    <!-- Bank Transfer START -->
                    <div class="accordion-item mb-3">
                      <h6 class="accordion-header" id="heading-2">
                        <button class="accordion-button collapsed rounded" type="button"
                          data-bs-toggle="collapse" data-bs-target="#collapse-2"
                          aria-expanded="false" aria-controls="collapse-2">
                          <i class="bi bi-bank text-primary me-2"></i>
                          <span class="me-5">Pay via Bank</span>
                        </button>
                      </h6>
                      <div id="collapse-2" class="accordion-collapse collapse"
                        aria-labelledby="heading-2" data-bs-parent="#accordionPayment">
                        <div class="accordion-body">
                          <ul class="list-inline mb-3">
                            <li class="list-inline-item"><h6 class="mb-0">Popular Banks:</h6></li>
                            <li class="list-inline-item" v-for="bank in popularBanks" :key="bank">
                              <input type="radio" class="btn-check" name="bankOption" :id="`bank-${bank}`">
                              <label class="btn btn-light btn-primary-soft-check" :for="`bank-${bank}`">
                                {{ bank }}
                              </label>
                            </li>
                          </ul>
                          <p class="mb-3">Select your bank and Paystack will redirect you to complete the payment securely.</p>
                          <div class="d-grid">
                            <button class="btn btn-success mb-0" type="button" @click="payWithPaystack">
                              Pay &#8358;{{ totalAmount.toLocaleString() }} via Bank
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Bank Transfer END -->

                    <!-- USSD START -->
                    <div class="accordion-item mb-3">
                      <h6 class="accordion-header" id="heading-3">
                        <button class="accordion-button collapsed rounded" type="button"
                          data-bs-toggle="collapse" data-bs-target="#collapse-3"
                          aria-expanded="false" aria-controls="collapse-3">
                          <i class="bi bi-phone text-primary me-2"></i>
                          <span class="me-5">Pay with USSD</span>
                        </button>
                      </h6>
                      <div id="collapse-3" class="accordion-collapse collapse"
                        aria-labelledby="heading-3" data-bs-parent="#accordionPayment">
                        <div class="accordion-body">
                          <div class="card card-body border align-items-center text-center mt-2">
                            <i class="bi bi-phone-fill text-primary fs-1 mb-3"></i>
                            <p class="mb-3">
                              <strong>How it works:</strong> Click Pay Now and select USSD as your payment
                              method in the Paystack popup. You'll get a code to dial on your phone.
                            </p>
                            <button class="btn btn-sm btn-outline-primary mb-0"
                              type="button" @click="payWithPaystack">
                              Pay with USSD
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- USSD END -->

                  </div>
                  <!-- Accordion END -->
                </div>

                <div class="card-footer p-4 pt-0">
                  <p class="mb-0">
                    By proceeding, you accept Bookamia
                    <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                  </p>
                </div>
              </div>
              <!-- Payment Options END -->

            </div>
          </div>
          <!-- Left content END -->

          <!-- Right sidebar START -->
          <aside class="col-xl-4">
            <div class="row g-4">

              <!-- Price Summary -->
              <div class="col-md-6 col-xl-12">
                <div class="card shadow rounded-2">
                  <div class="card-header border-bottom">
                    <h5 class="card-title mb-0">Price Summary</h5>
                  </div>
                  <div class="card-body">
                    <ul class="list-group list-group-borderless">
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                        <span class="h6 fw-light mb-0">
                          &#8358;{{ eatery.avgPrice.toLocaleString() }} x {{ numberOfGuests }} {{ numberOfGuests === 1 ? 'guest' : 'guests' }}
                        </span>
                        <span class="fs-5">&#8358;{{ guestCharges.toLocaleString() }}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                        <span class="h6 fw-light mb-0">Service Charge</span>
                        <span class="fs-5">&#8358;{{ serviceFee.toLocaleString() }}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                        <span class="h6 fw-light mb-0">Taxes &amp; Fees (7.5%)</span>
                        <span class="fs-5">&#8358;{{ taxes.toLocaleString() }}</span>
                      </li>
                    </ul>
                  </div>
                  <div class="card-footer border-top">
                    <div class="d-flex justify-content-between align-items-center">
                      <span class="h5 mb-0">Payable Now</span>
                      <span class="h5 mb-0">&#8358;{{ totalAmount.toLocaleString() }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Offer & Discount -->
              <div class="col-md-6 col-xl-12">
                <div class="card shadow">
                  <div class="card-header border-bottom">
                    <h5 class="mb-0">Offer &amp; Discount</h5>
                  </div>
                  <div class="card-body">
                    <div class="bg-light rounded-2 p-3 mb-3">
                      <div class="form-check form-check-inline mb-0">
                        <input class="form-check-input" type="radio" name="discountOptions"
                          id="discount1" checked>
                        <label class="form-check-label h5 mb-0" for="discount1">BOOKAMIA10</label>
                        <p class="mb-1 small">Save 10% on your first dining reservation!</p>
                        <h6 class="mb-0 text-success">-&#8358;{{ Math.round(guestCharges * 0.1).toLocaleString() }}</h6>
                      </div>
                    </div>
                    <div class="input-group">
                      <input class="form-control" placeholder="Coupon code" v-model="couponCode">
                      <button type="button" class="btn btn-primary">Apply</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Why Sign Up -->
              <div class="col-md-6 col-xl-12">
                <div class="card shadow">
                  <div class="card-header border-bottom">
                    <h5 class="card-title mb-0">Why Sign Up or Log In</h5>
                  </div>
                  <div class="card-body">
                    <ul class="list-group list-group-borderless">
                      <li class="list-group-item d-flex mb-0">
                        <i class="fa-solid fa-check text-success me-2"></i>
                        <span class="h6 fw-normal">Get Access to Secret Deals</span>
                      </li>
                      <li class="list-group-item d-flex mb-0">
                        <i class="fa-solid fa-check text-success me-2"></i>
                        <span class="h6 fw-normal">Book Faster with Saved Details</span>
                      </li>
                      <li class="list-group-item d-flex mb-0">
                        <i class="fa-solid fa-check text-success me-2"></i>
                        <span class="h6 fw-normal">Manage &amp; Track Your Reservations</span>
                      </li>
                      <li class="list-group-item d-flex mb-0">
                        <i class="fa-solid fa-check text-success me-2"></i>
                        <span class="h6 fw-normal">Earn Loyalty Rewards</span>
                      </li>
                    </ul>
                    <router-link to="/auth/signup" class="btn btn-primary-soft w-100 mt-3 mb-0">
                      Create Free Account
                    </router-link>
                  </div>
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
    <h3>Reservation details not found</h3>
    <router-link to="/categories/eatery" class="btn btn-primary mt-3">Back to Eateries</router-link>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { eateries } from '@/data/eateries.js'

const route  = useRoute()
const router = useRouter()

const eatery = computed(() => eateries.find(e => e.id === Number(route.params.id)))

// Booking state
const numberOfGuests   = ref(2)
const reservationDate  = ref('')
const arrivalTime      = ref('7:00 pm')
const selectedDining   = ref('Dine-in')
const couponCode       = ref('')

const diningOptions = ['Dine-in', 'Outdoor Seating', 'Private Dining Room', 'Bar Seating']

const form = ref({
  title: 'Mr',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
})

const specialRequests = ref([
  { id: 1, label: 'Window seat',         checked: false },
  { id: 2, label: 'High chair needed',   checked: false },
  { id: 3, label: 'Wheelchair access',   checked: false },
  { id: 4, label: 'Quiet area',          checked: false },
  { id: 5, label: 'Outdoor seating',     checked: false },
  { id: 6, label: 'Allergy menu',        checked: false },
])

const popularBanks = ['GTBank', 'Zenith Bank', 'First Bank', 'Access Bank', 'UBA']

// Price calculations
const guestCharges = computed(() => (eatery.value?.avgPrice ?? 0) * numberOfGuests.value)
const serviceFee   = computed(() => 500)
const taxes        = computed(() => Math.round(guestCharges.value * 0.075))
const totalAmount  = computed(() => guestCharges.value + serviceFee.value + taxes.value)

onMounted(() => {
  nextTick(() => {
    const dateEl = document.querySelector('[data-reservation-date]')
    if (window.flatpickr && dateEl) {
      window.flatpickr(dateEl, {
        dateFormat: 'M j, Y',
        minDate: 'today',
        onChange(selectedDates, dateStr) { reservationDate.value = dateStr },
      })
    }
  })
})

function payWithPaystack() {
  if (!form.value.email) {
    alert('Please enter your email address to proceed with payment.')
    return
  }

  const handler = window.PaystackPop.setup({
    key: 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    email: form.value.email,
    amount: totalAmount.value * 100,
    currency: 'NGN',
    ref: `BOOKAMIA-EAT-${Date.now()}`,
    metadata: {
      custom_fields: [
        { display_name: 'Restaurant',    variable_name: 'restaurant', value: eatery.value?.name },
        { display_name: 'Guest Name',    variable_name: 'guest',      value: `${form.value.firstName} ${form.value.lastName}` },
        { display_name: 'Guests',        variable_name: 'guests',     value: numberOfGuests.value },
        { display_name: 'Arrival Time',  variable_name: 'time',       value: arrivalTime.value },
        { display_name: 'Dining Option', variable_name: 'dining',     value: selectedDining.value },
      ],
    },
    callback(response) {
      router.push({
        path: '/booking-confirmed',
        query: {
          ref: response.reference,
          restaurant: eatery.value?.name,
          guests: numberOfGuests.value,
          amount: totalAmount.value,
        },
      })
    },
    onClose() {},
  })

  handler.openIframe()
}
</script>

<template>
  <div v-if="hotel && room">

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
                      <router-link :to="`/categories/hotels/${hotel.id}`">{{ hotel.name }}</router-link>
                    </li>
                    <li class="breadcrumb-item active">Booking</li>
                  </ol>
                </nav>
                <h1 class="m-0 h2 card-title">Review your Booking</h1>
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

              <!-- Hotel Information START -->
              <div class="card shadow">
                <div class="card-header p-4 border-bottom">
                  <h3 class="mb-0"><i class="fa-solid fa-hotel me-2"></i>Hotel Information</h3>
                </div>
                <div class="card-body p-4">

                  <!-- Hotel card -->
                  <div class="card mb-4">
                    <div class="row align-items-center">
                      <div class="col-sm-6 col-md-3">
                        <img :src="hotel.images[0]" class="card-img" :alt="hotel.name"
                          style="height:120px;object-fit:cover;">
                      </div>
                      <div class="col-sm-6 col-md-9">
                        <div class="card-body pt-3 pt-sm-0 p-0">
                          <h5 class="card-title">{{ hotel.name }}</h5>
                          <p class="small mb-2"><i class="bi bi-geo-alt me-2"></i>{{ hotel.location }}</p>
                          <ul class="list-inline mb-0">
                            <li class="list-inline-item me-0 small" v-for="n in hotel.stars" :key="n">
                              <i class="fa-solid fa-star text-warning"></i>
                            </li>
                            <li class="list-inline-item ms-2 h6 small fw-bold mb-0">
                              {{ hotel.rating }}/5.0
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Check-in / Check-out / Guests -->
                  <div class="row g-4">
                    <div class="col-lg-4">
                      <div class="bg-light py-3 px-4 rounded-3">
                        <h6 class="fw-light small mb-1">Check-in</h6>
                        <h5 class="mb-1">{{ checkin || 'Select date' }}</h5>
                        <small><i class="bi bi-alarm me-1"></i>{{ hotel.policies.checkin.split('–')[0].trim() }}</small>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="bg-light py-3 px-4 rounded-3">
                        <h6 class="fw-light small mb-1">Check-out</h6>
                        <h5 class="mb-1">{{ checkout || 'Select date' }}</h5>
                        <small><i class="bi bi-alarm me-1"></i>{{ hotel.policies.checkout }}</small>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="bg-light py-3 px-4 rounded-3">
                        <h6 class="fw-light small mb-1">Rooms &amp; Guests</h6>
                        <h5 class="mb-1">2 Guests – 1 Room</h5>
                        <small><i class="bi bi-brightness-high me-1"></i>{{ nights }} Night{{ nights > 1 ? 's' : '' }}</small>
                      </div>
                    </div>
                  </div>

                  <!-- Room details -->
                  <div class="card border mt-4">
                    <div class="card-header border-bottom d-md-flex justify-content-md-between">
                      <h5 class="card-title mb-0">{{ room.name }}</h5>
                      <a href="#" class="btn btn-link p-0 mb-0">View Cancellation Policy</a>
                    </div>
                    <div class="card-body">
                      <h6>Price Included</h6>
                      <ul class="list-group list-group-borderless mb-0">
                        <li class="list-group-item h6 fw-light d-flex mb-0">
                          <i class="bi bi-patch-check-fill text-success me-2"></i>
                          {{ room.cancellation ? 'Free cancellation available' : 'Non-refundable booking' }}
                        </li>
                        <li class="list-group-item h6 fw-light d-flex mb-0" v-if="hotel.breakfast">
                          <i class="bi bi-patch-check-fill text-success me-2"></i>Free Breakfast Included
                        </li>
                        <li class="list-group-item h6 fw-light d-flex mb-0">
                          <i class="bi bi-patch-check-fill text-success me-2"></i>
                          {{ room.sqft }} sq.ft room with {{ room.view }}
                        </li>
                        <li class="list-group-item h6 fw-light d-flex mb-0">
                          <i class="bi bi-patch-check-fill text-success me-2"></i>{{ room.bed }}
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
              <!-- Hotel Information END -->

              <!-- Guest Details START -->
              <div class="card shadow">
                <div class="card-header border-bottom p-4">
                  <h4 class="card-title mb-0"><i class="bi bi-people-fill me-2"></i>Guest Details</h4>
                </div>
                <div class="card-body p-4">

                  <form class="row g-4">
                    <div class="col-12">
                      <div class="bg-light rounded-2 px-4 py-3">
                        <h6 class="mb-0">Main Guest</h6>
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
                    <div class="col-12">
                      <a href="#" class="btn btn-link mb-0 p-0">
                        <i class="fa-solid fa-plus me-2"></i>Add New Guest
                      </a>
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Email Address</label>
                      <input type="email" class="form-control form-control-lg"
                        placeholder="Enter your email" v-model="form.email">
                      <div class="form-text">(Booking voucher will be sent to this email)</div>
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
                    to prefill all details and get access to secret deals
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

                    <!-- Paystack Card / Transfer START -->
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

                          <!-- Paystack handles card entry in its popup -->
                          <p class="text-muted mb-3">
                            Click <strong>Pay Now</strong> to securely complete your payment via Paystack.
                            You can pay with card, bank transfer, or USSD — all handled securely by Paystack.
                          </p>

                          <div class="d-sm-flex justify-content-sm-between align-items-center">
                            <h4 class="mb-0">
                              ₦{{ totalAmount.toLocaleString() }}
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
                              Pay ₦{{ totalAmount.toLocaleString() }} via Bank
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
                        <span class="h6 fw-light mb-0">Room Charges ({{ nights }} night{{ nights > 1 ? 's' : '' }})</span>
                        <span class="fs-5">₦{{ roomCharges.toLocaleString() }}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center"
                        v-if="discount > 0">
                        <span class="h6 fw-light mb-0">
                          Discount
                          <span class="badge text-bg-danger ms-2">{{ room.discount }}</span>
                        </span>
                        <span class="fs-5 text-success">-₦{{ discount.toLocaleString() }}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                        <span class="h6 fw-light mb-0">Service Fee</span>
                        <span class="fs-5">₦{{ serviceFee.toLocaleString() }}</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                        <span class="h6 fw-light mb-0">Taxes &amp; Fees (7.5%)</span>
                        <span class="fs-5">₦{{ taxes.toLocaleString() }}</span>
                      </li>
                    </ul>
                  </div>
                  <div class="card-footer border-top">
                    <div class="d-flex justify-content-between align-items-center">
                      <span class="h5 mb-0">Payable Now</span>
                      <span class="h5 mb-0">₦{{ totalAmount.toLocaleString() }}</span>
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
                        <p class="mb-1 small">Save 10% on your first booking with Bookamia!</p>
                        <h6 class="mb-0 text-success">-₦{{ Math.round(roomCharges * 0.1).toLocaleString() }}</h6>
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
                        <span class="h6 fw-normal">Manage &amp; Track Your Bookings</span>
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
    <h3>Booking details not found</h3>
    <router-link to="/categories/hotels" class="btn btn-primary mt-3">Back to Hotels</router-link>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { hotels } from '@/data/hotels.js'

const route  = useRoute()
const router = useRouter()

const hotel = computed(() => hotels.find(h => h.id === Number(route.params.hotelId)))
const room  = computed(() => hotel.value?.rooms.find(r => r.id === Number(route.params.roomId)))

// Booking state
const nights     = ref(2)
const checkin    = ref('')
const checkout   = ref('')
const couponCode = ref('')

const form = ref({
  title: 'Mr',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
})

const specialRequests = ref([
  { id: 1, label: 'Smoking room',       checked: false },
  { id: 2, label: 'Late check-in',      checked: false },
  { id: 3, label: 'Early check-in',     checked: false },
  { id: 4, label: 'High floor room',    checked: false },
  { id: 5, label: 'Large bed',          checked: false },
  { id: 6, label: 'Airport transfer',   checked: false },
  { id: 7, label: 'Twin beds',          checked: false },
])

const popularBanks = ['GTBank', 'Zenith Bank', 'First Bank', 'Access Bank', 'UBA']

// Price calculations
const roomCharges = computed(() => (room.value?.price ?? 0) * nights.value)
const discount    = computed(() => {
  if (!room.value?.originalPrice) return 0
  return (room.value.originalPrice - room.value.price) * nights.value
})
const serviceFee  = computed(() => 2500)
const taxes       = computed(() => Math.round(roomCharges.value * 0.075))
const totalAmount = computed(() => roomCharges.value - discount.value + serviceFee.value + taxes.value)

function payWithPaystack() {
  if (!form.value.email) {
    alert('Please enter your email address to proceed with payment.')
    return
  }

  const handler = window.PaystackPop.setup({
    // Replace with your actual Paystack public key
    key: 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    email: form.value.email,
    amount: totalAmount.value * 100, // Paystack uses kobo
    currency: 'NGN',
    ref: `BOOKAMIA-${Date.now()}`,
    metadata: {
      custom_fields: [
        { display_name: 'Hotel',     variable_name: 'hotel',    value: hotel.value?.name },
        { display_name: 'Room',      variable_name: 'room',     value: room.value?.name },
        { display_name: 'Guest',     variable_name: 'guest',    value: `${form.value.firstName} ${form.value.lastName}` },
        { display_name: 'Nights',    variable_name: 'nights',   value: nights.value },
      ],
    },
    callback(response) {
      // Payment successful — navigate to confirmation page
      router.push({
        path: '/booking-confirmed',
        query: {
          ref: response.reference,
          hotel: hotel.value?.name,
          room: room.value?.name,
          amount: totalAmount.value,
        },
      })
    },
    onClose() {
      // User closed the popup without completing payment
    },
  })

  handler.openIframe()
}
</script>

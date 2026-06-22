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
                    <li class="breadcrumb-item active">Place Order</li>
                  </ol>
                </nav>
                <h1 class="m-0 h2 card-title">Place Your Order</h1>
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

              <!-- Order Type START -->
              <div class="card shadow">
                <div class="card-header border-bottom p-4">
                  <h4 class="card-title mb-0"><i class="bi bi-bag-check-fill me-2"></i>How would you like your order?</h4>
                </div>
                <div class="card-body p-4">
                  <div class="row g-3">
                    <div class="col-sm-4" v-for="type in orderTypes" :key="type.value">
                      <label class="d-block cursor-pointer">
                        <input type="radio" class="btn-check" name="orderType" :value="type.value" v-model="orderType">
                        <div class="card border p-3 text-center h-100"
                          :class="orderType === type.value ? 'border-primary bg-primary bg-opacity-10' : ''">
                          <i :class="`${type.icon} fs-3 mb-2`" :style="orderType === type.value ? 'color: var(--bs-primary)' : ''"></i>
                          <h6 class="mb-0">{{ type.label }}</h6>
                          <small class="text-muted">{{ type.desc }}</small>
                        </div>
                      </label>
                    </div>
                  </div>

                  <!-- Delivery address field -->
                  <div class="mt-4" v-if="orderType === 'delivery'">
                    <label class="form-label fw-semibold">Delivery Address</label>
                    <input type="text" class="form-control form-control-lg"
                      placeholder="Enter your full delivery address" v-model="form.address">
                    <div class="form-text">Delivery fee: ₦1,500 within the city</div>
                  </div>
                </div>
              </div>
              <!-- Order Type END -->

              <!-- Menu START -->
              <div class="card shadow">
                <div class="card-header border-bottom p-4">
                  <h4 class="card-title mb-0"><i class="bi bi-grid-fill me-2"></i>Select Your Items</h4>
                </div>
                <div class="card-body p-4">

                  <!-- Category tabs -->
                  <ul class="nav nav-pills nav-fill mb-4 flex-wrap gap-2">
                    <li class="nav-item" v-for="(cat, idx) in eatery.menu" :key="idx">
                      <button class="nav-link mb-0"
                        :class="activeCategory === idx ? 'active' : ''"
                        @click="activeCategory = idx">
                        {{ cat.category }}
                      </button>
                    </li>
                  </ul>

                  <!-- Menu items -->
                  <div class="vstack gap-3">
                    <div v-for="item in eatery.menu[activeCategory].items" :key="item.name"
                      class="card border p-3">
                      <div class="row align-items-center g-3">

                        <!-- Item info -->
                        <div class="col">
                          <h6 class="mb-1">{{ item.name }}</h6>
                          <span class="text-success fw-bold">₦{{ item.price.toLocaleString() }}</span>
                        </div>

                        <!-- Quantity controls -->
                        <div class="col-auto">
                          <div class="d-flex align-items-center gap-2">
                            <button class="btn btn-sm btn-outline-secondary px-2"
                              @click="decrement(item)" :disabled="getQty(item) === 0">
                              <i class="bi bi-dash"></i>
                            </button>
                            <span class="fw-bold" style="min-width:20px;text-align:center;">
                              {{ getQty(item) }}
                            </span>
                            <button class="btn btn-sm btn-primary px-2"
                              @click="increment(item)">
                              <i class="bi bi-plus"></i>
                            </button>
                          </div>
                        </div>

                      </div>

                      <!-- Protein selector (shown when item is in cart and hasProtein) -->
                      <div class="mt-3 pt-3 border-top" v-if="item.hasProtein && getQty(item) > 0 && eatery.proteins.length">
                        <label class="form-label small fw-semibold text-muted mb-2">
                          <i class="bi bi-plus-circle me-1"></i>Choose protein for {{ item.name }}:
                        </label>
                        <div class="d-flex flex-wrap gap-2">
                          <div v-for="protein in eatery.proteins" :key="protein.name">
                            <input type="radio" class="btn-check"
                              :name="`protein-${item.name}`"
                              :id="`prot-${item.name}-${protein.name}`"
                              :value="protein"
                              v-model="getCartItem(item).protein">
                            <label class="btn btn-sm btn-light btn-primary-soft-check"
                              :for="`prot-${item.name}-${protein.name}`">
                              {{ protein.name }}
                              <span class="text-success ms-1">+₦{{ protein.price.toLocaleString() }}</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <!-- Menu END -->

              <!-- Extras START -->
              <div class="card shadow" v-if="eatery.extras && eatery.extras.length">
                <div class="card-header border-bottom p-4">
                  <h4 class="card-title mb-0"><i class="bi bi-plus-circle-fill me-2"></i>Add Extras</h4>
                </div>
                <div class="card-body p-4">
                  <div class="row g-3">
                    <div class="col-sm-6" v-for="extra in eatery.extras" :key="extra.name">
                      <div class="form-check card border p-3 m-0"
                        :class="isExtraSelected(extra) ? 'border-primary bg-primary bg-opacity-10' : ''">
                        <input class="form-check-input" type="checkbox"
                          :id="`extra-${extra.name}`"
                          :checked="isExtraSelected(extra)"
                          @change="toggleExtra(extra)">
                        <label class="form-check-label d-flex justify-content-between w-100"
                          :for="`extra-${extra.name}`">
                          <span>{{ extra.name }}</span>
                          <span class="text-success fw-bold">+₦{{ extra.price.toLocaleString() }}</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Extras END -->

              <!-- Guest Details START -->
              <div class="card shadow">
                <div class="card-header border-bottom p-4">
                  <h4 class="card-title mb-0"><i class="bi bi-person-fill me-2"></i>Your Details</h4>
                </div>
                <div class="card-body p-4">
                  <form class="row g-4">
                    <div class="col-md-6">
                      <label class="form-label">Full Name</label>
                      <input type="text" class="form-control form-control-lg"
                        placeholder="Enter your name" v-model="form.name">
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Phone Number</label>
                      <input type="tel" class="form-control form-control-lg"
                        placeholder="e.g. 08012345678" v-model="form.phone">
                    </div>
                    <div class="col-12">
                      <label class="form-label">Email Address</label>
                      <input type="email" class="form-control form-control-lg"
                        placeholder="Enter your email" v-model="form.email">
                      <div class="form-text">Your order confirmation will be sent here</div>
                    </div>
                    <div class="col-12">
                      <label class="form-label">Special Instructions <span class="text-muted">(optional)</span></label>
                      <textarea class="form-control" rows="2"
                        placeholder="Any allergies, preferences, or special requests?"
                        v-model="form.instructions"></textarea>
                    </div>
                  </form>

                  <div class="alert alert-info mt-4 mb-0" role="alert">
                    <router-link to="/auth/login" class="alert-heading h6">Login</router-link>
                    to prefill your details and track your order history.
                  </div>
                </div>
              </div>
              <!-- Guest Details END -->

              <!-- Payment START -->
              <div class="card shadow">
                <div class="card-header border-bottom p-4">
                  <h4 class="card-title mb-0"><i class="bi bi-wallet-fill me-2"></i>Payment</h4>
                </div>
                <div class="card-body p-4 pb-0">

                  <div class="bg-primary bg-opacity-10 rounded-3 mb-4 p-3">
                    <div class="d-sm-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center mb-2 mb-sm-0">
                        <i class="bi bi-shield-fill-check text-primary fs-2 me-3"></i>
                        <div>
                          <h5 class="card-title mb-0">Secure Payment via Paystack</h5>
                          <p class="mb-0 small">Card, bank transfer, or USSD — all secured by Paystack</p>
                        </div>
                      </div>
                      <img src="/assets/images/element/mastercard.svg" class="h-30px" alt="">
                    </div>
                  </div>

                  <!-- Zero-item warning -->
                  <div class="alert alert-warning" v-if="cart.length === 0">
                    <i class="bi bi-cart-x me-2"></i>Add at least one item to your order before paying.
                  </div>

                  <div v-else>
                    <div class="d-sm-flex justify-content-sm-between align-items-center">
                      <h4 class="mb-0">
                        ₦{{ totalAmount.toLocaleString() }}
                        <span class="small fs-6 fw-light"> total</span>
                      </h4>
                      <button class="btn btn-primary mb-0 mt-3 mt-sm-0"
                        type="button" @click="payWithPaystack">
                        <i class="bi bi-lock-fill me-2"></i>Pay & Place Order
                      </button>
                    </div>
                  </div>

                </div>
                <div class="card-footer p-4 pt-0 mt-3">
                  <p class="mb-0">By placing your order, you accept Bookamia
                    <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                  </p>
                </div>
              </div>
              <!-- Payment END -->

            </div>
          </div>
          <!-- Left content END -->

          <!-- Order Summary Sidebar START -->
          <aside class="col-xl-4">
            <div class="sticky-top" style="top:80px;">

              <!-- Cart -->
              <div class="card shadow rounded-2 mb-4">
                <div class="card-header border-bottom">
                  <h5 class="card-title mb-0">
                    <i class="bi bi-cart3 me-2"></i>Your Order
                    <span class="badge bg-primary ms-2" v-if="cart.length">{{ cart.length }}</span>
                  </h5>
                </div>
                <div class="card-body">

                  <!-- Empty cart -->
                  <div class="text-center py-3 text-muted" v-if="cart.length === 0">
                    <i class="bi bi-cart-x fs-2 mb-2 d-block"></i>
                    <small>No items selected yet</small>
                  </div>

                  <!-- Cart items -->
                  <ul class="list-group list-group-borderless" v-else>
                    <li class="list-group-item px-0 d-flex justify-content-between align-items-start"
                      v-for="ci in cart" :key="ci.item.name">
                      <div>
                        <span class="fw-semibold">{{ ci.item.name }}</span>
                        <div class="small text-muted" v-if="ci.protein">
                          + {{ ci.protein.name }}
                        </div>
                        <div class="small text-muted">qty: {{ ci.quantity }}</div>
                      </div>
                      <span class="fw-bold text-success">₦{{ itemTotal(ci).toLocaleString() }}</span>
                    </li>

                    <!-- Selected extras -->
                    <template v-if="selectedExtras.length">
                      <li class="list-group-item px-0"><hr class="my-1"></li>
                      <li class="list-group-item px-0 d-flex justify-content-between small"
                        v-for="ex in selectedExtras" :key="ex.name">
                        <span>{{ ex.name }}</span>
                        <span class="text-success">₦{{ ex.price.toLocaleString() }}</span>
                      </li>
                    </template>
                  </ul>
                </div>

                <!-- Price breakdown -->
                <div class="card-footer border-top" v-if="cart.length">
                  <ul class="list-group list-group-borderless mb-0">
                    <li class="list-group-item px-0 d-flex justify-content-between">
                      <span class="text-muted">Subtotal</span>
                      <span>₦{{ subtotal.toLocaleString() }}</span>
                    </li>
                    <li class="list-group-item px-0 d-flex justify-content-between"
                      v-if="orderType === 'delivery'">
                      <span class="text-muted">Delivery fee</span>
                      <span>₦{{ deliveryFee.toLocaleString() }}</span>
                    </li>
                    <li class="list-group-item px-0 d-flex justify-content-between">
                      <span class="text-muted">VAT (7.5%)</span>
                      <span>₦{{ vat.toLocaleString() }}</span>
                    </li>
                    <li class="list-group-item px-0 d-flex justify-content-between fw-bold">
                      <span>Total</span>
                      <span class="text-success">₦{{ totalAmount.toLocaleString() }}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Why sign up -->
              <div class="card shadow">
                <div class="card-header border-bottom">
                  <h5 class="card-title mb-0">Why Sign Up or Log In</h5>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-borderless">
                    <li class="list-group-item d-flex mb-0">
                      <i class="fa-solid fa-check text-success me-2"></i>
                      <span class="h6 fw-normal">Save your favourite orders</span>
                    </li>
                    <li class="list-group-item d-flex mb-0">
                      <i class="fa-solid fa-check text-success me-2"></i>
                      <span class="h6 fw-normal">Track your order history</span>
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
          <!-- Order Summary Sidebar END -->

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
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { eateries } from '@/data/eateries.js'

const route  = useRoute()
const router = useRouter()

const eatery = computed(() => eateries.find(e => e.id === Number(route.params.id)))

// Order state
const orderType     = ref('dine-in')
const activeCategory = ref(0)
const orderItems    = ref([])   // [{ item, quantity, protein: null }]
const selectedExtras = ref([])

const form = ref({ name: '', phone: '', email: '', address: '', instructions: '' })

const orderTypes = [
  { value: 'dine-in',  label: 'Dine-in',   icon: 'bi bi-shop',       desc: 'Eat at the restaurant'  },
  { value: 'takeaway', label: 'Takeaway',   icon: 'bi bi-bag',        desc: 'Pick up your order'     },
  { value: 'delivery', label: 'Delivery',   icon: 'bi bi-truck',      desc: 'Delivered to your door' },
]

// Get or create a cart entry for a menu item
function getCartItem(item) {
  let ci = orderItems.value.find(o => o.item.name === item.name)
  if (!ci) {
    ci = { item, quantity: 0, protein: null }
    orderItems.value.push(ci)
  }
  return ci
}

function getQty(item) {
  return getCartItem(item).quantity
}

function increment(item) {
  getCartItem(item).quantity++
}

function decrement(item) {
  const ci = getCartItem(item)
  if (ci.quantity > 0) {
    ci.quantity--
    if (ci.quantity === 0) ci.protein = null
  }
}

function toggleExtra(extra) {
  const idx = selectedExtras.value.findIndex(e => e.name === extra.name)
  if (idx === -1) selectedExtras.value.push(extra)
  else selectedExtras.value.splice(idx, 1)
}

function isExtraSelected(extra) {
  return selectedExtras.value.some(e => e.name === extra.name)
}

// Cart = only items with qty > 0
const cart = computed(() => orderItems.value.filter(ci => ci.quantity > 0))

function itemTotal(ci) {
  const base = (ci.item.price + (ci.protein?.price ?? 0)) * ci.quantity
  return base
}

const subtotal = computed(() => {
  const foodTotal = cart.value.reduce((sum, ci) => sum + itemTotal(ci), 0)
  const extrasTotal = selectedExtras.value.reduce((sum, e) => sum + e.price, 0)
  return foodTotal + extrasTotal
})

const deliveryFee = computed(() => orderType.value === 'delivery' ? 1500 : 0)
const vat         = computed(() => Math.round(subtotal.value * 0.075))
const totalAmount = computed(() => subtotal.value + deliveryFee.value + vat.value)

function payWithPaystack() {
  if (!form.value.email) {
    alert('Please enter your email address to proceed.')
    return
  }
  if (cart.value.length === 0) {
    alert('Please add at least one item to your order.')
    return
  }

  const orderSummary = cart.value
    .map(ci => `${ci.item.name}${ci.protein ? ' + ' + ci.protein.name : ''} x${ci.quantity}`)
    .join(', ')

  const handler = window.PaystackPop.setup({
    key: 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    email: form.value.email,
    amount: totalAmount.value * 100,
    currency: 'NGN',
    ref: `BOOKAMIA-FOOD-${Date.now()}`,
    metadata: {
      custom_fields: [
        { display_name: 'Restaurant',  variable_name: 'restaurant', value: eatery.value?.name },
        { display_name: 'Order Type',  variable_name: 'order_type', value: orderType.value },
        { display_name: 'Order Items', variable_name: 'items',      value: orderSummary },
        { display_name: 'Customer',    variable_name: 'customer',   value: form.value.name },
      ],
    },
    callback(response) {
      router.push({
        path: '/booking-confirmed',
        query: {
          ref: response.reference,
          category: 'eatery',
          hotel: eatery.value?.name,
          amount: totalAmount.value,
        },
      })
    },
    onClose() {},
  })

  handler.openIframe()
}
</script>

<template>
  <main>
    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow text-center p-4 p-sm-5">
              <!-- Animated check icon -->
              <div class="success-icon bg-success bg-opacity-10 text-success rounded-circle mx-auto mb-4">
                <i :class="preset.icon"></i>
              </div>

              <h2 class="mb-2">{{ title }}</h2>
              <p class="text-muted mb-4">{{ message }}</p>

              <!-- Reference / amount details -->
              <div v-if="reference || amount" class="bg-light rounded p-3 mb-4">
                <div v-if="reference" class="d-flex justify-content-between align-items-center" :class="{ 'mb-2': amount }">
                  <span class="small text-muted">Reference</span>
                  <span class="fw-semibold">{{ reference }}</span>
                </div>
                <div v-if="amount" class="d-flex justify-content-between align-items-center">
                  <span class="small text-muted">Amount</span>
                  <span class="fw-semibold text-success">₦{{ Number(amount).toLocaleString() }}</span>
                </div>
              </div>

              <!-- Actions -->
              <div class="d-grid gap-2">
                <router-link :to="preset.primary.to" class="btn btn-primary mb-0">
                  <i :class="preset.primary.icon + ' fa-fw me-1'"></i>{{ preset.primary.label }}
                </router-link>
                <router-link :to="preset.secondary.to" class="btn btn-light mb-0">
                  <i :class="preset.secondary.icon + ' fa-fw me-1'"></i>{{ preset.secondary.label }}
                </router-link>
              </div>

              <!-- Support note -->
              <p class="small text-muted mt-4 mb-0">
                Need help? <router-link to="/contact">Contact support</router-link> or email
                <a href="mailto:support@bookamia.com">support@bookamia.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Each preset is a ready-made success screen. Navigate to /success/<type>,
// optionally with ?ref=BK-1234&amount=50000&title=...&message=... overrides.
const PRESETS = {
  payment: {
    icon: 'bi bi-credit-card',
    title: 'Payment Successful!',
    message: 'Your payment has been received and confirmed. A receipt has been sent to your email.',
    primary: { label: 'View My Bookings', to: '/user/bookings', icon: 'bi bi-ticket-perforated' },
    secondary: { label: 'Back to Home', to: '/', icon: 'bi bi-house-door' },
  },
  booking: {
    icon: 'bi bi-calendar2-check',
    title: 'Booking Confirmed!',
    message: 'Your booking is confirmed. We\'ve sent the full details and your e-ticket to your email.',
    primary: { label: 'View My Bookings', to: '/user/bookings', icon: 'bi bi-ticket-perforated' },
    secondary: { label: 'Browse More', to: '/', icon: 'bi bi-search' },
  },
  listing: {
    icon: 'bi bi-journal-check',
    title: 'Listing Submitted!',
    message: 'Your listing has been submitted for review. Most listings are approved within 24–48 hours — we\'ll notify you once it goes live.',
    primary: { label: 'View My Listings', to: '/vendor/listings', icon: 'bi bi-journals' },
    secondary: { label: 'Add Another Listing', to: '/vendor/create-listing', icon: 'bi bi-plus-lg' },
  },
  account: {
    icon: 'bi bi-person-check',
    title: 'Account Created!',
    message: 'Welcome to Bookamia! Your account is ready — sign in to start booking hotels, eateries, events, cabs and movies.',
    primary: { label: 'Sign In', to: '/auth/login', icon: 'bi bi-box-arrow-in-right' },
    secondary: { label: 'Back to Home', to: '/', icon: 'bi bi-house-door' },
  },
  withdrawal: {
    icon: 'bi bi-cash-stack',
    title: 'Withdrawal Requested!',
    message: 'Your withdrawal request has been received. Payouts are processed to your bank account within 1–2 business days.',
    primary: { label: 'View Earnings', to: '/vendor/earnings', icon: 'bi bi-graph-up-arrow' },
    secondary: { label: 'Go to Dashboard', to: '/vendor/dashboard', icon: 'bi bi-house-door' },
  },
  password: {
    icon: 'bi bi-shield-check',
    title: 'Password Changed!',
    message: 'Your password has been updated successfully. Use your new password the next time you sign in.',
    primary: { label: 'Sign In', to: '/auth/login', icon: 'bi bi-box-arrow-in-right' },
    secondary: { label: 'Back to Home', to: '/', icon: 'bi bi-house-door' },
  },
  review: {
    icon: 'bi bi-star',
    title: 'Review Submitted!',
    message: 'Thanks for sharing your experience — your review helps other customers book with confidence.',
    primary: { label: 'View My Reviews', to: '/user/reviews', icon: 'bi bi-star' },
    secondary: { label: 'Back to Home', to: '/', icon: 'bi bi-house-door' },
  },
  default: {
    icon: 'bi bi-check-lg',
    title: 'Success!',
    message: 'Your request has been completed successfully.',
    primary: { label: 'Back to Home', to: '/', icon: 'bi bi-house-door' },
    secondary: { label: 'Contact Support', to: '/contact', icon: 'bi bi-headset' },
  },
};

const preset = computed(() => PRESETS[route.params.type] || PRESETS.default);

// Optional query-string overrides so any flow can customise the screen
const title = computed(() => route.query.title || preset.value.title);
const message = computed(() => route.query.message || preset.value.message);
const reference = computed(() => route.query.ref || '');
const amount = computed(() => route.query.amount || '');
</script>

<style scoped>
.success-icon {
  width: 96px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  animation: success-pop 0.45s ease-out;
}
@keyframes success-pop {
  0% { transform: scale(0.4); opacity: 0; }
  70% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
}
</style>

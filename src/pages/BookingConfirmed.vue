<template>
  <div class="confirmed-page">
    <div class="card">
      <div class="icon">✅</div>
      <h1>Booking Confirmed!</h1>
      <p class="message">Your booking has been successfully placed. A confirmation has been sent to your email.</p>

      <div class="details" v-if="bookingRef">
        <div class="detail-row">
          <span>Booking Reference</span>
          <strong>{{ bookingRef }}</strong>
        </div>
        <div class="detail-row">
          <span>Category</span>
          <strong>{{ category }}</strong>
        </div>
      </div>

      <div class="actions">
        <RouterLink :to="bookingsLink" class="btn-primary">View My Bookings</RouterLink>
        <RouterLink to="/" class="btn-outline">Back to Home</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const bookingRef = computed(() => route.query.ref || 'BKM-' + Math.random().toString(36).slice(2, 8).toUpperCase())
const category = computed(() => route.query.category || 'General')

const bookingsLink = computed(() => {
  const cat = route.query.category?.toLowerCase()
  const map = {
    hotel: '/bookings/hotels',
    eatery: '/bookings/eatery',
    event: '/bookings/events',
    cab: '/bookings/cabs',
    movie: '/bookings/movies',
  }
  return map[cat] || '/'
})
</script>

<style scoped>
.confirmed-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0fdf4;
  padding: 2rem;
}

.card {
  background: #fff;
  border-radius: 20px;
  padding: 3rem 2.5rem;
  max-width: 480px;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
}

.icon { font-size: 4rem; margin-bottom: 1rem; }

h1 {
  font-size: 1.75rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 0.75rem;
}

.message {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.details {
  background: #f9fafb;
  border-radius: 10px;
  padding: 1.25rem;
  margin-bottom: 2rem;
  text-align: left;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  border-bottom: 1px solid #e5e7eb;
}

.detail-row:last-child { border-bottom: none; }
.detail-row span { color: #6b7280; }
.detail-row strong { color: #111827; }

.actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.btn-primary {
  display: block;
  padding: 0.85rem;
  background: #16a34a;
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: background 0.2s;
}

.btn-primary:hover { background: #15803d; }

.btn-outline {
  display: block;
  padding: 0.85rem;
  border: 1px solid #d1d5db;
  color: #374151;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: background 0.2s;
}

.btn-outline:hover { background: #f9fafb; }
</style>

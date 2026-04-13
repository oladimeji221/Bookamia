<template>
  <div class="bookings-page">
    <div class="page-header">
      <div class="container">
        <h1>🎉 My Event Bookings</h1>
        <p>Manage your event tickets and registrations</p>
      </div>
    </div>

    <div class="container content">
      <div v-if="bookings.length === 0" class="empty-state">
        <span>🎉</span>
        <h3>No event bookings yet</h3>
        <p>Browse upcoming events and get your tickets</p>
        <RouterLink to="/categories/events" class="btn-explore">Explore Events</RouterLink>
      </div>

      <div v-else class="bookings-list">
        <div class="booking-card" v-for="booking in bookings" :key="booking.id">
          <div class="booking-icon">🎉</div>
          <div class="booking-info">
            <h3>{{ booking.name }}</h3>
            <p>📍 {{ booking.venue }}</p>
            <p>📅 {{ booking.date }}</p>
            <p>🎟️ {{ booking.tickets }} ticket(s)</p>
          </div>
          <div class="booking-meta">
            <span class="status" :class="booking.status">{{ booking.status }}</span>
            <span class="amount">₦{{ booking.amount.toLocaleString() }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const bookings = []
</script>

<style scoped>
.bookings-page { min-height: 100vh; background: #f9fafb; }

.page-header {
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
  color: #fff;
  padding: 2.5rem 1.5rem;
}

.page-header h1 { font-size: 1.75rem; font-weight: 800; }
.page-header p { color: #ede9fe; margin-top: 0.4rem; }

.container { max-width: 900px; margin: 0 auto; padding: 0 1.5rem; }
.content { padding-top: 2rem; padding-bottom: 4rem; }

.empty-state { text-align: center; padding: 5rem 2rem; color: #6b7280; }
.empty-state span { font-size: 4rem; }
.empty-state h3 { font-size: 1.25rem; font-weight: 600; color: #111827; margin: 1rem 0 0.5rem; }

.btn-explore {
  display: inline-block;
  margin-top: 1.25rem;
  padding: 0.7rem 1.5rem;
  background: #7c3aed;
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
}

.bookings-list { display: flex; flex-direction: column; gap: 1rem; }

.booking-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.booking-icon { font-size: 2.5rem; flex-shrink: 0; }
.booking-info { flex: 1; }
.booking-info h3 { font-weight: 700; color: #111827; margin-bottom: 0.4rem; }
.booking-info p { font-size: 0.875rem; color: #6b7280; margin: 0.2rem 0; }

.booking-meta { display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem; flex-shrink: 0; }

.status { font-size: 0.75rem; font-weight: 600; padding: 0.25rem 0.75rem; border-radius: 999px; text-transform: capitalize; }
.status.confirmed { background: #d1fae5; color: #065f46; }
.status.pending { background: #fef3c7; color: #92400e; }
.status.cancelled { background: #fee2e2; color: #991b1b; }

.amount { font-weight: 700; color: #111827; font-size: 1rem; }
</style>

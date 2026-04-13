<template>
  <div class="category-page">
    <div class="page-header">
      <div class="container">
        <h1>🎉 Events</h1>
        <p>Browse and book tickets for events near you</p>
      </div>
    </div>

    <div class="container content">
      <div class="filters">
        <input type="text" v-model="search" placeholder="Search events..." />
        <select v-model="type">
          <option value="">All Types</option>
          <option value="concert">Concert</option>
          <option value="conference">Conference</option>
          <option value="sports">Sports</option>
          <option value="comedy">Comedy</option>
        </select>
      </div>

      <div class="listings">
        <div class="listing-card" v-for="event in events" :key="event.id">
          <div class="card-img">{{ event.image }}</div>
          <div class="card-body">
            <span class="type-tag">{{ event.type }}</span>
            <h3>{{ event.name }}</h3>
            <p class="location">📍 {{ event.venue }}</p>
            <p class="date">📅 {{ event.date }}</p>
            <div class="footer">
              <span class="price"><strong>₦{{ event.price.toLocaleString() }}</strong></span>
              <button class="btn-book">Get Tickets</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const search = ref('')
const type = ref('')

const events = [
  { id: 1, name: 'Afrobeats Live Concert', venue: 'Eko Hotel, Lagos', date: 'Apr 12, 2026', type: 'Concert', price: 15000, image: '🎵' },
  { id: 2, name: 'Tech Summit Nigeria', venue: 'ICC, Abuja', date: 'Apr 20, 2026', type: 'Conference', price: 20000, image: '💻' },
  { id: 3, name: 'Super Eagles vs Ghana', venue: 'MKO Stadium, Lagos', date: 'May 3, 2026', type: 'Sports', price: 10000, image: '⚽' },
  { id: 4, name: 'Night of 1000 Laughs', venue: 'Terra Kulture, Lagos', date: 'May 10, 2026', type: 'Comedy', price: 12000, image: '😂' },
]
</script>

<style scoped>
.category-page { min-height: 100vh; }

.page-header {
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
  color: #fff;
  padding: 3rem 1.5rem;
}

.page-header h1 { font-size: 2rem; font-weight: 800; }
.page-header p { color: #ede9fe; margin-top: 0.5rem; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
.content { padding-top: 2rem; padding-bottom: 4rem; }

.filters { display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap; }

.filters input,
.filters select {
  padding: 0.65rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.9rem;
  outline: none;
}

.filters input { flex: 1; min-width: 200px; }

.listings {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}

.listing-card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  transition: box-shadow 0.2s;
}

.listing-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.1); }

.card-img {
  height: 140px;
  background: #f5f3ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
}

.card-body { padding: 1.25rem; }
.type-tag { font-size: 0.75rem; background: #ede9fe; color: #5b21b6; padding: 0.2rem 0.5rem; border-radius: 4px; }
.card-body h3 { font-weight: 700; color: #111827; margin-top: 0.5rem; }
.location { font-size: 0.85rem; color: #6b7280; margin: 0.35rem 0 0.2rem; }
.date { font-size: 0.85rem; color: #374151; margin-bottom: 1rem; }

.footer { display: flex; align-items: center; justify-content: space-between; }
.price strong { color: #111827; font-size: 1rem; }

.btn-book {
  padding: 0.5rem 1rem;
  background: #7c3aed;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-book:hover { background: #6d28d9; }
</style>

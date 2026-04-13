<template>
  <div class="category-page">
    <div class="page-header">
      <div class="container">
        <h1>🏨 Hotels</h1>
        <p>Find and book the perfect stay anywhere</p>
      </div>
    </div>

    <div class="container content">
      <div class="filters">
        <input type="text" v-model="search" placeholder="Search hotels..." />
        <select v-model="sortBy">
          <option value="">Sort by</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div class="listings">
        <div class="listing-card" v-for="hotel in hotels" :key="hotel.id">
          <div class="card-img">{{ hotel.image }}</div>
          <div class="card-body">
            <h3>{{ hotel.name }}</h3>
            <p class="location">📍 {{ hotel.location }}</p>
            <div class="rating">⭐ {{ hotel.rating }} · {{ hotel.reviews }} reviews</div>
            <div class="footer">
              <span class="price"><strong>₦{{ hotel.price.toLocaleString() }}</strong> / night</span>
              <button class="btn-book">Book Now</button>
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
const sortBy = ref('')

const hotels = [
  { id: 1, name: 'Grand Royal Hotel', location: 'Lagos, Nigeria', rating: 4.8, reviews: 312, price: 45000, image: '🏨' },
  { id: 2, name: 'Serene Suites', location: 'Abuja, Nigeria', rating: 4.6, reviews: 204, price: 38000, image: '🏩' },
  { id: 3, name: 'The Harbour View', location: 'Port Harcourt, Nigeria', rating: 4.5, reviews: 178, price: 32000, image: '🏪' },
  { id: 4, name: 'City Lights Hotel', location: 'Ibadan, Nigeria', rating: 4.3, reviews: 95, price: 25000, image: '🏬' },
]
</script>

<style scoped>
.category-page { min-height: 100vh; }

.page-header {
  background: linear-gradient(135deg, #1e40af, #3b82f6);
  color: #fff;
  padding: 3rem 1.5rem;
}

.page-header h1 { font-size: 2rem; font-weight: 800; }
.page-header p { color: #dbeafe; margin-top: 0.5rem; }

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.content { padding-top: 2rem; padding-bottom: 4rem; }

.filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

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
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
}

.card-body { padding: 1.25rem; }
.card-body h3 { font-weight: 700; color: #111827; }
.location { font-size: 0.85rem; color: #6b7280; margin: 0.35rem 0; }
.rating { font-size: 0.85rem; color: #374151; margin-bottom: 1rem; }

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price { font-size: 0.9rem; color: #374151; }
.price strong { color: #111827; font-size: 1rem; }

.btn-book {
  padding: 0.5rem 1rem;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-book:hover { background: #1d4ed8; }
</style>

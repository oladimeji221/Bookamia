<template>
  <div class="category-page">
    <div class="page-header">
      <div class="container">
        <h1>🍽️ Eatery</h1>
        <p>Discover restaurants and reserve your table</p>
      </div>
    </div>

    <div class="container content">
      <div class="filters">
        <input type="text" v-model="search" placeholder="Search restaurants..." />
        <select v-model="cuisine">
          <option value="">All Cuisines</option>
          <option value="nigerian">Nigerian</option>
          <option value="continental">Continental</option>
          <option value="chinese">Chinese</option>
        </select>
      </div>

      <div class="listings">
        <div class="listing-card" v-for="place in eateries" :key="place.id">
          <div class="card-img">{{ place.image }}</div>
          <div class="card-body">
            <h3>{{ place.name }}</h3>
            <p class="location">📍 {{ place.location }}</p>
            <p class="cuisine-tag">{{ place.cuisine }}</p>
            <div class="rating">⭐ {{ place.rating }} · {{ place.reviews }} reviews</div>
            <div class="footer">
              <span class="price">Avg: <strong>₦{{ place.avgPrice.toLocaleString() }}</strong></span>
              <button class="btn-book">Reserve</button>
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
const cuisine = ref('')

const eateries = [
  { id: 1, name: 'Mama Cass Restaurant', location: 'Lagos, Nigeria', cuisine: 'Nigerian', rating: 4.7, reviews: 520, avgPrice: 8000, image: '🍲' },
  { id: 2, name: 'The Bistro', location: 'Abuja, Nigeria', cuisine: 'Continental', rating: 4.5, reviews: 310, avgPrice: 15000, image: '🥘' },
  { id: 3, name: 'Golden Dragon', location: 'Lagos, Nigeria', cuisine: 'Chinese', rating: 4.4, reviews: 220, avgPrice: 12000, image: '🍜' },
  { id: 4, name: 'Suya Spot', location: 'Kano, Nigeria', cuisine: 'Nigerian', rating: 4.6, reviews: 405, avgPrice: 5000, image: '🍖' },
]
</script>

<style scoped>
.category-page { min-height: 100vh; }

.page-header {
  background: linear-gradient(135deg, #b45309, #f59e0b);
  color: #fff;
  padding: 3rem 1.5rem;
}

.page-header h1 { font-size: 2rem; font-weight: 800; }
.page-header p { color: #fef3c7; margin-top: 0.5rem; }

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
  background: #fffbeb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
}

.card-body { padding: 1.25rem; }
.card-body h3 { font-weight: 700; color: #111827; }
.location { font-size: 0.85rem; color: #6b7280; margin: 0.35rem 0 0.25rem; }
.cuisine-tag { font-size: 0.75rem; background: #fef3c7; color: #92400e; padding: 0.2rem 0.5rem; border-radius: 4px; display: inline-block; margin-bottom: 0.5rem; }
.rating { font-size: 0.85rem; color: #374151; margin-bottom: 1rem; }

.footer { display: flex; align-items: center; justify-content: space-between; }
.price { font-size: 0.9rem; color: #374151; }
.price strong { color: #111827; font-size: 1rem; }

.btn-book {
  padding: 0.5rem 1rem;
  background: #f59e0b;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-book:hover { background: #d97706; }
</style>

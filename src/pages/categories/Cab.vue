<template>
  <div class="category-page">
    <div class="page-header">
      <div class="container">
        <h1>🚖 Cabs</h1>
        <p>Book a reliable cab for any trip</p>
      </div>
    </div>

    <div class="container content">
      <div class="booking-form">
        <h2>Where are you going?</h2>
        <div class="form-row">
          <div class="field">
            <label>Pickup Location</label>
            <input type="text" v-model="pickup" placeholder="Enter pickup address" />
          </div>
          <div class="field">
            <label>Destination</label>
            <input type="text" v-model="destination" placeholder="Enter destination" />
          </div>
          <div class="field">
            <label>Date & Time</label>
            <input type="datetime-local" v-model="datetime" />
          </div>
        </div>
        <button class="btn-search" @click="searchCabs">Find Cabs</button>
      </div>

      <div class="listings">
        <div class="listing-card" v-for="cab in cabs" :key="cab.id">
          <div class="card-img">{{ cab.image }}</div>
          <div class="card-body">
            <h3>{{ cab.type }}</h3>
            <p class="desc">{{ cab.description }}</p>
            <p class="capacity">👥 Up to {{ cab.capacity }} passengers</p>
            <div class="footer">
              <span class="price">From <strong>₦{{ cab.basePrice.toLocaleString() }}</strong></span>
              <button class="btn-book">Book</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const pickup = ref('')
const destination = ref('')
const datetime = ref('')

const cabs = [
  { id: 1, type: 'Economy', description: 'Affordable everyday rides', capacity: 4, basePrice: 3000, image: '🚗' },
  { id: 2, type: 'Comfort', description: 'Spacious and comfortable sedan', capacity: 4, basePrice: 5000, image: '🚙' },
  { id: 3, type: 'SUV', description: 'Perfect for families or groups', capacity: 7, basePrice: 8000, image: '🚐' },
  { id: 4, type: 'Executive', description: 'Premium rides for business travel', capacity: 4, basePrice: 12000, image: '🏎️' },
]

function searchCabs() {
  // TODO: implement cab search
}
</script>

<style scoped>
.category-page { min-height: 100vh; }

.page-header {
  background: linear-gradient(135deg, #065f46, #10b981);
  color: #fff;
  padding: 3rem 1.5rem;
}

.page-header h1 { font-size: 2rem; font-weight: 800; }
.page-header p { color: #d1fae5; margin-top: 0.5rem; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
.content { padding-top: 2rem; padding-bottom: 4rem; }

.booking-form {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.75rem;
  margin-bottom: 2.5rem;
}

.booking-form h2 { font-size: 1.2rem; font-weight: 700; color: #111827; margin-bottom: 1.25rem; }

.form-row { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.25rem; }

.field { display: flex; flex-direction: column; gap: 0.35rem; flex: 1; min-width: 180px; }
label { font-size: 0.875rem; font-weight: 500; color: #374151; }

input {
  padding: 0.7rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.9rem;
  outline: none;
}

input:focus { border-color: #10b981; }

.btn-search {
  padding: 0.75rem 2rem;
  background: #10b981;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-search:hover { background: #059669; }

.listings {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
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
  height: 120px;
  background: #ecfdf5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
}

.card-body { padding: 1.25rem; }
.card-body h3 { font-weight: 700; color: #111827; }
.desc { font-size: 0.85rem; color: #6b7280; margin: 0.35rem 0 0.25rem; }
.capacity { font-size: 0.85rem; color: #374151; margin-bottom: 1rem; }

.footer { display: flex; align-items: center; justify-content: space-between; }
.price { font-size: 0.9rem; color: #374151; }
.price strong { color: #111827; }

.btn-book {
  padding: 0.5rem 1rem;
  background: #10b981;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-book:hover { background: #059669; }
</style>

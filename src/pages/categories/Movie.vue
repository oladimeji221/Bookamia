<template>
  <div class="category-page">
    <div class="page-header">
      <div class="container">
        <h1>🎬 Movies</h1>
        <p>Check showtimes and book your cinema tickets</p>
      </div>
    </div>

    <div class="container content">
      <div class="filters">
        <input type="text" v-model="search" placeholder="Search movies..." />
        <select v-model="genre">
          <option value="">All Genres</option>
          <option value="action">Action</option>
          <option value="drama">Drama</option>
          <option value="comedy">Comedy</option>
          <option value="nollywood">Nollywood</option>
        </select>
      </div>

      <div class="listings">
        <div class="listing-card" v-for="movie in movies" :key="movie.id">
          <div class="card-img">{{ movie.image }}</div>
          <div class="card-body">
            <span class="genre-tag">{{ movie.genre }}</span>
            <h3>{{ movie.title }}</h3>
            <p class="cinema">🎥 {{ movie.cinema }}</p>
            <p class="showtimes">
              <span v-for="time in movie.showtimes" :key="time" class="time-pill">{{ time }}</span>
            </p>
            <div class="footer">
              <span class="price"><strong>₦{{ movie.price.toLocaleString() }}</strong></span>
              <button class="btn-book">Buy Ticket</button>
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
const genre = ref('')

const movies = [
  { id: 1, title: 'A Tribe Called Judah', cinema: 'FilmHouse, Lagos', genre: 'Nollywood', showtimes: ['12:00', '15:30', '18:00'], price: 4500, image: '🎞️' },
  { id: 2, title: 'Oppenheimer', cinema: 'Silverbird, Abuja', genre: 'Drama', showtimes: ['13:00', '16:00', '20:00'], price: 5000, image: '💣' },
  { id: 3, title: 'The Equalizer 3', cinema: 'Genesis, Lagos', genre: 'Action', showtimes: ['11:00', '14:30', '19:00'], price: 4500, image: '🔫' },
  { id: 4, title: 'No Hard Feelings', cinema: 'Filmhouse, PH', genre: 'Comedy', showtimes: ['12:30', '15:00', '17:30'], price: 4000, image: '😆' },
]
</script>

<style scoped>
.category-page { min-height: 100vh; }

.page-header {
  background: linear-gradient(135deg, #7f1d1d, #ef4444);
  color: #fff;
  padding: 3rem 1.5rem;
}

.page-header h1 { font-size: 2rem; font-weight: 800; }
.page-header p { color: #fee2e2; margin-top: 0.5rem; }

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
  height: 160px;
  background: #1c1917;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
}

.card-body { padding: 1.25rem; }
.genre-tag { font-size: 0.75rem; background: #fee2e2; color: #991b1b; padding: 0.2rem 0.5rem; border-radius: 4px; }
.card-body h3 { font-weight: 700; color: #111827; margin-top: 0.5rem; }
.cinema { font-size: 0.85rem; color: #6b7280; margin: 0.35rem 0 0.5rem; }

.showtimes { display: flex; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 1rem; }

.time-pill {
  font-size: 0.75rem;
  background: #f3f4f6;
  color: #374151;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  border: 1px solid #e5e7eb;
}

.footer { display: flex; align-items: center; justify-content: space-between; }
.price strong { color: #111827; font-size: 1rem; }

.btn-book {
  padding: 0.5rem 1rem;
  background: #ef4444;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-book:hover { background: #dc2626; }
</style>

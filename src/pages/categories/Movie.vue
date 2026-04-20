<template>
  <div>

    <!-- =======================
    Main Banner START -->
    <section class="pt-0">
      <div class="container">
        <div class="rounded-3 p-3 p-sm-5" style="background-image: url('/assets/images/category/movie/cinema.jpg'); background-position: center center; background-repeat: no-repeat; background-size: cover;">
          <div class="row my-2 my-xl-5">
            <div class="col-md-8 mx-auto">
              <h1 class="text-center text-white">Now Showing in Nigeria</h1>
            </div>
          </div>

          <!-- Search form -->
          <form class="bg-mode shadow rounded-3 position-relative p-4 pe-md-5 pb-5 pb-md-4 mb-4">
            <div class="row g-4 align-items-center">
              <!-- City -->
              <div class="col-lg-4">
                <div class="d-flex">
                  <i class="bi bi-geo-alt fs-3 me-2 mt-2"></i>
                  <div class="flex-grow-1">
                    <label class="form-label">City</label>
                    <select class="form-select" v-model="city">
                      <option value="">Select city</option>
                      <option>Lagos</option>
                      <option>Abuja</option>
                      <option>Port Harcourt</option>
                      <option>Ibadan</option>
                      <option>Enugu</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Date -->
              <div class="col-lg-4">
                <div class="d-flex">
                  <i class="bi bi-calendar fs-3 me-2 mt-2"></i>
                  <div class="flex-grow-1">
                    <label class="form-label">Show Date</label>
                    <input type="text" class="form-control" ref="dateInput" placeholder="Select date" readonly>
                  </div>
                </div>
              </div>

              <!-- Genre -->
              <div class="col-lg-4">
                <div class="d-flex">
                  <i class="bi bi-film fs-3 me-2 mt-2"></i>
                  <div class="flex-grow-1">
                    <label class="form-label">Genre</label>
                    <select class="form-select" v-model="genre">
                      <option value="">All Genres</option>
                      <option>Action</option>
                      <option>Drama</option>
                      <option>Comedy</option>
                      <option>Nollywood</option>
                      <option>Thriller</option>
                      <option>Animation</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-position-md-middle">
              <button type="button" class="icon-lg btn btn-round btn-primary mb-0"><i class="bi bi-search fa-fw"></i></button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <!-- =======================
    Main Banner END -->

    <!-- =======================
    Recent Searches START -->
    <section class="pt-4 pb-0" v-if="recentSearches.length">
      <div class="container">
        <div class="row g-2 align-items-center">
          <div class="col-lg-2">
            <h5 class="mb-0">Recent Searches</h5>
          </div>
          <div class="col-lg-10">
            <div class="hstack flex-wrap gap-2">
              <div class="alert bg-light fade show small px-3 py-1 mb-0" role="alert" v-for="(item, i) in recentSearches" :key="i">
                <span class="me-1">{{ item }}</span>
                <button type="button" class="btn-close small p-2" @click="recentSearches.splice(i, 1)"></button>
              </div>
              <button type="button" class="btn btn-sm btn-primary-soft mb-0" @click="recentSearches = []">Clear all</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- =======================
    Recent Searches END -->

    <!-- =======================
    Movie list START -->
    <section class="pt-0">
      <div class="container">
        <!-- Controls row -->
        <div class="row mb-4">
          <div class="col-12">
            <div class="hstack gap-3 justify-content-between justify-content-md-end mt-3">
              <button class="btn btn-primary-soft mb-0 d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMovieFilters">
                <i class="fa-solid fa-sliders-h me-1"></i> Show filters
              </button>
              <span class="text-muted small">{{ movies.length }} movies showing</span>
            </div>
          </div>
        </div>

        <div class="row">
          <!-- Sidebar START -->
          <aside class="col-xl-4 col-xxl-3">
            <div class="offcanvas-xl offcanvas-end" tabindex="-1" id="offcanvasMovieFilters">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title">Advance Filters</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMovieFilters"></button>
              </div>
              <div class="offcanvas-body flex-column p-3 p-xl-0">
                <form class="rounded-3 shadow">

                  <!-- Genre -->
                  <div class="card card-body rounded-0 rounded-top p-4">
                    <h6 class="mb-2">Genre</h6>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="g1"><label class="form-check-label" for="g1">Nollywood</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="g2"><label class="form-check-label" for="g2">Action</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="g3"><label class="form-check-label" for="g3">Drama</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="g4"><label class="form-check-label" for="g4">Comedy</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="g5"><label class="form-check-label" for="g5">Thriller</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="g6"><label class="form-check-label" for="g6">Animation</label></div>
                  </div>

                  <hr class="my-0">

                  <!-- Ticket Price -->
                  <div class="card card-body rounded-0 p-4">
                    <h6 class="mb-2">Ticket Price</h6>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="mp1"><label class="form-check-label" for="mp1">Under ₦3,000</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="mp2"><label class="form-check-label" for="mp2">₦3,000 – ₦5,000</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="mp3"><label class="form-check-label" for="mp3">₦5,000 – ₦8,000</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="mp4"><label class="form-check-label" for="mp4">₦8,000+</label></div>
                  </div>

                  <hr class="my-0">

                  <!-- Cinema -->
                  <div class="card card-body rounded-0 p-4">
                    <h6 class="mb-2">Cinema</h6>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ci1"><label class="form-check-label" for="ci1">FilmHouse Cinemas</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ci2"><label class="form-check-label" for="ci2">Silverbird Cinemas</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ci3"><label class="form-check-label" for="ci3">Genesis Cinemas</label></div>
                    <div class="form-check"><input class="form-check-input" type="checkbox" id="ci4"><label class="form-check-label" for="ci4">Ozone Cinemas</label></div>
                  </div>

                  <hr class="my-0">

                  <!-- Rating -->
                  <div class="card card-body rounded-0 rounded-bottom p-4">
                    <h6 class="mb-2">Rating</h6>
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item mb-1"><input type="checkbox" class="btn-check" id="mr1"><label class="btn btn-sm btn-light" for="mr1">G</label></li>
                      <li class="list-inline-item mb-1"><input type="checkbox" class="btn-check" id="mr2"><label class="btn btn-sm btn-light" for="mr2">PG</label></li>
                      <li class="list-inline-item mb-1"><input type="checkbox" class="btn-check" id="mr3"><label class="btn btn-sm btn-light" for="mr3">PG-13</label></li>
                      <li class="list-inline-item mb-1"><input type="checkbox" class="btn-check" id="mr4"><label class="btn btn-sm btn-light" for="mr4">18+</label></li>
                    </ul>
                  </div>

                </form>
                <div class="d-flex justify-content-between p-2 p-xl-0 mt-xl-4">
                  <button class="btn btn-link p-0 mb-0">Clear all</button>
                  <button class="btn btn-primary mb-0">Filter Result</button>
                </div>
              </div>
            </div>
          </aside>
          <!-- Sidebar END -->

          <!-- Main content START -->
          <div class="col-xl-8 col-xxl-9">

            <!-- Info alert -->
            <div class="alert alert-info alert-dismissible fade show small mb-4" role="alert">
              <i class="bi bi-info-circle me-2"></i>
              Book cinema tickets online and skip the queue — available at FilmHouse, Silverbird, Genesis and more cinemas across Nigeria.
              <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>

            <!-- Movies grid -->
            <div class="row g-4">
              <div class="col-sm-6 col-lg-4" v-for="movie in paginatedMovies" :key="movie.id">
                <div class="card shadow h-100">
                  <!-- Poster image -->
                  <div class="position-relative">
                    <img :src="movie.image" class="card-img-top" :alt="movie.title" style="height: 220px; object-fit: cover;">
                    <span class="badge text-bg-danger position-absolute top-0 start-0 m-2">{{ movie.genre }}</span>
                    <span class="badge text-bg-dark position-absolute top-0 end-0 m-2">{{ movie.rating }}</span>
                  </div>
                  <!-- Body -->
                  <div class="card-body d-flex flex-column">
                    <h6 class="card-title fw-bold mb-1">
                      <a href="#" class="stretched-link text-dark text-decoration-none" data-bs-toggle="modal" data-bs-target="#comingSoonModal">{{ movie.title }}</a>
                    </h6>
                    <small class="text-muted mb-2"><i class="bi bi-camera-reels me-1"></i>{{ movie.cinema }}</small>
                    <!-- Showtimes -->
                    <div class="d-flex flex-wrap gap-1 mb-3">
                      <span class="badge bg-light text-dark border" v-for="time in movie.showtimes" :key="time">{{ time }}</span>
                    </div>
                    <div class="mt-auto d-flex align-items-center justify-content-between">
                      <div>
                        <span class="text-muted small">From</span>
                        <span class="fw-bold ms-1">₦{{ movie.price.toLocaleString() }}</span>
                      </div>
                      <a href="#" class="btn btn-sm btn-dark mb-0" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Buy Ticket</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pagination -->
            <nav class="mt-5" v-if="totalPages > 1">
              <ul class="pagination pagination-sm justify-content-center">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                  <a class="page-link" href="#" @click.prevent="currentPage--">
                    <i class="bi bi-chevron-left"></i>
                  </a>
                </li>
                <li class="page-item" v-for="n in totalPages" :key="n" :class="{ active: currentPage === n }">
                  <a class="page-link" href="#" @click.prevent="currentPage = n">{{ n }}</a>
                </li>
                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                  <a class="page-link" href="#" @click.prevent="currentPage++">
                    <i class="bi bi-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </nav>

          </div>
          <!-- Main content END -->
        </div>
      </div>
    </section>
    <!-- =======================
    Movie list END -->

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const city = ref('')
const date = ref('')
const dateInput = ref(null)
const genre = ref('')
const currentPage = ref(1)
const perPage = 6

const recentSearches = ref(['A Tribe Called Judah', 'FilmHouse Lagos', 'Silverbird Abuja', 'Nollywood Latest', 'Genesis Cinemas PH'])

onMounted(() => {
  if (window.flatpickr && dateInput.value) {
    window.flatpickr(dateInput.value, {
      dateFormat: 'M j, Y',
      minDate: 'today',
      onChange(selectedDates, dateStr) { date.value = dateStr },
    })
  }
})

const movies = [
  {
    id: 1,
    title: 'A Tribe Called Judah',
    cinema: 'FilmHouse, Victoria Island',
    genre: 'Nollywood',
    rating: 'PG-13',
    showtimes: ['12:00', '15:30', '18:00', '20:30'],
    price: 4500,
    image: '/assets/images/category/movie/movie1.jpg',
  },
  {
    id: 2,
    title: 'Breath of Life',
    cinema: 'Silverbird, Galleria Lagos',
    genre: 'Drama',
    rating: 'PG',
    showtimes: ['11:00', '14:00', '17:00', '20:00'],
    price: 5000,
    image: '/assets/images/category/movie/movie2.jpg',
  },
  {
    id: 3,
    title: 'Jade & the Dragon',
    cinema: 'Genesis, Lekki Phase 1',
    genre: 'Action',
    rating: 'PG-13',
    showtimes: ['12:30', '15:00', '18:30', '21:00'],
    price: 4500,
    image: '/assets/images/category/movie/movie3.jpg',
  },
  {
    id: 4,
    title: 'No Hard Feelings',
    cinema: 'Ozone Cinemas, Lagos',
    genre: 'Comedy',
    rating: 'PG-13',
    showtimes: ['13:00', '16:00', '19:00'],
    price: 4000,
    image: '/assets/images/category/movie/movie4.jpg',
  },
  {
    id: 5,
    title: 'The Covenant',
    cinema: 'Silverbird, Abuja',
    genre: 'Thriller',
    rating: '18+',
    showtimes: ['14:00', '17:30', '21:00'],
    price: 5500,
    image: '/assets/images/category/movie/movie5.jpg',
  },
  {
    id: 6,
    title: 'Mufasa: The Lion King',
    cinema: 'FilmHouse, Ikeja City Mall',
    genre: 'Animation',
    rating: 'G',
    showtimes: ['10:00', '12:30', '15:00', '17:30'],
    price: 3500,
    image: '/assets/images/category/movie/movie6.jpg',
  },
]

const totalPages = computed(() => Math.ceil(movies.length / perPage))

const paginatedMovies = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return movies.slice(start, start + perPage)
})
</script>

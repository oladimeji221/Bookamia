<template>
  <div v-if="movie">

    <!-- =======================
    Movie Title START -->
    <section class="py-0 pt-4">
      <div class="container">
        <div class="d-lg-flex justify-content-lg-between align-items-start mb-3">
          <!-- Title -->
          <div class="mb-2 mb-lg-0">
            <h1 class="fs-2 mb-1">{{ movie.title }}</h1>
            <div class="d-flex flex-wrap gap-2 mb-1">
              <span class="badge text-bg-danger">{{ movie.genre }}</span>
              <span class="badge text-bg-dark">{{ movie.rating }}</span>
            </div>
            <!-- Audience rating stars -->
            <ul class="list-inline mb-0 mt-1">
              <li class="list-inline-item me-0 small" v-for="n in Math.floor(movie.audienceRating)" :key="n">
                <i class="fa-solid fa-star text-warning"></i>
              </li>
              <li class="list-inline-item me-0 small" v-if="movie.audienceRating % 1 >= 0.5">
                <i class="fa-solid fa-star-half-alt text-warning"></i>
              </li>
              <li class="list-inline-item ms-1 small text-muted">({{ movie.reviewCount }} reviews)</li>
            </ul>
          </div>
          <!-- Action buttons -->
          <ul class="list-inline text-end mb-0">
            <li class="list-inline-item">
              <a href="#" class="btn btn-sm btn-light px-2" data-bs-toggle="modal" data-bs-target="#comingSoonModal"><i class="fa-solid fa-fw fa-heart"></i></a>
            </li>
            <li class="list-inline-item dropdown">
              <a href="#" class="btn btn-sm btn-light px-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-fw fa-share-alt"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-end min-w-auto shadow rounded">
                <li><a class="dropdown-item" href="https://x.com/intent/tweet?text=Check%20this%20out%20on%20Bookamia" target="_blank" rel="noopener"><i class="fab fa-twitter-square me-2"></i>Twitter</a></li>
                <li><a class="dropdown-item" href="https://www.facebook.com/sharer/sharer.php?u=https://www.bookamia.com" target="_blank" rel="noopener"><i class="fab fa-facebook-square me-2"></i>Facebook</a></li>
                <li><a class="dropdown-item" href="https://wa.me/?text=Check%20this%20out%20on%20Bookamia" target="_blank" rel="noopener"><i class="fab fa-whatsapp me-2"></i>WhatsApp</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- =======================
    Movie Title END -->

    <!-- =======================
    Movie Poster START -->
    <section class="card-grid pt-0">
      <div class="container">
        <div class="row g-2">
          <div class="col-12 col-md-6">
            <a :href="movie.image" data-glightbox data-gallery="gallery">
              <div class="card card-grid-lg card-element-hover card-overlay-hover overflow-hidden"
                :style="`background-image:url(${movie.image}); background-position: center center; background-size: cover;`">
                <div class="hover-element position-absolute w-100 h-100">
                  <i class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-6 d-none d-md-flex align-items-center justify-content-center bg-light rounded-3">
            <div class="text-center p-5">
              <i class="bi bi-film text-primary" style="font-size: 4rem;"></i>
              <h4 class="mt-3 mb-1">{{ movie.title }}</h4>
              <p class="text-muted mb-1"><i class="bi bi-clock me-1"></i>{{ movie.duration }}</p>
              <p class="text-muted mb-1"><i class="bi bi-camera-reels me-1"></i>{{ movie.genre }}</p>
              <p class="text-muted mb-0"><i class="bi bi-person me-1"></i>Dir. {{ movie.director }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- =======================
    Movie Poster END -->

    <!-- =======================
    Main content START -->
    <section class="pt-4">
      <div class="container">
        <div class="row g-4 g-xl-5">

          <!-- Left content -->
          <div class="col-xl-7 order-1">
            <div class="vstack gap-5">

              <!-- About This Movie START -->
              <div class="card bg-transparent">
                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                  <h3 class="mb-0">About This Movie</h3>
                </div>
                <div class="card-body pt-4 p-0">

                  <!-- Info pills -->
                  <div class="row g-3 mb-4">
                    <div class="col-sm-4">
                      <div class="bg-light rounded-2 p-3 text-center">
                        <i class="bi bi-clock-fill text-primary fs-4 mb-1 d-block"></i>
                        <h6 class="mb-0 small text-muted">Duration</h6>
                        <p class="mb-0 fw-bold">{{ movie.duration }}</p>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="bg-light rounded-2 p-3 text-center">
                        <i class="bi bi-camera-video-fill text-primary fs-4 mb-1 d-block"></i>
                        <h6 class="mb-0 small text-muted">Director</h6>
                        <p class="mb-0 fw-bold">{{ movie.director }}</p>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="bg-light rounded-2 p-3 text-center">
                        <i class="fa-solid fa-star text-warning fs-4 mb-1 d-block"></i>
                        <h6 class="mb-0 small text-muted">Audience Rating</h6>
                        <p class="mb-0 fw-bold">{{ movie.audienceRating }}/5.0</p>
                      </div>
                    </div>
                  </div>

                  <!-- Cast -->
                  <h5 class="fw-light mb-2">Cast</h5>
                  <ul class="nav nav-divider mb-4">
                    <li class="nav-item" v-for="actor in movie.cast" :key="actor">{{ actor }}</li>
                  </ul>

                  <!-- Synopsis -->
                  <h5 class="fw-light mb-2">Synopsis</h5>
                  <p class="mb-3">{{ movie.synopsis }}</p>

                  <!-- Language -->
                  <p class="h6 fw-light mb-0">
                    <i class="bi bi-translate me-2 text-primary"></i>Language: English
                  </p>
                </div>
              </div>
              <!-- About This Movie END -->

              <!-- Showtimes START -->
              <div class="card bg-transparent" id="showtimes">
                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                  <h3 class="mb-0">Available Showtimes</h3>
                </div>
                <div class="card-body pt-4 p-0">

                  <!-- Cinema details -->
                  <div class="card bg-light p-3 mb-4">
                    <div class="d-flex align-items-start gap-3">
                      <i class="bi bi-camera-reels-fill text-primary fs-3 flex-shrink-0 mt-1"></i>
                      <div>
                        <h6 class="mb-1">{{ movie.cinemaDetails.name }}</h6>
                        <p class="mb-0 small text-muted">{{ movie.cinemaDetails.address }}, {{ movie.cinemaDetails.city }}</p>
                      </div>
                    </div>
                  </div>

                  <!-- Showtime buttons -->
                  <h6 class="fw-light mb-3">Select a showtime:</h6>
                  <div class="d-flex flex-wrap gap-2 mb-4">
                    <button
                      v-for="time in movie.showtimes"
                      :key="time"
                      class="btn btn-sm mb-0"
                      :class="selectedShowtime === time ? 'btn-primary' : 'btn-outline-secondary'"
                      @click="selectedShowtime = time"
                    >{{ time }}</button>
                  </div>

                  <!-- Seat type options -->
                  <h6 class="fw-light mb-3">Select a seat type:</h6>
                  <div class="row g-3">
                    <div class="col-md-6" v-for="seatType in movie.seatTypes" :key="seatType.type">
                      <div class="card border h-100">
                        <div class="card-body p-3">
                          <div class="d-flex justify-content-between align-items-start mb-2">
                            <h6 class="card-title mb-0">{{ seatType.type }}</h6>
                            <span class="badge text-bg-primary">
                              <span v-if="seatType.type === 'IMAX'">IMAX</span>
                              <span v-else-if="seatType.type === 'VIP'">VIP</span>
                              <span v-else>Standard</span>
                            </span>
                          </div>
                          <h5 class="text-primary mb-3">&#8358;{{ seatType.price.toLocaleString() }}</h5>
                          <ul class="list-group list-group-borderless mb-3">
                            <li class="list-group-item small pb-0 mb-0 px-0" v-if="seatType.type === 'Standard'">
                              <i class="bi bi-check-circle-fill text-success me-1"></i>Comfortable seating
                            </li>
                            <li class="list-group-item small pb-0 mb-0 px-0" v-if="seatType.type === 'Standard'">
                              <i class="bi bi-check-circle-fill text-success me-1"></i>Great screen view
                            </li>
                            <li class="list-group-item small pb-0 mb-0 px-0" v-if="seatType.type === 'VIP'">
                              <i class="bi bi-check-circle-fill text-success me-1"></i>Premium recliner seats
                            </li>
                            <li class="list-group-item small pb-0 mb-0 px-0" v-if="seatType.type === 'VIP'">
                              <i class="bi bi-check-circle-fill text-success me-1"></i>Dedicated service
                            </li>
                            <li class="list-group-item small pb-0 mb-0 px-0" v-if="seatType.type === 'IMAX'">
                              <i class="bi bi-check-circle-fill text-success me-1"></i>Giant IMAX screen
                            </li>
                            <li class="list-group-item small pb-0 mb-0 px-0" v-if="seatType.type === 'IMAX'">
                              <i class="bi bi-check-circle-fill text-success me-1"></i>Immersive surround sound
                            </li>
                          </ul>
                          <router-link
                            :to="`/categories/movies/${movie.id}/booking?showtime=${selectedShowtime || movie.showtimes[0]}&seat=${seatType.type}`"
                            class="btn btn-sm btn-primary mb-0 w-100"
                          >Select</router-link>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <!-- Showtimes END -->

              <!-- Customer Reviews START -->
              <div class="card bg-transparent">
                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                  <h3 class="mb-0">Audience Reviews</h3>
                </div>
                <div class="card-body pt-4 p-0">
                  <!-- Rating summary -->
                  <div class="card bg-light p-4 mb-4">
                    <div class="row g-4 align-items-center">
                      <div class="col-md-4 text-center">
                        <h2 class="mb-0">{{ movie.audienceRating }}</h2>
                        <p class="mb-2">Based on {{ movie.reviewCount }} Reviews</p>
                        <ul class="list-inline mb-0">
                          <li class="list-inline-item me-0 small" v-for="n in Math.floor(movie.audienceRating)" :key="n">
                            <i class="fa-solid fa-star text-warning"></i>
                          </li>
                          <li class="list-inline-item me-0 small" v-if="movie.audienceRating % 1 >= 0.5">
                            <i class="fa-solid fa-star-half-alt text-warning"></i>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-8">
                        <div class="row gx-3 g-2 align-items-center">
                          <div class="col-10">
                            <div class="progress progress-sm bg-warning bg-opacity-15">
                              <div class="progress-bar bg-warning" style="width:88%"></div>
                            </div>
                          </div>
                          <div class="col-2 text-end"><span class="h6 fw-light mb-0">88%</span></div>
                          <div class="col-10">
                            <div class="progress progress-sm bg-warning bg-opacity-15">
                              <div class="progress-bar bg-warning" style="width:72%"></div>
                            </div>
                          </div>
                          <div class="col-2 text-end"><span class="h6 fw-light mb-0">72%</span></div>
                          <div class="col-10">
                            <div class="progress progress-sm bg-warning bg-opacity-15">
                              <div class="progress-bar bg-warning" style="width:45%"></div>
                            </div>
                          </div>
                          <div class="col-2 text-end"><span class="h6 fw-light mb-0">45%</span></div>
                          <div class="col-10">
                            <div class="progress progress-sm bg-warning bg-opacity-15">
                              <div class="progress-bar bg-warning" style="width:10%"></div>
                            </div>
                          </div>
                          <div class="col-2 text-end"><span class="h6 fw-light mb-0">10%</span></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Leave review form -->
                  <form class="mb-5">
                    <div class="form-control-bg-light mb-3">
                      <select class="form-select">
                        <option selected>&#9733;&#9733;&#9733;&#9733;&#9733; (5/5)</option>
                        <option>&#9733;&#9733;&#9733;&#9733;&#9734; (4/5)</option>
                        <option>&#9733;&#9733;&#9733;&#9734;&#9734; (3/5)</option>
                        <option>&#9733;&#9733;&#9734;&#9734;&#9734; (2/5)</option>
                        <option>&#9733;&#9734;&#9734;&#9734;&#9734; (1/5)</option>
                      </select>
                    </div>
                    <div class="form-control-bg-light mb-3">
                      <textarea class="form-control" placeholder="Write your review..." rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-lg btn-primary mb-0">
                      Post review <i class="bi fa-fw bi-arrow-right ms-2"></i>
                    </button>
                  </form>

                  <!-- Review items -->
                  <div v-for="(review, idx) in movie.reviews" :key="idx">
                    <div class="d-md-flex my-4">
                      <div class="avatar avatar-lg me-3 flex-shrink-0">
                        <img class="avatar-img rounded-circle" :src="review.avatar" :alt="review.name"
                          style="width:56px;height:56px;object-fit:cover;">
                      </div>
                      <div class="flex-grow-1">
                        <div class="d-flex justify-content-between mt-1 mt-md-0">
                          <div>
                            <h6 class="me-3 mb-0">{{ review.name }}</h6>
                            <ul class="nav nav-divider small mb-2">
                              <li class="nav-item">{{ review.date }}</li>
                              <li class="nav-item">{{ review.reviewsWritten }} Reviews written</li>
                            </ul>
                          </div>
                          <div class="icon-md rounded text-bg-warning fs-6 flex-shrink-0">{{ review.rating }}</div>
                        </div>
                        <p class="mb-2">{{ review.comment }}</p>
                      </div>
                    </div>
                    <hr>
                  </div>

                  <!-- Load more -->
                  <div class="text-center">
                    <a href="#" class="btn btn-primary-soft mb-0" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Load more reviews</a>
                  </div>
                </div>
              </div>
              <!-- Customer Reviews END -->

            </div>
          </div>
          <!-- Left content END -->

          <!-- Right sidebar -->
          <aside class="col-xl-5 order-xl-2">
            <div class="card card-body border sticky-top" style="top: 80px;">
              <!-- Price -->
              <div class="d-sm-flex justify-content-sm-between align-items-center mb-3">
                <div>
                  <span class="text-muted small">Tickets from</span>
                  <h4 class="card-title mb-0">&#8358;{{ movie.seatTypes[0].price.toLocaleString() }}</h4>
                </div>
                <div class="text-sm-end mt-2 mt-sm-0">
                  <span class="badge text-bg-danger">{{ movie.rating }}</span>
                </div>
              </div>
              <!-- Audience rating -->
              <ul class="list-inline mb-2">
                <li class="list-inline-item me-1 h6 fw-light mb-0">{{ movie.audienceRating }}</li>
                <li class="list-inline-item me-0 small" v-for="n in Math.floor(movie.audienceRating)" :key="n">
                  <i class="fa-solid fa-star text-warning"></i>
                </li>
                <li class="list-inline-item me-0 small" v-if="movie.audienceRating % 1 >= 0.5">
                  <i class="fa-solid fa-star-half-alt text-warning"></i>
                </li>
                <li class="list-inline-item ms-1 small text-muted">({{ movie.reviewCount }} reviews)</li>
              </ul>
              <p class="h6 fw-light mb-2">
                <i class="bi bi-clock me-2 text-primary"></i>{{ movie.duration }}
              </p>
              <!-- Cinema location -->
              <div class="bg-light rounded-2 p-3 mb-4">
                <h6 class="mb-1"><i class="bi bi-camera-reels me-2 text-primary"></i>{{ movie.cinemaDetails.name }}</h6>
                <p class="small text-muted mb-0">{{ movie.cinemaDetails.address }}, {{ movie.cinemaDetails.city }}</p>
              </div>
              <div class="d-grid">
                <a href="#showtimes" class="btn btn-lg btn-primary mb-0">
                  <i class="bi bi-ticket-perforated me-2"></i>Select Showtime
                </a>
              </div>
              <div class="d-grid mt-2">
                <router-link to="/categories/movies" class="btn btn-lg btn-outline-secondary mb-0">
                  <i class="bi bi-arrow-left me-2"></i>Back to Movies
                </router-link>
              </div>
            </div>
          </aside>
          <!-- Right sidebar END -->

        </div>
      </div>
    </section>
    <!-- =======================
    Main content END -->

  </div>

  <!-- Movie not found -->
  <div v-else class="container py-5 text-center">
    <h3>Movie not found</h3>
    <router-link to="/categories/movies" class="btn btn-primary mt-3">Back to Movies</router-link>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { movies } from '@/data/movies.js'

const route = useRoute()
const movie = computed(() => movies.find(m => m.id === Number(route.params.id)))

const selectedShowtime = ref('')

onMounted(() => {
  nextTick(() => {
    if (window.GLightbox) {
      window.GLightbox({ selector: '[data-glightbox]' })
    }
  })
})
</script>

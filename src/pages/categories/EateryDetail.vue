<template>
  <div v-if="eatery">

    <!-- =======================
    Eatery Title START -->
    <section class="py-0 pt-4">
      <div class="container">
        <div class="d-lg-flex justify-content-lg-between align-items-start mb-3">
          <!-- Title -->
          <div class="mb-2 mb-lg-0">
            <h1 class="fs-2 mb-1">{{ eatery.name }}</h1>
            <p class="fw-bold mb-0">
              <i class="bi bi-geo-alt me-2"></i>{{ eatery.location }}
              <a href="#" class="ms-2 text-decoration-underline" data-bs-toggle="modal" data-bs-target="#mapmodal">
                <i class="bi bi-eye-fill me-1"></i>View On Map
              </a>
            </p>
            <!-- Rating stars -->
            <ul class="list-inline mb-0 mt-1">
              <li class="list-inline-item me-0 small" v-for="n in Math.floor(eatery.rating)" :key="n">
                <i class="fa-solid fa-star text-warning"></i>
              </li>
              <li class="list-inline-item me-0 small" v-if="eatery.rating % 1 >= 0.5">
                <i class="fa-solid fa-star-half-alt text-warning"></i>
              </li>
              <li class="list-inline-item ms-1 small text-muted">({{ eatery.reviewCount }} reviews)</li>
            </ul>
          </div>
          <!-- Action buttons -->
          <ul class="list-inline text-end mb-0">
            <li class="list-inline-item">
              <a href="#" class="btn btn-sm btn-light px-2"><i class="fa-solid fa-fw fa-heart"></i></a>
            </li>
            <li class="list-inline-item dropdown">
              <a href="#" class="btn btn-sm btn-light px-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-fw fa-share-alt"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-end min-w-auto shadow rounded">
                <li><a class="dropdown-item" href="#"><i class="fab fa-twitter-square me-2"></i>Twitter</a></li>
                <li><a class="dropdown-item" href="#"><i class="fab fa-facebook-square me-2"></i>Facebook</a></li>
                <li><a class="dropdown-item" href="#"><i class="fa-solid fa-copy me-2"></i>Copy link</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- =======================
    Eatery Title END -->

    <!-- =======================
    Image Gallery START -->
    <section class="card-grid pt-0">
      <div class="container">
        <div class="row g-2">
          <!-- Main large image -->
          <div class="col-md-6">
            <a :href="eatery.gallery[0]" data-glightbox data-gallery="gallery">
              <div class="card card-grid-lg card-element-hover card-overlay-hover overflow-hidden"
                :style="`background-image:url(${eatery.gallery[0]}); background-position: center left; background-size: cover;`">
                <div class="hover-element position-absolute w-100 h-100">
                  <i class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                </div>
              </div>
            </a>
          </div>

          <div class="col-md-6">
            <div class="row g-2">
              <!-- Top wide image -->
              <div class="col-12">
                <a :href="eatery.gallery[1]" data-glightbox data-gallery="gallery">
                  <div class="card card-grid-sm card-element-hover card-overlay-hover overflow-hidden"
                    :style="`background-image:url(${eatery.gallery[1]}); background-position: center left; background-size: cover;`">
                    <div class="hover-element position-absolute w-100 h-100">
                      <i class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                    </div>
                  </div>
                </a>
              </div>

              <!-- Bottom left image -->
              <div class="col-md-6">
                <a :href="eatery.gallery[2]" data-glightbox data-gallery="gallery">
                  <div class="card card-grid-sm card-element-hover card-overlay-hover overflow-hidden"
                    :style="`background-image:url(${eatery.gallery[2]}); background-position: center left; background-size: cover;`">
                    <div class="hover-element position-absolute w-100 h-100">
                      <i class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                    </div>
                  </div>
                </a>
              </div>

              <!-- Bottom right: "View all" overlay -->
              <div class="col-md-6">
                <div class="card card-grid-sm overflow-hidden"
                  :style="`background-image:url(${eatery.gallery[3]}); background-position: center left; background-size: cover;`">
                  <div class="bg-overlay bg-dark opacity-7"></div>
                  <!-- All gallery images registered for glightbox -->
                  <a :href="eatery.gallery[3]" data-glightbox data-gallery="gallery" class="stretched-link z-index-9"></a>
                  <a :href="eatery.gallery[4]" data-glightbox data-gallery="gallery"></a>
                  <!-- Overlay text -->
                  <div class="card-img-overlay d-flex h-100 w-100">
                    <h6 class="card-title m-auto fw-light text-decoration-underline">
                      <a href="#" class="text-white">View all</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- =======================
    Image Gallery END -->

    <!-- =======================
    Main content START -->
    <section class="pt-4">
      <div class="container">
        <div class="row g-4 g-xl-5">

          <!-- Left content -->
          <div class="col-xl-7 order-1">
            <div class="vstack gap-5">

              <!-- About restaurant -->
              <div class="card bg-transparent">
                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                  <h3 class="mb-0">About This Restaurant</h3>
                </div>
                <div class="card-body pt-4 p-0">
                  <h5 class="fw-light mb-3">Main Highlights</h5>
                  <div class="hstack gap-3 mb-4">
                    <div class="icon-lg bg-light h5 rounded-2" v-for="icon in eatery.highlights" :key="icon"
                      :data-bs-toggle="'tooltip'" :title="icon">
                      <i :class="`fa-solid fa-${icon}`"></i>
                    </div>
                  </div>
                  <p class="mb-3">{{ eatery.description }}</p>
                  <div class="collapse" id="collapseAbout">
                    <p class="mb-0">{{ eatery.descriptionExtra }}</p>
                  </div>
                  <a class="p-0 mb-4 mt-2 btn-more d-flex align-items-center collapsed"
                    data-bs-toggle="collapse" href="#collapseAbout" role="button"
                    aria-expanded="false" aria-controls="collapseAbout">
                    See <span class="see-more ms-1">more</span><span class="see-less ms-1">less</span>
                    <i class="fa-solid fa-angle-down ms-2"></i>
                  </a>
                  <div class="row g-3 mt-1">
                    <div class="col-sm-6">
                      <div class="bg-light rounded-2 p-3">
                        <h6 class="mb-1"><i class="bi bi-people-fill me-2 text-primary"></i>Seating Capacity</h6>
                        <p class="mb-0 fw-bold">{{ eatery.about.seatingCapacity }} guests</p>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="bg-light rounded-2 p-3">
                        <h6 class="mb-1"><i class="bi bi-clock-fill me-2 text-primary"></i>Opening Hours</h6>
                        <p class="mb-0 fw-bold small">{{ eatery.openingHours }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Menu Section -->
              <div class="card bg-transparent" id="menu-section">
                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                  <h3 class="mb-0">Menu</h3>
                </div>
                <div class="card-body pt-4 p-0">
                  <div class="vstack gap-4">
                    <div class="card shadow p-3" v-for="category in eatery.menu" :key="category.category">
                      <div class="card-header bg-transparent border-bottom pb-2 mb-3 px-0 pt-0">
                        <h5 class="mb-0"><i class="fa-solid fa-utensils me-2 text-primary"></i>{{ category.category }}</h5>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex justify-content-between align-items-center px-0"
                          v-for="item in category.items" :key="item.name">
                          <span class="h6 fw-light mb-0">{{ item.name }}</span>
                          <span class="fw-bold text-primary">₦{{ item.price.toLocaleString() }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Customer Reviews -->
              <div class="card bg-transparent">
                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                  <h3 class="mb-0">Customer Reviews</h3>
                </div>
                <div class="card-body pt-4 p-0">
                  <!-- Rating summary -->
                  <div class="card bg-light p-4 mb-4">
                    <div class="row g-4 align-items-center">
                      <div class="col-md-4 text-center">
                        <h2 class="mb-0">{{ eatery.rating }}</h2>
                        <p class="mb-2">Based on {{ eatery.reviewCount }} Reviews</p>
                        <ul class="list-inline mb-0">
                          <li class="list-inline-item me-0 small" v-for="n in Math.floor(eatery.rating)" :key="n">
                            <i class="fa-solid fa-star text-warning"></i>
                          </li>
                          <li class="list-inline-item me-0 small" v-if="eatery.rating % 1 >= 0.5">
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
                              <div class="progress-bar bg-warning" style="width:70%"></div>
                            </div>
                          </div>
                          <div class="col-2 text-end"><span class="h6 fw-light mb-0">70%</span></div>
                          <div class="col-10">
                            <div class="progress progress-sm bg-warning bg-opacity-15">
                              <div class="progress-bar bg-warning" style="width:50%"></div>
                            </div>
                          </div>
                          <div class="col-2 text-end"><span class="h6 fw-light mb-0">50%</span></div>
                          <div class="col-10">
                            <div class="progress progress-sm bg-warning bg-opacity-15">
                              <div class="progress-bar bg-warning" style="width:15%"></div>
                            </div>
                          </div>
                          <div class="col-2 text-end"><span class="h6 fw-light mb-0">15%</span></div>
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
                  <div v-for="(review, idx) in eatery.reviews" :key="idx">
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

                    <!-- Manager reply -->
                    <div class="my-3 ps-2 ps-md-4" v-if="review.managerReply">
                      <div class="d-md-flex p-3 bg-light rounded-3">
                        <img class="avatar avatar-sm rounded-circle me-3 flex-shrink-0"
                          src="/assets/images/avatar/12.jpg"
                          alt="Restaurant Manager" style="width:36px;height:36px;object-fit:cover;">
                        <div class="mt-2 mt-md-0">
                          <h6 class="mb-1">Restaurant Manager</h6>
                          <p class="mb-0">{{ review.managerReply }}</p>
                        </div>
                      </div>
                    </div>

                    <hr>
                  </div>

                  <!-- Load more -->
                  <div class="text-center">
                    <a href="#" class="btn btn-primary-soft mb-0">Load more reviews</a>
                  </div>
                </div>
              </div>

              <!-- Restaurant Policies -->
              <div class="card bg-transparent">
                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                  <h3 class="mb-0">Restaurant Policies</h3>
                </div>
                <div class="card-body pt-4 p-0">
                  <ul class="list-group list-group-borderless mb-3">
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="bi bi-arrow-right me-2 mt-1"></i>
                      <span><strong>Reservation:</strong> {{ eatery.policies.reservation }}</span>
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="bi bi-arrow-right me-2 mt-1"></i>
                      <span><strong>Cancellation:</strong> {{ eatery.policies.cancellation }}</span>
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="bi bi-arrow-right me-2 mt-1"></i>
                      <span><strong>Dress Code:</strong> {{ eatery.policies.dress }}</span>
                    </li>
                  </ul>
                  <div class="bg-warning bg-opacity-10 rounded-2 p-3">
                    <p class="mb-0 text-warning-emphasis">All guests are required to honour their reservation time. Please notify us as early as possible if you need to cancel or modify your booking.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <!-- Left content END -->

          <!-- Right sidebar -->
          <aside class="col-xl-5 order-xl-2">
            <div class="card card-body border sticky-top" style="top: 80px;">
              <!-- Avg price -->
              <div class="d-sm-flex justify-content-sm-between align-items-center mb-3">
                <div>
                  <span class="text-muted small">Average spend per person</span>
                  <h4 class="card-title mb-0">&#8358;{{ eatery.avgPrice.toLocaleString() }}</h4>
                </div>
                <div class="text-sm-end mt-2 mt-sm-0">
                  <h6 class="fw-normal mb-0">per person</h6>
                  <small class="text-muted">Prices may vary</small>
                </div>
              </div>
              <!-- Rating -->
              <ul class="list-inline mb-2">
                <li class="list-inline-item me-1 h6 fw-light mb-0">{{ eatery.rating }}</li>
                <li class="list-inline-item me-0 small" v-for="n in Math.floor(eatery.rating)" :key="n">
                  <i class="fa-solid fa-star text-warning"></i>
                </li>
                <li class="list-inline-item me-0 small" v-if="eatery.rating % 1 >= 0.5">
                  <i class="fa-solid fa-star-half-alt text-warning"></i>
                </li>
                <li class="list-inline-item ms-1 small text-muted">({{ eatery.reviewCount }} reviews)</li>
              </ul>
              <!-- Cuisine badge -->
              <p class="h6 fw-light mb-2">
                <i class="bi bi-egg-fried text-primary me-2"></i>
                {{ eatery.cuisine }} Cuisine
              </p>
              <!-- Hours -->
              <p class="h6 fw-light mb-4">
                <i class="bi bi-clock me-2 text-success"></i>{{ eatery.hours }}
              </p>
              <div class="d-grid">
                <router-link :to="`/categories/eatery/${eatery.id}/booking`" class="btn btn-lg btn-primary mb-0">
                  <i class="bi bi-bag-check-fill me-2"></i>Place an Order
                </router-link>
              </div>
              <div class="d-grid mt-2">
                <router-link :to="`/categories/eatery/${eatery.id}/reservation`" class="btn btn-lg btn-outline-primary mb-0">
                  <i class="bi bi-calendar-check me-2"></i>Reserve a Table
                </router-link>
              </div>
              <div class="d-grid mt-2">
                <router-link to="/categories/eatery" class="btn btn-lg btn-outline-secondary mb-0">
                  <i class="bi bi-arrow-left me-2"></i>Back to Eateries
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

    <!-- =======================
    Map Modal START -->
    <div class="modal fade" id="mapmodal" tabindex="-1" aria-labelledby="mapmodalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="mapmodalLabel">
              <i class="bi bi-geo-alt-fill text-primary me-2"></i>{{ eatery.name }}
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-0">
            <iframe
              :src="`https://maps.google.com/maps?q=${encodeURIComponent(eatery.name + ', ' + eatery.location + ', Nigeria')}&output=embed&z=15`"
              width="100%" height="450" style="border:0;" allowfullscreen loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </div>
    <!-- =======================
    Map Modal END -->

  </div>

  <!-- Eatery not found -->
  <div v-else class="container py-5 text-center">
    <h3>Restaurant not found</h3>
    <router-link to="/categories/eatery" class="btn btn-primary mt-3">Back to Eateries</router-link>
  </div>
</template>

<script setup>
import { computed, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { eateries } from '@/data/eateries.js'

const route = useRoute()
const eatery = computed(() => eateries.find(e => e.id === Number(route.params.id)))

onMounted(() => {
  nextTick(() => {
    if (window.GLightbox) {
      window.GLightbox({ selector: '[data-glightbox]' })
    }
  })
})
</script>

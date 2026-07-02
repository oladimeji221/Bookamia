<template>
  <div v-if="cab">

    <!-- =======================
    Cab Title START -->
    <section class="py-0 pt-4">
      <div class="container">
        <div class="d-lg-flex justify-content-lg-between align-items-start mb-3">
          <!-- Title -->
          <div class="mb-2 mb-lg-0">
            <h1 class="fs-2 mb-1">{{ cab.name }}</h1>
            <div class="d-flex flex-wrap gap-2 mb-1">
              <span class="badge text-bg-primary">{{ cab.type }}</span>
              <span class="badge text-bg-secondary">
                <i class="fa-solid fa-user me-1"></i>{{ cab.seats }} Seats
              </span>
            </div>
            <!-- Rating stars -->
            <ul class="list-inline mb-0 mt-1">
              <li class="list-inline-item me-0 small" v-for="n in Math.floor(cab.rating)" :key="n">
                <i class="fa-solid fa-star text-warning"></i>
              </li>
              <li class="list-inline-item me-0 small" v-if="cab.rating % 1 >= 0.5">
                <i class="fa-solid fa-star-half-alt text-warning"></i>
              </li>
              <li class="list-inline-item ms-1 small text-muted">({{ cab.reviewCount }} reviews)</li>
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
    Cab Title END -->

    <!-- =======================
    Image Gallery START -->
    <section class="card-grid pt-0">
      <div class="container">
        <div class="row g-2">
          <!-- Main large image -->
          <div class="col-md-6">
            <a :href="cab.images[0]" data-glightbox data-gallery="gallery">
              <div class="card card-grid-lg card-element-hover card-overlay-hover overflow-hidden"
                :style="`background-image:url(${cab.images[0]}); background-position: center center; background-size: cover;`">
                <div class="hover-element position-absolute w-100 h-100">
                  <i class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                </div>
              </div>
            </a>
          </div>

          <!-- Right column: second image if available -->
          <div class="col-md-6" v-if="cab.images.length > 1">
            <a :href="cab.images[1]" data-glightbox data-gallery="gallery">
              <div class="card card-grid-sm card-element-hover card-overlay-hover overflow-hidden"
                :style="`background-image:url(${cab.images[1]}); background-position: center center; background-size: cover;`">
                <div class="hover-element position-absolute w-100 h-100">
                  <i class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                </div>
              </div>
            </a>
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

              <!-- About This Cab START -->
              <div class="card bg-transparent">
                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                  <h3 class="mb-0">About This Cab</h3>
                </div>
                <div class="card-body pt-4 p-0">
                  <h5 class="fw-light mb-3">Main Highlights</h5>
                  <div class="hstack gap-3 mb-4">
                    <div class="icon-lg bg-light h5 rounded-2" data-bs-toggle="tooltip" title="Comfortable Ride">
                      <i class="fa-solid fa-car"></i>
                    </div>
                    <div class="icon-lg bg-light h5 rounded-2" data-bs-toggle="tooltip" title="Verified Driver">
                      <i class="fa-solid fa-shield-halved"></i>
                    </div>
                    <div class="icon-lg bg-light h5 rounded-2" data-bs-toggle="tooltip" title="In-car WiFi">
                      <i class="fa-solid fa-wifi"></i>
                    </div>
                    <div class="icon-lg bg-light h5 rounded-2" data-bs-toggle="tooltip" title="Luggage Space">
                      <i class="fa-solid fa-suitcase"></i>
                    </div>
                  </div>
                  <p class="mb-3">{{ cab.description }}</p>
                  <div class="collapse" id="collapseAbout">
                    <p class="mb-0">{{ cab.descriptionExtra }}</p>
                  </div>
                  <a class="p-0 mb-4 mt-2 btn-more d-flex align-items-center collapsed"
                    data-bs-toggle="collapse" href="#collapseAbout" role="button"
                    aria-expanded="false" aria-controls="collapseAbout">
                    See <span class="see-more ms-1">more</span><span class="see-less ms-1">less</span>
                    <i class="fa-solid fa-angle-down ms-2"></i>
                  </a>
                  <h5 class="fw-light mb-2">Vehicle Features</h5>
                  <ul class="list-group list-group-borderless mb-0">
                    <li class="list-group-item h6 fw-light d-flex mb-0" v-for="feat in cab.features" :key="feat">
                      <i class="bi bi-patch-check-fill text-success me-2 mt-1"></i>{{ feat }}
                    </li>
                  </ul>
                </div>
              </div>
              <!-- About This Cab END -->

              <!-- Inclusions & Exclusions START -->
              <div class="card bg-transparent">
                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                  <h3 class="mb-0">Inclusions &amp; Exclusions</h3>
                </div>
                <div class="card-body pt-4 p-0">
                  <div class="row g-4">
                    <div class="col-sm-6">
                      <h6 class="mb-3"><i class="bi bi-check-circle-fill text-success me-2"></i>What's Included</h6>
                      <ul class="list-group list-group-borderless mb-0">
                        <li class="list-group-item h6 fw-light d-flex mb-0" v-for="item in cab.inclusions" :key="item">
                          <i class="fa-solid fa-check text-success me-2 mt-1"></i>{{ item }}
                        </li>
                      </ul>
                    </div>
                    <div class="col-sm-6">
                      <h6 class="mb-3"><i class="bi bi-x-circle-fill text-danger me-2"></i>Not Included</h6>
                      <ul class="list-group list-group-borderless mb-0">
                        <li class="list-group-item h6 fw-light d-flex mb-0" v-for="item in cab.exclusions" :key="item">
                          <i class="fa-solid fa-times text-danger me-2 mt-1"></i>{{ item }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Inclusions & Exclusions END -->

              <!-- Driver Info START -->
              <div class="card bg-transparent">
                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                  <h3 class="mb-0">Your Driver</h3>
                </div>
                <div class="card-body pt-4 p-0">
                  <div class="card bg-light p-4">
                    <div class="d-sm-flex align-items-start gap-4">
                      <div class="flex-shrink-0 text-center mb-3 mb-sm-0">
                        <div class="icon-xl bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style="width:80px;height:80px;">
                          <i class="fa-solid fa-user-tie text-primary fs-2"></i>
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <h5 class="mb-1">{{ cab.driverInfo.name }}</h5>
                        <ul class="nav nav-divider small text-muted mb-2">
                          <li class="nav-item">{{ cab.driverInfo.experience }} experience</li>
                          <li class="nav-item">{{ cab.driverInfo.trips }} trips completed</li>
                        </ul>
                        <!-- Driver rating stars -->
                        <ul class="list-inline mb-2">
                          <li class="list-inline-item me-0 small" v-for="n in Math.floor(cab.driverInfo.rating)" :key="n">
                            <i class="fa-solid fa-star text-warning"></i>
                          </li>
                          <li class="list-inline-item me-0 small" v-if="cab.driverInfo.rating % 1 >= 0.5">
                            <i class="fa-solid fa-star-half-alt text-warning"></i>
                          </li>
                          <li class="list-inline-item ms-1 small fw-bold">{{ cab.driverInfo.rating }}/5.0</li>
                        </ul>
                        <p class="mb-0 text-muted">{{ cab.driverInfo.bio }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Driver Info END -->

              <!-- Customer Reviews START -->
              <div class="card bg-transparent">
                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                  <h3 class="mb-0">Customer Reviews</h3>
                </div>
                <div class="card-body pt-4 p-0">
                  <!-- Rating summary -->
                  <div class="card bg-light p-4 mb-4">
                    <div class="row g-4 align-items-center">
                      <div class="col-md-4 text-center">
                        <h2 class="mb-0">{{ cab.rating }}</h2>
                        <p class="mb-2">Based on {{ cab.reviewCount }} Reviews</p>
                        <ul class="list-inline mb-0">
                          <li class="list-inline-item me-0 small" v-for="n in Math.floor(cab.rating)" :key="n">
                            <i class="fa-solid fa-star text-warning"></i>
                          </li>
                          <li class="list-inline-item me-0 small" v-if="cab.rating % 1 >= 0.5">
                            <i class="fa-solid fa-star-half-alt text-warning"></i>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-8">
                        <div class="row gx-3 g-2 align-items-center">
                          <div class="col-10">
                            <div class="progress progress-sm bg-warning bg-opacity-15">
                              <div class="progress-bar bg-warning" style="width:85%"></div>
                            </div>
                          </div>
                          <div class="col-2 text-end"><span class="h6 fw-light mb-0">85%</span></div>
                          <div class="col-10">
                            <div class="progress progress-sm bg-warning bg-opacity-15">
                              <div class="progress-bar bg-warning" style="width:68%"></div>
                            </div>
                          </div>
                          <div class="col-2 text-end"><span class="h6 fw-light mb-0">68%</span></div>
                          <div class="col-10">
                            <div class="progress progress-sm bg-warning bg-opacity-15">
                              <div class="progress-bar bg-warning" style="width:40%"></div>
                            </div>
                          </div>
                          <div class="col-2 text-end"><span class="h6 fw-light mb-0">40%</span></div>
                          <div class="col-10">
                            <div class="progress progress-sm bg-warning bg-opacity-15">
                              <div class="progress-bar bg-warning" style="width:12%"></div>
                            </div>
                          </div>
                          <div class="col-2 text-end"><span class="h6 fw-light mb-0">12%</span></div>
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
                  <div v-for="(review, idx) in cab.reviews" :key="idx">
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
                        <div class="icon-sm bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style="width:36px;height:36px;">
                          <i class="fa-solid fa-car text-primary small"></i>
                        </div>
                        <div class="mt-2 mt-md-0">
                          <h6 class="mb-1">Bookamia Cabs Team</h6>
                          <p class="mb-0">{{ review.managerReply }}</p>
                        </div>
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

              <!-- Cab Policies START -->
              <div class="card bg-transparent">
                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                  <h3 class="mb-0">Cab Policies</h3>
                </div>
                <div class="card-body pt-4 p-0">
                  <ul class="list-group list-group-borderless mb-3">
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="bi bi-arrow-right me-2 mt-1"></i>
                      <span><strong>Cancellation:</strong> {{ cab.policies.cancellation }}</span>
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="bi bi-arrow-right me-2 mt-1"></i>
                      <span><strong>Luggage:</strong> {{ cab.policies.luggage }}</span>
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="bi bi-arrow-right me-2 mt-1"></i>
                      <span><strong>Waiting Time:</strong> {{ cab.policies.waiting }}</span>
                    </li>
                  </ul>
                  <div class="bg-info bg-opacity-10 rounded-2 p-3">
                    <p class="mb-0 text-info-emphasis">All drivers are verified, licensed, and background-checked. Please confirm your pickup location clearly at the time of booking.</p>
                  </div>
                </div>
              </div>
              <!-- Cab Policies END -->

            </div>
          </div>
          <!-- Left content END -->

          <!-- Right sidebar -->
          <aside class="col-xl-5 order-xl-2">
            <div class="card card-body border sticky-top" style="top: 80px;">
              <!-- Price -->
              <div class="d-sm-flex justify-content-sm-between align-items-center mb-3">
                <div>
                  <span class="text-muted small">Price starts at</span>
                  <h4 class="card-title mb-0">&#8358;{{ cab.price.toLocaleString() }}</h4>
                  <span class="small text-muted">/trip</span>
                </div>
                <div class="text-sm-end mt-2 mt-sm-0">
                  <span v-if="cab.discount" class="badge text-bg-danger fs-6">{{ cab.discount }}% Off</span>
                  <p v-if="cab.originalPrice" class="small text-decoration-line-through text-muted mb-0">
                    &#8358;{{ cab.originalPrice.toLocaleString() }}
                  </p>
                </div>
              </div>
              <!-- Rating -->
              <ul class="list-inline mb-4">
                <li class="list-inline-item me-1 h6 fw-light mb-0">{{ cab.rating }}</li>
                <li class="list-inline-item me-0 small" v-for="n in Math.floor(cab.rating)" :key="n">
                  <i class="fa-solid fa-star text-warning"></i>
                </li>
                <li class="list-inline-item me-0 small" v-if="cab.rating % 1 >= 0.5">
                  <i class="fa-solid fa-star-half-alt text-warning"></i>
                </li>
                <li class="list-inline-item ms-1 small text-muted">({{ cab.reviewCount }} reviews)</li>
              </ul>
              <div class="d-grid">
                <router-link :to="`/categories/cabs/${cab.id}/booking`" class="btn btn-lg btn-primary mb-0">
                  <i class="fa-solid fa-car me-2"></i>Book This Cab
                </router-link>
              </div>
              <div class="d-grid mt-2">
                <router-link to="/categories/cabs" class="btn btn-lg btn-outline-secondary mb-0">
                  <i class="bi bi-arrow-left me-2"></i>Back to Cabs
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

  <!-- Cab not found -->
  <div v-else class="container py-5 text-center">
    <h3>Cab not found</h3>
    <router-link to="/categories/cabs" class="btn btn-primary mt-3">Back to Cabs</router-link>
  </div>
</template>

<script setup>
import { computed, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { cabs } from '@/data/cabs.js'

const route = useRoute()
const cab = computed(() => cabs.find(c => c.id === Number(route.params.id)))

onMounted(() => {
  nextTick(() => {
    if (window.GLightbox) {
      window.GLightbox({ selector: '[data-glightbox]' })
    }
  })
})
</script>

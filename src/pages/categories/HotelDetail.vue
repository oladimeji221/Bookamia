<template>
  <div v-if="hotel">

    <!-- =======================
    Hotel Title START -->
    <section class="py-0 pt-4">
      <div class="container">
        <div class="d-lg-flex justify-content-lg-between align-items-start mb-3">
          <!-- Title -->
          <div class="mb-2 mb-lg-0">
            <h1 class="fs-2 mb-1">{{ hotel.name }}</h1>
            <p class="fw-bold mb-0">
              <i class="bi bi-geo-alt me-2"></i>{{ hotel.location }}
              <a href="#" class="ms-2 text-decoration-underline" data-bs-toggle="modal" data-bs-target="#mapmodal">
                <i class="bi bi-eye-fill me-1"></i>View On Map
              </a>
            </p>
            <!-- Stars -->
            <ul class="list-inline mb-0 mt-1">
              <li class="list-inline-item me-0 small" v-for="n in hotel.stars" :key="n">
                <i class="fa-solid fa-star text-warning"></i>
              </li>
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
    Hotel Title END -->

    <!-- =======================
    Image Gallery START -->
    <section class="card-grid pt-0">
      <div class="container">
        <div class="row g-2">
          <!-- Main large image -->
          <div class="col-md-6">
            <a :href="hotel.gallery[0]" data-glightbox data-gallery="gallery">
              <div class="card card-grid-lg card-element-hover card-overlay-hover overflow-hidden"
                :style="`background-image:url(${hotel.gallery[0]}); background-position: center left; background-size: cover;`">
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
                <a :href="hotel.gallery[1]" data-glightbox data-gallery="gallery">
                  <div class="card card-grid-sm card-element-hover card-overlay-hover overflow-hidden"
                    :style="`background-image:url(${hotel.gallery[1]}); background-position: center left; background-size: cover;`">
                    <div class="hover-element position-absolute w-100 h-100">
                      <i class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                    </div>
                  </div>
                </a>
              </div>

              <!-- Bottom left image -->
              <div class="col-md-6">
                <a :href="hotel.gallery[2]" data-glightbox data-gallery="gallery">
                  <div class="card card-grid-sm card-element-hover card-overlay-hover overflow-hidden"
                    :style="`background-image:url(${hotel.gallery[2]}); background-position: center left; background-size: cover;`">
                    <div class="hover-element position-absolute w-100 h-100">
                      <i class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                    </div>
                  </div>
                </a>
              </div>

              <!-- Bottom right: "View all" overlay -->
              <div class="col-md-6">
                <div class="card card-grid-sm overflow-hidden"
                  :style="`background-image:url(${hotel.gallery[3]}); background-position: center left; background-size: cover;`">
                  <div class="bg-overlay bg-dark opacity-7"></div>
                  <!-- All gallery images registered for glightbox -->
                  <a :href="hotel.gallery[3]" data-glightbox data-gallery="gallery" class="stretched-link z-index-9"></a>
                  <a :href="hotel.gallery[4]" data-glightbox data-gallery="gallery"></a>
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

              <!-- About hotel -->
              <div class="card bg-transparent">
                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                  <h3 class="mb-0">About This Hotel</h3>
                </div>
                <div class="card-body pt-4 p-0">
                  <h5 class="fw-light mb-3">Main Highlights</h5>
                  <div class="hstack gap-3 mb-4">
                    <div class="icon-lg bg-light h5 rounded-2" v-for="icon in hotel.highlights" :key="icon"
                      :data-bs-toggle="'tooltip'" :title="icon">
                      <i :class="`fa-solid fa-${icon}`"></i>
                    </div>
                  </div>
                  <p class="mb-3">{{ hotel.description }}</p>
                  <div class="collapse" id="collapseAbout">
                    <p class="mb-0">{{ hotel.descriptionExtra }}</p>
                  </div>
                  <a class="p-0 mb-4 mt-2 btn-more d-flex align-items-center collapsed"
                    data-bs-toggle="collapse" href="#collapseAbout" role="button"
                    aria-expanded="false" aria-controls="collapseAbout">
                    See <span class="see-more ms-1">more</span><span class="see-less ms-1">less</span>
                    <i class="fa-solid fa-angle-down ms-2"></i>
                  </a>
                  <h5 class="fw-light mb-2">Advantages</h5>
                  <ul class="list-group list-group-borderless mb-0">
                    <li class="list-group-item h6 fw-light d-flex mb-0" v-for="adv in hotel.advantages" :key="adv">
                      <i class="bi bi-patch-check-fill text-success me-2 mt-1"></i>{{ adv }}
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Amenities -->
              <div class="card bg-transparent">
                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                  <h3 class="mb-0">Amenities</h3>
                </div>
                <div class="card-body pt-4 p-0">
                  <div class="row g-4">
                    <div class="col-sm-6">
                      <h6><i class="fa-solid fa-biking me-2"></i>Activities</h6>
                      <ul class="list-group list-group-borderless mt-2 mb-0">
                        <li class="list-group-item pb-0" v-for="item in hotel.detailAmenities.activities" :key="item">
                          <i class="fa-solid fa-check-circle text-success me-2"></i>{{ item }}
                        </li>
                      </ul>
                    </div>
                    <div class="col-sm-6">
                      <h6><i class="fa-solid fa-credit-card me-2"></i>Payment Method</h6>
                      <ul class="list-group list-group-borderless mt-2 mb-0">
                        <li class="list-group-item pb-0" v-for="item in hotel.detailAmenities.payment" :key="item">
                          <i class="fa-solid fa-check-circle text-success me-2"></i>{{ item }}
                        </li>
                      </ul>
                    </div>
                    <div class="col-sm-6">
                      <h6><i class="fa-solid fa-concierge-bell me-2"></i>Services</h6>
                      <ul class="list-group list-group-borderless mt-2 mb-0">
                        <li class="list-group-item pb-0" v-for="item in hotel.detailAmenities.services" :key="item">
                          <i class="fa-solid fa-check-circle text-success me-2"></i>{{ item }}
                        </li>
                      </ul>
                    </div>
                    <div class="col-sm-6">
                      <h6><i class="bi bi-shield-fill-check me-2"></i>Safety & Security</h6>
                      <ul class="list-group list-group-borderless mt-2 mb-0">
                        <li class="list-group-item pb-0" v-for="item in hotel.detailAmenities.safety" :key="item">
                          <i class="fa-solid fa-check-circle text-success me-2"></i>{{ item }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Room Options -->
              <div class="card bg-transparent" id="room-options">
                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                  <h3 class="mb-0">Room Options</h3>
                </div>
                <div class="card-body pt-4 p-0">
                  <div class="vstack gap-4">
                    <div class="card shadow p-3" v-for="room in hotel.rooms" :key="room.id">
                      <div class="row g-4">
                        <!-- Room image/slider -->
                        <div class="col-md-5 position-relative">
                          <div v-if="room.discount" class="position-absolute top-0 start-0 z-index-1 mt-3 ms-3">
                            <div class="badge text-bg-danger">{{ room.discount }}</div>
                          </div>
                          <!-- Slider if multiple images -->
                          <div v-if="room.images.length > 1"
                            class="room-card-slider tiny-slider arrow-round arrow-xs arrow-dark overflow-hidden rounded-2"
                            style="position:relative;">
                            <div class="tiny-slider-inner" data-autoplay="false" data-arrow="true" data-dots="false" data-items="1">
                              <div v-for="(img, i) in room.images" :key="i">
                                <img :src="img" :alt="room.name" style="width:100%;height:220px;object-fit:cover;display:block;">
                              </div>
                            </div>
                          </div>
                          <!-- Single image -->
                          <div v-else class="overflow-hidden rounded-2">
                            <img :src="room.images[0]" :alt="room.name" style="width:100%;height:220px;object-fit:cover;display:block;">
                          </div>
                        </div>
                        <!-- Room body -->
                        <div class="col-md-7">
                          <div class="card-body d-flex flex-column h-100 p-0">
                            <h5 class="card-title">{{ room.name }}</h5>
                            <ul class="nav nav-divider mb-2">
                              <li class="nav-item" v-for="a in room.amenities" :key="a">{{ a }}</li>
                            </ul>
                            <p class="mb-0" :class="room.cancellation ? 'text-success' : 'text-danger'">
                              {{ room.cancellation ? 'Free Cancellation Available' : 'Non Refundable' }}
                            </p>
                            <div class="d-sm-flex justify-content-sm-between align-items-center mt-auto pt-3">
                              <div class="d-flex align-items-baseline gap-2">
                                <h5 class="fw-bold mb-0">₦{{ room.price.toLocaleString() }}</h5>
                                <span class="small text-muted">/night</span>
                                <span v-if="room.originalPrice" class="text-decoration-line-through small text-muted">
                                  ₦{{ room.originalPrice.toLocaleString() }}
                                </span>
                              </div>
                              <div class="mt-3 mt-sm-0">
                                <router-link :to="`/categories/hotels/${hotel.id}/rooms/${room.id}`" class="btn btn-sm btn-primary mb-0">Select Room</router-link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                        <h2 class="mb-0">{{ hotel.rating }}</h2>
                        <p class="mb-2">Based on {{ hotel.reviewCount }} Reviews</p>
                        <ul class="list-inline mb-0">
                          <li class="list-inline-item me-0 small" v-for="n in Math.floor(hotel.rating)" :key="n">
                            <i class="fa-solid fa-star text-warning"></i>
                          </li>
                          <li class="list-inline-item me-0 small" v-if="hotel.rating % 1 >= 0.5">
                            <i class="fa-solid fa-star-half-alt text-warning"></i>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-8">
                        <div class="row gx-3 g-2 align-items-center">
                          <div class="col-10">
                            <div class="progress progress-sm bg-warning bg-opacity-15">
                              <div class="progress-bar bg-warning" style="width:90%"></div>
                            </div>
                          </div>
                          <div class="col-2 text-end"><span class="h6 fw-light mb-0">90%</span></div>
                          <div class="col-10">
                            <div class="progress progress-sm bg-warning bg-opacity-15">
                              <div class="progress-bar bg-warning" style="width:72%"></div>
                            </div>
                          </div>
                          <div class="col-2 text-end"><span class="h6 fw-light mb-0">72%</span></div>
                          <div class="col-10">
                            <div class="progress progress-sm bg-warning bg-opacity-15">
                              <div class="progress-bar bg-warning" style="width:55%"></div>
                            </div>
                          </div>
                          <div class="col-2 text-end"><span class="h6 fw-light mb-0">55%</span></div>
                          <div class="col-10">
                            <div class="progress progress-sm bg-warning bg-opacity-15">
                              <div class="progress-bar bg-warning" style="width:20%"></div>
                            </div>
                          </div>
                          <div class="col-2 text-end"><span class="h6 fw-light mb-0">20%</span></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Leave review form -->
                  <form class="mb-5">
                    <div class="form-control-bg-light mb-3">
                      <select class="form-select">
                        <option selected>★★★★★ (5/5)</option>
                        <option>★★★★☆ (4/5)</option>
                        <option>★★★☆☆ (3/5)</option>
                        <option>★★☆☆☆ (2/5)</option>
                        <option>★☆☆☆☆ (1/5)</option>
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
                  <div v-for="(review, idx) in hotel.reviews" :key="idx">
                    <div class="d-md-flex my-4">
                      <div class="avatar avatar-lg me-3 flex-shrink-0">
                        <img class="avatar-img rounded-circle" :src="review.avatar" :alt="review.name" style="width:56px;height:56px;object-fit:cover;">
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
                        <!-- Review images -->
                        <div class="row g-2 mt-1">
                          <div class="col-3 col-sm-2" v-for="(img, i) in (review.images || [])" :key="i">
                            <img :src="img" class="rounded img-fluid" alt="">
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Manager reply -->
                    <div class="my-3 ps-2 ps-md-4" v-if="review.managerReply">
                      <div class="d-md-flex p-3 bg-light rounded-3">
                        <img class="avatar avatar-sm rounded-circle me-3 flex-shrink-0"
                          src="/assets/images/category/hotel/nearby/11.jpg"
                          alt="Manager" style="width:36px;height:36px;object-fit:cover;">
                        <div class="mt-2 mt-md-0">
                          <h6 class="mb-1">Hotel Manager</h6>
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

              <!-- Hotel Policies -->
              <div class="card bg-transparent">
                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                  <h3 class="mb-0">Hotel Policies</h3>
                </div>
                <div class="card-body pt-4 p-0">
                  <ul class="list-group list-group-borderless mb-3">
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="bi bi-arrow-right me-2 mt-1"></i>Check-in: {{ hotel.policies.checkin }}
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="bi bi-arrow-right me-2 mt-1"></i>Check-out: {{ hotel.policies.checkout }}
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0" v-for="rule in hotel.policies.rules" :key="rule">
                      <i class="bi bi-arrow-right me-2 mt-1"></i>{{ rule }}
                    </li>
                  </ul>
                  <div class="bg-danger bg-opacity-10 rounded-2 p-3">
                    <p class="mb-0 text-danger">All guests are required to present a valid government-issued ID at check-in. Reservations are subject to hotel availability and confirmation.</p>
                  </div>
                </div>
              </div>

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
                  <h4 class="card-title mb-0">₦{{ hotel.price.toLocaleString() }}</h4>
                </div>
                <div class="text-sm-end mt-2 mt-sm-0">
                  <h6 class="fw-normal mb-0">per room / night</h6>
                  <small class="text-muted">Taxes & fees may apply</small>
                </div>
              </div>
              <!-- Rating -->
              <ul class="list-inline mb-2">
                <li class="list-inline-item me-1 h6 fw-light mb-0">{{ hotel.rating }}</li>
                <li class="list-inline-item me-0 small" v-for="n in Math.floor(hotel.rating)" :key="n">
                  <i class="fa-solid fa-star text-warning"></i>
                </li>
                <li class="list-inline-item me-0 small" v-if="hotel.rating % 1 >= 0.5">
                  <i class="fa-solid fa-star-half-alt text-warning"></i>
                </li>
                <li class="list-inline-item ms-1 small text-muted">({{ hotel.reviewCount }} reviews)</li>
              </ul>
              <p class="h6 fw-light mb-4" v-if="hotel.breakfast">
                <i class="bi bi-check-circle-fill text-success me-2"></i>Free breakfast available
              </p>
              <p class="h6 fw-light mb-4" v-if="hotel.cancellation">
                <i class="bi bi-check-circle-fill text-success me-2"></i>Free cancellation available
              </p>
              <div class="d-grid">
                <a href="#room-options" class="btn btn-lg btn-primary mb-0">
                  View {{ hotel.rooms.length }} Room Options
                </a>
              </div>
              <div class="d-grid mt-2">
                <router-link to="/categories/hotels" class="btn btn-lg btn-outline-secondary mb-0">
                  <i class="bi bi-arrow-left me-2"></i>Back to Hotels
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
              <i class="bi bi-geo-alt-fill text-primary me-2"></i>{{ hotel.name }}
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-0">
            <iframe
              :src="`https://maps.google.com/maps?q=${encodeURIComponent(hotel.name + ', ' + hotel.location + ', Nigeria')}&output=embed&z=15`"
              width="100%" height="450" style="border:0;" allowfullscreen loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </div>
    <!-- =======================
    Map Modal END -->

  </div>

  <!-- Hotel not found -->
  <div v-else class="container py-5 text-center">
    <h3>Hotel not found</h3>
    <router-link to="/categories/hotels" class="btn btn-primary mt-3">Back to Hotels</router-link>
  </div>
</template>

<script setup>
import { computed, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { hotels } from '@/data/hotels.js'

const route = useRoute()
const hotel = computed(() => hotels.find(h => h.id === Number(route.params.id)))

const roomSliderInstances = []

function initSliders() {
  while (roomSliderInstances.length) {
    const inst = roomSliderInstances.pop()
    try { inst.destroy() } catch (e) {}
  }
  if (!window.tns) return
  document.querySelectorAll('.room-card-slider .tiny-slider-inner').forEach(el => {
    const inst = window.tns({
      container: el,
      mode: 'carousel',
      items: 1,
      speed: 500,
      controls: true,
      nav: false,
      autoplay: false,
      loop: true,
      mouseDrag: true,
      touch: true,
      arrowKeys: true,
      controlsText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>',
      ],
    })
    if (inst) roomSliderInstances.push(inst)
  })
  if (window.GLightbox) {
    window.GLightbox({ selector: '[data-glightbox]' })
  }
}

onMounted(() => {
  nextTick(initSliders)
})
</script>

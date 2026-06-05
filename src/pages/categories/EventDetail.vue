<template>
  <div v-if="event">

    <!-- =======================
    Event Title START -->
    <section class="py-0 pt-4">
      <div class="container">
        <div class="d-lg-flex justify-content-lg-between align-items-start mb-3">
          <!-- Title -->
          <div class="mb-2 mb-lg-0">
            <span class="badge text-bg-primary mb-2">{{ event.type }}</span>
            <h1 class="fs-2 mb-1">{{ event.name }}</h1>
            <p class="fw-bold mb-1">
              <i class="bi bi-geo-alt me-2"></i>{{ event.venue }}
              <a href="#" class="ms-2 text-decoration-underline" data-bs-toggle="modal" data-bs-target="#mapmodal">
                <i class="bi bi-eye-fill me-1"></i>View Location
              </a>
            </p>
            <p class="mb-0">
              <i class="bi bi-calendar me-2 text-primary"></i>
              <span class="fw-semibold">{{ event.date }}</span>
              <span class="ms-3 text-muted small"><i class="bi bi-clock me-1"></i>{{ event.duration }}</span>
            </p>
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
    Event Title END -->

    <!-- =======================
    Image Gallery START -->
    <section class="card-grid pt-0">
      <div class="container">
        <div class="row g-2">
          <!-- Main large image -->
          <div class="col-md-6">
            <a :href="event.gallery[0]" data-glightbox data-gallery="gallery">
              <div class="card card-grid-lg card-element-hover card-overlay-hover overflow-hidden"
                :style="`background-image:url(${event.gallery[0]}); background-position: center left; background-size: cover;`">
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
                <a :href="event.gallery[1]" data-glightbox data-gallery="gallery">
                  <div class="card card-grid-sm card-element-hover card-overlay-hover overflow-hidden"
                    :style="`background-image:url(${event.gallery[1]}); background-position: center left; background-size: cover;`">
                    <div class="hover-element position-absolute w-100 h-100">
                      <i class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                    </div>
                  </div>
                </a>
              </div>

              <!-- Bottom left image -->
              <div class="col-md-6">
                <a :href="event.gallery[2]" data-glightbox data-gallery="gallery">
                  <div class="card card-grid-sm card-element-hover card-overlay-hover overflow-hidden"
                    :style="`background-image:url(${event.gallery[2]}); background-position: center left; background-size: cover;`">
                    <div class="hover-element position-absolute w-100 h-100">
                      <i class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                    </div>
                  </div>
                </a>
              </div>

              <!-- Bottom right: "View all" overlay -->
              <div class="col-md-6">
                <div class="card card-grid-sm overflow-hidden"
                  :style="`background-image:url(${event.gallery[3]}); background-position: center left; background-size: cover;`">
                  <div class="bg-overlay bg-dark opacity-7"></div>
                  <!-- All gallery images registered for glightbox -->
                  <a :href="event.gallery[3]" data-glightbox data-gallery="gallery" class="stretched-link z-index-9"></a>
                  <a :href="event.gallery[4]" data-glightbox data-gallery="gallery"></a>
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

              <!-- About event -->
              <div class="card bg-transparent">
                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                  <h3 class="mb-0">About This Event</h3>
                </div>
                <div class="card-body pt-4 p-0">
                  <h5 class="fw-light mb-3">Event Highlights</h5>
                  <div class="hstack gap-3 mb-4">
                    <div class="icon-lg bg-light h5 rounded-2" v-for="icon in event.highlights" :key="icon"
                      :data-bs-toggle="'tooltip'" :title="icon">
                      <i :class="`fa-solid fa-${icon}`"></i>
                    </div>
                  </div>
                  <p class="mb-3">{{ event.description }}</p>
                  <div class="collapse" id="collapseAbout">
                    <p class="mb-0">{{ event.descriptionExtra }}</p>
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
                        <h6 class="mb-1"><i class="bi bi-person-badge-fill me-2 text-primary"></i>Organiser</h6>
                        <p class="mb-0 fw-bold small">{{ event.organizer }}</p>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="bg-light rounded-2 p-3">
                        <h6 class="mb-1"><i class="bi bi-hourglass-split me-2 text-primary"></i>Duration</h6>
                        <p class="mb-0 fw-bold small">{{ event.duration }}</p>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="bg-light rounded-2 p-3">
                        <h6 class="mb-1"><i class="bi bi-person-x-fill me-2 text-primary"></i>Age Restriction</h6>
                        <p class="mb-0 fw-bold small">{{ event.ageRestriction }}</p>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="bg-light rounded-2 p-3">
                        <h6 class="mb-1"><i class="bi bi-calendar-event me-2 text-primary"></i>Event Date</h6>
                        <p class="mb-0 fw-bold small">{{ event.date }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Ticket Options -->
              <div class="card bg-transparent" id="ticket-options">
                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                  <h3 class="mb-0">Ticket Options</h3>
                </div>
                <div class="card-body pt-4 p-0">
                  <div class="vstack gap-4">
                    <div class="card shadow p-3" v-for="ticket in event.tickets" :key="ticket.type">
                      <div class="row g-4 align-items-center">
                        <!-- Ticket details -->
                        <div class="col-md-8">
                          <div class="d-flex align-items-center mb-2">
                            <h5 class="card-title mb-0 me-3">{{ ticket.type }}</h5>
                            <span v-if="!ticket.available" class="badge text-bg-danger">Sold Out</span>
                            <span v-else class="badge text-bg-success">Available</span>
                          </div>
                          <ul class="list-group list-group-borderless mb-0">
                            <li class="list-group-item pb-0 px-0" v-for="perk in ticket.perks" :key="perk">
                              <i class="fa-solid fa-check-circle text-success me-2"></i>{{ perk }}
                            </li>
                          </ul>
                        </div>
                        <!-- Price and CTA -->
                        <div class="col-md-4 text-md-end">
                          <div class="mb-3">
                            <h5 class="fw-bold mb-0">&#8358;{{ ticket.price.toLocaleString() }}</h5>
                            <small class="text-muted">per ticket</small>
                          </div>
                          <router-link
                            v-if="ticket.available"
                            :to="`/categories/events/${event.id}/booking?ticket=${encodeURIComponent(ticket.type)}`"
                            class="btn btn-sm btn-primary mb-0">
                            Select Tickets
                          </router-link>
                          <button v-else class="btn btn-sm btn-secondary mb-0" disabled>Sold Out</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Customer Reviews -->
              <div class="card bg-transparent">
                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                  <h3 class="mb-0">Attendee Reviews</h3>
                </div>
                <div class="card-body pt-4 p-0">
                  <!-- Rating summary -->
                  <div class="card bg-light p-4 mb-4">
                    <div class="row g-4 align-items-center">
                      <div class="col-md-4 text-center">
                        <h2 class="mb-0">{{ event.rating }}</h2>
                        <p class="mb-2">Based on {{ event.reviewCount }} Reviews</p>
                        <ul class="list-inline mb-0">
                          <li class="list-inline-item me-0 small" v-for="n in Math.floor(event.rating)" :key="n">
                            <i class="fa-solid fa-star text-warning"></i>
                          </li>
                          <li class="list-inline-item me-0 small" v-if="event.rating % 1 >= 0.5">
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
                              <div class="progress-bar bg-warning" style="width:42%"></div>
                            </div>
                          </div>
                          <div class="col-2 text-end"><span class="h6 fw-light mb-0">42%</span></div>
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
                      <textarea class="form-control" placeholder="Share your experience..." rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-lg btn-primary mb-0">
                      Post review <i class="bi fa-fw bi-arrow-right ms-2"></i>
                    </button>
                  </form>

                  <!-- Review items -->
                  <div v-for="(review, idx) in event.reviews" :key="idx">
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
                    <a href="#" class="btn btn-primary-soft mb-0">Load more reviews</a>
                  </div>
                </div>
              </div>

              <!-- Event Policies -->
              <div class="card bg-transparent">
                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                  <h3 class="mb-0">Event Policies</h3>
                </div>
                <div class="card-body pt-4 p-0">
                  <ul class="list-group list-group-borderless mb-3">
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="bi bi-arrow-right me-2 mt-1"></i>
                      <span><strong>Refund Policy:</strong> {{ event.policies.refund }}</span>
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="bi bi-arrow-right me-2 mt-1"></i>
                      <span><strong>Entry:</strong> {{ event.policies.entry }}</span>
                    </li>
                    <li class="list-group-item h6 fw-light d-flex mb-0">
                      <i class="bi bi-arrow-right me-2 mt-1"></i>
                      <span><strong>Age Restriction:</strong> {{ event.policies.age }}</span>
                    </li>
                  </ul>
                  <div class="bg-danger bg-opacity-10 rounded-2 p-3">
                    <p class="mb-0 text-danger">All attendees must present a valid government-issued ID at the gate. Tickets are checked upon entry and are non-transferable unless stated otherwise.</p>
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
                  <span class="text-muted small">Tickets from</span>
                  <h4 class="card-title mb-0">&#8358;{{ lowestTicketPrice.toLocaleString() }}</h4>
                </div>
                <div class="text-sm-end mt-2 mt-sm-0">
                  <h6 class="fw-normal mb-0">per ticket</h6>
                  <small class="text-muted">Taxes &amp; fees may apply</small>
                </div>
              </div>
              <!-- Rating -->
              <ul class="list-inline mb-2">
                <li class="list-inline-item me-1 h6 fw-light mb-0">{{ event.rating }}</li>
                <li class="list-inline-item me-0 small" v-for="n in Math.floor(event.rating)" :key="n">
                  <i class="fa-solid fa-star text-warning"></i>
                </li>
                <li class="list-inline-item me-0 small" v-if="event.rating % 1 >= 0.5">
                  <i class="fa-solid fa-star-half-alt text-warning"></i>
                </li>
                <li class="list-inline-item ms-1 small text-muted">({{ event.reviewCount }} reviews)</li>
              </ul>
              <!-- Event meta -->
              <p class="h6 fw-light mb-1">
                <i class="bi bi-calendar me-2 text-primary"></i>{{ event.date }}
              </p>
              <p class="h6 fw-light mb-1">
                <i class="bi bi-geo-alt me-2 text-primary"></i>{{ event.venue }}
              </p>
              <p class="h6 fw-light mb-4">
                <i class="bi bi-person-badge me-2 text-primary"></i>{{ event.organizer }}
              </p>
              <div class="d-grid">
                <a href="#ticket-options" class="btn btn-lg btn-primary mb-0">
                  View {{ event.tickets.length }} Ticket Options
                </a>
              </div>
              <div class="d-grid mt-2">
                <router-link to="/categories/events" class="btn btn-lg btn-outline-secondary mb-0">
                  <i class="bi bi-arrow-left me-2"></i>Back to Events
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
              <i class="bi bi-geo-alt-fill text-primary me-2"></i>{{ event.venue }}
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-0">
            <iframe
              :src="`https://maps.google.com/maps?q=${encodeURIComponent(event.venue + ', Nigeria')}&output=embed&z=15`"
              width="100%" height="450" style="border:0;" allowfullscreen loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </div>
    <!-- =======================
    Map Modal END -->

  </div>

  <!-- Event not found -->
  <div v-else class="container py-5 text-center">
    <h3>Event not found</h3>
    <router-link to="/categories/events" class="btn btn-primary mt-3">Back to Events</router-link>
  </div>
</template>

<script setup>
import { computed, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { events } from '@/data/events.js'

const route = useRoute()
const event = computed(() => events.find(e => e.id === Number(route.params.id)))

const lowestTicketPrice = computed(() => {
  if (!event.value) return 0
  return Math.min(...event.value.tickets.map(t => t.price))
})

onMounted(() => {
  nextTick(() => {
    if (window.GLightbox) {
      window.GLightbox({ selector: '[data-glightbox]' })
    }
  })
})
</script>

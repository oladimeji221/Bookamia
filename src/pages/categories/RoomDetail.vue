<template>
  <div v-if="hotel && room">

    <!-- =======================
    Main Banner START -->
    <section class="pt-4">
      <div class="container">

        <!-- Title -->
        <div class="row">
          <div class="col-12 mb-4">
            <h1 class="fs-3">{{ room.name }}</h1>
            <p class="fw-bold mb-0">
              <i class="bi bi-geo-alt me-2"></i>{{ hotel.location }}
            </p>
          </div>
        </div>

        <!-- Image Slider -->
        <div class="room-banner-slider tiny-slider arrow-round arrow-blur">
          <div class="tiny-slider-inner"
            data-autoplay="false"
            data-arrow="true"
            data-edge="0"
            data-dots="false"
            data-items="2"
            data-items-sm="1">
            <div v-for="(img, i) in room.images" :key="i">
              <a class="w-100 h-100" :href="img" data-glightbox :data-gallery="`room-banner-${room.id}`">
                <div class="card card-element-hover card-overlay-hover overflow-hidden">
                  <img :src="img" class="rounded-3" :alt="room.name" style="width:100%;height:280px;object-fit:cover;">
                  <div class="hover-element w-100 h-100">
                    <i class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
    <!-- =======================
    Main Banner END -->

    <!-- =======================
    Room detail START -->
    <section class="pt-0">
      <div class="container">
        <div class="row">

          <!-- Detail START -->
          <div class="col-xl-7">
            <div class="card bg-transparent p-0">

              <!-- Card header -->
              <div class="card-header bg-transparent border-bottom d-sm-flex justify-content-sm-between align-items-center p-0 pb-3">
                <h4 class="mb-2 mb-sm-0">Select Rooms</h4>
                <div class="col-sm-4">
                  <form class="form-control-bg-light">
                    <select class="form-select form-select-sm border-0">
                      <option value="">Select Option</option>
                      <option>Most popular</option>
                      <option>Lowest price</option>
                      <option>Top rated</option>
                    </select>
                  </form>
                </div>
              </div>

              <!-- Card body -->
              <div class="card-body p-0 pt-3">
                <div class="vstack gap-5">

                  <!-- Room item -->
                  <div class="card border bg-transparent p-3" v-for="r in hotel.rooms" :key="r.id">
                    <div class="row g-3 g-md-4">

                      <!-- Image with photo badge -->
                      <div class="col-md-4">
                        <div class="position-relative">
                          <img :src="r.images[0]" class="card-img rounded-2" :alt="r.name" style="height:160px;object-fit:cover;">
                          <!-- Badge triggers glightbox -->
                          <div class="card-img-overlay p-2">
                            <a :href="r.images[0]"
                              class="badge bg-dark"
                              data-glightbox
                              :data-gallery="`room-card-${r.id}`">
                              {{ r.images.length }} Photo{{ r.images.length > 1 ? 's' : '' }}
                              <i class="bi bi-arrow-right"></i>
                            </a>
                          </div>
                          <!-- Hidden extra images for glightbox -->
                          <template v-if="r.images.length > 1">
                            <a v-for="(img, i) in r.images.slice(1)" :key="i"
                              :href="img"
                              data-glightbox
                              :data-gallery="`room-card-${r.id}`"
                              class="d-none">
                            </a>
                          </template>
                        </div>
                      </div>

                      <!-- Room details -->
                      <div class="col-md-8">
                        <div class="card-body d-flex flex-column p-0 h-100">
                          <h5 class="card-title">{{ r.name }}</h5>

                          <ul class="nav small nav-divider mb-0">
                            <li class="nav-item mb-0">
                              <i class="fa-regular fa-square me-1"></i>{{ r.sqft }} sq.ft
                            </li>
                            <li class="nav-item mb-0">
                              <i class="fa-solid fa-table-cells-large me-1"></i>{{ r.view }}
                            </li>
                            <li class="nav-item mb-0">
                              <i class="fa-solid fa-bed me-1"></i>{{ r.bed }}
                            </li>
                          </ul>

                          <div class="d-flex justify-content-between align-items-center mt-2 mt-md-auto">
                            <div class="d-flex align-items-baseline gap-1 text-success">
                              <h6 class="h5 mb-0 text-success">₦{{ r.price.toLocaleString() }}</h6>
                              <span class="fw-light small">/per night</span>
                            </div>
                            <router-link
                              :to="`/categories/hotels/${hotel.id}/rooms/${r.id}`"
                              class="btn btn-sm mb-0"
                              :class="r.id === room.id ? 'btn-primary' : 'btn-dark'">
                              {{ r.id === room.id ? 'Selected' : 'Select room' }}
                            </router-link>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
              <!-- Card body END -->
            </div>
          </div>
          <!-- Detail END -->

          <!-- Price Summary sidebar -->
          <aside class="col-xl-5 d-none d-xl-block">
            <div class="card bg-transparent border">
              <div class="card-header bg-transparent border-bottom">
                <h4 class="card-title mb-0">Price Summary</h4>
              </div>
              <div class="card-body">

                <div class="row g-4 mb-3">
                  <div class="col-md-6">
                    <div class="bg-light py-3 px-4 rounded-3">
                      <h6 class="fw-light small mb-1">Check-in</h6>
                      <h6 class="mb-0">Select date</h6>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="bg-light py-3 px-4 rounded-3">
                      <h6 class="fw-light small mb-1">Check-out</h6>
                      <h6 class="mb-0">Select date</h6>
                    </div>
                  </div>
                </div>

                <ul class="list-group list-group-borderless mb-3">
                  <li class="list-group-item px-2 d-flex justify-content-between">
                    <span class="h6 fw-light mb-0">₦{{ room.price.toLocaleString() }} x 2 Nights</span>
                    <span class="h6 fw-light mb-0">₦{{ (room.price * 2).toLocaleString() }}</span>
                  </li>
                  <li class="list-group-item px-2 d-flex justify-content-between" v-if="room.discount">
                    <span class="h6 fw-light mb-0">Discount ({{ room.discount }})</span>
                    <span class="h6 fw-light mb-0 text-success">
                      -₦{{ Math.round((room.originalPrice - room.price) * 2).toLocaleString() }}
                    </span>
                  </li>
                  <li class="list-group-item px-2 d-flex justify-content-between">
                    <span class="h6 fw-light mb-0">Service Fee</span>
                    <span class="h6 fw-light mb-0">₦2,500</span>
                  </li>
                  <li class="list-group-item bg-light d-flex justify-content-between rounded-2 px-2 mt-2">
                    <span class="h5 fw-normal mb-0 ps-1">Total</span>
                    <span class="h5 fw-normal mb-0">₦{{ (room.price * 2 + 2500).toLocaleString() }}</span>
                  </li>
                </ul>

                <div class="d-grid gap-2">
                  <router-link
                    :to="`/categories/hotels/${hotel.id}/rooms/${room.id}/booking`"
                    class="btn btn-dark mb-0">
                    Continue To Book
                  </router-link>
                </div>
              </div>
            </div>
          </aside>
          <!-- Price Summary END -->

        </div>
      </div>
    </section>
    <!-- =======================
    Room detail END -->

  </div>

  <!-- Not found -->
  <div v-else class="container py-5 text-center">
    <h3>Room not found</h3>
    <router-link to="/categories/hotels" class="btn btn-primary mt-3">Back to Hotels</router-link>
  </div>
</template>

<script setup>
import { computed, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { hotels } from '@/data/hotels.js'

const route = useRoute()
const hotel = computed(() => hotels.find(h => h.id === Number(route.params.hotelId)))
const room  = computed(() => hotel.value?.rooms.find(r => r.id === Number(route.params.roomId)))

onMounted(() => {
  nextTick(() => {
    if (window.tns) {
      document.querySelectorAll('.room-banner-slider .tiny-slider-inner').forEach(el => {
        window.tns({
          container: el,
          mode: 'carousel',
          items: 2,
          responsive: { 0: { items: 1 }, 576: { items: 2 } },
          speed: 500,
          controls: true,
          nav: false,
          autoplay: false,
          loop: true,
          mouseDrag: true,
          gutter: 12,
          controlsText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>',
          ],
        })
      })
    }
    if (window.GLightbox) {
      window.GLightbox({ selector: '[data-glightbox]' })
    }
  })
})
</script>

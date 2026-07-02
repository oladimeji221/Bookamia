<template>
  <main>
    <section class="pt-3">
      <div class="container">
        <div class="row g-2 g-lg-4">
          <!-- Sidebar START -->
          <UserSidebar />
          <!-- Sidebar END -->

          <!-- Main content START -->
          <div class="col-lg-8 col-xl-9 ps-xl-5">
            <div class="d-grid mb-0 d-lg-none w-100">
              <button class="btn btn-primary mb-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
                <i class="fas fa-sliders-h"></i> Menu
              </button>
            </div>

            <div class="vstack gap-4">
              <!-- Dashboard Header -->
              <UserDashboardHeader title="My Wishlist" />

              <div class="card border bg-transparent">
                <div class="card-header bg-transparent border-bottom">
                  <h4 class="card-header-title">Saved Items</h4>
                </div>

                <div class="card-body p-0">
                  <div class="vstack gap-4 p-4" v-if="totalItems > 0">
                    <!-- Wishlist item START -->
                    <div v-for="item in paginatedWishlist" :key="item.id" class="card shadow p-2">
                       <div class="row g-0">
                          <!-- Image -->
                          <div class="col-md-3">
                             <img :src="item.image" class="card-img rounded-2" alt="Card image" style="height: 150px; object-fit: cover;">
                          </div>
                          <!-- Body -->
                          <div class="col-md-9">
                             <div class="card-body py-md-2 d-flex flex-column h-100">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                   <span class="badge bg-primary bg-opacity-10 text-primary">{{ item.category }}</span>
                                   <button class="btn btn-sm btn-white mb-0" @click="removeFromWishlist(item.id)"><i class="bi bi-heart-fill text-danger"></i></button>
                                </div>
                                <h5 class="card-title mb-1"><router-link :to="categoryRoute(item.category)">{{ item.name }}</router-link></h5>
                                <p class="small mb-0"><i class="bi bi-geo-alt me-2"></i>{{ item.location }}</p>
                                <div class="d-flex justify-content-between align-items-center mt-auto pt-3">
                                   <h6 class="mb-0 text-primary">₦{{ item.price.toLocaleString() }} <span class="small text-muted fw-light">/{{ item.unit }}</span></h6>
                                   <router-link :to="categoryRoute(item.category)" class="btn btn-sm btn-primary mb-0">Book Now</router-link>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <!-- Wishlist item END -->

                    <!-- Pagination -->
                    <DashboardPagination 
                      :totalItems="totalItems" 
                      :itemsPerPage="itemsPerPage" 
                      v-model:currentPage="currentPage" 
                    />
                  </div>
                  <!-- Empty State -->
                  <div v-else class="bg-mode shadow p-4 rounded overflow-hidden m-4 text-center">
                     <h6 class="mb-2">Your wishlist is empty</h6>
                     <p>Start saving your favorite hotels, eateries, and events!</p>
                     <router-link to="/" class="btn btn-primary mb-0">Browse categories</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Main content END -->
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import UserSidebar from '@/components/UserSidebar.vue'
import UserDashboardHeader from '@/components/UserDashboardHeader.vue'
import DashboardPagination from '@/components/DashboardPagination.vue'

const currentPage = ref(1)
const itemsPerPage = ref(2) // Showing 2 items per page for demo

const wishlist = ref([
  { id: 1, name: 'Radisson Blu Anchorage', category: 'Hotels', price: 85000, unit: 'night', location: 'Victoria Island, Lagos', image: '/assets/images/category/hotel/01.jpg' },
  { id: 2, name: 'Ocean Basket', category: 'Eatery', price: 15000, unit: 'avg', location: 'Ikeja, Lagos', image: '/assets/images/category/eateries/nkoyo.jpg' },
  { id: 3, name: 'Davido Concert', category: 'Events', price: 25000, unit: 'ticket', location: 'Eko Hotel, Lagos', image: '/assets/images/category/event/concert.jpg' },
  { id: 4, name: 'Filmhouse IMAX', category: 'Movies', price: 5000, unit: 'ticket', location: 'Lekki, Lagos', image: '/assets/images/category/movie/cinema.jpg' }
])

const totalItems = computed(() => wishlist.value.length)

const paginatedWishlist = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return wishlist.value.slice(start, end)
})

const removeFromWishlist = (id) => {
  wishlist.value = wishlist.value.filter(item => item.id !== id)
}

const categoryRoute = (category) => ({
  Hotels: '/categories/hotels',
  Cabs: '/categories/cabs',
  Eatery: '/categories/eatery',
  Events: '/categories/events',
  Movies: '/categories/movies',
}[category] || '/')
</script>

<style scoped>
/* Scoped styles integrated with template classes */
</style>

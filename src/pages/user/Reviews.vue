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
              <UserDashboardHeader title="My Reviews" />

              <div class="card border bg-transparent">
                <div class="card-header bg-transparent border-bottom">
                  <h4 class="card-header-title">Review Management</h4>
                </div>

                <div class="card-body p-0">
                  <div v-if="totalItems > 0" class="vstack gap-4 p-4">
                    <div v-for="review in paginatedReviews" :key="review.id" class="card border p-3">
                      <div class="d-flex justify-content-between align-items-start">
                        <div class="d-flex align-items-center">
                          <!-- Icon/Thumb -->
                          <div class="icon-lg bg-light rounded-circle flex-shrink-0">
                            <i :class="getCategoryIcon(review.type)"></i>
                          </div>
                          <div class="ms-3">
                            <h6 class="mb-0">{{ review.itemName }}</h6>
                            <div class="small">
                              <i v-for="n in 5" :key="n" 
                                 class="fa-solid fa-star" 
                                 :class="n <= review.rating ? 'text-warning' : 'text-muted opacity-25'"></i>
                            </div>
                          </div>
                        </div>
                        <div class="text-end">
                          <span class="small text-muted d-block">{{ review.date }}</span>
                          <a href="#" class="btn btn-sm btn-light mt-2 mb-0">Edit</a>
                        </div>
                      </div>
                      <p class="mt-3 mb-0">{{ review.comment }}</p>
                    </div>

                    <!-- Pagination -->
                    <DashboardPagination 
                      :totalItems="totalItems" 
                      :itemsPerPage="itemsPerPage" 
                      v-model:currentPage="currentPage" 
                    />
                  </div>

                  <!-- Empty State -->
                  <div v-else class="text-center p-5">
                    <i class="bi bi-star fs-1 text-muted"></i>
                    <p class="mt-2">You haven't written any reviews yet.</p>
                    <router-link to="/user/bookings" class="btn btn-primary mb-0">Review a past booking</router-link>
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

const reviews = ref([
  { id: 1, type: 'Hotels', itemName: 'Eko Hotels & Suites', rating: 5, date: '22 May 2026', comment: 'Exceptional service and world-class amenities. The suite was spacious and the view of the Atlantic was stunning.' },
  { id: 2, type: 'Eatery', itemName: 'Nok by Alara', rating: 4, date: '10 Apr 2026', comment: 'The fusion of flavors was amazing, though the wait time was a bit longer than expected. Highly recommend the Jollof Rice!' },
  { id: 3, type: 'Cabs', itemName: 'Airport Transfer SUV', rating: 5, date: '15 Mar 2026', comment: 'Professional driver and very clean vehicle. Was at the airport waiting for me even before I landed.' },
  { id: 4, type: 'Events', itemName: 'Davido Concert', rating: 5, date: '01 Jan 2026', comment: 'The atmosphere was electric! Best concert I have attended in years.' }
])

const totalItems = computed(() => reviews.value.length)

const paginatedReviews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return reviews.value.slice(start, end)
})

const getCategoryIcon = (type) => {
  switch (type) {
    case 'Hotels': return 'fa-solid fa-hotel'
    case 'Cabs': return 'fa-solid fa-car'
    case 'Eatery': return 'fa-solid fa-utensils'
    case 'Events': return 'fa-solid fa-calendar-alt'
    case 'Movies': return 'fa-solid fa-film'
    default: return 'fa-solid fa-star'
  }
}
</script>

<style scoped>
.icon-lg {
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    font-size: 1.25rem;
}
</style>

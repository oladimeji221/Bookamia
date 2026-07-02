<template>
  <main>
    <VendorMenu />

    <section class="pt-0">
      <div class="container vstack gap-4">
        <!-- Title START -->
        <div class="row">
          <div class="col-12">
            <h1 class="fs-4 mb-0"><i class="bi bi-star fa-fw me-1"></i>Reviews</h1>
          </div>
        </div>
        <!-- Title END -->

        <!-- Counter START -->
        <div class="row">
          <div class="col-12">
            <div class="card border h-100">
              <div class="card-header border-bottom">
                <h5 class="card-header-title mb-0">Review Metrics</h5>
              </div>
              <div class="card-body">
                <div class="row g-4">
                  <div class="col-sm-6 col-xl-3">
                    <div class="d-flex align-items-center">
                      <span class="display-6 text-primary"><i class="bi bi-trophy"></i></span>
                      <div class="ms-3">
                        <h4 class="mb-0">4.5</h4>
                        <span>Average Rating</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-3">
                    <div class="d-flex align-items-center">
                      <span class="display-6 text-warning"><i class="bi bi-star"></i></span>
                      <div class="ms-3">
                        <h4 class="mb-0">548</h4>
                        <span>Total Reviews</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-3">
                    <div class="d-flex align-items-center">
                      <span class="display-6 text-danger"><i class="bi bi-exclamation-octagon"></i></span>
                      <div class="ms-3">
                        <h4 class="mb-0">56</h4>
                        <span>Unaddressed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Counter END -->

        <!-- User Reviews START -->
        <div class="row">
          <div class="col-12">
            <div class="card border rounded-3">
              <div class="card-header border-bottom">
                <h5 class="card-header-title mb-0">User Reviews</h5>
              </div>
              <div class="card-body">
                <div v-for="review in reviews" :key="review.id" class="bg-light rounded p-3 mb-4">
                  <div class="d-sm-flex justify-content-between mb-3">
                    <div class="d-sm-flex align-items-center">
                      <img class="avatar avatar-md rounded-circle me-3" :src="review.avatar" alt="avatar">
                      <div>
                        <h6 class="m-0">{{ review.name }}</h6>
                        <span class="small">{{ review.date }}</span>
                      </div>
                    </div>
                    <ul class="list-inline mb-0">
                      <li v-for="star in 5" :key="star" class="list-inline-item me-0">
                        <i :class="star <= review.rating ? 'fas fa-star text-warning' : 'far fa-star text-warning'"></i>
                      </li>
                    </ul>
                  </div>

                  <h6 class="fw-normal"><span class="text-body">Review on:</span> {{ review.listing }}</h6>
                  <p class="mb-0">{{ review.comment }}</p>

                  <div class="mt-3 text-end">
                    <a href="#" class="text-reset small mb-0"><i class="bi bi-info-circle me-1"></i>Report</a>
                  </div>
                </div>
              </div>

              <div class="card-footer pt-0">
                <DashboardPagination />
              </div>
            </div>
          </div>
        </div>
        <!-- User Reviews END -->
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import VendorMenu from '@/components/VendorMenu.vue';
import DashboardPagination from '@/components/DashboardPagination.vue';

const reviews = ref([
  {
    id: 1,
    name: 'Frances Guerrero',
    avatar: '/assets/images/avatar/01.jpg',
    date: '2 days ago',
    rating: 4,
    listing: 'Pride moon Village Resort & Spa',
    comment: 'Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if.'
  },
  {
    id: 2,
    name: 'Louis Ferguson',
    avatar: '/assets/images/avatar/07.jpg',
    date: 'Nov 18, 2026',
    rating: 5,
    listing: 'Courtyard by Marriott New York',
    comment: 'Far advanced settling say finished raillery. Offered chiefly farther Satisfied conveying a dependent contented he gentleman agreeable do be.'
  }
]);
</script>

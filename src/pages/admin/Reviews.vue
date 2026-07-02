<template>
  <div class="vstack gap-4">
    <!-- Title -->
    <div class="row">
      <div class="col-12">
        <h1 class="h4 mb-0"><i class="bi bi-star fa-fw me-1"></i>Reviews</h1>
      </div>
    </div>

    <!-- Quick stats -->
    <div class="row g-4">
      <div class="col-sm-6 col-xl-4">
        <div class="card card-body border p-4 h-100">
          <div class="d-flex align-items-center">
            <div class="icon-lg bg-warning bg-opacity-10 text-warning rounded-3"><i class="bi bi-star"></i></div>
            <div class="ms-3">
              <h5 class="mb-0">{{ store.reviews.length }}</h5>
              <span class="small">Total reviews</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xl-4">
        <div class="card card-body border p-4 h-100">
          <div class="d-flex align-items-center">
            <div class="icon-lg bg-primary bg-opacity-10 text-primary rounded-3"><i class="bi bi-trophy"></i></div>
            <div class="ms-3">
              <h5 class="mb-0">{{ averageRating }}</h5>
              <span class="small">Average rating</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xl-4">
        <div class="card card-body border p-4 h-100">
          <div class="d-flex align-items-center">
            <div class="icon-lg bg-danger bg-opacity-10 text-danger rounded-3"><i class="bi bi-flag"></i></div>
            <div class="ms-3">
              <h5 class="mb-0">{{ store.flaggedReviews }}</h5>
              <span class="small">Flagged for moderation</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Reviews list START -->
    <div class="row">
      <div class="col-12">
        <div class="card shadow">
          <div class="card-header border-bottom d-flex justify-content-between align-items-center flex-wrap gap-2">
            <h5 class="card-header-title mb-0">Review Moderation</h5>
            <select class="form-select form-select-sm w-auto" v-model="statusFilter">
              <option value="">All reviews</option>
              <option>Published</option>
              <option>Flagged</option>
            </select>
          </div>

          <div class="card-body">
            <div v-for="r in filteredReviews" :key="r.id" class="bg-light rounded p-3 mb-4" :class="{ 'border border-danger border-opacity-25': r.status === 'Flagged' }">
              <div class="d-sm-flex justify-content-between mb-3">
                <div class="d-sm-flex align-items-center">
                  <img class="avatar avatar-md rounded-circle me-3" :src="r.avatar" alt="avatar">
                  <div>
                    <h6 class="m-0">{{ r.customer }}</h6>
                    <span class="small">{{ r.date }} · on <span class="fw-semibold">{{ r.listing }}</span> ({{ r.vendor }})</span>
                  </div>
                </div>
                <div class="text-sm-end mt-2 mt-sm-0">
                  <ul class="list-inline mb-1">
                    <li v-for="star in 5" :key="star" class="list-inline-item me-0">
                      <i :class="star <= r.rating ? 'fas fa-star text-warning' : 'far fa-star text-warning'"></i>
                    </li>
                  </ul>
                  <span class="badge d-block d-sm-inline-block" :class="r.status === 'Flagged' ? 'bg-danger bg-opacity-10 text-danger' : 'bg-success bg-opacity-10 text-success'">
                    <i :class="(r.status === 'Flagged' ? 'bi bi-flag' : 'bi bi-check2-circle') + ' fa-fw me-1'"></i>{{ r.status }}
                  </span>
                </div>
              </div>

              <p class="mb-3">{{ r.comment }}</p>

              <div class="d-flex justify-content-end gap-2">
                <button v-if="r.status === 'Flagged'" class="btn btn-sm btn-success-soft mb-0" @click="store.publishReview(r.id)"><i class="bi bi-check-lg fa-fw me-1"></i>Approve &amp; publish</button>
                <button class="btn btn-sm btn-danger-soft mb-0" @click="store.removeReview(r.id)"><i class="bi bi-trash3 fa-fw me-1"></i>Remove</button>
              </div>
            </div>

            <div v-if="!filteredReviews.length" class="text-center text-muted py-4">
              <i class="bi bi-stars fs-1 opacity-25"></i>
              <p class="small mb-0 mt-2">No reviews match this filter.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Reviews list END -->
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAdminStore } from '@/stores/admin';

const store = useAdminStore();
const statusFilter = ref('');

const filteredReviews = computed(() =>
  statusFilter.value ? store.reviews.filter((r) => r.status === statusFilter.value) : store.reviews
);

const averageRating = computed(() =>
  store.reviews.length
    ? (store.reviews.reduce((a, r) => a + r.rating, 0) / store.reviews.length).toFixed(1)
    : '0.0'
);
</script>

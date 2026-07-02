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
                        <h4 class="mb-0">{{ store.averageRating }}</h4>
                        <span>Average Rating</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-3">
                    <div class="d-flex align-items-center">
                      <span class="display-6 text-warning"><i class="bi bi-star"></i></span>
                      <div class="ms-3">
                        <h4 class="mb-0">{{ store.totalReviews }}</h4>
                        <span>Total Reviews</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-3">
                    <div class="d-flex align-items-center">
                      <span class="display-6 text-danger"><i class="bi bi-exclamation-octagon"></i></span>
                      <div class="ms-3">
                        <h4 class="mb-0">{{ store.unaddressedReviews }}</h4>
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
                <div v-for="review in store.reviews" :key="review.id" class="bg-light rounded p-3 mb-4">
                  <div class="d-sm-flex justify-content-between mb-3">
                    <div class="d-sm-flex align-items-center">
                      <img class="avatar avatar-md rounded-circle me-3" :src="review.avatar" alt="avatar">
                      <div>
                        <h6 class="m-0">{{ review.name }}</h6>
                        <span class="small">{{ review.date }}</span>
                      </div>
                    </div>
                    <div class="text-sm-end">
                      <ul class="list-inline mb-1">
                        <li v-for="star in 5" :key="star" class="list-inline-item me-0">
                          <i :class="star <= review.rating ? 'fas fa-star text-warning' : 'far fa-star text-warning'"></i>
                        </li>
                      </ul>
                      <span class="badge d-block d-sm-inline-block" :class="review.addressed ? 'bg-success bg-opacity-10 text-success' : 'bg-warning bg-opacity-10 text-warning'">
                        {{ review.addressed ? 'Addressed' : 'Awaiting reply' }}
                      </span>
                    </div>
                  </div>

                  <h6 class="fw-normal"><span class="text-body">Review on:</span> {{ review.listing }}</h6>
                  <p class="mb-0">{{ review.comment }}</p>

                  <!-- Reply box -->
                  <div v-if="replyingTo === review.id" class="mt-3">
                    <textarea class="form-control" rows="2" v-model="replyText" placeholder="Write a public reply to this review..."></textarea>
                    <div class="d-flex justify-content-end gap-2 mt-2">
                      <button class="btn btn-sm btn-light mb-0" @click="cancelReply">Cancel</button>
                      <button class="btn btn-sm btn-primary mb-0" :disabled="!replyText.trim()" @click="sendReply(review)"><i class="bi bi-send fa-fw me-1"></i>Post reply</button>
                    </div>
                  </div>
                  <div v-if="review.reply" class="border-start border-3 border-primary ps-3 mt-3">
                    <h6 class="small mb-1 text-primary"><i class="bi bi-reply fa-fw me-1"></i>Your reply</h6>
                    <p class="small mb-0">{{ review.reply }}</p>
                  </div>

                  <!-- Actions -->
                  <div class="d-flex justify-content-between align-items-center mt-3">
                    <a href="#" class="text-reset small mb-0" data-bs-toggle="modal" data-bs-target="#comingSoonModal"><i class="bi bi-info-circle me-1"></i>Report</a>
                    <div class="hstack gap-2">
                      <button v-if="!review.addressed" class="btn btn-sm btn-light mb-0" @click="markAddressed(review)"><i class="bi bi-check2-circle fa-fw me-1"></i>Mark addressed</button>
                      <button v-if="!review.reply && replyingTo !== review.id" class="btn btn-sm btn-primary-soft mb-0" @click="startReply(review)"><i class="bi bi-reply fa-fw me-1"></i>Reply</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-footer pt-0">
                <DashboardPagination :totalItems="store.totalReviews" :itemsPerPage="5" v-model:currentPage="currentPage" />
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
import { useVendorStore } from '@/stores/vendor';

const store = useVendorStore();
const currentPage = ref(1);

const replyingTo = ref(null);
const replyText = ref('');

const startReply = (review) => {
  replyingTo.value = review.id;
  replyText.value = '';
};

const cancelReply = () => {
  replyingTo.value = null;
  replyText.value = '';
};

const sendReply = (review) => {
  review.reply = replyText.value.trim();
  review.addressed = true;
  cancelReply();
};

const markAddressed = (review) => {
  review.addressed = true;
};
</script>

<template>
  <main>
    <VendorMenu />

    <section class="pt-0">
      <div class="container vstack gap-4">
        <!-- Title START -->
        <div class="row">
          <div class="col-12">
            <h1 class="fs-4 mb-0"><i class="bi bi-journals fa-fw me-1"></i>Listings</h1>
          </div>
        </div>
        <!-- Title END -->

        <!-- Counter START -->
        <div class="row g-4">
          <div class="col-md-6 col-xl-4">
            <div class="card card-body border p-4 h-100">
              <h6>Total Earnings</h6>
              <h2 class="text-success">₦{{ store.totalBalance.toLocaleString() }}</h2>
              <p class="mb-2"><span class="text-primary me-1">0.20%<i class="bi bi-arrow-up"></i></span>lifetime to date</p>
              <div class="mt-auto text-primary-hover"><router-link to="/vendor/earnings" class="text-decoration-underline p-0 mb-0">View statement</router-link></div>
            </div>
          </div>

          <div class="col-md-6 col-xl-4">
            <div class="card card-body border p-4 h-100">
              <h6>Active Listings</h6>
              <h2 class="text-info">{{ store.activeListings }}</h2>
              <p class="mb-2"><span class="text-danger me-1">{{ store.totalListings }}</span>Total Listings</p>
              <div class="mt-auto text-primary-hover"><router-link to="/vendor/create-listing" class="text-decoration-underline p-0 mb-0">Add a new listing</router-link></div>
            </div>
          </div>

          <div class="col-md-6 col-xl-4">
            <div class="card card-body border p-4 h-100">
              <h6>Total Bookings</h6>
              <h2 class="text-warning">{{ store.totalBookings }}</h2>
              <p class="mb-2"><span class="text-success me-1">{{ store.pendingBookings.length }}</span>awaiting confirmation</p>
              <div class="mt-auto text-primary-hover"><router-link to="/vendor/bookings" class="text-decoration-underline p-0 mb-0">View bookings</router-link></div>
            </div>
          </div>
        </div>
        <!-- Counter END -->

        <!-- Listing table START -->
        <div class="row">
          <div class="col-12">
            <div class="card border">
              <div class="card-header border-bottom d-flex justify-content-between align-items-center flex-wrap gap-2">
                <h5 class="card-header-title mb-0">My Listings <span class="badge bg-primary bg-opacity-10 text-primary ms-2">{{ store.totalListings }} Items</span></h5>
                <div class="d-flex gap-2">
                  <select class="form-select form-select-sm" v-model="filter">
                    <option value="">All categories</option>
                    <option v-for="c in categoryList" :key="c" :value="c">{{ c }}</option>
                  </select>
                  <router-link to="/vendor/create-listing" class="btn btn-sm btn-primary-soft mb-0 flex-shrink-0"><i class="bi bi-plus-lg fa-fw me-1"></i>Add New</router-link>
                </div>
              </div>

              <div class="card-body vstack gap-3">
                <!-- Listing item -->
                <div v-for="listing in filteredListings" :key="listing.id" class="card border p-2">
                  <div class="row g-4">
                    <div class="col-md-3 col-lg-2">
                      <img :src="listing.image" class="card-img rounded-2 listing-img" alt="Listing image">
                    </div>
                    <div class="col-md-9 col-lg-10">
                      <div class="card-body position-relative d-flex flex-column p-0 h-100">
                        <div class="list-inline-item dropdown position-absolute top-0 end-0">
                          <a href="#" class="btn btn-sm btn-round btn-light" data-bs-toggle="dropdown"><i class="bi bi-three-dots-vertical"></i></a>
                          <ul class="dropdown-menu dropdown-menu-end min-w-auto shadow rounded">
                            <li><router-link class="dropdown-item" :to="categoryRoute(listing.category)"><i class="bi bi-eye me-1"></i>Preview</router-link></li>
                            <li><a class="dropdown-item" href="#" @click.prevent="listing.active = !listing.active"><i class="bi bi-slash-circle me-1"></i>{{ listing.active ? 'Disable' : 'Enable' }}</a></li>
                          </ul>
                        </div>
                        <div class="d-flex align-items-center gap-2 mb-1">
                          <span class="badge" :class="meta[listing.category].badge"><i :class="meta[listing.category].icon + ' me-1'"></i>{{ listing.category }}</span>
                          <span class="badge" :class="listing.active ? 'text-bg-success' : 'text-bg-secondary'">{{ listing.active ? 'Active' : 'Disabled' }}</span>
                        </div>
                        <h5 class="card-title mb-0 me-5"><router-link :to="categoryRoute(listing.category)">{{ listing.name }}</router-link></h5>
                        <small><i class="bi bi-geo-alt me-2"></i>{{ listing.location }}</small>
                        <div class="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
                          <div class="d-flex align-items-center">
                            <h5 class="fw-bold mb-0 me-1">₦{{ listing.price.toLocaleString() }}</h5>
                            <span class="mb-0 me-2">{{ meta[listing.category].unit }}</span>
                          </div>
                          <div class="hstack gap-2 mt-3 mt-sm-0">
                            <router-link :to="`/vendor/create-listing?edit=${listing.id}`" class="btn btn-sm btn-primary-soft mb-0"><i class="bi bi-pencil-square fa-fw me-1"></i>Edit</router-link>
                            <button class="btn btn-sm btn-danger-soft mb-0" @click="deleting = listing"><i class="bi bi-trash3 fa-fw me-1"></i>Delete</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Listing table END -->
      </div>
    </section>

    <!-- Delete confirm modal -->
    <div v-if="deleting" class="modal-backdrop-custom" @click.self="deleting = null">
      <div class="card border-0 shadow modal-card-custom">
        <div class="card-body text-center p-4">
          <div class="icon-xl bg-danger bg-opacity-10 text-danger rounded-circle mx-auto mb-3"><i class="bi bi-trash3"></i></div>
          <h5 class="mb-2">Delete "{{ deleting.name }}"?</h5>
          <p class="text-muted small mb-4">This permanently removes the listing and it will no longer be bookable. This action cannot be undone.</p>
          <div class="d-flex justify-content-center gap-2">
            <button class="btn btn-light mb-0" @click="deleting = null">Cancel</button>
            <button class="btn btn-danger mb-0" @click="confirmDelete"><i class="bi bi-trash3 fa-fw me-1"></i>Delete listing</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import VendorMenu from '@/components/VendorMenu.vue';
import { useVendorStore, CATEGORY_META } from '@/stores/vendor';

const store = useVendorStore();
const meta = CATEGORY_META;
const filter = ref('');
const deleting = ref(null);
const categoryList = Object.keys(CATEGORY_META);

const filteredListings = computed(() =>
  filter.value ? store.listings.filter((l) => l.category === filter.value) : store.listings
);

const categoryRoute = (category) => ({
  Hotel: '/categories/hotels',
  Cab: '/categories/cabs',
  Eatery: '/categories/eatery',
  Event: '/categories/events',
  Movie: '/categories/movies',
}[category] || '/');

const confirmDelete = () => {
  store.deleteListing(deleting.value.id);
  deleting.value = null;
};
</script>

<style scoped>
.listing-img {
  width: 100%;
  height: 140px;
  object-fit: cover;
}
@media (max-width: 767.98px) {
  .listing-img {
    height: 180px;
  }
}
.modal-backdrop-custom {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1055;
  padding: 1rem;
}
.modal-card-custom {
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
}
</style>

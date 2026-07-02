<template>
  <main>
    <VendorMenu />

    <!-- Page banner START -->
    <section class="pt-4 pt-md-5 pb-0">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="fs-2 mb-2">Add New Listing</h1>
            <p class="mb-0">Tell us about your hotel, cab, restaurant, event, or cinema. Complete the steps below to publish your listing on Bookamia.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Page banner END -->

    <!-- Steps START -->
    <section>
      <div class="container">
        <div class="bs-stepper stepper-outline">
          <!-- Step buttons START -->
          <div class="bs-stepper-header" role="tablist">
            <div class="step" :class="{ active: currentStep >= 1 }">
              <div class="text-center">
                <button type="button" class="btn btn-link step-trigger mb-0" @click="goToStep(1)">
                  <span class="bs-stepper-circle">1</span>
                </button>
                <h6 class="bs-stepper-label d-none d-md-block">Basic Information</h6>
              </div>
            </div>
            <div class="line"></div>

            <div class="step" :class="{ active: currentStep >= 2 }">
              <div class="text-center">
                <button type="button" class="btn btn-link step-trigger mb-0" @click="goToStep(2)">
                  <span class="bs-stepper-circle">2</span>
                </button>
                <h6 class="bs-stepper-label d-none d-md-block">Detailed Information</h6>
              </div>
            </div>
            <div class="line"></div>

            <div class="step" :class="{ active: currentStep >= 3 }">
              <div class="text-center">
                <button type="button" class="btn btn-link step-trigger mb-0" @click="goToStep(3)">
                  <span class="bs-stepper-circle">3</span>
                </button>
                <h6 class="bs-stepper-label d-none d-md-block">Price &amp; Policy</h6>
              </div>
            </div>
          </div>
          <!-- Step buttons END -->

          <!-- Step content START -->
          <div class="bs-stepper-content p-0 pt-4 pt-md-5">
            <form @submit.prevent>
              <!-- STEP 1 START -->
              <div v-show="currentStep === 1" class="vstack gap-4">
                <h4 class="mb-0">Basic Information</h4>

                <!-- Listing category -->
                <div class="card shadow">
                  <div class="card-header border-bottom">
                    <h5 class="mb-0">Choose Listing Category</h5>
                  </div>
                  <div class="card-body">
                    <div class="row g-4">
                      <div class="col-md-6">
                        <label class="form-label">Listing category *</label>
                        <select class="form-select" v-model="form.category">
                          <option value="">Select category</option>
                          <option v-for="c in categories" :key="c.value" :value="c.value">{{ c.label }}</option>
                        </select>
                        <small class="text-muted">{{ activeCategory.hint }}</small>
                      </div>

                      <div class="col-md-6">
                        <label class="form-label">Listing name *</label>
                        <input class="form-control" type="text" v-model="form.name" :placeholder="activeCategory.namePlaceholder">
                      </div>

                      <div class="col-12">
                        <label class="form-label">Short description *</label>
                        <textarea class="form-control" rows="2" v-model="form.shortDescription" placeholder="A short summary guests will see on the listing card"></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Listing location -->
                <div class="card shadow">
                  <div class="card-header border-bottom">
                    <h5 class="mb-0">Listing Location</h5>
                  </div>
                  <div class="card-body">
                    <div class="row g-3">
                      <div class="col-md-6">
                        <label class="form-label">State *</label>
                        <select class="form-select" v-model="form.state">
                          <option value="">Select state</option>
                          <option v-for="s in states" :key="s">{{ s }}</option>
                        </select>
                      </div>
                      <div class="col-md-6">
                        <label class="form-label">City / Area *</label>
                        <input class="form-control" type="text" v-model="form.city" placeholder="e.g. Victoria Island">
                      </div>
                      <div class="col-12">
                        <label class="form-label">Street address *</label>
                        <input class="form-control" type="text" v-model="form.street" placeholder="Enter street address">
                      </div>
                      <div class="col-12">
                        <label class="form-label">Nearest landmark</label>
                        <input class="form-control" type="text" v-model="form.landmark" placeholder="e.g. Close to Eko Hotel roundabout">
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Upload images -->
                <div class="card shadow">
                  <div class="card-header border-bottom">
                    <h5 class="mb-0">Upload Images</h5>
                  </div>
                  <div class="card-body">
                    <div class="row g-3">
                      <div class="col-12">
                        <label class="form-label">Upload thumbnail image *</label>
                        <input class="form-control" type="file" accept="image/jpeg, image/png">
                        <p class="small mb-0 mt-2"><b>Note:</b> Only JPG, JPEG and PNG. Suggested dimensions 600px &times; 450px (4:3).</p>
                      </div>
                      <div class="col-12">
                        <label class="form-label">Upload image gallery</label>
                        <div class="border border-dashed rounded p-5 text-center">
                          <i class="bi bi-upload display-3"></i>
                          <p class="mb-0">Drop files here or click to upload.</p>
                          <input type="file" class="d-none" id="gallery-image" multiple accept="image/jpeg, image/png">
                          <label for="gallery-image" class="btn btn-sm btn-primary-soft mt-3 mb-0">Browse</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="text-end">
                  <button class="btn btn-primary mb-0" @click="goToStep(2)">Next</button>
                </div>
              </div>
              <!-- STEP 1 END -->

              <!-- STEP 2 START -->
              <div v-show="currentStep === 2" class="vstack gap-4">
                <h4 class="mb-0">Detailed Information</h4>

                <!-- Overview -->
                <div class="card shadow">
                  <div class="card-header border-bottom">
                    <h5 class="mb-0">Overview</h5>
                  </div>
                  <div class="card-body">
                    <div class="row g-4">
                      <div class="col-12">
                        <label class="form-label">{{ activeCategory.featureLabel }}</label>
                        <div class="d-flex flex-wrap gap-2">
                          <div v-for="feature in activeCategory.features" :key="feature" class="form-check radio-bg-light">
                            <input class="form-check-input" type="checkbox" :id="`feat-${feature}`" :value="feature" v-model="form.features">
                            <label class="form-check-label" :for="`feat-${feature}`">{{ feature }}</label>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <label class="form-label">Full description *</label>
                        <textarea class="form-control" rows="6" v-model="form.description" placeholder="Describe your listing in detail — what makes it special, what guests can expect."></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Category specific details -->
                <div class="card shadow">
                  <div class="card-header border-bottom">
                    <h5 class="mb-0">{{ activeCategory.detailTitle }}</h5>
                  </div>
                  <div class="card-body">
                    <div class="row g-4">
                      <div v-for="field in activeCategory.detailFields" :key="field.model" :class="field.col || 'col-md-4'">
                        <label class="form-label">{{ field.label }}</label>
                        <select v-if="field.options" class="form-select" v-model="form.details[field.model]">
                          <option value="">Select</option>
                          <option v-for="opt in field.options" :key="opt">{{ opt }}</option>
                        </select>
                        <input v-else class="form-control" :type="field.type || 'text'" v-model="form.details[field.model]" :placeholder="field.placeholder">
                      </div>
                    </div>
                  </div>
                </div>

                <div class="hstack gap-2 flex-wrap justify-content-between">
                  <button class="btn btn-secondary mb-0" @click="goToStep(1)">Previous</button>
                  <button class="btn btn-primary mb-0" @click="goToStep(3)">Next</button>
                </div>
              </div>
              <!-- STEP 2 END -->

              <!-- STEP 3 START -->
              <div v-show="currentStep === 3" class="vstack gap-4">
                <h4 class="mb-0">Price &amp; Policy</h4>

                <!-- Listing price -->
                <div class="card shadow">
                  <div class="card-header border-bottom">
                    <h5 class="mb-0">Listing Price</h5>
                  </div>
                  <div class="card-body">
                    <div class="row g-4">
                      <div class="col-md-6">
                        <label class="form-label">Currency</label>
                        <input class="form-control" type="text" value="Nigerian Naira (₦)" disabled>
                      </div>
                      <div class="col-md-6">
                        <label class="form-label">Base price ({{ activeCategory.priceUnit }}) *</label>
                        <div class="input-group">
                          <span class="input-group-text">₦</span>
                          <input type="number" class="form-control" v-model="form.price" placeholder="Enter price">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <label class="form-label">Discount (%)</label>
                        <input type="number" class="form-control" v-model="form.discount" placeholder="Enter discount">
                      </div>
                      <div class="col-md-6">
                        <label class="form-label">Cancellation policy</label>
                        <select class="form-select" v-model="form.cancellation">
                          <option value="">Select option</option>
                          <option>Free cancellation</option>
                          <option>Partially refundable</option>
                          <option>Non refundable</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Listing policy -->
                <div class="card shadow">
                  <div class="card-header border-bottom">
                    <h5 class="mb-0">Listing Policy</h5>
                  </div>
                  <div class="card-body">
                    <div class="row g-4">
                      <div class="col-12">
                        <label class="form-label">Terms &amp; policy details</label>
                        <textarea class="form-control" rows="4" v-model="form.policy" placeholder="Outline your booking terms, check-in rules, refund window, etc."></textarea>
                      </div>
                      <div class="col-12">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="agreeTerms" v-model="form.agree">
                          <label class="form-check-label" for="agreeTerms">I confirm the details above are accurate and agree to Bookamia's vendor terms.</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="d-flex justify-content-between">
                  <button class="btn btn-secondary mb-0" @click="goToStep(2)">Previous</button>
                  <button class="btn btn-primary mb-0" :disabled="!form.agree" @click="submitListing">Add Listing</button>
                </div>
              </div>
              <!-- STEP 3 END -->
            </form>
          </div>
          <!-- Step content END -->
        </div>
      </div>
    </section>
    <!-- Steps END -->
  </main>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import VendorMenu from '@/components/VendorMenu.vue';

const currentStep = ref(1);
const goToStep = (n) => {
  currentStep.value = n;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const states = [
  'Abia', 'Abuja (FCT)', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa',
  'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu',
  'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara',
  'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers',
  'Sokoto', 'Taraba', 'Yobe', 'Zamfara',
];

const categories = [
  {
    value: 'hotel',
    label: 'Hotel',
    hint: 'Hotels, resorts, apartments and short-stay accommodation.',
    namePlaceholder: 'e.g. Eko Hotels & Suites',
    priceUnit: 'per night',
    featureLabel: 'Select amenities',
    features: ['Swimming pool', 'Free Wi-Fi', 'Restaurant', 'Gym', 'Parking', 'Air conditioning', 'Room service', '24/7 security'],
    detailTitle: 'Property Details',
    detailFields: [
      { model: 'rooms', label: 'Total rooms', type: 'number', placeholder: 'e.g. 40' },
      { model: 'roomTypes', label: 'Room types', placeholder: 'e.g. Standard, Deluxe, Suite' },
      { model: 'checkIn', label: 'Check-in / Check-out', placeholder: 'e.g. 2:00 PM / 12:00 PM' },
    ],
  },
  {
    value: 'cab',
    label: 'Cab / Ride',
    hint: 'Cabs, car hire and chauffeur-driven rides.',
    namePlaceholder: 'e.g. Toyota Corolla / Camry',
    priceUnit: 'per trip',
    featureLabel: 'Select vehicle features',
    features: ['Air conditioning', 'GPS tracking', 'Professional driver', 'Bluetooth audio', 'Child seat', 'Luggage space'],
    detailTitle: 'Vehicle Details',
    detailFields: [
      { model: 'vehicleType', label: 'Vehicle type', options: ['Sedan', 'SUV', 'Bus', 'Luxury', 'Mini Van'] },
      { model: 'seats', label: 'Number of seats', type: 'number', placeholder: 'e.g. 4' },
      { model: 'plate', label: 'Plate number', placeholder: 'e.g. ABC-123-XY' },
      { model: 'driver', label: 'Driver option', options: ['With driver', 'Self drive'] },
    ],
  },
  {
    value: 'eatery',
    label: 'Eatery / Restaurant',
    hint: 'Restaurants, bukas, lounges and food vendors.',
    namePlaceholder: 'e.g. Mama Cass Restaurant',
    priceUnit: 'per plate (avg.)',
    featureLabel: 'Select features',
    features: ['Dine-in', 'Takeaway', 'Home delivery', 'Outdoor seating', 'Live music', 'Air conditioning', 'Parking'],
    detailTitle: 'Restaurant Details',
    detailFields: [
      { model: 'cuisine', label: 'Cuisine type', placeholder: 'e.g. Nigerian, Continental' },
      { model: 'seating', label: 'Seating capacity', type: 'number', placeholder: 'e.g. 80' },
      { model: 'hours', label: 'Opening hours', placeholder: 'e.g. 8:00 AM - 10:00 PM' },
    ],
  },
  {
    value: 'event',
    label: 'Event / Venue',
    hint: 'Event centres, concerts, conferences and party venues.',
    namePlaceholder: 'e.g. Afrobeats Live Concert',
    priceUnit: 'per ticket',
    featureLabel: 'Select features',
    features: ['Stage & sound', 'Parking', 'Catering', 'Security', 'Air conditioning', 'Seating provided', 'Restrooms'],
    detailTitle: 'Event Details',
    detailFields: [
      { model: 'eventType', label: 'Event type', options: ['Concert', 'Conference', 'Wedding', 'Party', 'Festival', 'Exhibition'] },
      { model: 'capacity', label: 'Venue capacity', type: 'number', placeholder: 'e.g. 500' },
      { model: 'date', label: 'Event date', type: 'date' },
    ],
  },
  {
    value: 'movie',
    label: 'Movie / Cinema',
    hint: 'Cinemas and movie screenings.',
    namePlaceholder: 'e.g. Filmhouse Cinemas',
    priceUnit: 'per ticket',
    featureLabel: 'Select features',
    features: ['3D screening', 'IMAX', 'Dolby sound', 'Reclining seats', 'Snack bar', 'Air conditioning', 'Parking'],
    detailTitle: 'Cinema Details',
    detailFields: [
      { model: 'screens', label: 'Number of screens', type: 'number', placeholder: 'e.g. 6' },
      { model: 'nowShowing', label: 'Now showing', placeholder: 'e.g. A Tribe Called Judah' },
      { model: 'showtimes', label: 'Showtimes', placeholder: 'e.g. 12:00, 15:30, 19:00' },
    ],
  },
];

const form = reactive({
  category: 'hotel',
  name: '',
  shortDescription: '',
  state: '',
  city: '',
  street: '',
  landmark: '',
  features: [],
  description: '',
  details: {},
  price: '',
  discount: '',
  cancellation: '',
  policy: '',
  agree: false,
});

const activeCategory = computed(
  () => categories.find((c) => c.value === form.category) || categories[0]
);

const submitListing = () => {
  // Placeholder: wire up to API later
  alert('Listing submitted for review!');
};
</script>

<style scoped>
/* Base bs-stepper layout (theme only ships the .stepper-outline skin) */
.bs-stepper-header {
  display: flex;
  align-items: center;
}
.bs-stepper-header .step {
  flex: 0 0 auto;
}
.bs-stepper-header .line {
  flex: 1 1 auto;
  min-width: 2rem;
  height: 2px;
  margin: 0 0.5rem;
}
.step-trigger {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
}
/* Center the number inside the circle */
.bs-stepper-circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1 !important;
  padding: 0;
}
</style>

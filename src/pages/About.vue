<template>
  <main>
    <!-- Banner -->
    <section class="pt-4 pt-md-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card bg-light overflow-hidden px-sm-5">
              <div class="card-body">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item"><router-link to="/"><i class="bi bi-house me-1"></i>Home</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">About us</li>
                  </ol>
                </nav>
                <h1 class="m-0 h2 card-title">About Bookamia</h1>
                <p class="mb-0 text-muted">Nigeria's #1 online booking platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Story -->
    <section class="pt-4">
      <div class="container">
        <div class="row g-4 align-items-center">
          <div class="col-lg-7">
            <h3>One platform, every booking</h3>
            <p>Bookamia connects millions of Nigerians to the best hotels, eateries, event centres, cab services and cinemas — all in one place. Whether you're planning a weekend getaway in Lagos, reserving a table in Abuja, or catching the latest Nollywood blockbuster, Bookamia makes it fast, easy and trusted.</p>
            <p class="mb-0">We started with a simple belief: booking anything in Nigeria should take minutes, not phone calls. Today we partner with hundreds of verified vendors across all 36 states, with secure payments powered by Paystack and a support team that actually picks up.</p>
          </div>
          <div class="col-lg-5">
            <div class="row g-3">
              <div class="col-6">
                <div class="card card-body bg-primary bg-opacity-10 border border-primary border-opacity-25 text-center p-4">
                  <h3 class="text-primary mb-0">500+</h3>
                  <span class="small">Verified vendors</span>
                </div>
              </div>
              <div class="col-6">
                <div class="card card-body bg-success bg-opacity-10 border border-success border-opacity-25 text-center p-4">
                  <h3 class="text-success mb-0">50k+</h3>
                  <span class="small">Bookings completed</span>
                </div>
              </div>
              <div class="col-6">
                <div class="card card-body bg-warning bg-opacity-10 border border-warning border-opacity-25 text-center p-4">
                  <h3 class="text-warning mb-0">36</h3>
                  <span class="small">States covered</span>
                </div>
              </div>
              <div class="col-6">
                <div class="card card-body bg-info bg-opacity-10 border border-info border-opacity-25 text-center p-4">
                  <h3 class="text-info mb-0">4.8★</h3>
                  <span class="small">Average rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What we offer -->
    <section>
      <div class="container">
        <div class="row mb-3">
          <div class="col-12 text-center">
            <h3 class="mb-0">What you can book</h3>
          </div>
        </div>
        <div class="row g-4">
          <div v-for="c in categories" :key="c.name" class="col-6 col-md-4 col-xl">
            <router-link :to="c.route" class="card card-body border h-100 text-center text-reset text-decoration-none p-4 card-hover-shadow">
              <div class="icon-lg rounded-circle mx-auto mb-3" :class="c.bg"><i :class="c.icon"></i></div>
              <h6 class="mb-1">{{ c.name }}</h6>
              <span class="small text-muted">{{ c.desc }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="pb-5">
      <div class="container">
        <div class="card bg-primary overflow-hidden p-4 p-sm-5 text-center">
          <h3 class="text-white mb-2">Ready to start booking?</h3>
          <p class="text-white opacity-75 mb-4">Join thousands of Nigerians who book smarter with Bookamia.</p>
          <div class="d-flex justify-content-center gap-2 flex-wrap">
            <router-link to="/auth/signup" class="btn btn-white mb-0"><i class="bi bi-person-plus fa-fw me-1"></i>Create free account</router-link>
            <router-link to="/contact" class="btn btn-outline-light mb-0"><i class="bi bi-headset fa-fw me-1"></i>Talk to us</router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const categories = [
  { name: 'Hotels', desc: 'Stays & resorts', route: '/categories/hotels', icon: 'fa-solid fa-hotel', bg: 'bg-success bg-opacity-10 text-success' },
  { name: 'Eateries', desc: 'Restaurants & bukas', route: '/categories/eatery', icon: 'fa-solid fa-utensils', bg: 'bg-warning bg-opacity-10 text-warning' },
  { name: 'Events', desc: 'Concerts & venues', route: '/categories/events', icon: 'fa-solid fa-champagne-glasses', bg: 'bg-primary bg-opacity-10 text-primary' },
  { name: 'Cabs', desc: 'Rides & hire', route: '/categories/cabs', icon: 'fa-solid fa-taxi', bg: 'bg-info bg-opacity-10 text-info' },
  { name: 'Movies', desc: 'Cinema tickets', route: '/categories/movies', icon: 'fa-solid fa-film', bg: 'bg-danger bg-opacity-10 text-danger' },
];
</script>

<style scoped>
.card-hover-shadow {
  transition: box-shadow 0.2s, transform 0.2s;
}
.card-hover-shadow:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}
</style>

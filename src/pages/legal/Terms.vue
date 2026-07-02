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
                    <li class="breadcrumb-item active" aria-current="page">Terms of Service</li>
                  </ol>
                </nav>
                <h1 class="m-0 h2 card-title">Terms of Service</h1>
                <p class="mb-0 text-muted">Last updated: 1 July 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="pt-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="vstack gap-4">
              <div class="card border p-4">
                <h5><i class="bi bi-1-circle text-primary me-2"></i>Acceptance of terms</h5>
                <p class="mb-0">By creating an account or making a booking on Bookamia, you agree to these Terms of Service. Bookamia is an online marketplace that connects customers with hotels, eateries, event centres, cab services and cinemas across Nigeria. If you do not agree with any part of these terms, please do not use the platform.</p>
              </div>

              <div class="card border p-4">
                <h5><i class="bi bi-2-circle text-primary me-2"></i>Bookings &amp; payments</h5>
                <p>All bookings are subject to availability and confirmation by the vendor. Prices are displayed in Nigerian Naira (₦) and include applicable charges unless stated otherwise.</p>
                <p class="mb-0">Payments are processed securely through Paystack or your Bookamia wallet. A booking is only confirmed once payment (full or agreed part-payment) has been received and the vendor has accepted the booking.</p>
              </div>

              <div class="card border p-4">
                <h5><i class="bi bi-3-circle text-primary me-2"></i>Vendor responsibilities</h5>
                <p class="mb-0">Vendors are responsible for the accuracy of their listings, honouring confirmed bookings, and delivering the service as described. Bookamia may suspend or remove vendors who repeatedly cancel bookings, misrepresent listings, or receive verified complaints.</p>
              </div>

              <div class="card border p-4">
                <h5><i class="bi bi-4-circle text-primary me-2"></i>Cancellations &amp; refunds</h5>
                <p class="mb-0">Cancellation rules depend on each listing's stated policy (free cancellation, partially refundable, or non-refundable). Where a refund is due, it is processed according to our <router-link to="/refund-policy">Refund Policy</router-link>.</p>
              </div>

              <div class="card border p-4">
                <h5><i class="bi bi-5-circle text-primary me-2"></i>User conduct</h5>
                <p class="mb-0">You agree not to misuse the platform — including posting false reviews, attempting fraudulent payments, or harassing vendors or other users. Accounts involved in such activity may be suspended or permanently removed.</p>
              </div>

              <div class="card border p-4">
                <h5><i class="bi bi-6-circle text-primary me-2"></i>Limitation of liability</h5>
                <p class="mb-0">Bookamia acts as an intermediary between you and vendors. While we vet vendors and moderate the platform, the service itself (hotel stay, meal, ride, event, screening) is delivered by the vendor. Our liability is limited to the amount paid through the platform for the affected booking.</p>
              </div>

              <div class="card border p-4">
                <h5><i class="bi bi-7-circle text-primary me-2"></i>Contact</h5>
                <p class="mb-0">Questions about these terms? Reach us at <a href="mailto:support@bookamia.com">support@bookamia.com</a> or via the <router-link to="/contact">contact page</router-link>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
</script>

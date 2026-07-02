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
                    <li class="breadcrumb-item active" aria-current="page">Refund Policy</li>
                  </ol>
                </nav>
                <h1 class="m-0 h2 card-title">Refund Policy</h1>
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
                <h5><i class="bi bi-info-circle text-primary me-2"></i>How refunds work</h5>
                <p class="mb-0">Each listing on Bookamia displays its cancellation policy before you book: <strong>Free cancellation</strong>, <strong>Partially refundable</strong>, or <strong>Non-refundable</strong>. The policy shown at the time of booking is what applies to your refund.</p>
              </div>

              <div class="card border p-4">
                <h5><i class="bi bi-table text-primary me-2"></i>Refund timelines by category</h5>
                <div class="table-responsive">
                  <table class="table align-middle mb-0">
                    <thead class="table-light">
                      <tr>
                        <th>Category</th>
                        <th>Free cancellation window</th>
                        <th>Refund processing</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td><i class="fa-solid fa-hotel fa-fw me-2 text-success"></i>Hotels</td><td>Up to 48 hours before check-in</td><td>3–5 business days</td></tr>
                      <tr><td><i class="fa-solid fa-utensils fa-fw me-2 text-warning"></i>Eateries</td><td>Up to 6 hours before reservation</td><td>1–3 business days</td></tr>
                      <tr><td><i class="fa-solid fa-champagne-glasses fa-fw me-2 text-primary"></i>Events</td><td>Up to 72 hours before the event</td><td>3–5 business days</td></tr>
                      <tr><td><i class="fa-solid fa-taxi fa-fw me-2 text-info"></i>Cabs</td><td>Up to 2 hours before pickup</td><td>1–3 business days</td></tr>
                      <tr><td><i class="fa-solid fa-film fa-fw me-2 text-danger"></i>Movies</td><td>Up to 3 hours before showtime</td><td>1–3 business days</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="card border p-4">
                <h5><i class="bi bi-wallet2 text-primary me-2"></i>Refund destination</h5>
                <p class="mb-0">Refunds are returned to your original payment method, or instantly to your <router-link to="/user/wallet">Bookamia wallet</router-link> if you choose wallet credit — wallet refunds are immediate and can be used for any future booking.</p>
              </div>

              <div class="card border p-4">
                <h5><i class="bi bi-x-octagon text-primary me-2"></i>Vendor cancellations</h5>
                <p class="mb-0">If a vendor cancels a confirmed booking, you always receive a <strong>100% refund</strong> regardless of the listing's cancellation policy — plus a discount voucher for the inconvenience.</p>
              </div>

              <div class="card border p-4">
                <h5><i class="bi bi-headset text-primary me-2"></i>Disputes</h5>
                <p class="mb-0">If a service was not delivered as described, open a dispute within 48 hours of the booking date from <router-link to="/user/bookings">My Bookings</router-link> or contact <a href="mailto:support@bookamia.com">support@bookamia.com</a>. Our team resolves most disputes within 5 business days.</p>
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

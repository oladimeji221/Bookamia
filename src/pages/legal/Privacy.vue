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
                    <li class="breadcrumb-item active" aria-current="page">Privacy Policy</li>
                  </ol>
                </nav>
                <h1 class="m-0 h2 card-title">Privacy Policy</h1>
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
                <h5><i class="bi bi-database text-primary me-2"></i>Information we collect</h5>
                <p class="mb-0">When you use Bookamia we collect the information you provide directly — your name, email address, phone number, and booking details. We also collect payment references from our payment processor (Paystack); we never store your full card details.</p>
              </div>

              <div class="card border p-4">
                <h5><i class="bi bi-gear text-primary me-2"></i>How we use your information</h5>
                <ul class="mb-0">
                  <li>To process and confirm your bookings with vendors</li>
                  <li>To send booking confirmations, reminders and receipts</li>
                  <li>To secure your account and detect fraudulent activity</li>
                  <li>To improve our services and personalise recommendations</li>
                  <li>To send promotional offers — only if you opt in</li>
                </ul>
              </div>

              <div class="card border p-4">
                <h5><i class="bi bi-share text-primary me-2"></i>Sharing with vendors</h5>
                <p class="mb-0">When you make a booking, we share the details a vendor needs to fulfil it — your name, contact information and booking specifics. Vendors may only use this information to deliver the booked service.</p>
              </div>

              <div class="card border p-4">
                <h5><i class="bi bi-shield-check text-primary me-2"></i>Data security</h5>
                <p class="mb-0">We protect your data with industry-standard encryption in transit and at rest, and restrict access to personnel who need it. Payment transactions are handled by PCI-DSS compliant processors.</p>
              </div>

              <div class="card border p-4">
                <h5><i class="bi bi-person-check text-primary me-2"></i>Your rights</h5>
                <p class="mb-0">In line with the Nigeria Data Protection Act (NDPA), you may request access to, correction of, or deletion of your personal data at any time from your <router-link to="/user/settings">account settings</router-link> or by contacting <a href="mailto:privacy@bookamia.com">privacy@bookamia.com</a>.</p>
              </div>

              <div class="card border p-4">
                <h5><i class="bi bi-cookie text-primary me-2"></i>Cookies</h5>
                <p class="mb-0">We use essential cookies to keep you signed in and remember your preferences, plus analytics cookies to understand how the platform is used. You can control cookies through your browser settings.</p>
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

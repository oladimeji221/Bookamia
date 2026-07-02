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
                    <li class="breadcrumb-item active" aria-current="page">FAQ</li>
                  </ol>
                </nav>
                <h1 class="m-0 h2 card-title">Frequently Asked Questions</h1>
                <p class="mb-0 text-muted">Everything you need to know about booking on Bookamia</p>
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
            <div v-for="group in faqs" :key="group.title" class="mb-4">
              <h5 class="mb-3"><i :class="group.icon + ' text-primary me-2'"></i>{{ group.title }}</h5>
              <div class="accordion accordion-icon accordion-bg-light" :id="group.id">
                <div v-for="(item, i) in group.items" :key="i" class="accordion-item mb-3">
                  <h6 class="accordion-header">
                    <button class="accordion-button rounded collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#${group.id}-${i}`" aria-expanded="false">
                      {{ item.q }}
                    </button>
                  </h6>
                  <div :id="`${group.id}-${i}`" class="accordion-collapse collapse" :data-bs-parent="`#${group.id}`">
                    <div class="accordion-body mt-3">{{ item.a }}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Still need help -->
            <div class="card bg-primary bg-opacity-10 border border-primary border-opacity-25 p-4 text-center mb-5">
              <h5 class="mb-2">Still need help?</h5>
              <p class="mb-3">Our support team is available 7 days a week.</p>
              <div class="d-flex justify-content-center gap-2">
                <router-link to="/contact" class="btn btn-primary mb-0"><i class="bi bi-headset fa-fw me-1"></i>Contact Support</router-link>
                <a href="https://wa.me/" target="_blank" class="btn btn-success mb-0"><i class="fab fa-whatsapp fa-fw me-1"></i>WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const faqs = [
  {
    id: 'faq-booking',
    title: 'Bookings',
    icon: 'bi bi-bookmark-heart',
    items: [
      { q: 'How do I make a booking?', a: 'Browse any category (Hotels, Eateries, Events, Cabs or Movies), open the listing you like, choose your date and options, then pay securely with Paystack or your Bookamia wallet. You will get an instant confirmation email and the booking appears under My Bookings.' },
      { q: 'Can I book for someone else?', a: 'Yes. During checkout you can enter the guest\'s name and phone number so the vendor knows who to expect. The receipt still comes to your account.' },
      { q: 'How do I cancel or change a booking?', a: 'Go to My Bookings, open the booking and choose Manage. Whether a refund applies depends on the listing\'s cancellation policy shown at the time of booking.' },
      { q: 'What happens if the vendor cancels?', a: 'You receive a 100% refund automatically, plus a discount voucher for the inconvenience. We also flag vendors who cancel repeatedly.' },
    ],
  },
  {
    id: 'faq-payment',
    title: 'Payments & Refunds',
    icon: 'bi bi-credit-card',
    items: [
      { q: 'Which payment methods are supported?', a: 'We support cards, bank transfer and USSD through Paystack, plus your Bookamia wallet balance. Some listings also allow part-payment or pay-on-arrival.' },
      { q: 'How long do refunds take?', a: 'Wallet refunds are instant. Refunds to cards or bank accounts take 1–5 business days depending on the category — see our Refund Policy for the full breakdown.' },
      { q: 'Is my payment information safe?', a: 'Yes. Payments are processed by PCI-DSS compliant providers, and Bookamia never stores your full card details.' },
    ],
  },
  {
    id: 'faq-vendor',
    title: 'For Vendors',
    icon: 'bi bi-shop',
    items: [
      { q: 'How do I list my business on Bookamia?', a: 'Create an account, open the Vendor Dashboard and click Add New Listing. Complete the three steps (basic info, details, price & policy) and submit. Most applications are reviewed within 24–48 hours.' },
      { q: 'How and when do I get paid?', a: 'Earnings accumulate in your vendor wallet as bookings are completed. You can request a withdrawal to your Nigerian bank account anytime from the Earnings page; payouts are processed within 1–2 business days.' },
      { q: 'What commission does Bookamia charge?', a: 'Bookamia charges a competitive commission on completed bookings only — you never pay to list. The current rate is shown in your vendor agreement.' },
    ],
  },
  {
    id: 'faq-account',
    title: 'Account & Security',
    icon: 'bi bi-shield-lock',
    items: [
      { q: 'How do I reset my password?', a: 'Click "Forgot password" on the sign-in page and follow the email instructions. You can also change your password anytime from My Profile.' },
      { q: 'How do I enable two-factor authentication?', a: 'Go to Settings → Account Settings and add your phone number under Two-factor authentication for an extra layer of security.' },
      { q: 'How do I delete my account?', a: 'From Settings, tick the confirmation box under Delete Profile and submit. Deletion is permanent and removes your bookings, wishlist and reviews.' },
    ],
  },
];
</script>

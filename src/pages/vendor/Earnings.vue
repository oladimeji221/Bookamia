<template>
  <main>
    <VendorMenu />

    <section class="pt-0">
      <div class="container vstack gap-4">
        <!-- Title START -->
        <div class="row">
          <div class="col-12">
            <h1 class="fs-4 mb-0"><i class="bi bi-graph-up-arrow fa-fw me-1"></i>Earnings</h1>
          </div>
        </div>
        <!-- Title END -->

        <!-- Wallet START -->
        <div class="row g-4">
          <!-- Main balance card -->
          <div class="col-lg-6">
            <div class="card bg-primary p-4 h-100 border-0">
              <div class="d-flex justify-content-between align-items-start text-white">
                <div>
                  <span class="opacity-75"><i class="bi bi-wallet2 me-2"></i>Main Balance</span>
                  <h3 class="text-white mb-0 mt-2">₦32,000,000</h3>
                </div>
                <span class="badge bg-white text-primary">NGN</span>
              </div>
              <div class="mt-auto pt-4 d-flex flex-wrap gap-2">
                <button class="btn btn-white mb-0"><i class="bi bi-arrow-up-right-circle me-2"></i>Withdraw</button>
                <button class="btn btn-outline-light mb-0"><i class="bi bi-clock-history me-2"></i>History</button>
              </div>
            </div>
          </div>

          <!-- Total balance -->
          <div class="col-md-6 col-lg-3">
            <div class="card card-body border p-4 h-100">
              <div class="icon-lg bg-success bg-opacity-10 text-success rounded-3 mb-3"><i class="bi bi-cash-stack"></i></div>
              <h6 class="mb-1">Total Balance</h6>
              <h4 class="mb-0">₦47,356,000</h4>
              <p class="mb-0 mt-auto small text-muted">Lifetime earnings to date</p>
            </div>
          </div>

          <!-- Pending / unapproved -->
          <div class="col-md-6 col-lg-3">
            <div class="card card-body border p-4 h-100">
              <div class="icon-lg bg-warning bg-opacity-10 text-warning rounded-3 mb-3"><i class="bi bi-hourglass-split"></i></div>
              <h6 class="mb-1">Pending Balance</h6>
              <h4 class="mb-0">₦15,356,000</h4>
              <p class="mb-0 mt-auto small text-muted">Awaiting approval &amp; clearance</p>
            </div>
          </div>
        </div>
        <!-- Wallet END -->

        <!-- Invoice history START -->
        <div class="row">
          <div class="col-12">
            <div class="card border rounded-3">
              <div class="card-header border-bottom">
                <h5 class="card-header-title mb-0">Invoice history</h5>
              </div>

              <div class="card-body">
                <div class="table-responsive border-0">
                  <table class="table align-middle p-4 mb-0 table-hover table-shrink">
                    <thead class="table-light">
                      <tr>
                        <th scope="col" class="border-0 rounded-start">Invoice ID</th>
                        <th scope="col" class="border-0">Date</th>
                        <th scope="col" class="border-0">Amount</th>
                        <th scope="col" class="border-0">Status</th>
                        <th scope="col" class="border-0 rounded-end">Action</th>
                      </tr>
                    </thead>
                    <tbody class="border-top-0">
                      <tr v-for="invoice in invoices" :key="invoice.id">
                        <td>{{ invoice.id }}</td>
                        <td>{{ invoice.date }}</td>
                        <td>{{ invoice.amount }}</td>
                        <td><div :class="'badge bg-' + invoice.statusClass + ' bg-opacity-10 text-' + invoice.statusClass">{{ invoice.status }}</div></td>
                        <td><a href="#" class="btn btn-light btn-round mb-0" title="Download"><i class="bi bi-cloud-download"></i></a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="card-footer pt-0">
                <DashboardPagination />
              </div>
            </div>
          </div>
        </div>
        <!-- Invoice history END -->
      </div>
    </section>
  </main>
</template>

<script setup>
import VendorMenu from '@/components/VendorMenu.vue';
import DashboardPagination from '@/components/DashboardPagination.vue';

const invoices = [
  { id: '#254684', date: '29 Aug 2022', amount: '₦3,999,000', status: 'Paid', statusClass: 'success' },
  { id: '#158468', date: '02 Sep 2022', amount: '₦3,000,000', status: 'Pending', statusClass: 'orange' },
  { id: '#245778', date: '05 Sep 2022', amount: '₦4,258,000', status: 'Paid', statusClass: 'success' },
];
</script>

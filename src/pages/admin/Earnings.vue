<template>
  <div class="vstack gap-4">
    <!-- Title -->
    <div class="row">
      <div class="col-12">
        <h1 class="h4 mb-0"><i class="bi bi-graph-up-arrow fa-fw me-1"></i>Earnings</h1>
      </div>
    </div>

    <!-- Revenue cards START -->
    <div class="row g-4">
      <!-- Commission card -->
      <div class="col-lg-6">
        <div class="card bg-primary p-4 h-100 border-0">
          <div class="d-flex justify-content-between align-items-start text-white">
            <div>
              <span class="opacity-75"><i class="bi bi-wallet2 me-2"></i>Commission Earned ({{ store.settings.commissionRate }}%)</span>
              <h3 class="text-white mb-0 mt-2">₦{{ store.commissionEarned.toLocaleString() }}</h3>
            </div>
            <span class="badge bg-white text-primary">NGN</span>
          </div>
          <div class="mt-auto pt-4 d-flex flex-wrap gap-2">
            <router-link to="/admin/settings" class="btn btn-white mb-0"><i class="bi bi-sliders me-2"></i>Adjust commission</router-link>
          </div>
        </div>
      </div>

      <!-- Gross revenue -->
      <div class="col-md-6 col-lg-3">
        <div class="card card-body border p-4 h-100">
          <div class="icon-lg bg-success bg-opacity-10 text-success rounded-3 mb-3"><i class="bi bi-cash-stack"></i></div>
          <h6 class="mb-1">Gross Booking Revenue</h6>
          <h4 class="mb-0">₦{{ store.grossRevenue.toLocaleString() }}</h4>
          <p class="mb-0 mt-auto small text-muted">Across all vendors, last 12 months</p>
        </div>
      </div>

      <!-- Pending payouts -->
      <div class="col-md-6 col-lg-3">
        <div class="card card-body border p-4 h-100">
          <div class="icon-lg bg-warning bg-opacity-10 text-warning rounded-3 mb-3"><i class="bi bi-hourglass-split"></i></div>
          <h6 class="mb-1">Pending Payouts</h6>
          <h4 class="mb-0">₦{{ pendingPayoutTotal.toLocaleString() }}</h4>
          <p class="mb-0 mt-auto small text-muted">{{ store.pendingPayouts.length }} request(s) awaiting action</p>
        </div>
      </div>
    </div>
    <!-- Revenue cards END -->

    <!-- Payout requests START -->
    <div class="row">
      <div class="col-12">
        <div class="card shadow">
          <div class="card-header border-bottom">
            <h5 class="card-header-title mb-0">Vendor payout requests
              <span v-if="store.pendingPayouts.length" class="badge bg-warning bg-opacity-10 text-warning ms-2">{{ store.pendingPayouts.length }} pending</span>
            </h5>
          </div>

          <div class="card-body">
            <div class="table-responsive border-0">
              <table class="table align-middle p-4 mb-0 table-hover table-shrink">
                <thead class="table-light">
                  <tr>
                    <th class="border-0 rounded-start">Reference</th>
                    <th class="border-0">Vendor</th>
                    <th class="border-0">Bank account</th>
                    <th class="border-0">Amount</th>
                    <th class="border-0">Requested</th>
                    <th class="border-0">Status</th>
                    <th class="border-0 rounded-end">Action</th>
                  </tr>
                </thead>
                <tbody class="border-top-0">
                  <tr v-for="p in store.payouts" :key="p.id">
                    <td><h6 class="mb-0">{{ p.id }}</h6></td>
                    <td>{{ p.vendor }}</td>
                    <td><span class="small"><i class="bi bi-bank me-1"></i>{{ p.bank }}</span></td>
                    <td>₦{{ p.amount.toLocaleString() }}</td>
                    <td><span class="small">{{ p.requested }}</span></td>
                    <td><div class="badge" :class="payoutBadge(p.status)">{{ p.status }}</div></td>
                    <td>
                      <div v-if="p.status === 'Pending'" class="hstack gap-2">
                        <button class="btn btn-sm btn-success-soft mb-0" @click="store.markPayoutPaid(p.id)"><i class="bi bi-check-lg fa-fw me-1"></i>Mark paid</button>
                        <button class="btn btn-sm btn-danger-soft mb-0" @click="store.rejectPayout(p.id)"><i class="bi bi-x-lg fa-fw me-1"></i>Reject</button>
                      </div>
                      <button v-else class="btn btn-sm btn-round btn-light mb-0" title="Download receipt" @click="downloadReceipt(p)"><i class="bi bi-cloud-download"></i></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Payout requests END -->

    <!-- Monthly revenue table START -->
    <div class="row">
      <div class="col-12">
        <div class="card shadow">
          <div class="card-header border-bottom">
            <h5 class="card-header-title mb-0">Monthly revenue &amp; commission</h5>
          </div>
          <div class="card-body">
            <div class="table-responsive border-0">
              <table class="table align-middle p-4 mb-0 table-hover table-shrink">
                <thead class="table-light">
                  <tr>
                    <th class="border-0 rounded-start">Month</th>
                    <th class="border-0">Gross revenue</th>
                    <th class="border-0">Commission ({{ store.settings.commissionRate }}%)</th>
                    <th class="border-0 rounded-end">Share of year</th>
                  </tr>
                </thead>
                <tbody class="border-top-0">
                  <tr v-for="m in store.monthlyRevenue" :key="m.month">
                    <td><h6 class="mb-0">{{ m.month }} 2026</h6></td>
                    <td>₦{{ m.value.toLocaleString() }}</td>
                    <td class="text-success fw-semibold">₦{{ Math.round(m.value * store.settings.commissionRate / 100).toLocaleString() }}</td>
                    <td style="min-width: 160px;">
                      <div class="d-flex align-items-center gap-2">
                        <div class="progress flex-grow-1" style="height: 6px;">
                          <div class="progress-bar bg-primary" :style="{ width: (m.value / store.grossRevenue) * 100 + '%' }"></div>
                        </div>
                        <span class="small text-muted">{{ ((m.value / store.grossRevenue) * 100).toFixed(1) }}%</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Monthly revenue table END -->
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useAdminStore } from '@/stores/admin';

const store = useAdminStore();

const pendingPayoutTotal = computed(() => store.pendingPayouts.reduce((a, p) => a + p.amount, 0));

const downloadReceipt = (p) => {
  const lines = [
    'BOOKAMIA — PAYOUT RECEIPT',
    '================================',
    `Reference:  ${p.id}`,
    `Vendor:     ${p.vendor}`,
    `Bank:       ${p.bank}`,
    `Amount:     ₦${p.amount.toLocaleString()}`,
    `Requested:  ${p.requested}`,
    `Status:     ${p.status}`,
    '================================',
    'Generated by Bookamia Admin.',
  ];
  const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `bookamia-payout-${p.id}.txt`;
  a.click();
  URL.revokeObjectURL(url);
};

const payoutBadge = (status) => ({
  Pending: 'bg-warning bg-opacity-10 text-warning',
  Paid: 'bg-success bg-opacity-10 text-success',
  Rejected: 'bg-danger bg-opacity-10 text-danger',
}[status]);
</script>

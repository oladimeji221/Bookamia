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
                  <h3 class="text-white mb-0 mt-2">₦{{ store.wallet.mainBalance.toLocaleString() }}</h3>
                </div>
                <span class="badge bg-white text-primary">NGN</span>
              </div>
              <div class="mt-auto pt-4 d-flex flex-wrap gap-2">
                <button class="btn btn-white mb-0" @click="showWithdraw = true"><i class="bi bi-arrow-up-right-circle me-2"></i>Withdraw</button>
                <button class="btn btn-outline-light mb-0" @click="scrollToHistory"><i class="bi bi-clock-history me-2"></i>History</button>
              </div>
            </div>
          </div>

          <!-- Total balance -->
          <div class="col-md-6 col-lg-3">
            <div class="card card-body border p-4 h-100">
              <div class="icon-lg bg-success bg-opacity-10 text-success rounded-3 mb-3"><i class="bi bi-cash-stack"></i></div>
              <h6 class="mb-1">Total Balance</h6>
              <h4 class="mb-0">₦{{ store.totalBalance.toLocaleString() }}</h4>
              <p class="mb-0 mt-auto small text-muted">Lifetime earnings to date</p>
            </div>
          </div>

          <!-- Pending / unapproved -->
          <div class="col-md-6 col-lg-3">
            <div class="card card-body border p-4 h-100">
              <div class="icon-lg bg-warning bg-opacity-10 text-warning rounded-3 mb-3"><i class="bi bi-hourglass-split"></i></div>
              <h6 class="mb-1">Pending Balance</h6>
              <h4 class="mb-0">₦{{ store.wallet.pendingBalance.toLocaleString() }}</h4>
              <p class="mb-0 mt-auto small text-muted">Awaiting approval &amp; clearance</p>
            </div>
          </div>
        </div>
        <!-- Wallet END -->

        <!-- Payout account START -->
        <div class="row">
          <div class="col-12">
            <div class="card border">
              <div class="card-header border-bottom d-flex justify-content-between align-items-center">
                <h5 class="card-header-title mb-0">Payout account</h5>
                <router-link to="/vendor/settings" class="btn btn-sm btn-primary-soft mb-0"><i class="bi bi-pencil-square fa-fw me-1"></i>Update</router-link>
              </div>
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="icon-lg bg-primary bg-opacity-10 text-primary rounded-3 me-3"><i class="bi bi-bank"></i></div>
                  <div>
                    <h6 class="mb-0">{{ store.profile.bankName }} · {{ maskedAccount }}</h6>
                    <span class="small text-muted">{{ store.profile.accountName }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Payout account END -->

        <!-- Transaction history START -->
        <div class="row" ref="historySection">
          <div class="col-12">
            <div class="card border rounded-3">
              <div class="card-header border-bottom">
                <h5 class="card-header-title mb-0">Transaction history</h5>
              </div>

              <div class="card-body">
                <div class="table-responsive border-0">
                  <table class="table align-middle p-4 mb-0 table-hover table-shrink">
                    <thead class="table-light">
                      <tr>
                        <th scope="col" class="border-0 rounded-start">Reference</th>
                        <th scope="col" class="border-0">Date</th>
                        <th scope="col" class="border-0">Type</th>
                        <th scope="col" class="border-0">Amount</th>
                        <th scope="col" class="border-0">Status</th>
                        <th scope="col" class="border-0 rounded-end">Action</th>
                      </tr>
                    </thead>
                    <tbody class="border-top-0">
                      <tr v-for="tx in store.transactions" :key="tx.id">
                        <td><h6 class="mb-0">{{ tx.id }}</h6></td>
                        <td>{{ tx.date }}</td>
                        <td>{{ tx.type }}</td>
                        <td>
                          <span :class="tx.amount < 0 ? 'text-danger' : 'text-success'" class="fw-semibold">
                            {{ tx.amount < 0 ? '−' : '+' }}₦{{ Math.abs(tx.amount).toLocaleString() }}
                          </span>
                        </td>
                        <td><div :class="'badge bg-' + tx.statusClass + ' bg-opacity-10 text-' + tx.statusClass">{{ tx.status }}</div></td>
                        <td><button class="btn btn-sm btn-round btn-light mb-0" title="Download receipt" @click="downloadReceipt(tx)"><i class="bi bi-cloud-download"></i></button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="card-footer pt-0">
                <DashboardPagination :totalItems="store.transactions.length" :itemsPerPage="5" v-model:currentPage="currentPage" />
              </div>
            </div>
          </div>
        </div>
        <!-- Transaction history END -->
      </div>
    </section>

    <!-- Withdraw modal START -->
    <div v-if="showWithdraw" class="modal-backdrop-custom" @click.self="closeWithdraw">
      <div class="card border-0 shadow modal-card-custom">
        <div class="card-header border-bottom d-flex justify-content-between align-items-center">
          <h5 class="mb-0">Withdraw funds</h5>
          <button class="btn btn-sm btn-round btn-light mb-0" @click="closeWithdraw"><i class="bi bi-x-lg"></i></button>
        </div>
        <div class="card-body">
          <p class="small text-muted mb-3">
            Available balance: <span class="fw-semibold text-success">₦{{ store.wallet.mainBalance.toLocaleString() }}</span><br>
            Payout to {{ store.profile.bankName }} · {{ maskedAccount }} ({{ store.profile.accountName }})
          </p>
          <label class="form-label">Amount<span class="text-danger">*</span></label>
          <div class="input-group">
            <span class="input-group-text">₦</span>
            <input type="number" min="1" class="form-control" v-model.number="withdrawAmount" placeholder="Enter amount">
          </div>
          <p v-if="withdrawError" class="small text-danger mt-2 mb-0">{{ withdrawError }}</p>
        </div>
        <div class="card-footer border-top d-flex justify-content-end gap-2">
          <button class="btn btn-light mb-0" @click="closeWithdraw">Cancel</button>
          <button class="btn btn-primary mb-0" @click="submitWithdraw"><i class="bi bi-arrow-up-right-circle fa-fw me-1"></i>Withdraw</button>
        </div>
      </div>
    </div>
    <!-- Withdraw modal END -->
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import VendorMenu from '@/components/VendorMenu.vue';
import DashboardPagination from '@/components/DashboardPagination.vue';
import { useVendorStore } from '@/stores/vendor';

const store = useVendorStore();
const currentPage = ref(1);
const historySection = ref(null);

const showWithdraw = ref(false);
const withdrawAmount = ref(null);
const withdrawError = ref('');

const maskedAccount = computed(() => '****' + store.profile.accountNumber.slice(-4));

const scrollToHistory = () => {
  historySection.value?.scrollIntoView({ behavior: 'smooth' });
};

const closeWithdraw = () => {
  showWithdraw.value = false;
  withdrawAmount.value = null;
  withdrawError.value = '';
};

const downloadReceipt = (tx) => {
  const lines = [
    'BOOKAMIA — TRANSACTION RECEIPT',
    '================================',
    `Reference:  ${tx.id}`,
    `Date:       ${tx.date}`,
    `Type:       ${tx.type}`,
    `Amount:     ${tx.amount < 0 ? '-' : ''}₦${Math.abs(tx.amount).toLocaleString()}`,
    `Status:     ${tx.status}`,
    `Vendor:     ${store.profile.name}`,
    `Payout to:  ${store.profile.bankName} ${maskedAccount.value}`,
    '================================',
    'Thank you for selling on Bookamia.',
  ];
  const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `bookamia-receipt-${tx.id.replace('#', '')}.txt`;
  a.click();
  URL.revokeObjectURL(url);
};

const submitWithdraw = () => {
  if (!withdrawAmount.value || withdrawAmount.value <= 0) {
    withdrawError.value = 'Enter a valid amount.';
    return;
  }
  if (withdrawAmount.value > store.wallet.mainBalance) {
    withdrawError.value = 'Amount exceeds your available balance.';
    return;
  }
  store.withdraw(withdrawAmount.value);
  closeWithdraw();
};
</script>

<style scoped>
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

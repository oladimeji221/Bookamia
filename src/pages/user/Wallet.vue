<template>
  <main>
    <section class="pt-3">
      <div class="container">
        <div class="row g-2 g-lg-4">
          <!-- Sidebar START -->
          <UserSidebar />
          <!-- Sidebar END -->

          <!-- Main content START -->
          <div class="col-lg-8 col-xl-9 ps-xl-5">
            <div class="d-grid mb-0 d-lg-none w-100">
              <button class="btn btn-primary mb-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
                <i class="fas fa-sliders-h"></i> Menu
              </button>
            </div>

            <div class="vstack gap-4">
              <!-- Dashboard Header -->
              <UserDashboardHeader title="My Wallet" />

              <!-- Wallet Overview -->
              <div class="row g-4 mb-0">
                <!-- Balance Card -->
                <div class="col-md-6 col-xl-4">
                  <div class="card card-body bg-primary p-4 h-100">
                    <h6 class="text-white mb-2">Wallet Balance</h6>
                    <h4 class="text-white mb-2">₦{{ balance.toLocaleString() }}</h4>
                    <p class="text-white text-opacity-75 mb-0 small">Available for booking</p>
                  </div>
                </div>

                <!-- Add Funds Form -->
                <div class="col-md-6 col-xl-8">
                  <div class="card card-body border h-100">
                    <h6>Add Funds</h6>
                    <form @submit.prevent="addFunds" class="row g-3">
                      <div class="col-sm-8">
                        <div class="input-group input-group-sm">
                          <span class="input-group-text">₦</span>
                          <input type="number" class="form-control" v-model="fundAmount" placeholder="Enter amount">
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <button type="submit" class="btn btn-sm btn-primary w-100 mb-0">Add Funds</button>
                      </div>
                    </form>
                    <div class="mt-3">
                      <span class="small text-muted me-2">Quick Add:</span>
                      <button v-for="amt in quickAmounts" :key="amt" 
                              class="btn btn-xs btn-light me-1 mb-1" 
                              @click="fundAmount = amt">
                        ₦{{ amt.toLocaleString() }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Transaction History -->
              <div class="card border bg-transparent">
                <div class="card-header bg-transparent border-bottom">
                  <h4 class="card-header-title">Transaction History</h4>
                </div>
                <div class="card-body p-0">
                  <div class="table-responsive">
                    <table class="table table-hover align-middle mb-0">
                      <thead class="table-light">
                        <tr>
                          <th>Date</th>
                          <th>Description</th>
                          <th>Type</th>
                          <th>Amount</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="tx in transactions" :key="tx.id">
                          <td>{{ tx.date }}</td>
                          <td>{{ tx.description }}</td>
                          <td>
                            <span :class="tx.type === 'Credit' ? 'text-success' : 'text-danger'">
                              {{ tx.type }}
                            </span>
                          </td>
                          <td class="fw-bold">₦{{ tx.amount.toLocaleString() }}</td>
                          <td>
                            <span class="badge" :class="getStatusClass(tx.status)">
                              {{ tx.status }}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- Empty State -->
                  <div v-if="transactions.length === 0" class="text-center p-5">
                    <i class="bi bi-journal-text fs-1 text-muted"></i>
                    <p class="mt-2">No transactions found.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <!-- Main content END -->
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import UserSidebar from '@/components/UserSidebar.vue'
import UserDashboardHeader from '@/components/UserDashboardHeader.vue'

const balance = ref(125000)
const fundAmount = ref(null)
const quickAmounts = [10000, 20000, 50000, 100000]

const transactions = ref([
  { id: 1, date: '22 Jun 2026', description: 'Wallet Top-up', type: 'Credit', amount: 50000, status: 'Success' },
  { id: 2, date: '20 Jun 2026', description: 'Hotel Booking - BK-H7421', type: 'Debit', amount: 150000, status: 'Success' },
  { id: 3, date: '18 Jun 2026', description: 'Cab Booking - BK-C9902', type: 'Debit', amount: 25000, status: 'Success' },
  { id: 4, date: '15 Jun 2026', description: 'Wallet Top-up', type: 'Credit', amount: 250000, status: 'Success' }
])

const addFunds = () => {
  if(!fundAmount.value) return
  alert(`Funding request for ₦${fundAmount.value.toLocaleString()} initiated.`)
  fundAmount.value = null
}

const getStatusClass = (status) => {
  switch (status) {
    case 'Success': return 'bg-success bg-opacity-10 text-success'
    case 'Pending': return 'bg-warning bg-opacity-10 text-warning'
    case 'Failed': return 'bg-danger bg-opacity-10 text-danger'
    default: return 'bg-secondary bg-opacity-10 text-secondary'
  }
}
</script>

<style scoped>
.table th {
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.btn-xs {
    padding: .25rem .5rem;
    font-size: .75rem;
    border-radius: .2rem;
}
</style>

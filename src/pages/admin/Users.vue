<template>
  <div class="vstack gap-4">
    <!-- Title -->
    <div class="row">
      <div class="col-12">
        <h1 class="h4 mb-0"><i class="bi bi-people fa-fw me-1"></i>Users</h1>
      </div>
    </div>

    <!-- Quick stats -->
    <div class="row g-4">
      <div class="col-sm-6 col-xl-4">
        <div class="card card-body border p-4 h-100">
          <div class="d-flex align-items-center">
            <div class="icon-lg bg-primary bg-opacity-10 text-primary rounded-3"><i class="bi bi-people"></i></div>
            <div class="ms-3">
              <h5 class="mb-0">{{ store.totalUsers }}</h5>
              <span class="small">Registered users</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xl-4">
        <div class="card card-body border p-4 h-100">
          <div class="d-flex align-items-center">
            <div class="icon-lg bg-success bg-opacity-10 text-success rounded-3"><i class="bi bi-bookmark-check"></i></div>
            <div class="ms-3">
              <h5 class="mb-0">{{ totalUserBookings }}</h5>
              <span class="small">Bookings placed</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xl-4">
        <div class="card card-body border p-4 h-100">
          <div class="d-flex align-items-center">
            <div class="icon-lg bg-warning bg-opacity-10 text-warning rounded-3"><i class="bi bi-cash-coin"></i></div>
            <div class="ms-3">
              <h5 class="mb-0">₦{{ totalSpend.toLocaleString() }}</h5>
              <span class="small">Total customer spend</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- User table START -->
    <div class="row">
      <div class="col-12">
        <div class="card shadow">
          <div class="card-header border-bottom d-flex justify-content-between align-items-center flex-wrap gap-2">
            <h5 class="card-header-title mb-0">All Users <span class="badge bg-primary bg-opacity-10 text-primary ms-2">{{ filteredUsers.length }} shown</span></h5>
            <form class="rounded position-relative" @submit.prevent>
              <input class="form-control form-control-sm pe-5" type="search" v-model="search" placeholder="Search users" aria-label="Search">
              <button class="btn border-0 px-3 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit"><i class="fas fa-search fs-6"></i></button>
            </form>
          </div>

          <div class="card-body">
            <div class="table-responsive border-0">
              <table class="table align-middle p-4 mb-0 table-hover table-shrink">
                <thead class="table-light">
                  <tr>
                    <th class="border-0 rounded-start">User</th>
                    <th class="border-0">Joined</th>
                    <th class="border-0">Bookings</th>
                    <th class="border-0">Total spend</th>
                    <th class="border-0">Status</th>
                    <th class="border-0 rounded-end">Action</th>
                  </tr>
                </thead>
                <tbody class="border-top-0">
                  <tr v-for="u in filteredUsers" :key="u.id">
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="avatar avatar-sm flex-shrink-0">
                          <img class="avatar-img rounded-circle" :src="u.avatar" alt="">
                        </div>
                        <div class="ms-2">
                          <h6 class="mb-0">{{ u.name }}</h6>
                          <span class="small text-muted">{{ u.email }}</span>
                        </div>
                      </div>
                    </td>
                    <td><span class="small">{{ u.joined }}</span></td>
                    <td>{{ u.bookings }}</td>
                    <td>₦{{ u.spend.toLocaleString() }}</td>
                    <td>
                      <div class="badge" :class="u.status === 'Active' ? 'bg-success bg-opacity-10 text-success' : 'bg-danger bg-opacity-10 text-danger'">{{ u.status }}</div>
                    </td>
                    <td>
                      <div class="hstack gap-1 flex-wrap">
                        <button
                          class="btn btn-sm mb-0"
                          :class="u.status === 'Active' ? 'btn-warning-soft' : 'btn-success-soft'"
                          @click="store.toggleUserStatus(u.id)"
                        >
                          <i :class="(u.status === 'Active' ? 'bi bi-slash-circle' : 'bi bi-arrow-counterclockwise') + ' fa-fw me-1'"></i>
                          {{ u.status === 'Active' ? 'Suspend' : 'Reactivate' }}
                        </button>
                        <button class="btn btn-sm btn-round btn-light mb-0" title="View" @click="viewing = u"><i class="bi bi-eye"></i></button>
                        <button class="btn btn-sm btn-round btn-primary-soft mb-0" title="Edit" @click="openEdit(u)"><i class="bi bi-pencil-square"></i></button>
                        <button class="btn btn-sm btn-round btn-danger-soft mb-0" title="Delete" @click="deleting = u"><i class="bi bi-trash3"></i></button>
                      </div>
                    </td>
                  </tr>
                  <tr v-if="!filteredUsers.length">
                    <td colspan="6" class="text-center text-muted py-4">No users match your search.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- User table END -->

    <!-- View modal -->
    <div v-if="viewing" class="modal-backdrop-custom" @click.self="viewing = null">
      <div class="card border-0 shadow modal-card-custom">
        <div class="card-header border-bottom d-flex justify-content-between align-items-center">
          <h5 class="mb-0">User details</h5>
          <button class="btn btn-sm btn-round btn-light mb-0" @click="viewing = null"><i class="bi bi-x-lg"></i></button>
        </div>
        <div class="card-body">
          <div class="d-flex align-items-center mb-3">
            <div class="avatar avatar-lg flex-shrink-0">
              <img class="avatar-img rounded-circle" :src="viewing.avatar" alt="">
            </div>
            <div class="ms-3">
              <h5 class="mb-0">{{ viewing.name }}</h5>
              <span class="small text-muted">{{ viewing.email }}</span>
            </div>
            <div class="badge ms-auto" :class="viewing.status === 'Active' ? 'bg-success bg-opacity-10 text-success' : 'bg-danger bg-opacity-10 text-danger'">{{ viewing.status }}</div>
          </div>
          <ul class="list-group list-group-borderless mb-0">
            <li class="list-group-item px-0 d-flex justify-content-between"><span class="text-muted"><i class="bi bi-calendar2 me-2"></i>Joined</span><span>{{ viewing.joined }}</span></li>
            <li class="list-group-item px-0 d-flex justify-content-between"><span class="text-muted"><i class="bi bi-bookmark-check me-2"></i>Bookings placed</span><span>{{ viewing.bookings }}</span></li>
            <li class="list-group-item px-0 d-flex justify-content-between"><span class="text-muted"><i class="bi bi-cash-coin me-2"></i>Total spend</span><h6 class="mb-0">₦{{ viewing.spend.toLocaleString() }}</h6></li>
          </ul>
        </div>
        <div class="card-footer border-top d-flex justify-content-end gap-2">
          <button class="btn btn-danger-soft mb-0" @click="deleting = viewing; viewing = null"><i class="bi bi-trash3 fa-fw me-1"></i>Delete</button>
          <button class="btn btn-primary mb-0" @click="openEdit(viewing)"><i class="bi bi-pencil-square fa-fw me-1"></i>Edit</button>
        </div>
      </div>
    </div>

    <!-- Edit modal -->
    <div v-if="editing" class="modal-backdrop-custom" @click.self="editing = null">
      <div class="card border-0 shadow modal-card-custom">
        <div class="card-header border-bottom d-flex justify-content-between align-items-center">
          <h5 class="mb-0">Edit user</h5>
          <button class="btn btn-sm btn-round btn-light mb-0" @click="editing = null"><i class="bi bi-x-lg"></i></button>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label class="form-label">Full name</label>
            <input type="text" class="form-control" v-model="editForm.name">
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" v-model="editForm.email">
          </div>
          <div class="mb-0">
            <label class="form-label">Status</label>
            <select class="form-select" v-model="editForm.status">
              <option>Active</option>
              <option>Suspended</option>
            </select>
          </div>
        </div>
        <div class="card-footer border-top d-flex justify-content-end gap-2">
          <button class="btn btn-light mb-0" @click="editing = null">Cancel</button>
          <button class="btn btn-primary mb-0" @click="saveEdit"><i class="bi bi-check-lg fa-fw me-1"></i>Save changes</button>
        </div>
      </div>
    </div>

    <!-- Delete confirm modal -->
    <div v-if="deleting" class="modal-backdrop-custom" @click.self="deleting = null">
      <div class="card border-0 shadow modal-card-custom">
        <div class="card-body text-center p-4">
          <div class="icon-xl bg-danger bg-opacity-10 text-danger rounded-circle mx-auto mb-3"><i class="bi bi-trash3"></i></div>
          <h5 class="mb-2">Delete {{ deleting.name }}?</h5>
          <p class="text-muted small mb-4">This permanently removes the user account and history ({{ deleting.bookings }} booking(s)). This action cannot be undone.</p>
          <div class="d-flex justify-content-center gap-2">
            <button class="btn btn-light mb-0" @click="deleting = null">Cancel</button>
            <button class="btn btn-danger mb-0" @click="confirmDelete"><i class="bi bi-trash3 fa-fw me-1"></i>Delete user</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useAdminStore } from '@/stores/admin';

const store = useAdminStore();
const search = ref('');

const viewing = ref(null);
const editing = ref(null);
const deleting = ref(null);
const editForm = reactive({ name: '', email: '', status: 'Active' });

const openEdit = (u) => {
  viewing.value = null;
  editing.value = u;
  Object.assign(editForm, { name: u.name, email: u.email, status: u.status });
};

const saveEdit = () => {
  Object.assign(editing.value, editForm);
  editing.value = null;
};

const confirmDelete = () => {
  store.deleteUser(deleting.value.id);
  deleting.value = null;
};

const filteredUsers = computed(() => {
  const q = search.value.trim().toLowerCase();
  return q
    ? store.users.filter((u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q))
    : store.users;
});

const totalUserBookings = computed(() => store.users.reduce((a, u) => a + u.bookings, 0));
const totalSpend = computed(() => store.users.reduce((a, u) => a + u.spend, 0));
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

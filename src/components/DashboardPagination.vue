<template>
  <!-- Pagination START -->
  <div class="d-sm-flex justify-content-sm-between align-items-center mt-4">
    <!-- Content -->
    <p class="mb-sm-0 text-center text-sm-start">Showing {{ startItem }} to {{ endItem }} of {{ totalItems }} entries</p>
    <!-- Pagination -->
    <nav class="mb-0" aria-label="navigation">
      <ul class="pagination pagination-sm pagination-primary-soft mb-0 justify-content-center">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-item" href="#" @click.prevent="goToPage(currentPage - 1)">Prev</a>
        </li>
        <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: currentPage === page }">
          <a class="page-link" href="#" @click.prevent="goToPage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" href="#" @click.prevent="goToPage(currentPage + 1)">Next</a>
        </li>
      </ul>
    </nav>
  </div>
  <!-- Pagination END -->
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  totalItems: { type: Number, required: true },
  itemsPerPage: { type: Number, default: 5 },
  currentPage: { type: Number, required: true }
})

const emit = defineEmits(['update:currentPage'])

const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage))
const startItem = computed(() => (props.currentPage - 1) * props.itemsPerPage + 1)
const endItem = computed(() => Math.min(props.currentPage * props.itemsPerPage, props.totalItems))

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    emit('update:currentPage', page)
  }
}
</script>

<style scoped>
.page-item {
    cursor: pointer;
}
.page-link {
    padding: 0.5rem 0.75rem;
}
</style>

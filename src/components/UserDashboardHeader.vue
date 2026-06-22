<template>
  <!-- Page Banner START -->
  <div class="card bg-light overflow-hidden px-sm-5 mb-4 border-0">
    <div class="row align-items-center g-4">
      <div class="col-sm-9">
        <div class="card-body">
          <!-- Breadcrumb -->
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb breadcrumb-dots mb-0">
              <li class="breadcrumb-item">
                <router-link to="/"><i class="bi bi-house me-1"></i>Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
            </ol>
          </nav>
          <!-- Title -->
          <h1 class="m-0 h2 card-title">{{ title }}</h1>
        </div>
      </div>
    </div>
  </div>
  <!-- Page Banner END -->
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.breadcrumb-dots .breadcrumb-item + .breadcrumb-item::before {
  content: "•";
  padding: 0 0.5rem;
}
</style>

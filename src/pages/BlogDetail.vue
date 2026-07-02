<template>
  <main v-if="post">
    <!-- Banner -->
    <section class="pt-4 pt-md-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 mx-auto">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-3">
                <li class="breadcrumb-item"><router-link to="/"><i class="bi bi-house me-1"></i>Home</router-link></li>
                <li class="breadcrumb-item"><router-link to="/blog">Blog</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">{{ post.title }}</li>
              </ol>
            </nav>

            <span class="badge text-bg-primary mb-2">{{ post.category }}</span>
            <h1 class="h2 mb-3">{{ post.title }}</h1>
            <div class="d-flex flex-wrap align-items-center gap-3 text-muted small mb-4">
              <span><i class="bi bi-person me-1"></i>By {{ post.author }}</span>
              <span><i class="bi bi-calendar2-plus me-1"></i>{{ post.date }}</span>
              <span><i class="bi bi-chat-dots me-1"></i>{{ post.comments }} comments</span>
            </div>

            <img :src="post.image" class="rounded-3 w-100 mb-4" style="max-height: 420px; object-fit: cover;" :alt="post.title">
          </div>
        </div>
      </div>
    </section>

    <!-- Article body -->
    <section class="pt-0">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 mx-auto">
            <p v-for="(paragraph, i) in post.content" :key="i" class="fs-6" :class="{ 'lead': i === 0 }">{{ paragraph }}</p>

            <!-- Share -->
            <div class="d-flex align-items-center gap-2 border-top border-bottom py-3 my-4">
              <span class="fw-semibold me-2">Share this article:</span>
              <a class="btn btn-sm px-2 bg-facebook mb-0" href="https://www.facebook.com/sharer/sharer.php?u=https://www.bookamia.com/blog" target="_blank" rel="noopener"><i class="fab fa-fw fa-facebook-f"></i></a>
              <a class="btn btn-sm px-2 bg-twitter mb-0" href="https://x.com/intent/tweet?text=Read%20this%20on%20Bookamia" target="_blank" rel="noopener"><i class="fab fa-fw fa-twitter"></i></a>
              <a class="btn btn-sm px-2 bg-success text-white mb-0" href="https://wa.me/?text=Read%20this%20on%20Bookamia" target="_blank" rel="noopener"><i class="fab fa-fw fa-whatsapp"></i></a>
            </div>

            <!-- Author box -->
            <div class="card bg-light border-0 p-4 mb-5">
              <div class="d-flex align-items-center">
                <div class="avatar avatar-lg flex-shrink-0">
                  <img class="avatar-img rounded-circle" src="/assets/images/bookamia.png" alt="Bookamia">
                </div>
                <div class="ms-3">
                  <h6 class="mb-1">Written by {{ post.author }}</h6>
                  <p class="small mb-0 text-muted">Travel guides, food crawls and booking tips from the team behind Nigeria's #1 booking platform.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related posts -->
    <section class="pt-0 pb-5">
      <div class="container">
        <div class="row mb-3">
          <div class="col-lg-9 mx-auto d-flex justify-content-between align-items-center">
            <h4 class="mb-0">Related articles</h4>
            <router-link to="/blog" class="btn btn-sm btn-primary-soft mb-0"><i class="bi bi-grid fa-fw me-1"></i>All articles</router-link>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-9 mx-auto">
            <div class="row g-4">
              <div v-for="r in related" :key="r.id" class="col-md-4">
                <div class="card bg-transparent h-100">
                  <img :src="r.image" class="card-img rounded-3" style="height: 160px; object-fit: cover;" :alt="r.title">
                  <div class="card-body px-0 pb-0">
                    <span class="small text-muted"><i class="bi bi-calendar2-plus me-1"></i>{{ r.date }}</span>
                    <h6 class="card-title mt-1 mb-0">
                      <router-link :to="`/blog/${r.id}`" class="text-dark text-decoration-none">{{ r.title }}</router-link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Not found -->
  <main v-else>
    <section class="py-5">
      <div class="container text-center py-5">
        <i class="bi bi-journal-x fs-1 text-muted d-block mb-3"></i>
        <h3>Article not found</h3>
        <p class="text-muted">The article you're looking for doesn't exist or has been moved.</p>
        <router-link to="/blog" class="btn btn-primary mb-0"><i class="bi bi-arrow-left fa-fw me-1"></i>Back to blog</router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { allPosts } from '@/data/blogs';

const route = useRoute();

const post = computed(() => allPosts.find((p) => p.id === Number(route.params.id)));

const related = computed(() =>
  allPosts
    .filter((p) => p.id !== post.value?.id)
    .sort((a, b) => (a.category === post.value?.category ? -1 : 1) - (b.category === post.value?.category ? -1 : 1))
    .slice(0, 3)
);
</script>

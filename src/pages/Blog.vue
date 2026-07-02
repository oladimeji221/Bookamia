<template>
  <div>

    <!-- =======================
    Header START -->
    <section class="pt-4 pt-md-5">
      <div class="container">

        <!-- Page title -->
        <div class="row mb-5">
          <div class="col-12 text-center">
            <h1 class="display-1 mb-0">Our Blog</h1>
          </div>
        </div>

        <!-- Search bar -->
        <div class="row justify-content-center mb-5">
          <div class="col-lg-6">
            <div class="input-group">
              <input type="search" class="form-control" v-model="search" placeholder="Search articles...">
              <button v-if="search" class="btn btn-outline-secondary" @click="search = ''">
                <i class="bi bi-x-lg"></i> Clear
              </button>
            </div>
          </div>
        </div>

        <!-- Featured posts START -->
        <div class="row g-4">

          <!-- Large featured post (left) -->
          <div class="col-lg-6">
            <div class="card bg-transparent h-100">
              <div class="position-relative">
                <img :src="featuredPost.image"
                     class="card-img rounded-3"
                     style="height: 340px; object-fit: cover;"
                     alt="Featured post">
                <div class="card-img-overlay d-flex align-items-start flex-column p-3">
                  <span class="badge bg-dark">{{ featuredPost.category }}</span>
                </div>
              </div>
              <div class="card-body px-2 pb-0">
                <span class="small text-muted"><i class="bi bi-calendar2-plus me-2"></i>{{ featuredPost.date }}</span>
                <h5 class="card-title mt-1">
                  <router-link :to="`/blog/${featuredPost.id}`" class="text-dark text-decoration-none">
                    {{ featuredPost.title }}
                  </router-link>
                </h5>
                <p class="mb-0 text-muted">{{ featuredPost.excerpt }}</p>
                <div class="d-flex justify-content-between align-items-center mt-2">
                  <h6 class="mb-0">By <span class="text-primary">{{ featuredPost.author }}</span></h6>
                  <router-link :to="`/blog/${featuredPost.id}`" class="btn btn-link p-0 mb-0">
                    Read more <i class="bi bi-arrow-up-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- Large featured post END -->

          <!-- Side list (right) -->
          <div class="col-lg-6 ps-lg-5">
            <div class="vstack gap-4">

              <div class="card bg-transparent" v-for="post in sidePosts" :key="post.id">
                <div class="row g-3 align-items-center">
                  <div class="col-4">
                    <img :src="post.image" class="card-img rounded-3" style="height: 90px; object-fit: cover;" :alt="post.title">
                  </div>
                  <div class="col-8">
                    <div class="card-body p-0">
                      <h6 class="card-title mb-2">
                        <router-link :to="`/blog/${post.id}`" class="text-dark text-decoration-none">
                          {{ post.title }}
                        </router-link>
                      </h6>
                      <div class="d-flex justify-content-between align-items-center">
                        <span class="small text-muted"><i class="bi bi-calendar2-plus me-1"></i>{{ post.date }}</span>
                        <router-link :to="`/blog/${post.id}`" class="btn btn-link p-0 mb-0 small">
                          Read more <i class="bi bi-arrow-up-right"></i>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <!-- Side list END -->

        </div>
        <!-- Featured posts END -->

      </div>
    </section>
    <!-- =======================
    Header END -->

    <!-- =======================
    Blog grid START -->
    <section class="pt-4 pt-sm-5">
      <div class="container">

        <!-- Section title -->
        <div class="row mb-4">
          <div class="col-12 text-center">
            <h2 class="mb-0">{{ search ? 'Search Results' : 'Latest Articles' }}</h2>
          </div>
        </div>

        <!-- Blog grid -->
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" v-for="blog in filteredBlogs" :key="blog.id">
            <div class="card bg-transparent h-100">
              <div class="position-relative">
                <img :src="blog.image" class="card-img rounded-3" style="height: 210px; object-fit: cover;" :alt="blog.title">
                <div class="card-img-overlay p-3">
                  <span class="badge text-bg-primary">{{ blog.category }}</span>
                </div>
              </div>
              <div class="card-body p-3 pb-0 d-flex flex-column">
                <span class="small text-muted mb-1">
                  <i class="bi bi-calendar2-plus me-1"></i>{{ blog.date }}
                  &nbsp;&middot;&nbsp;
                  <i class="bi bi-chat-dots me-1"></i>{{ blog.comments }}
                </span>
                <h5 class="card-title mt-1 flex-grow-1">
                  <router-link :to="`/blog/${blog.id}`" class="text-dark text-decoration-none">
                    {{ blog.title }}
                  </router-link>
                </h5>
                <div class="d-flex justify-content-between align-items-center mt-2 pb-3">
                  <h6 class="fw-light mb-0">By <span class="text-primary">{{ blog.author }}</span></h6>
                  <router-link :to="`/blog/${blog.id}`" class="btn btn-link p-0 mb-0 small">
                    Read more <i class="bi bi-arrow-up-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <div v-if="filteredBlogs.length === 0" class="col-12 text-center py-5">
            <i class="bi bi-journal-x fs-1 text-muted d-block mb-3"></i>
            <h4>No articles found.</h4>
            <p class="text-muted">Try a different search term or browse all articles.</p>
            <button class="btn btn-primary" @click="search = ''">View All Articles</button>
          </div>
        </div>

      </div>
    </section>
    <!-- =======================
    Blog grid END -->

    <!-- =======================
    Newsletter START -->
    <section class="pt-0 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="bg-warning bg-opacity-15 rounded-3 position-relative overflow-hidden p-4 p-md-0">
              <div class="row">
                <div class="col-md-7 text-center mx-auto py-4 py-md-5">
                  <h6 class="text-primary fw-semibold mb-2">Newsletter</h6>
                  <h2 class="mb-3">Stay in the loop!</h2>
                  <p class="mb-4 text-muted">Get the latest travel tips, hotel deals, and Bookamia updates delivered straight to your inbox.</p>

                  <div v-if="subscribed" class="alert alert-success">
                    <i class="bi bi-check-circle me-2"></i>Thank you for subscribing!
                  </div>
                  <form v-else @submit.prevent="subscribe" class="bg-body rounded-2 p-2">
                    <div class="input-group">
                      <input class="form-control border-0 me-1" type="email" v-model="subscriberEmail" placeholder="Enter your email address" required>
                      <button type="submit" class="btn btn-primary rounded-2 mb-0">Subscribe!</button>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- =======================
    Newsletter END -->

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { blogs, featuredPost } from '@/data/blogs'

const search = ref('')
const subscribed = ref(false)
const subscriberEmail = ref('')

// Side list: the three most recent posts after the featured one
const sidePosts = [blogs[6], blogs[7], blogs[8]]

const filteredBlogs = computed(() => {
  if (!search.value) return blogs
  const q = search.value.toLowerCase()
  return blogs.filter(b => b.title.toLowerCase().includes(q) || b.category.toLowerCase().includes(q))
})

function subscribe() {
  subscribed.value = true
  subscriberEmail.value = ''
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-card">
      <RouterLink to="/" class="brand">Bookamia</RouterLink>
      <h1>Welcome back</h1>
      <p class="sub">Sign in to your account</p>

      <form @submit.prevent="handleLogin" class="form">
        <div class="field">
          <label>Email</label>
          <input type="email" v-model="form.email" placeholder="you@example.com" required />
        </div>
        <div class="field">
          <label>Password</label>
          <input type="password" v-model="form.password" placeholder="••••••••" required />
        </div>

        <button type="submit" class="btn-submit">Sign In</button>
      </form>

      <p class="switch">
        Don't have an account?
        <RouterLink to="/auth/signup">Sign Up</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = reactive({ email: '', password: '' })

function handleLogin() {
  // TODO: connect to auth API
  router.push('/')
}
</script>

<style scoped>
.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
  padding: 2rem;
}

.auth-card {
  background: #fff;
  border-radius: 16px;
  padding: 2.5rem;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.brand {
  font-size: 1.5rem;
  font-weight: 800;
  color: #2563eb;
  text-decoration: none;
}

h1 {
  font-size: 1.6rem;
  font-weight: 700;
  color: #111827;
  margin-top: 1.25rem;
}

.sub {
  color: #6b7280;
  margin-bottom: 1.75rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}

input {
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
}

input:focus {
  border-color: #2563eb;
}

.btn-submit {
  padding: 0.85rem;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background 0.2s;
}

.btn-submit:hover {
  background: #1d4ed8;
}

.switch {
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.switch a {
  color: #2563eb;
  font-weight: 500;
  text-decoration: none;
}
</style>

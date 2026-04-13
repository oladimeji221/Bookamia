import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'

// Auth
import Login from '@/pages/auth/Login.vue'
import Signup from '@/pages/auth/Signup.vue'

// Categories
import Hotels from '@/pages/categories/Hotels.vue'
import Eatery from '@/pages/categories/Eatery.vue'
import Event from '@/pages/categories/Event.vue'
import Cab from '@/pages/categories/Cab.vue'
import Movie from '@/pages/categories/Movie.vue'

// Bookings
import HotelBookings from '@/pages/bookings/HotelBookings.vue'
import EateryBookings from '@/pages/bookings/EateryBookings.vue'
import EventBookings from '@/pages/bookings/EventBookings.vue'
import CabBookings from '@/pages/bookings/CabBookings.vue'
import MovieBookings from '@/pages/bookings/MovieBookings.vue'

// Misc
import BookingConfirmed from '@/pages/BookingConfirmed.vue'
import Blog from '@/pages/Blog.vue'
import Contact from '@/pages/Contact.vue'

const routes = [
  { path: '/', component: Home },

  // Auth
  { path: '/auth/login', component: Login },
  { path: '/auth/signup', component: Signup },

  // Categories
  { path: '/categories/hotels', component: Hotels },
  { path: '/categories/eatery', component: Eatery },
  { path: '/categories/events', component: Event },
  { path: '/categories/cabs', component: Cab },
  { path: '/categories/movies', component: Movie },

  // Bookings
  { path: '/bookings/hotels', component: HotelBookings },
  { path: '/bookings/eatery', component: EateryBookings },
  { path: '/bookings/events', component: EventBookings },
  { path: '/bookings/cabs', component: CabBookings },
  { path: '/bookings/movies', component: MovieBookings },

  // Booking confirmed
  { path: '/booking-confirmed', component: BookingConfirmed },

  // Misc pages
  { path: '/blog', component: Blog },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'

// Auth
import Login from '@/pages/auth/Login.vue'
import Signup from '@/pages/auth/Signup.vue'

// Categories
import Hotels from '@/pages/categories/Hotels.vue'
import HotelDetail from '@/pages/categories/HotelDetail.vue'
import RoomDetail from '@/pages/categories/RoomDetail.vue'
import HotelBooking from '@/pages/categories/HotelBooking.vue'
import Eatery from '@/pages/categories/Eatery.vue'
import EateryDetail from '@/pages/categories/EateryDetail.vue'
import EateryBooking from '@/pages/categories/EateryBooking.vue'
import EateryReservation from '@/pages/categories/EateryReservation.vue'
import Event from '@/pages/categories/Event.vue'
import EventDetail from '@/pages/categories/EventDetail.vue'
import EventBooking from '@/pages/categories/EventBooking.vue'
import Cab from '@/pages/categories/Cab.vue'
import CabDetail from '@/pages/categories/CabDetail.vue'
import CabBooking from '@/pages/categories/CabBooking.vue'
import Movie from '@/pages/categories/Movie.vue'
import MovieDetail from '@/pages/categories/MovieDetail.vue'
import MovieBooking from '@/pages/categories/MovieBooking.vue'

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

// User Dashboard
import UserProfile from '@/pages/user/Profile.vue'
import UserWishlists from '@/pages/user/Wishlists.vue'
import UserSettings from '@/pages/user/Settings.vue'
import UserMessages from '@/pages/user/Messages.vue'
import UserBookings from '@/pages/user/Bookings.vue'
import UserWallet from '@/pages/user/Wallet.vue'
import UserReviews from '@/pages/user/Reviews.vue'

// Vendor (Agent) Dashboard
import VendorDashboard from '@/pages/vendor/Dashboard.vue'
import VendorListings from '@/pages/vendor/Listings.vue'
import VendorBookings from '@/pages/vendor/Bookings.vue'
import VendorEarnings from '@/pages/vendor/Earnings.vue'
import VendorReviews from '@/pages/vendor/Reviews.vue'
import VendorSettings from '@/pages/vendor/Settings.vue'
import VendorCreateListing from '@/pages/vendor/CreateListing.vue'


const routes = [
  { path: '/', component: Home },

  // Auth
  { path: '/auth/login', component: Login },
  { path: '/auth/signup', component: Signup },

  // Categories
  { path: '/categories/hotels', component: Hotels },
  { path: '/categories/hotels/:id', component: HotelDetail },
  { path: '/categories/hotels/:hotelId/rooms/:roomId', component: RoomDetail },
  { path: '/categories/hotels/:hotelId/rooms/:roomId/booking', component: HotelBooking },
  { path: '/categories/eatery', component: Eatery },
  { path: '/categories/eatery/:id', component: EateryDetail },
  { path: '/categories/eatery/:id/booking', component: EateryBooking },
  { path: '/categories/eatery/:id/reservation', component: EateryReservation },
  { path: '/categories/events', component: Event },
  { path: '/categories/events/:id', component: EventDetail },
  { path: '/categories/events/:id/booking', component: EventBooking },
  { path: '/categories/cabs', component: Cab },
  { path: '/categories/cabs/:id', component: CabDetail },
  { path: '/categories/cabs/:id/booking', component: CabBooking },
  { path: '/categories/movies', component: Movie },
  { path: '/categories/movies/:id', component: MovieDetail },
  { path: '/categories/movies/:id/booking', component: MovieBooking },

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

  // User Dashboard
  { path: '/user/profile', component: UserProfile },
  { path: '/user/wishlists', component: UserWishlists },
  { path: '/user/settings', component: UserSettings },
  { path: '/user/messages', component: UserMessages },
  { path: '/user/bookings', component: UserBookings },
  { path: '/user/wallet', component: UserWallet },
  { path: '/user/reviews', component: UserReviews },

  // Vendor (Agent) Dashboard
  { path: '/vendor/dashboard', component: VendorDashboard },
  { path: '/vendor/listings', component: VendorListings },
  { path: '/vendor/bookings', component: VendorBookings },
  { path: '/vendor/earnings', component: VendorEarnings },
  { path: '/vendor/reviews', component: VendorReviews },
  { path: '/vendor/settings', component: VendorSettings },
  { path: '/vendor/create-listing', component: VendorCreateListing },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router

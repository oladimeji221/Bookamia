import { defineStore } from 'pinia'

// Shared category metadata so badges/icons/units stay consistent everywhere.
export const CATEGORY_META = {
  Hotel: { icon: 'fa-solid fa-hotel', badge: 'bg-success bg-opacity-10 text-success', unit: '/night' },
  Cab: { icon: 'fa-solid fa-taxi', badge: 'bg-info bg-opacity-10 text-info', unit: '/trip' },
  Eatery: { icon: 'fa-solid fa-utensils', badge: 'bg-warning bg-opacity-10 text-warning', unit: '/plate' },
  Event: { icon: 'fa-solid fa-champagne-glasses', badge: 'bg-primary bg-opacity-10 text-primary', unit: '/ticket' },
  Movie: { icon: 'fa-solid fa-film', badge: 'bg-danger bg-opacity-10 text-danger', unit: '/ticket' },
}

export const useVendorStore = defineStore('vendor', {
  state: () => ({
    profile: {
      name: 'John Doe',
      avatar: '/assets/images/avatar/04.jpg',
      bankName: 'GTBank',
      accountNumber: '0123456789',
      accountName: 'John Doe Ventures',
    },

    listings: [
      { id: 1, name: 'Eko Hotels & Suites', category: 'Hotel', location: 'Victoria Island, Lagos', price: 85000, image: '/assets/images/category/hotel/01.jpg', active: true },
      { id: 2, name: 'Toyota Camry — Airport Pickup', category: 'Cab', location: 'Ikeja, Lagos', price: 8000, image: '/assets/images/category/cab/corolla.jpg', active: true },
      { id: 3, name: 'Mama Cass Restaurant', category: 'Eatery', location: 'Lekki Phase 1, Lagos', price: 4500, image: '/assets/images/category/eateries/mamacass.jpeg', active: true },
      { id: 4, name: 'Afrobeats Live Concert', category: 'Event', location: 'Eko Convention Centre, Lagos', price: 15000, image: '/assets/images/category/event/concert.jpg', active: true },
      { id: 5, name: 'A Tribe Called Judah', category: 'Movie', location: 'Filmhouse Cinemas, Surulere', price: 4500, image: '/assets/images/category/movie/movie1.jpg', active: false },
      { id: 6, name: 'Premier Hotel Ibadan', category: 'Hotel', location: 'Mokola Hill, Ibadan', price: 42000, image: '/assets/images/category/hotel/03.jpg', active: true },
    ],

    bookings: [
      { id: 1, listingId: 1, name: 'Eko Hotels & Suites', detail: 'Deluxe Pool View · 2 nights', category: 'Hotel', customer: 'Chidi Okafor', email: 'chidi.okafor@gmail.com', phone: '+234 803 123 4567', date: 'Nov 22 – 25', amount: 170000, status: 'Booked', statusClass: 'success', payment: 'Full Payment', paymentClass: 'success' },
      { id: 2, listingId: 2, name: 'Toyota Camry — Airport Pickup', detail: 'MMA2 → Lekki', category: 'Cab', customer: 'Aisha Bello', email: 'aisha.bello@gmail.com', phone: '+234 805 987 6543', date: 'Nov 24', amount: 8000, status: 'Pending', statusClass: 'warning', payment: 'On Arrival', paymentClass: 'orange' },
      { id: 3, listingId: 3, name: 'Mama Cass Restaurant', detail: 'Table for 4', category: 'Eatery', customer: 'Tunde Adeyemi', email: 'tunde.a@gmail.com', phone: '+234 802 444 5566', date: 'Nov 24', amount: 18000, status: 'Booked', statusClass: 'success', payment: 'Full Payment', paymentClass: 'success' },
      { id: 4, listingId: 4, name: 'Afrobeats Live Concert', detail: '2 × Regular tickets', category: 'Event', customer: 'Ngozi Eze', email: 'ngozi.eze@gmail.com', phone: '+234 809 222 3344', date: 'Nov 28', amount: 30000, status: 'Pending', statusClass: 'warning', payment: 'Half Payment', paymentClass: 'info' },
      { id: 5, listingId: 5, name: 'A Tribe Called Judah', detail: '3 × tickets · 19:00', category: 'Movie', customer: 'Emeka Nwosu', email: 'emeka.n@gmail.com', phone: '+234 806 777 8899', date: 'Nov 14', amount: 13500, status: 'Cancelled', statusClass: 'danger', payment: '-', paymentClass: 'secondary' },
      { id: 6, listingId: 6, name: 'Premier Hotel Ibadan', detail: 'Executive Suite · 1 night', category: 'Hotel', customer: 'Fatima Sani', email: 'fatima.sani@gmail.com', phone: '+234 807 555 1212', date: 'Nov 26', amount: 42000, status: 'Booked', statusClass: 'success', payment: 'Full Payment', paymentClass: 'success' },
    ],

    reviews: [
      { id: 1, name: 'Frances Guerrero', avatar: '/assets/images/avatar/01.jpg', date: '2 days ago', rating: 4, listing: 'Eko Hotels & Suites', comment: 'Lovely stay — the pool view room was spotless and staff were very attentive. Breakfast spread could be a bit wider but overall great value.', addressed: false },
      { id: 2, name: 'Louis Ferguson', avatar: '/assets/images/avatar/07.jpg', date: 'Nov 18, 2026', rating: 5, listing: 'Mama Cass Restaurant', comment: 'Authentic Nigerian dishes and quick service. The jollof rice was excellent and the portions were generous. Will definitely book again.', addressed: true },
      { id: 3, name: 'Dennis Barrett', avatar: '/assets/images/avatar/05.jpg', date: 'Nov 10, 2026', rating: 3, listing: 'Toyota Camry — Airport Pickup', comment: 'Driver was punctual and polite, but the car AC was a little weak. Decent ride for the price.', addressed: false },
    ],

    // Monthly sales for the dashboard chart (₦).
    monthlySales: [
      { month: 'Jan', value: 6200000 },
      { month: 'Feb', value: 7400000 },
      { month: 'Mar', value: 6900000 },
      { month: 'Apr', value: 8800000 },
      { month: 'May', value: 9600000 },
      { month: 'Jun', value: 11200000 },
      { month: 'Jul', value: 10400000 },
      { month: 'Aug', value: 9800000 },
      { month: 'Sep', value: 8900000 },
      { month: 'Oct', value: 10700000 },
      { month: 'Nov', value: 12100000 },
      { month: 'Dec', value: 12825000 },
    ],

    // Wallet — single source of truth for all balance figures.
    wallet: {
      mainBalance: 32000000, // available to withdraw
      pendingBalance: 15356000, // awaiting approval/clearance
      salesThisMonth: 12825000,
    },

    transactions: [
      { id: '#254684', date: '29 Aug 2026', type: 'Booking payout', amount: 3999000, status: 'Paid', statusClass: 'success' },
      { id: '#158468', date: '02 Sep 2026', type: 'Booking payout', amount: 3000000, status: 'Pending', statusClass: 'orange' },
      { id: '#245778', date: '05 Sep 2026', type: 'Withdrawal', amount: -4258000, status: 'Paid', statusClass: 'success' },
    ],

    notifications: [
      { id: 1, type: 'booking', icon: 'bi-bookmark-heart', iconClass: 'text-success', title: 'New booking received', text: 'Chidi Okafor booked Eko Hotels & Suites (2 nights).', time: '10 min ago', read: false },
      { id: 2, type: 'review', icon: 'bi-star', iconClass: 'text-warning', title: 'New review', text: 'Frances Guerrero left a 4★ review on Eko Hotels & Suites.', time: '2 hours ago', read: false },
      { id: 3, type: 'payout', icon: 'bi-cash-stack', iconClass: 'text-primary', title: 'Payout processed', text: '₦4,258,000 withdrawal completed to GTBank ****6789.', time: 'Yesterday', read: true },
      { id: 4, type: 'booking', icon: 'bi-x-circle', iconClass: 'text-danger', title: 'Booking cancelled', text: 'Emeka Nwosu cancelled 3 tickets for A Tribe Called Judah.', time: '2 days ago', read: true },
    ],

    // Availability: dates blocked (unavailable) per listing id, keyed YYYY-MM-DD.
    blockedDates: {
      1: ['2026-06-30', '2026-07-01'],
      6: ['2026-07-04'],
    },

    visitors: 15234,
  }),

  getters: {
    totalListings: (s) => s.listings.length,
    activeListings: (s) => s.listings.filter((l) => l.active).length,
    totalBookings: (s) => s.bookings.length,
    pendingBookings: (s) => s.bookings.filter((b) => b.status === 'Pending'),
    totalReviews: (s) => s.reviews.length,
    unaddressedReviews: (s) => s.reviews.filter((r) => !r.addressed).length,
    averageRating: (s) =>
      s.reviews.length ? (s.reviews.reduce((a, r) => a + r.rating, 0) / s.reviews.length).toFixed(1) : '0.0',
    unreadNotifications: (s) => s.notifications.filter((n) => !n.read).length,
    // Wallet is the single source of truth for money figures across all pages.
    totalBalance: (s) => s.wallet.mainBalance + s.wallet.pendingBalance,
    upcomingBookings: (s) => s.bookings.filter((b) => b.status !== 'Cancelled'),
  },

  actions: {
    deleteListing(id) {
      this.listings = this.listings.filter((l) => l.id !== id)
    },
    confirmBooking(id) {
      const b = this.bookings.find((x) => x.id === id)
      if (b) { b.status = 'Booked'; b.statusClass = 'success' }
    },
    cancelBooking(id) {
      const b = this.bookings.find((x) => x.id === id)
      if (b) { b.status = 'Cancelled'; b.statusClass = 'danger'; b.payment = '-'; b.paymentClass = 'secondary' }
    },
    markAllNotificationsRead() {
      this.notifications.forEach((n) => { n.read = true })
    },
    markNotificationRead(id) {
      const n = this.notifications.find((x) => x.id === id)
      if (n) n.read = true
    },
    withdraw(amount) {
      const value = Number(amount)
      if (!value || value <= 0 || value > this.wallet.mainBalance) return false
      this.wallet.mainBalance -= value
      this.transactions.unshift({
        id: '#' + Math.floor(100000 + Math.random() * 900000),
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        type: 'Withdrawal',
        amount: -value,
        status: 'Pending',
        statusClass: 'orange',
      })
      return true
    },
    toggleBlockedDate(listingId, dateStr) {
      if (!this.blockedDates[listingId]) this.blockedDates[listingId] = []
      const arr = this.blockedDates[listingId]
      const i = arr.indexOf(dateStr)
      if (i === -1) arr.push(dateStr)
      else arr.splice(i, 1)
    },
  },
})

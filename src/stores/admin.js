import { defineStore } from 'pinia'
import { CATEGORY_META } from '@/stores/vendor'

export { CATEGORY_META }

export const useAdminStore = defineStore('admin', {
  state: () => ({
    profile: {
      name: 'Bookamia Admin',
      email: 'admin@bookamia.com',
      avatar: '/assets/images/avatar/12.jpg',
      role: 'Super Admin',
    },

    settings: {
      platformName: 'Bookamia',
      supportEmail: 'support@bookamia.com',
      supportPhone: '+234 705 871 0433',
      commissionRate: 12.5,
      currency: 'NGN (₦)',
      autoApproveVendors: false,
      emailNotifications: true,
      maintenanceMode: false,
    },

    // 12-month gross booking revenue (₦ millions kept as raw naira)
    monthlyRevenue: [
      { month: 'Jan', value: 18400000 },
      { month: 'Feb', value: 21200000 },
      { month: 'Mar', value: 19800000 },
      { month: 'Apr', value: 24600000 },
      { month: 'May', value: 28100000 },
      { month: 'Jun', value: 32500000 },
      { month: 'Jul', value: 30200000 },
      { month: 'Aug', value: 27800000 },
      { month: 'Sep', value: 25400000 },
      { month: 'Oct', value: 29900000 },
      { month: 'Nov', value: 35600000 },
      { month: 'Dec', value: 41200000 },
    ],

    categoryBookings: [
      { category: 'Hotel', count: 412 },
      { category: 'Event', count: 268 },
      { category: 'Eatery', count: 224 },
      { category: 'Movie', count: 187 },
      { category: 'Cab', count: 156 },
    ],

    vendors: [
      { id: 1, name: 'John Doe', business: 'John Doe Ventures', email: 'john@example.com', avatar: '/assets/images/avatar/04.jpg', categories: ['Hotel', 'Cab', 'Eatery'], listings: 6, revenue: 47356000, joined: '12 Jan 2025', status: 'Active' },
      { id: 2, name: 'Amaka Obi', business: 'Amaka Hospitality Ltd', email: 'amaka.obi@gmail.com', avatar: '/assets/images/avatar/01.jpg', categories: ['Hotel'], listings: 3, revenue: 28450000, joined: '03 Mar 2025', status: 'Active' },
      { id: 3, name: 'Ibrahim Musa', business: 'Musa Rides NG', email: 'ibrahim.musa@yahoo.com', avatar: '/assets/images/avatar/02.jpg', categories: ['Cab'], listings: 8, revenue: 9120000, joined: '18 Apr 2025', status: 'Active' },
      { id: 4, name: 'Chiamaka Eze', business: 'Chi Kitchen & Grill', email: 'chi.kitchen@gmail.com', avatar: '/assets/images/avatar/03.jpg', categories: ['Eatery'], listings: 2, revenue: 5640000, joined: '25 May 2026', status: 'Pending' },
      { id: 5, name: 'Segun Adewale', business: 'Lagos Live Events', email: 'segun@lagoslive.ng', avatar: '/assets/images/avatar/07.jpg', categories: ['Event'], listings: 4, revenue: 18900000, joined: '09 Jun 2026', status: 'Pending' },
      { id: 6, name: 'Blessing Okon', business: 'Silverbird Screens', email: 'b.okon@silverbird.com', avatar: '/assets/images/avatar/05.jpg', categories: ['Movie'], listings: 5, revenue: 12300000, joined: '14 Feb 2025', status: 'Suspended' },
    ],

    users: [
      { id: 1, name: 'Chidi Okafor', email: 'chidi.okafor@gmail.com', avatar: '/assets/images/avatar/02.jpg', joined: '05 Feb 2025', bookings: 14, spend: 1240000, status: 'Active' },
      { id: 2, name: 'Aisha Bello', email: 'aisha.bello@gmail.com', avatar: '/assets/images/avatar/01.jpg', joined: '22 Mar 2025', bookings: 9, spend: 486000, status: 'Active' },
      { id: 3, name: 'Tunde Adeyemi', email: 'tunde.a@gmail.com', avatar: '/assets/images/avatar/04.jpg', joined: '11 Apr 2025', bookings: 21, spend: 2130000, status: 'Active' },
      { id: 4, name: 'Ngozi Eze', email: 'ngozi.eze@gmail.com', avatar: '/assets/images/avatar/03.jpg', joined: '30 May 2025', bookings: 4, spend: 96000, status: 'Active' },
      { id: 5, name: 'Emeka Nwosu', email: 'emeka.n@gmail.com', avatar: '/assets/images/avatar/05.jpg', joined: '17 Aug 2025', bookings: 2, spend: 27000, status: 'Suspended' },
      { id: 6, name: 'Fatima Sani', email: 'fatima.sani@gmail.com', avatar: '/assets/images/avatar/07.jpg', joined: '02 Jan 2026', bookings: 7, spend: 352000, status: 'Active' },
    ],

    bookings: [
      { id: 'BK-H7421', listing: 'Eko Hotels & Suites', category: 'Hotel', customer: 'Chidi Okafor', vendor: 'John Doe Ventures', date: '22 Jun 2026', amount: 170000, status: 'Confirmed', statusClass: 'success', payment: 'Paystack', paymentClass: 'success' },
      { id: 'BK-C9902', listing: 'Toyota Camry — Airport Pickup', category: 'Cab', customer: 'Aisha Bello', vendor: 'Musa Rides NG', date: '24 Jun 2026', amount: 8000, status: 'Pending', statusClass: 'warning', payment: 'On Arrival', paymentClass: 'orange' },
      { id: 'BK-E1103', listing: 'Nok by Alara', category: 'Eatery', customer: 'Tunde Adeyemi', vendor: 'Chi Kitchen & Grill', date: '24 Jun 2026', amount: 45000, status: 'Confirmed', statusClass: 'success', payment: 'Paystack', paymentClass: 'success' },
      { id: 'BK-V5582', listing: 'Afrobeats Live Concert', category: 'Event', customer: 'Ngozi Eze', vendor: 'Lagos Live Events', date: '28 Jun 2026', amount: 30000, status: 'Pending', statusClass: 'warning', payment: 'Half Payment', paymentClass: 'info' },
      { id: 'BK-M4419', listing: 'A Tribe Called Judah', category: 'Movie', customer: 'Emeka Nwosu', vendor: 'Silverbird Screens', date: '14 Jun 2026', amount: 13500, status: 'Cancelled', statusClass: 'danger', payment: 'Refunded', paymentClass: 'secondary' },
      { id: 'BK-H7422', listing: 'Transcorp Hilton', category: 'Hotel', customer: 'Fatima Sani', vendor: 'Amaka Hospitality Ltd', date: '26 Jun 2026', amount: 250000, status: 'Confirmed', statusClass: 'success', payment: 'Paystack', paymentClass: 'success' },
      { id: 'BK-E1104', listing: 'Mama Cass Restaurant', category: 'Eatery', customer: 'Chidi Okafor', vendor: 'John Doe Ventures', date: '29 Jun 2026', amount: 18000, status: 'Confirmed', statusClass: 'success', payment: 'Wallet', paymentClass: 'primary' },
      { id: 'BK-V5583', listing: 'Lagos Comedy Night', category: 'Event', customer: 'Aisha Bello', vendor: 'Lagos Live Events', date: '01 Jul 2026', amount: 15000, status: 'Pending', statusClass: 'warning', payment: 'Paystack', paymentClass: 'success' },
      { id: 'BK-C9903', listing: 'Prado — Full Day Hire', category: 'Cab', customer: 'Tunde Adeyemi', vendor: 'Musa Rides NG', date: '02 Jul 2026', amount: 95000, status: 'Confirmed', statusClass: 'success', payment: 'Paystack', paymentClass: 'success' },
      { id: 'BK-M4420', listing: 'Everything Everywhere', category: 'Movie', customer: 'Ngozi Eze', vendor: 'Silverbird Screens', date: '03 Jul 2026', amount: 9000, status: 'Confirmed', statusClass: 'success', payment: 'Wallet', paymentClass: 'primary' },
    ],

    payouts: [
      { id: 'PO-2201', vendor: 'John Doe Ventures', bank: 'GTBank ****6789', amount: 3999000, requested: '25 Jun 2026', status: 'Pending' },
      { id: 'PO-2200', vendor: 'Amaka Hospitality Ltd', bank: 'Zenith ****4521', amount: 2450000, requested: '24 Jun 2026', status: 'Pending' },
      { id: 'PO-2199', vendor: 'Musa Rides NG', bank: 'UBA ****9034', amount: 860000, requested: '21 Jun 2026', status: 'Paid' },
      { id: 'PO-2198', vendor: 'Lagos Live Events', bank: 'Access ****7712', amount: 1720000, requested: '18 Jun 2026', status: 'Paid' },
      { id: 'PO-2197', vendor: 'Silverbird Screens', bank: 'First Bank ****3345', amount: 940000, requested: '15 Jun 2026', status: 'Rejected' },
    ],

    reviews: [
      { id: 1, customer: 'Chidi Okafor', avatar: '/assets/images/avatar/02.jpg', listing: 'Eko Hotels & Suites', vendor: 'John Doe Ventures', rating: 5, date: '20 Jun 2026', comment: 'Fantastic stay — clean rooms, fast check-in and great ocean views.', status: 'Published' },
      { id: 2, customer: 'Aisha Bello', avatar: '/assets/images/avatar/01.jpg', listing: 'Toyota Camry — Airport Pickup', vendor: 'Musa Rides NG', rating: 4, date: '18 Jun 2026', comment: 'Driver was punctual and polite. Car was clean, AC a bit weak.', status: 'Published' },
      { id: 3, customer: 'Emeka Nwosu', avatar: '/assets/images/avatar/05.jpg', listing: 'A Tribe Called Judah', vendor: 'Silverbird Screens', rating: 1, date: '15 Jun 2026', comment: 'Terrible!!! Buy from my own cinema instead — visit www.cheapcinema.ng for better deals!!!', status: 'Flagged' },
      { id: 4, customer: 'Fatima Sani', avatar: '/assets/images/avatar/07.jpg', listing: 'Transcorp Hilton', vendor: 'Amaka Hospitality Ltd', rating: 5, date: '12 Jun 2026', comment: 'Presidential suite was immaculate. Breakfast buffet is world class.', status: 'Published' },
      { id: 5, customer: 'Ngozi Eze', avatar: '/assets/images/avatar/03.jpg', listing: 'Afrobeats Live Concert', vendor: 'Lagos Live Events', rating: 3, date: '10 Jun 2026', comment: 'Great lineup but entry queues were poorly managed. Sound was excellent once inside.', status: 'Published' },
    ],

    notifications: [
      { id: 1, icon: 'bi-person-plus', iconClass: 'text-primary', title: 'New vendor application', text: 'Chi Kitchen & Grill applied to join Bookamia.', time: '25 min ago', read: false },
      { id: 2, icon: 'bi-cash-stack', iconClass: 'text-success', title: 'Payout request', text: 'John Doe Ventures requested ₦3,999,000 payout.', time: '2 hours ago', read: false },
      { id: 3, icon: 'bi-flag', iconClass: 'text-danger', title: 'Review flagged', text: 'A review on A Tribe Called Judah was flagged for spam.', time: 'Yesterday', read: false },
      { id: 4, icon: 'bi-bookmark-heart', iconClass: 'text-info', title: 'Booking milestone', text: 'Bookamia crossed 1,200 bookings this quarter. 🎉', time: '2 days ago', read: true },
    ],
  }),

  getters: {
    totalVendors: (s) => s.vendors.length,
    activeVendors: (s) => s.vendors.filter((v) => v.status === 'Active').length,
    pendingVendors: (s) => s.vendors.filter((v) => v.status === 'Pending'),
    suspendedVendors: (s) => s.vendors.filter((v) => v.status === 'Suspended').length,
    totalUsers: (s) => s.users.length,
    totalBookings: (s) => s.categoryBookings.reduce((a, c) => a + c.count, 0),
    grossRevenue: (s) => s.monthlyRevenue.reduce((a, m) => a + m.value, 0),
    revenueThisMonth: (s) => s.monthlyRevenue[s.monthlyRevenue.length - 1].value,
    commissionEarned() { return Math.round(this.grossRevenue * (this.settings.commissionRate / 100)) },
    pendingPayouts: (s) => s.payouts.filter((p) => p.status === 'Pending'),
    paidPayoutsTotal: (s) => s.payouts.filter((p) => p.status === 'Paid').reduce((a, p) => a + p.amount, 0),
    flaggedReviews: (s) => s.reviews.filter((r) => r.status === 'Flagged').length,
    unreadNotifications: (s) => s.notifications.filter((n) => !n.read).length,
  },

  actions: {
    approveVendor(id) {
      const v = this.vendors.find((x) => x.id === id)
      if (v) v.status = 'Active'
    },
    suspendVendor(id) {
      const v = this.vendors.find((x) => x.id === id)
      if (v) v.status = 'Suspended'
    },
    activateVendor(id) {
      const v = this.vendors.find((x) => x.id === id)
      if (v) v.status = 'Active'
    },
    rejectVendor(id) {
      this.vendors = this.vendors.filter((x) => x.id !== id)
    },
    deleteVendor(id) {
      this.vendors = this.vendors.filter((x) => x.id !== id)
    },
    toggleUserStatus(id) {
      const u = this.users.find((x) => x.id === id)
      if (u) u.status = u.status === 'Active' ? 'Suspended' : 'Active'
    },
    deleteUser(id) {
      this.users = this.users.filter((x) => x.id !== id)
    },
    confirmBooking(id) {
      const b = this.bookings.find((x) => x.id === id)
      if (b) { b.status = 'Confirmed'; b.statusClass = 'success' }
    },
    cancelBooking(id) {
      const b = this.bookings.find((x) => x.id === id)
      if (b) { b.status = 'Cancelled'; b.statusClass = 'danger'; b.payment = 'Refunded'; b.paymentClass = 'secondary' }
    },
    deleteBooking(id) {
      this.bookings = this.bookings.filter((x) => x.id !== id)
    },
    markPayoutPaid(id) {
      const p = this.payouts.find((x) => x.id === id)
      if (p) p.status = 'Paid'
    },
    rejectPayout(id) {
      const p = this.payouts.find((x) => x.id === id)
      if (p) p.status = 'Rejected'
    },
    publishReview(id) {
      const r = this.reviews.find((x) => x.id === id)
      if (r) r.status = 'Published'
    },
    removeReview(id) {
      this.reviews = this.reviews.filter((x) => x.id !== id)
    },
    markAllNotificationsRead() {
      this.notifications.forEach((n) => { n.read = true })
    },
  },
})

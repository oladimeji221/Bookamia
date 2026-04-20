<template>
<footer class="bg-dark pt-5">
	<div class="container">
		<!-- Row START -->
		<div class="row g-4">

			<!-- Widget 1 START -->
			<div class="col-lg-3">
				<!-- logo -->
				<RouterLink to="/">
					<img class="h-40px" src="/assets/images/bookamia_footer.png" alt="logo">
				</RouterLink>
				<p class="my-3 text-body-secondary">Nigeria's #1 platform for booking hotels, movie tickets, cab rides, event centers, and eateries near you.</p>
				<p class="mb-2">
					<a href="tel:+2348105568468" class="text-body-secondary text-primary-hover">
						<i class="bi bi-telephone me-2"></i>+234 (0) 810 556 8468
					</a>
				</p>
				<p class="mb-2">
					<a href="mailto:info@bookamia.com" class="text-body-secondary text-primary-hover">
						<i class="bi bi-envelope me-2"></i>info@bookamia.com
					</a>
				</p>
				<p class="mb-0 text-body-secondary">
					<i class="bi bi-geo-alt me-2"></i>51 Macaulay Street, By Ikot Ekpene Rd,<br>Umuahia, Abia State, Nigeria.
				</p>
			</div>
			<!-- Widget 1 END -->

			<!-- Widget 2 START -->
			<div class="col-lg-8 ms-auto">
				<div class="row g-4">
					<!-- Link block -->
					<div class="col-6 col-md-3">
						<h5 class="text-white mb-2 mb-md-4">Pages</h5>
						<ul class="nav flex-column text-primary-hover">
							<li class="nav-item"><RouterLink class="nav-link text-body-secondary" to="/">Home</RouterLink></li>
							<li class="nav-item"><RouterLink class="nav-link text-body-secondary" to="/about">About us</RouterLink></li>
							<li class="nav-item"><RouterLink class="nav-link text-body-secondary" to="/contact">Contact us</RouterLink></li>
							<li class="nav-item"><RouterLink class="nav-link text-body-secondary" to="/blog">Blog</RouterLink></li>
							<li class="nav-item"><a class="nav-link text-body-secondary" href="#" data-bs-toggle="modal" data-bs-target="#comingSoonModal">FAQ</a></li>
						</ul>
					</div>

					<!-- Link block -->
					<div class="col-6 col-md-3">
						<h5 class="text-white mb-2 mb-md-4">Account</h5>
						<ul class="nav flex-column text-primary-hover">
							<li class="nav-item"><RouterLink class="nav-link text-body-secondary" to="/auth/signup">Sign up</RouterLink></li>
							<li class="nav-item"><RouterLink class="nav-link text-body-secondary" to="/auth/login">Sign in</RouterLink></li>
							<li class="nav-item"><a class="nav-link text-body-secondary" href="#" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Privacy Policy</a></li>
							<li class="nav-item"><a class="nav-link text-body-secondary" href="#" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Terms</a></li>
							<li class="nav-item"><a class="nav-link text-body-secondary" href="#" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Refund Policy</a></li>
						</ul>
					</div>

					<!-- Link block -->
					<div class="col-6 col-md-3">
						<h5 class="text-white mb-2 mb-md-4">Popular Cities</h5>
						<ul class="nav flex-column text-primary-hover">
							<li class="nav-item"><a class="nav-link text-body-secondary" href="#" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Lagos</a></li>
							<li class="nav-item"><a class="nav-link text-body-secondary" href="#" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Abuja</a></li>
							<li class="nav-item"><a class="nav-link text-body-secondary" href="#" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Port Harcourt</a></li>
							<li class="nav-item"><a class="nav-link text-body-secondary" href="#" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Ibadan</a></li>
							<li class="nav-item"><a class="nav-link text-body-secondary" href="#" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Kano</a></li>
							<li class="nav-item"><a class="nav-link text-body-secondary" href="#" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Enugu</a></li>
						</ul>
					</div>

					<!-- Link block -->
					<div class="col-6 col-md-3">
						<h5 class="text-white mb-2 mb-md-4">Our Services</h5>
						<ul class="nav flex-column text-primary-hover">
							<li class="nav-item"><a class="nav-link text-body-secondary" href="#" data-bs-toggle="modal" data-bs-target="#comingSoonModal"><i class="fa-solid fa-hotel me-2"></i>Hotels</a></li>
							<li class="nav-item"><a class="nav-link text-body-secondary" href="#" data-bs-toggle="modal" data-bs-target="#comingSoonModal"><i class="fa-solid fa-utensils me-2"></i>Eateries</a></li>
							<li class="nav-item"><a class="nav-link text-body-secondary" href="#" data-bs-toggle="modal" data-bs-target="#comingSoonModal"><i class="fa-solid fa-calendar-days me-2"></i>Events</a></li>
							<li class="nav-item"><a class="nav-link text-body-secondary" href="#" data-bs-toggle="modal" data-bs-target="#comingSoonModal"><i class="fa-solid fa-car me-2"></i>Cabs</a></li>
							<li class="nav-item"><a class="nav-link text-body-secondary" href="#" data-bs-toggle="modal" data-bs-target="#comingSoonModal"><i class="fa-solid fa-film me-2"></i>Movies</a></li>
						</ul>
					</div>
				</div>
			</div>
			<!-- Widget 2 END -->

		</div><!-- Row END -->

		<!-- Tops Links -->
		<div class="row mt-5">
			<h5 class="mb-2 text-white">Top Links</h5>
			<ul class="list-inline text-primary-hover lh-lg">
				<li class="list-inline-item"><a href="#" class="text-body-secondary" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Hotels</a></li>
				<li class="list-inline-item"><a href="#" class="text-body-secondary" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Eateries</a></li>
				<li class="list-inline-item"><a href="#" class="text-body-secondary" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Events</a></li>
				<li class="list-inline-item"><a href="#" class="text-body-secondary" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Cabs</a></li>
				<li class="list-inline-item"><a href="#" class="text-body-secondary" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Movies</a></li>
				<li class="list-inline-item"><RouterLink to="/blog" class="text-body-secondary">Blog</RouterLink></li>
				<li class="list-inline-item"><RouterLink to="/about" class="text-body-secondary">About us</RouterLink></li>
				<li class="list-inline-item"><RouterLink to="/contact" class="text-body-secondary">Contact us</RouterLink></li>
				<li class="list-inline-item"><a href="#" class="text-body-secondary" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Privacy Policy</a></li>
				<li class="list-inline-item"><a href="#" class="text-body-secondary" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Terms &amp; Conditions</a></li>
				<li class="list-inline-item"><a href="#" class="text-body-secondary" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Refund Policy</a></li>
			</ul>
		</div>

		<!-- Social media icon -->
		<div class="row g-4 justify-content-between mt-0 mt-md-2">
			<div class="col-sm-7 col-md-6 col-lg-4"></div>
			<div class="col-sm-5 col-md-6 col-lg-3 text-sm-end">
				<h5 class="text-white mb-2">Follow us on</h5>
				<ul class="list-inline mb-0 mt-3">
					<li class="list-inline-item"> <a class="btn btn-sm px-2 bg-facebook mb-0" href="#"><i class="fab fa-fw fa-facebook-f"></i></a> </li>
					<li class="list-inline-item"> <a class="btn btn-sm shadow px-2 bg-instagram mb-0" href="#"><i class="fab fa-fw fa-instagram"></i></a> </li>
					<li class="list-inline-item"> <a class="btn btn-sm shadow px-2 bg-twitter mb-0" href="#"><i class="fab fa-fw fa-twitter"></i></a> </li>
					<li class="list-inline-item"> <a class="btn btn-sm shadow px-2 bg-linkedin mb-0" href="#"><i class="fab fa-fw fa-linkedin-in"></i></a> </li>
				</ul>
			</div>
		</div>

		<!-- Divider -->
		<hr class="mt-4 mb-0">

		<!-- Bottom footer -->
		<div class="row">
			<div class="container">
				<div class="d-lg-flex justify-content-between align-items-center py-3 text-center text-lg-start">
					<!-- copyright text -->
					<div class="text-body-secondary text-primary-hover"> © 2026 Bookamia. All rights reserved. </div>
					<!-- copyright links-->
					<div class="nav mt-2 mt-lg-0">
						<ul class="list-inline text-primary-hover mx-auto mb-0">
							<li class="list-inline-item me-0"><a class="nav-link text-body-secondary py-1" href="#" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Privacy policy</a></li>
							<li class="list-inline-item me-0"><a class="nav-link text-body-secondary py-1" href="#" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Terms and conditions</a></li>
							<li class="list-inline-item me-0"><a class="nav-link text-body-secondary py-1 pe-0" href="#" data-bs-toggle="modal" data-bs-target="#comingSoonModal">Refund policy</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>

</template>

<style scoped>

</style>

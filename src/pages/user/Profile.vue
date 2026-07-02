<template>
  <main>
	
<!-- =======================
Content START -->
<section class="pt-3">
	<div class="container">
		<div class="row">

			<!-- Sidebar START -->
			<UserSidebar />
			<!-- Sidebar END -->

			<!-- Main content START -->
			<div class="col-lg-8 col-xl-9">

				<!-- Offcanvas menu button -->
				<div class="d-grid mb-0 d-lg-none w-100">
					<button class="btn btn-primary mb-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
						<i class="fas fa-sliders-h"></i> Menu
					</button>
				</div>

				<div class="vstack gap-4">
					<!-- Dashboard Header -->
					<UserDashboardHeader title="My Profile" />

					<!-- Personal info START -->
					<div class="card border">
						<!-- Card header -->
						<div class="card-header border-bottom">
							<h4 class="card-header-title">Personal Information</h4>
						</div>

						<!-- Card body START -->
						<div class="card-body">
							<!-- Form START -->
							<form class="row g-3">
								<!-- Profile photo -->
								<div class="col-12">
									<label class="form-label">Upload your profile photo<span class="text-danger">*</span></label>
									<div class="d-flex align-items-center">
										<label class="position-relative me-4" for="uploadfile-1" title="Replace this pic">
											<!-- Avatar place holder -->
											<span class="avatar avatar-xl">
												<img id="uploadfile-1-preview" class="avatar-img rounded-circle border border-white border-3 shadow" src="/assets/images/avatar/04.jpg" alt="Profile photo">
											</span>
										</label>
										<!-- Upload button -->
										<label class="btn btn-sm btn-primary-soft mb-0" for="uploadfile-1">Change</label>
										<input id="uploadfile-1" class="form-control d-none" type="file">
									</div>
								</div>

								<!-- Name -->
								<div class="col-md-6">
									<label class="form-label">Full Name<span class="text-danger">*</span></label>
									<input type="text" class="form-control" value="John Doe" placeholder="Enter your full name">
								</div>

								<!-- Email -->
								<div class="col-md-6">
									<label class="form-label">Email address<span class="text-danger">*</span></label>
									<input type="email" class="form-control" value="hello@gmail.com" placeholder="Enter your email id">
								</div>

								<!-- Mobile -->
								<div class="col-md-6">
									<label class="form-label">Mobile number<span class="text-danger">*</span></label>
									<input type="text" class="form-control" value="+234 705 871 0433" placeholder="Enter your mobile number">
								</div>

								<!-- Nationality -->
								<div class="col-md-6">
									<label class="form-label">Nationality<span class="text-danger">*</span></label>
									<select class="form-select" v-model="nationality">
										<option value="">Select your country</option>
										<option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
									</select>
								</div>

								<!-- Date of birth -->
								<div class="col-md-6">
									<label class="form-label">Date of Birth<span class="text-danger">*</span></label>
									<input type="date" class="form-control" value="1996-08-29">
								</div>

								<!-- Gender -->
								<div class="col-md-6">
									<label class="form-label">Select Gender<span class="text-danger">*</span></label>
									<div class="d-flex gap-4">
										<div class="form-check radio-bg-light">
											<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked="">
											<label class="form-check-label" for="flexRadioDefault1">
												Male
											</label>
										</div>
										<div class="form-check radio-bg-light">
											<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
											<label class="form-check-label" for="flexRadioDefault2">
												Female
											</label>
										</div>
										<div class="form-check radio-bg-light">
											<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
											<label class="form-check-label" for="flexRadioDefault3">
												Others
											</label>
										</div>
									</div>
								</div>

								<!-- Address -->
								<div class="col-12">
									<label class="form-label">Address</label>
									<textarea class="form-control" rows="3" spellcheck="false">14 Adeola Odeku Street, Victoria Island, Lagos, Nigeria</textarea>
								</div>

								<!-- Button -->
								<div class="col-12 text-end">
									<button type="button" class="btn btn-primary mb-0"><i class="bi bi-check-lg fa-fw me-1"></i>Save Changes</button>
								</div>
							</form>
							<!-- Form END -->
						</div>
						<!-- Card body END -->
					</div>
					<!-- Personal info END -->

					<!-- Update email START -->
					<div class="card border">
						<!-- Card header -->
						<div class="card-header border-bottom">
							<h4 class="card-header-title">Update email</h4>
							<p class="mb-0">Your current email address is <span class="text-primary">hello@gmail.com</span></p>
						</div>

						<!-- Card body START -->
						<div class="card-body">
							<form>
								<!-- Email -->
								<label class="form-label">Enter your new email id<span class="text-danger">*</span></label>
								<input type="email" class="form-control" placeholder="Enter your email id">

								<div class="text-end mt-3">
									<button type="button" class="btn btn-primary mb-0"><i class="bi bi-check-lg fa-fw me-1"></i>Save Email</button>
								</div>
							</form>	
						</div>
						<!-- Card body END -->
					</div>
					<!-- Update email END -->

					<!-- Update Password START -->
					<div class="card border">
						<!-- Card header -->
						<div class="card-header border-bottom">
							<h4 class="card-header-title">Update Password</h4>
							<p class="mb-0">Choose a strong password you haven't used elsewhere</p>
						</div>

						<!-- Card body START -->
						<form class="card-body">
							<!-- Current password -->
							<div class="mb-3">
								<label class="form-label">Current password</label>
								<input class="form-control" type="password" placeholder="Enter current password">
							</div>
							<!-- New password -->
							<div class="mb-3">
								<label class="form-label"> Enter new password</label>
								<div class="input-group">
									<input class="form-control" :type="showNewPass ? 'text' : 'password'" placeholder="Enter new password" id="psw-input">
									<span class="input-group-text p-0 bg-transparent" @click="showNewPass = !showNewPass">
										<i class="fas cursor-pointer p-2" :class="showNewPass ? 'fa-eye' : 'fa-eye-slash'"></i>
									</span>
								</div>
							</div>
							<!-- Confirm -->
							<div class="mb-3">
								<label class="form-label">Confirm new password</label>
								<div class="input-group">
									<input class="form-control" :type="showConfirmPass ? 'text' : 'password'" placeholder="Confirm new password">
									<span class="input-group-text p-0 bg-transparent" @click="showConfirmPass = !showConfirmPass">
										<i class="fas cursor-pointer p-2" :class="showConfirmPass ? 'fa-eye' : 'fa-eye-slash'"></i>
									</span>
								</div>
							</div>

							<div class="text-end">
								<button type="button" class="btn btn-primary mb-0"><i class="bi bi-shield-lock fa-fw me-1"></i>Change Password</button>
							</div>
						</form>
						<!-- Card body END -->
					</div>
					<!-- Update Password END -->
				</div>
			</div>
			<!-- Main content END -->

		</div>
	</div>
</section>
<!-- =======================
Content END -->

</main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import UserSidebar from '@/components/UserSidebar.vue'
import UserDashboardHeader from '@/components/UserDashboardHeader.vue'
import { countries } from '@/data/countries.js'


const nationality = ref('Nigeria')

const showNewPass = ref(false)
const showConfirmPass = ref(false)


</script>

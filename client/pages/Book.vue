<template>
	<div class="min-h-screen flex items-center justify-center bg-blue-300">
		<div class="bg-white px-10 py-4 rounded-xl shadow-2xl">
			<h2 class="text-xl font-bold mb-4 text-gray-600">
				Book your appointment
			</h2>
			<form @submit.prevent="" class="space-y-3" action="">
				<div class="input-field">
					<label class="" for="first_name">First Name</label
					><input
						type="text"
						v-model="appointment.firstname"
						placeholder="First Name"
						required
					/>
				</div>
				<div class="input-field">
					<label for="last_name">Last Name</label
					><input
						type="text"
						v-model="appointment.lasstname"
						placeholder="Last name"
						required
					/>
				</div>
				<div class="input-field">
					<label for="phone">Phone</label
					><input
						type="tel"
						v-model="appointment.phone"
						placeholder="Phone Number"
						required
					/>
				</div>
				<div class="input-field">
					<label for="email">Email</label
					><input
						type="email"
						v-model="appointment.email"
						placeholder="Email"
						required
					/>
				</div>
				<div class="input-field">
					<label for="date">Date of Appointment</label
					><input
						type="date"
						v-model="appointment.date"
						placeholder="Date and time"
						required
					/>
				</div>
				<div class="input-field">
					<button @click="bookAppointment" type="submit">Book</button>
				</div>
			</form>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			appointment: {
				firstname: "",
				lasname: "",
				phone: "",
				email: "",
				date: "",
			},
		};
	},
	methods: {
		bookAppointment() {
			console.log(this.appointment);
			console.log("inserted");
		},
	},
};
</script>
<style scoped>
.input-field label {
	@apply block mb-1 text-gray-500 font-bold;
}
.input-field input {
	@apply w-full border-2 border-gray-400 p-2 rounded outline-none;
	@apply focus:border-blue-700;
	@apply transition duration-300;
}
.input-field button {
	@apply w-full bg-yellow-400 p-4 rounded-lg text-purple-900;
	@apply hover:bg-yellow-500;
	@apply transition duration-300;
}
</style>
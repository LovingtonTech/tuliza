<template>
	<div class="min-h-screen flex items-center justify-center bg-blue-300">
		<div class="bg-white px-10 py-4 rounded-xl shadow-2xl">
			<h2 class="text-xl font-bold mb-4 text-gray-600">
				Book your appointment
			</h2>
			<form @submit.prevent="" class="space-y-3">
				<label class="input-label" for="first_name">Username</label
				><input
					class="input-field"
					type="text"
					v-model="appointment.username"
					placeholder="Username"
					required
				/>
				<label class="input-label" for="phone">Phone</label
				><input
					class="input-field"
					type="tel"
					v-model="appointment.phone"
					placeholder="Phone Number"
					required
				/>
				<label class="input-label" for="phone">Service</label
				><input
					class="input-field"
					type="text"
					v-model="appointment.service"
					placeholder="Service"
					required
				/>
				<label class="input-label" for="date">Date of Appointment</label
				><input
					class="input-field"
					type="date"
					v-model="appointment.date"
					placeholder="Date and time"
					required
				/>
				<button class="input-button" @click="bookAppointment" type="submit">
					Book
				</button>
			</form>
		</div>
	</div>
</template>
<script>
import TulizaService from "../services/TulizaService";
export default {
	data() {
		return {
			appointment: {
				username: "",
				phone: "",
				service: [],
				date: "",
			},
		};
	},
	methods: {
		async bookAppointment() {
			await TulizaService.postAppointment(this.appointment)
				.then((response) => {
					alert(response);
				})
				.catch((err) => {
					alert(err);
				});
		},
	},
};
</script>
<style scoped>
.input-label {
	@apply block mb-1 text-gray-500 font-bold;
}
.input-field {
	@apply w-full border-2 border-gray-400 p-2 rounded outline-none;
	@apply focus:border-blue-700;
	@apply transition duration-300;
}
.input-button {
	@apply w-full bg-yellow-400 p-4 rounded-lg text-purple-900;
	@apply hover:bg-yellow-500;
	@apply transition duration-300;
}
</style>
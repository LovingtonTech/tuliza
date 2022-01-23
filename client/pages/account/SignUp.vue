<template>
	<div class="min-h-screen bg-blue-300 flex items-center justify-center">
		<div class="bg-white py-4 px-10 shadow-2xl rounded-lg text-center">
			<h2 class="text-xl font-bold mb-2 text-gray-600">Sign up</h2>
			<form class="space-y-5" @submit.prevent="">
				<input
					class="input-field"
					type="text"
					v-model="user.firstname"
					placeholder="First Name"
					required
				/><input
					class="input-field"
					type="text"
					v-model="user.lastname"
					placeholder="Last Name"
					required
				/>
				<input
					class="input-field block"
					type="email"
					v-model="user.email"
					placeholder="Email"
					required
				/>
				<input
					class="input-field"
					type="username"
					v-model="user.username"
					placeholder="Username"
					required
				/>
				<input
					class="input-field"
					type="password"
					v-model="user.password"
					placeholder="Password"
					required
				/>
				<input
					class="input-field"
					type="password"
					v-model="user.retype_password"
					placeholder="Retype Password"
					required
				/>

				<button class="input-button" type="submit" @click="addUser">
					Sign up
				</button>
				<nuxt-link to="/account/login">Login</nuxt-link>
			</form>
		</div>
	</div>
</template>
<script>
import axios from "axios";
export default {
	data() {
		return {
			user: {
				firstname: "",
				lastname: "",
				email: "",
				username: "",
				password: "",
				retype_password: "",
			},
		};
	},
	methods: {
		async addUser() {
			await axios.post("http://localhost:3000/api/user", this.user);
			console.log(this.user);
		},
	},
};
</script>
<style scoped>
.input-field {
	@apply block border-2 border-gray-400 p-2 rounded outline-none;
	@apply focus:border-blue-700;
	@apply transition duration-300;
}
.input-button {
	@apply w-full block text-center bg-yellow-400 p-3 rounded-lg text-purple-900;
	@apply hover:bg-yellow-500;
	@apply transition duration-300;
}
</style>
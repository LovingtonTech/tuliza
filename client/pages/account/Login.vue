<template>
	<div class="min-h-screen bg-blue-300 flex items-center justify-center">
		<div class="bg-white py-4 px-10 shadow-2xl rounded-lg text-center">
			<h2 class="text-xl font-bold mb-2 text-gray-600">Login</h2>
			<form class="space-y-5" @submit.prevent="">
				<input
					class="input-field"
					type="text"
					v-model="username"
					placeholder="Username"
					required
				/>
				<input
					class="input-field"
					type="password"
					v-model="password"
					placeholder="Password"
					required
				/>
				<div class="flex block items-center gap-4">
					<input type="checkbox" name="remember_me" id="remember_me" />
					<label for="remember_me">Remember me</label>
				</div>
				<button class="input-button" type="submit">Login</button>
				<nuxt-link to="/account/signup">Sign up</nuxt-link>
			</form>
		</div>
	</div>
</template>
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
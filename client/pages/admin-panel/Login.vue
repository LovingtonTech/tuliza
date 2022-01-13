<template>
	<div class="min-h-screen bg-blue-300 flex items-center justify-center">
		<div class="bg-white py-4 px-10 shadow-2xl rounded-lg">
			<h2 class="text-xl font-bold mb-2 text-gray-600">Admin Login</h2>
			<form class="space-y-5" action="">
				<div class="input-field">
					<label class="" for="username">First Name</label
					><input
						class=""
						type="text"
						name="username"
						id="username"
						placeholder="Username"
					/>
				</div>
				<div class="input-field">
					<label class="" for="password">First Name</label
					><input
						class=""
						type="password"
						name="password"
						id="password"
						placeholder="Password"
					/>
				</div>
				<div class="flex items-center w-full gap-4">
					<input type="checkbox" name="remember_me" id="remember_me" />
					<label for="remember_me">Remember me</label>
				</div>
				<div class="input-field">
					<button class="" type="submit">Login</button>
				</div>
			</form>
		</div>
	</div>
</template>
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
	@apply w-full bg-yellow-400 p-3 rounded-lg text-purple-900;
	@apply hover:bg-yellow-500;
	@apply transition duration-300;
}
</style>
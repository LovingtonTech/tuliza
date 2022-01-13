<template>
	<nav
		class="flex items-center bg-gray-800 p-3 flex-wrap text-white sticky top-0"
	>
		<router-link
			to="/"
			class="
				p-2
				mr-4
				inline-flex
				items-center
				font-bold
				tracking-wide
				uppercase
			"
		>
			<span class="">Tuliza</span>
		</router-link>
		<button
			class="inlin-flex p-3 hover:bg-gray-900 rounded sm:hidden ml-auto"
			v-on:click="toggleResponsive"
		>
			<fa icon="bars"></fa>
		</button>
		<div class="nav-bar w-full sm:w-auto sm:inline-flex sm:flex-grow" id="nav">
			<div
				class="sm:inline-flex sm:flex-row sm:ml-auto hidden"
				:class="{ responsive: dropdown }"
			>
				<router-link class="nav-link" to="/">Home</router-link>
				<router-link class="nav-link" to="/services">Services</router-link>
				<router-link class="nav-link" to="/book">Book</router-link>
				<router-link class="nav-link" to="/contacts">Contact Us</router-link>
				<router-link class="nav-link" to="/about">About</router-link>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: "NavBar",
	created() {
		//window.addEventListener("resize", this.checkScreenSize);
		//window.addEventListener("resize", this.resetDropdown);
		//window.addEventListener("scroll", this.resetDropdown);

		this.checkScreenSize;
	},
	mounted() {
		const links = document.querySelectorAll("a");
		links.forEach((link) => link.addEventListener("click", this.resetDropdown));
	},
	data() {
		return {
			dropdown: false,
			mobileMode: false,
		};
	},
	methods: {
		resetDropdown() {
			this.dropdown = false;
			console.log("dropdown: false");
		},
		toggleResponsive() {
			this.dropdown = !this.dropdown;
			console.log("Change " + this.dropdown);
		},
		checkScreenSize() {
			if (window.innerWidth <= 700) {
				this.mobileMode = true;
			} else {
				this.dropdown = false;
			}
		},
	},
};
</script>

<style scoped>
.nav-link {
	@apply sm:inline-flex sm:w-auto sm:px-3 sm:py-2 py-1 rounded w-full text-center;
	@apply hover:bg-gray-900 hover:text-white;
}

.responsive {
	@apply flex flex-col !important;
}
</style>

<!--style scoped>
.navbar {
	position: relative;
	background: grey;
	display: flex;
	justify-content: space-between;
	align-content: center;
	top: 0;
	width: 100%;
	padding: 10px;
}
.navbar .nav-brand {
	left: 0px;
	display: flex;
}
.navbar .nav-brand p {
	color: white;
	font-weight: bold;
	font-size: 1.5rem;
	padding: 10px;
}
.navbar .nav-items {
	display: flex;
}
.navbar a {
	padding: 10px;
	text-decoration: none;
	color: white;
}
.navbar .nav-toggle {
	display: none;
	color: white;
	right: 0px;
}
.navbar .nav-toggle i {
	font-size: 1.5rem;
	padding: 10px;
}

@media (max-width: 700px) {
	.navbar {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		background: grey;
	}
	.navbar .nav-items a {
		width: 100%;
		text-align: center;
	}

	.navbar .nav-items {
		background: grey;
		flex-direction: column;
		align-items: center;
		width: 100%;
		display: none;
	}

	.navbar .nav-toggle {
		display: flex;
		position: absolute;
	}
	.navbar .responsive {
		display: flex;
	}
}
</style-->
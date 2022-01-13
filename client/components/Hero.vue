<template>
	<section id="hero" class="text-center min-h-screen p-32 items-center">
		<!--img class="" src="../assets/long-hair-back.jpg" /-->
		<h1
			class="
				font-bold
				text-4xl
				bg-clip-text
				text-transparent
				bg-gradient-to-r
				from-blue-500
				to-pink-800
			"
		>
			Beauty and Glamor?
		</h1>
		<p
			class="
				text-xl
				mt-2
				bg-clip-text bg-gradient-to-r
				from-blue-500
				to-red-600
			"
		>
			...We've got you covered.
		</p>

		<div class="mt-10 space-x-4">
			<a
				class="
					py-4
					px-8
					bg-gray-300
					text-gray-800
					rounded-lg
					hover:bg-gray-400 hover:text-gray-900
					transition
					duration-300
				"
				href="./book"
				>Show More</a
			><a
				class="
					py-4
					px-8
					bg-blue-600
					text-white
					rounded-lg
					hover:bg-blue-800
					duration-300
				"
				href="./book"
				>Book Now</a
			>
		</div>
	</section>
</template>

<script>
export default {
	name: "Hero",
};
</script>

<style scoped>
#hero {
	background: url("../static/pexels-ray-piedra-1502219.jpg");
	background-size: cover;
}
/**
.hero {
	position: relative;
	margin: auto;
}
.hero img {
	width: 100%;
}
.hero .hero-text {
	position: absolute;
	text-align: center;
	width: 100%;
	top: 50%;
	text-shadow: 7px 5px 4px grey;
} */
</style>
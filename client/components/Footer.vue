<template>
	<div
		class="
			footer
			flex-col
			m-auto
			w-full
			bg-blue-300
			p-4
			justify-center
			text-center
		"
	>
		<div class="social flex-col">
			<a href="#"><fa :icon="['fab', 'facebook']"></fa></a>
			<a href="#"><fa :icon="['fab', 'twitter']"></fa></a>
			<a href="#"><fa :icon="['fab', 'instagram']"></fa></a>
			<a href="#"><fa :icon="['fab', 'pinterest']"></fa></a>
		</div>
		<div class="copyright">
			<p>Lovington<sup>&trade;</sup> 2021<sup>&copy;</sup></p>
		</div>
	</div>
</template>

<script>
export default {
	name: "Footer",
};
</script>
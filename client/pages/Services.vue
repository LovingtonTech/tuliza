<template>
	<div class="services">
		<h1>Services</h1>
		<div class="services-list flex justify-center flex-wrap">
			<ServiceCard v-for="n in 20" :key="n" />
		</div>
	</div>
</template>

<script>
import ServiceCard from "../components/ServiceCard.vue";
export default {
	components: {
		ServiceCard,
	},
};
</script>

<style scoped>
</style>
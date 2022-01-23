<template>
	<div>
		<h2>Appointments</h2>
		<table>
			<tr>
				<th>ID</th>
				<th>USERNAME</th>
				<th>PHONE</th>
				<th>SERVICES</th>
				<th>APPOINTMENT DATE</th>
				<th>BOOKING DATE</th>
			</tr>
			<tr v-for="appointment in appointments" :key="appointment._id">
				<td>{{ appointment._id }}</td>
				<td>{{ appointment.username }}</td>
				<td>{{ appointment.phone }}</td>
				<td>
					<p v-for="service in appointment.service" :key="service._id">
						{{ service }}
					</p>
				</td>
				<td>{{ appointment.date }}</td>
				<td>{{ appointment.booking_date }}</td>
			</tr>
		</table>
	</div>
</template>
<script>
import TulizaService from "../../services/TulizaService";
export default {
	mounted() {
		TulizaService.getAppointments().then((results) => {
			this.appointments = results.data;
			console.log(results);
		});
	},
	data() {
		return {
			appointments: [],
		};
	},
};
</script>
<style scoped>
table {
	width: 100%;
	border-collapse: collapse;
}
th,
td {
	border: 1px solid #dddddd;
	padding: 8px;
}
tr:nth-child(even) {
	background: #dddddd;
}
</style>
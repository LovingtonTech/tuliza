import axios from "axios";
import appointment from "../../server/api/models/appointment";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getAppointments() {
    return apiClient.get("/appointments");
  },
  postAppointment(appointment) {
    return apiClient.post("/appointments", appointment);
  },
};

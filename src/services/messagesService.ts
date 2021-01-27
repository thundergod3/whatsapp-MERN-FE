import axios from "axios";

const messagesService = axios.create({
	baseURL: "http://localhost:8080",
});

export default messagesService;

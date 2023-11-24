import axios from "./axios";
import Swal from "sweetalert2";

const loginApi = (username, password) => {
    return axios.post("/Auth/login", { username, password });
}

export { loginApi };
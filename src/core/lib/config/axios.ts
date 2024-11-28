import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://core-financiero-backend.onrender.com/test/test',
});

export default axiosInstance;

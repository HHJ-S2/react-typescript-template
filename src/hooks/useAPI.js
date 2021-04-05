import axios from 'axios';
// import { useCookies } from 'react-cookie';

const useAPI = () => {
	// const [cookies, setCookie, removeCookie] = useCookies();
	// const idToken = cookies.id_token;
  const TOKEN = '';

	const API = axios.create({
		baseURL: process.env.REACT_APP_API_URL,
		headers: {
			Authorization: TOKEN,
		},
	});

	const list = {
		item: (params) => API.get(`/list`, { params }),
	};

	return [{
		API,
		list,
	}];
};

export default useAPI;

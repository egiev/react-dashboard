import axios from 'axios';

export const fetchUserSuccess = (users) => {
	return {
		type: 'FETCH_USER',
		users
	}
}

export const fetchUser = (url) => {
	return (dispatch) => {
		axios.get(url)
		.then((res) => {
			dispatch(fetchUserSuccess(res.data.data));
			console.log('Fetching data....')
		})
		.catch((res) => {
			console.log(res)
		})
	}
}

export const addUser = (url, user) => {
	console.log('Adding user...');
	return (dispatch) => {
		axios.post(url, user)
		.then((res) => {
			console.log('Added user...');
			dispatch(fetchUserSuccess(res.data.data));
		})
		.catch((res) => {
			console.log('Error adding user..');
		});
	}
}

export const deleteUser = (url) => {
	console.log('Deleting user....');
	console.log(url);
	return (dispatch) => {
		axios.delete(url)
		.then((res) => {
			console.log(res);
			dispatch(fetchUserSuccess(res.data.data));
		})
		.catch((res) => {
			console.log('Error deleting user...')
		});
	}
}
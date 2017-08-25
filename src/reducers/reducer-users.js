export function users(state=null, action) {
	switch(action.type){
		case 'FETCH_USER':
			return action.users
		break;
	}
	return state
}
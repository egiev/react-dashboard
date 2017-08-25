import { combineReducers } from 'redux';

import { users } from './reducer-users';

const rootReducer = combineReducers({
	users
});

export default rootReducer
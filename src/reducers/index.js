import { combineReducers } from 'redux';
import  AuthReducer  from './AuthReducer';
//Combine reducer we can define all the reducers
export default combineReducers({
 auth: AuthReducer
});

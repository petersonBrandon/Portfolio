import { combineReducers } from "redux";

// TODO: Import all other reducers
import windowReducer from './windowReducer';

const rootReducer = combineReducers({
    // TODO: Set all reducers
    activeWindow: windowReducer
});

export default rootReducer;
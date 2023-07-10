import {combineReducers} from 'redux';
import cartreducer from '../reducers/reducer';
const rootReducer = combineReducers({
cart:cartreducer,
}

)
export default rootReducer;

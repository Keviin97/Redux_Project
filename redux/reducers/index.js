import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducers from './post';

const rootReducer = combineReducers({
  form: formReducer,
  reducers
})

export default rootReducer;
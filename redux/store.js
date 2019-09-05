import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/post';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    posts: []
}

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store;
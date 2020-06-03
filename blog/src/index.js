import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware} from 'redux';
import App from './components/App';
import reducers from './reducers';
// import combineReducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers,applyMiddleware(thunk));

ReactDOM.render(
    // <Provider store={createStore(combineReducers)}>
    <Provider store={store}>
        <App />
    </Provider>,


    document.getElementById('root'));


import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import authReducer from '../reducers/auth'
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer,
            auth: authReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
};


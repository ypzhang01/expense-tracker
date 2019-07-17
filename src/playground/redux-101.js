import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 2 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    }
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy
    }
};

const setCount = ({ count = 0 } = {}) => {
    return {
        type: 'SET',
        count
    }
};

const resetCount = () => {
    return {
        type: 'RESET',
        count: 0
    }
};
// Reducer 1.pure function 2.never change state or action
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: action.count
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);


store.subscribe(() => {
    console.log(store.getState());
});

// action 
//increment
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 111 }));

store.dispatch(setCount({ count: 123 }));

import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// add expense
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
});

// remove expense
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// edit expense
const editExpense = (id, updates = {}) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map(expense => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

// edit filter
const setTextFilter = (updatedText = '') => ({
    type: 'SET_TEXT',
    updatedText
});

// sort by amount
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});

// sort by date
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});

//set start date
const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

// set end date
const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

//filter reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return {
                ...state,
                text: action.updatedText
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.sortBy
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.sortBy
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};

// get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter(expense => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return b.createAt - a.createAt;
        } else if (sortBy === 'amount') {
            return b.amount - a.amount
        }
    });
};
// store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent and', amount: 1000, createAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 40000, createAt: 1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseOne.expense.id, { amount: 7900 }));

// store.dispatch(setTextFilter(''));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(1250));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(125));

const demoState = {
    expenses: [{
        id: 'adfdaf',
        description: 'Jan rent',
        note: 'final payment for that address',
        amount: 65000,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};
// edit filter
export const setTextFilter = (updatedText = '') => ({
    type: 'SET_TEXT',
    updatedText
});

// sort by amount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});

// sort by date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});

//set start date
export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

// set end date
export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

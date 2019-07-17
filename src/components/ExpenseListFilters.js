import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
    state = {
        calenderFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange = (calenderFocused) => {
        this.setState(() => ({ calenderFocused }))
    }
    render() {
        return (
            <div>
                <input type='text' value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value))
                }} />
                <select onChange={(e) => {
                    if (e.target.value === 'date') {
                        this.props.dispatch(sortByDate())
                    } else if (e.target.value === 'amount') {
                        this.props.dispatch(sortByAmount())
                    }
                }} value={this.props.filters.sortBy}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import selectExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'

const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{expensesTotal}</span>
                </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const selectedExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: selectedExpenses.length,
        expensesTotal: numeral(expensesTotal(selectedExpenses) / 100).format('$0,0.00')
    }
}

export default connect(mapStateToProps)(ExpensesSummary)
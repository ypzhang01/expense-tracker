import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'

const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    return (
        <div>
            <p>
                Viewing {expenseCount} {expenseWord} totalling {expensesTotal}
            </p>
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
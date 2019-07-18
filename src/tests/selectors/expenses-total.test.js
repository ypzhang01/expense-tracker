import getExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should get expenses total amount', () => {
    const result = getExpensesTotal(expenses)
    expect(result).toBe(12500)
})

test('should return 0 if no expenses', () => {
    const result = getExpensesTotal([])
    expect(result).toBe(0)
})

test('should get correct add up a single expense', () => {
    const result = getExpensesTotal([expenses[0]])
    expect(result).toBe(200)
})
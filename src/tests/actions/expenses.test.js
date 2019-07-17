import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

test('should setup remove expense action', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action', () => {
    const action = editExpense('123abc', { note: 'new note value' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'new note value' }
    })
})

test('should setup add expense action with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 3435,
        createAt: 1000000,
        note: 'this was rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup add expense action with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createAt: 0,
            id: expect.any(String)
        }
    })
})
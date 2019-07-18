export default (expenses) => {
    return expenses.map(expense => expense.amount).reduce((x, y) => x + y, 0)
}
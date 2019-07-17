import moment from 'moment'
import { setStartDate, setEndDate, setTextFilter } from '../../actions/filters'

test('should generate set start data action', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end date action obj', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate set text filter action with given values', () => {
    const action = setTextFilter('test')
    expect(action).toEqual({
        type: 'SET_TEXT',
        updatedText: 'test'
    })
})

test('should generate set text filter action with default values', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT',
        updatedText: ''
    })
})


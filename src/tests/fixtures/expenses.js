import moment from 'moment'

export default [{
    id: '1',
    description: 'water',
    note: '',
    amount: 200,
    createAt: 0
}, {
    id: '2',
    description: 'phone',
    note: '',
    amount: 8900,
    createAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    description: 'metro',
    note: '',
    amount: 3400,
    createAt: moment(0).add(4, 'days').valueOf()
}]
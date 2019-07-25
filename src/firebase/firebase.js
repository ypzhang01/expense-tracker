import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
} 
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }
// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []
//         snapshot.forEach(expense => {
//             expenses.push({
//                 id: expense.key,
//                 ...expense.val()
//             })
//         })
//         console.log(expenses)
//     })
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach(expense => {
//         expenses.push({
//             id: expense.key,
//             ...expense.val()
//         })
//     })
//     console.log(expenses)
// })
// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'none',
//     amount: 49000,
//     createAt: 0
// })
// const onValueChange = database.ref().on('value', (snapshot) => {
//     const result = snapshot.val()
//     console.log(`${result.name} is a ${result.job.title} at ${result.job.company}`)
// }, (e) => {
//     console.log('Error with data fetching', e)
// })



// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
// })

// database.ref().set({
//     name: 'jason',
//     age: 29,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Melbourne',
//         country: 'Australia'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log('This failed.', e)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Sydney'
// }).then(() => {
//     console.log('Data updated')
// }).catch((e) => {
//     console.log('update failed.', e)
// })

// database.ref('isSingle').remove().then(() => {
//     console.log('isSingle is removed')
// }).catch((e) => {
//     console.log('Failed.', e)
// })
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('this is my resolved data')
        reject('some went wrong')
    }, 1500)
})

promise.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})
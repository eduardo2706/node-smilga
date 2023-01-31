/*
const { readFile, writeFile } = require('fs')
console.log('start')

readFile('../content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
    }
    const first = result

    readFile('../content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
        }
        const second = result
        writeFile('../content/result.txt', `Here is the result: ${first} , ${second}`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('done')
        })
    })

})

  */
const { readFile, writeFile } = require('fs')
const { reject } = require('lodash')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(data)
        })
    })
}

// getText('../content/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))



const start = async () => {
    try {
        const first = await getText('../content/first.txt')
        const second = await getText('../content/second.txt')
        console.log(first , second)
    } catch (error) {
        console.log(error);
    }
}

start()

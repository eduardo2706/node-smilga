/*

const { readFile, writeFile } = require('fs')
const  util  = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


const start = async() => {
    try {
        const first = await  readFilePromise('../content/first.txt', 'utf8')
        const second = await readFilePromise('../content/second.txt', 'utf8')
   
        await writeFilePromise(
            '../content/result-mind-grenade.txt', `This is awesome: ${first} ${second}`)
            
    } catch (error) {
        console.log(error);
    }
}


start()



const { readFile, writeFile } = require('fs').promises

const start = async () => {
    try {
        const first = await readFile('../content/first.txt', 'utf8')
        const second = await readFile('../content/second.txt', 'utf8')
        await writeFile('../content/result-mind-grenade.txt', `This is awesome: ${first} ${second}`, {flag: 'a'})
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}
start()

*/



const { readFile, writeFile } = require('fs').promises

const start=async () => {
    try
   { const first = await readFile('../content/first.txt', 'utf8')
    const second = await readFile('../content/second.txt', 'utf8')
    await writeFile('../content/mifile.txt', `Este el el nuevo archivo: ${first} ${second}`, {flag:'a'})}
    catch(error) {
        console.log(error);
    }
}

start()





















// const getText= (path) =>{
//     return new Promise ((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data)=> {
//             if (err) {
//                 reject(err)
//                 return
//         }
//         resolve(data)
//         })
//     })
// }
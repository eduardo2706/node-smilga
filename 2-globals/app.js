console.log(__dirname, 'hello')

let count = 0
setInterval(() => {
  console.log('hello world '+ count)
   count= count + 1
}, 1000)
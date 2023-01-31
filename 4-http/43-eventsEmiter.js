const EventEmitter= require('events')
const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=>{
    console.log(`data recieved user ${name} with id: ${id}`)
    console.log('aqui toy');
})

customEmitter.on('response', ()=>{
    console.log('otra');
})


customEmitter.emit('response', 'Eduardo', 20)
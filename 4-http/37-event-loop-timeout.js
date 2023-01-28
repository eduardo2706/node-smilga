console.log('primero')
setTimeout(() => {
    console.log('segundo');
}, 0);
console.log('tercero');

setInterval(()=>{
    console.log('hello')
}, 1000)
console.log('terminado');
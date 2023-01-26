const os = require('os')

// info about current user

const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds

console.log(`The system Uptime is ${os.uptime()} seconds`);


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem()/1000,
    freeMem: os.freemem()/1000
}
console.log(currentOS);
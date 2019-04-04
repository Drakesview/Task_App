require('../src/db/mongoose')
const User = require('../src/models/user')

//5ca4993dd62c6734c877def8

User.findByIdAndUpdate('5ca49a222279a31200dea490', { age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({age: 1})
}).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})


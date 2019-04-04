require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5c9e38751d0e0847284f1ed3').then((task) => {
    console.log(task)
    return Task.countDocuments({completed:false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
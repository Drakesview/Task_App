require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5c9e38751d0e0847284f1ed3').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('5cab1a64940722381485d04d').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
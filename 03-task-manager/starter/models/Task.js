const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
  name:String, comleted:Boolean
})

module.exports = mongoose.model('Task', TaskSchema)
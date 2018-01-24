var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test')
var Schema = mongoose.Schema

// Criando um Schema
var tagDataSchema = new Schema(
    {
        name: {type: String, required: true},
        date: {type: Date, default: Date.now}
    }, 
    {
        collection: 'tags'
    })
// Criando o Model. baseado no Schema
var TagData = mongoose.model('TagData', tagDataSchema)

function TagDao() {
    this._connection = TagData
}

TagDao.prototype.find = function(callback) {
    return this._connection.find()
}
TagDao.prototype.insert = function(name, callback) {
    let newTag = new TagData(name)
    newTag.save()
    return
}
TagDao.prototype.delete = function(name, callback) {
    this._connection.findOneAndRemove(name).exec()
    return
}

module.exports = function() {
    return TagDao
}

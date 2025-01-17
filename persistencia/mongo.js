var mongoose = require('mongoose')
var restify = require('restify-clients')

var instagram = restify.createJsonClient({
    url: 'https://api.instagram.com'
})
var access_token = '29073043.c0b5686.7d8c42cf7c4b41b6aa0741ccaf9f0b87'

mongoose.connect('mongodb://mikaheo:John1135@ds115758.mlab.com:15758/instgahashapi')
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

TagDao.prototype.findInsta = function(tagName, callback) {
    instagram.get('/v1/tags/'+tagName+'/media/recent?access_token='+access_token, function(error, req, res, retorno){
        result = retorno
    })
    return instagram
}
TagDao.prototype.find = function(callback) {
    return TagData
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

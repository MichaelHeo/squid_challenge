module.exports = function(app) {
    
    app.get('/find', function(req, res){
        
        let tagDao = new app.persistencia.mongo
        var result = tagDao.find({}).toArray(function(err, result){
            res.send(result);
        })
    
        res.status(200).send(result)

    })

    app.post('/insert', function(req, res){

        let newTagName = req.body
        let tagDao = new app.persistencia.mongo
        tagDao.insert(newTagName, function(erro){
            if(erro){
                console.log('Erro ao inserir no bd: ' + erro)
                res.status(400).send(erro)
            }
        })
        let response = {
            message: "Successfully insert"
        }
        res.status(201).json(response)
    })

    app.delete('/delete', function(req, res){

        let tagName = req.body
        let tagDao = new app.persistencia.mongo
        tagDao.delete(tagName, function(erro){
            if(erro){
                console.log('Erro ao inserir no bd: ' + erro)
                res.status(400).send(erro)
            }
        })
        let response = {
            message: "Successfully deleted"
        }
        res.status(204).json(response)
    })

}

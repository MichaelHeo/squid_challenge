module.exports = function(app) {
    
    app.get('/find', function(req, res){
        
        let tagDao = new app.persistencia.mongo
        let result = tagDao.find()
        result.find({}, function(err, tag){
            if(err){
                res.status(400).send(err)
            }
            res.status(200).json(tag)
        })

    })

    app.post('/find/instagram', function(req, res){
        
        let access_token = '29073043.c0b5686.7d8c42cf7c4b41b6aa0741ccaf9f0b87'
        let tagName = req.body
        let tagDao = new app.persistencia.mongo
        var insta = tagDao.findInsta()
        insta.get('/v1/tags/'+tagName.name+'/media/recent?access_token='+access_token, function(error, request, response, retorno){
            res.status(200).json(retorno)
        })
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
        console.log(tagName)
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

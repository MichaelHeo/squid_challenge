var app = require('./config/custom-express')() // Chama o module.exports do custom-expresso

app.listen(3001, function() {
    console.log('Conectado na porta 3001')
})
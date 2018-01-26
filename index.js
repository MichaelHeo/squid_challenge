var app = require('./config/custom-express')() // Chama o module.exports do custom-expresso

app.listen(process.env.PORT || 3000, function() {
    console.log('Conectado na porta 3000')
})

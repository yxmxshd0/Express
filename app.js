var express=require(`express`);
const router = require(`./api/v1/route`);
const {Autorization, BadRequest, Morgan,Helmet} = require('./api/v1/middleware');
const bodyParser=require('body-parser');
const config = require(`./config`)

var app=express();

app.use(express.static('public'))

app.use(Helmet)
app.use(Morgan)

app.use(bodyParser.text());
app.use(express.static('public'))


app.use('/api/v1', router); //уровень маршрутизатора
app.use(BadRequest) //уровень приложения



app.listen(config.PORT, config.HOST, (error) => {
    error?console.log(error):console.log(`Server listening to ${config.HOST}:${config.PORT}`)
})
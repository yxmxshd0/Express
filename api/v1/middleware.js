const morgan=require('morgan');
const helmet=require('helmet');

const Helmet=helmet();
const Morgan=morgan(':method :url :status :res[content-length] - :response-time ms');

function Validation(req, res, next) {
    const userInput = JSON.stringify(req.body);
    const regex = /[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    let af = regex.test(userInput[`id`,`name`,`Age`])
    if (af) {
        return res.send(400,'Неправильный формат ввода');
    }
    next();
}

function Autorization(req,res,next) {
    if (req.headers['api-key']!=='1234') 
        {
            res.send(400,'Неправильный ключ API')
        };
    next();
}



function BadRequest(req,res) {
    res.send(400,'Неправильный запрос');
}

module.exports = {
    BadRequest,
    Autorization,
    Validation,
    Helmet,
    Morgan
}
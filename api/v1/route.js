var express = require('express');
const { Validation } = require('./middleware');
var router = express.Router();


let comments = 
[
    {
        id:1,
        name:`Michael`,
        Age:21
    },
    {
        id:2,
        name:`Sara`,
        Age:21
    }
];


let users = {}

router.get('/stats', (req,res)=>
{
    let data = req.body
    const name = req.headers['user-agent']
    let firstHtml =
    `<meta charset="utf-8">
        <style>
            table tr td:first-child 
            {
                max-width: 200px;
                padding-right: 100px;
            }
        </style>` +
            `<table>`+
                '<tr>' +
                    '<td>Имя</td>' +
                    '<td>Счётчик</td>' +
                '</tr>'
    let secondHtml = ''
    if (users[name]) 
    {
        users[name] += 1
    }  
    else
    {
        users[name] = 1
    }
    for (const key in users) {
        secondHtml +=
				`<tr>
					<td>${key}</td>
					<td>${users[key]}</td>
				</tr>`
    }
    let resHtml = firstHtml + secondHtml + '</table>'
    res.send(resHtml);

})



router.get(`/comments`, function(req,res)
{
    res.send(comments);
})



router.post('/comments', Validation, function(req,res){
    let data = JSON.parse(req.body);
    if (data)
    {
        data.dateCreated = new Date();
        comments.push((data))
    }
    res.send(comments);    
})



module.exports = router;
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.render('index')
})

app.post('/uploadImg', (req, res)=>{
    console.log('passou por aqui')
})

app.get('/home', (req, res)=>{
    res.render('home.ejs')
})

app.post('/sendPost', (req, res) => {
    console.log('passou por aqui')
    console.log(req.body.body)
    console.log(req.body.title)
})

app.listen('3000', (err)=>{err?console.log(err):console.log('tudo ok')})


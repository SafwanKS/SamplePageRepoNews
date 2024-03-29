const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
let initial_path = path.join(__dirname, "public")
const fileupload = require('express-fileupload')

const app = express()
app.use(express.static(initial_path))
app.use(fileupload())
app.use(bodyParser.json())
const port = 3000

app.get('/', (req, res) =>{
  res.sendFile(path.join(initial_path, "home.html"))
})

app.get(`/login`, (req, res) =>{
    res.sendFile(path.join(initial_path, `login.html`))
})

app.get('/local-news', (req,res) =>{
  res.sendFile(path.join(initial_path, "category.html"))
})

app.get('/dashboard', (req, res) =>{
    res.sendFile(path.join(initial_path, "dashboard.html"))
})

app.get('/add-post', (req, res) =>{
    res.sendFile(path.join(initial_path, "editor.html"))
})
app.get('/special-stories', (req, res) =>{
    res.sendFile(path.join(initial_path, "category.html"))
})
app.get('/informations', (req, res) =>{
    res.sendFile(path.join(initial_path, "category.html"))
})
app.get('/jobs', (req, res) =>{
    res.sendFile(path.join(initial_path, "category.html"))
})
app.get('/sports', (req, res) =>{
    res.sendFile(path.join(initial_path, "category.html"))
})
app.get('/obituary', (req, res) =>{
    res.sendFile(path.join(initial_path, "category.html"))
})
app.get('/:blog', (req, res) =>{
    res.sendFile(path.join(initial_path, "blog.html"))
})

app.get('/:blog/editor', (req,res)=>{
    res.sendFile(path.join(initial_path, "editor.html"))
})

app.listen(port, ()=>{
  console.log(`listening to the ${port}.....`)
}) 
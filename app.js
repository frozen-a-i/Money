const dotenv = require('dotenv').config()

const express = require('express')
const jwt = require('jsonwebtoken')
const app = express();

app.use(express.json())

const port = process.env.PORT || 3000;

const posts = [
    {
        username: 'anna',
        title: 'post 1'
    }, {
        username: 'elsa',
        title: 'post 2'
    }
]
app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name))
    console.log(req.user.name)

})

app.post('/login', (req, res) => {
    //autenticate user
    const username = req.body.username
    const user = { name: username }
    console.log(username)

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })
})


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    // console.log(token)
    // Bearer TOKEN
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        console.log(user)
        req.user = user
        next()
    })

}


app.listen(port, () => {
    console.log(`listening on port ${port}`);
})


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

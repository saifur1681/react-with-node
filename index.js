const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('my smart node!!')
})

app.get('/user', (req, res) => {
    console.log('request', req.body)
    const user = req.body;
    users.id = users.length + 1;
    users.push(user);
    res.send(user)
})

const users = [
    { id: '1', name: 'John', email: 'john@gmail.com' },
    { id: '2', name: 'sadik', email: 'sadik@gmail.com' },
    { id: '3', name: 'haba', email: 'haba@gmail.com' },
    { id: '4', name: 'chalak', email: 'chalak@gmail.com' },
    { id: '5', name: 'goda', email: 'goda@gmail.com' },
    { id: '6', name: 'vagne', email: 'vagne@gmail.com' },
    { id: '7', name: 'celfieKing', email: 'celfieKing@gmail.com' },
    { id: '8', name: 'King', email: 'King@gmail.com' },
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/user/:id', (req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id)
    res.send(user)
})

app.listen(port, () => {
    console.log('listening to port', port)
})
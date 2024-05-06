const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.listen(3002, ()=>{
    console.log('Server is running on port 3002')
})

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'coincause',
})

app.post('/register', (req, res) =>{
    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password
    const sentRegType = req.body.RegType

    const SQL = 'INSERT INTO users (email, username, password, type) VALUES (?,?,?,?)'
    const Values = [sentEmail, sentUserName, sentPassword, sentRegType]

    db.query(SQL, Values, (err, results)=>{
        if(err){
            res.send(err)
        }
        else{
            console.log('User inserted successfully!')
            res.send({message: 'User added!'})
        }
    })
})

app.post('/login', (req, res) => {
    const sentLoginUserName = req.body.LoginUserName;
    const sentLoginPassword = req.body.LoginPassword;
    const sentLoginRegType = req.body.LoginRegType;

    const SQL = 'SELECT * FROM users WHERE username=? AND password=? AND type=?';
    const Values = [sentLoginUserName, sentLoginPassword, sentLoginRegType];

    db.query(SQL, Values, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            if (results.length > 0) {
                res.send(results);
            } else {
                console.log("Credentials don't match");
                res.send({ message: "Credentials don't match" });
            }
        }
    });
});


// app.post('/logindonor', (req, res)=>{
//     const sentLoginUserName = req.body.LoginUserName
//     const sentLoginPassword = req.body.LoginPassword
//     const sentLoginRegType = req.body.LoginRegType

//     const SQL = 'SELECT * FROM users WHERE username=? && password=? && type=?'
//     const Values = [sentLoginUserName, sentLoginPassword, sentLoginRegType]

//     db.query(SQL, Values, (err, results)=>{
//         if(err){
//             res.send(err)
//         }
//         if(results.length > 0){
//             res.send(results)
//         }
//         else{
//             console.log("Credentials don't match")
//             res.send({message: "Credentials don't match"})
//         }
//     })
// })

// app.post('/loginorg', (req, res)=>{
//     const sentLoginUserName = req.body.LoginUserName
//     const sentLoginPassword = req.body.LoginPassword
//     const sentLoginRegType = req.body.LoginRegType

//     const SQL = 'SELECT * FROM users WHERE username=? && password=? && type=?'
//     const Values = [sentLoginUserName, sentLoginPassword, sentLoginRegType]

//     db.query(SQL, Values, (err, results)=>{
//         if(err){
//             res.send(err)
//         }
//         if(results.length > 0){
//             res.send(results)
//         }
//         else{
//             console.log("Credentials don't match")
//             res.send({message: "Credentials don't match"})
//         }
//     })
// })
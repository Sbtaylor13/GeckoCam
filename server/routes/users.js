const express = require('express')
const router = express.Router()
const { users } = require('../models')
const bcrypt = require("bcrypt")
const { sign } = require("jsonwebtoken");

/*
- hashes password using bcrpt

- Insert the user into the database
INSERT INTO users (username, password)
VALUES (@username, @hashed_password);

(also contains token)
*/
router.post("/", async (req, res) =>{
    const {username, password} = req.body;
    bcrypt.hash(password, 15).then((hash) => {
        users.create({//add normal username to DB but hashed password
            username: username,
            password:  hash,
        })
        res.json("working")
    })
})
router.post("/login", async (req, res) => {
    const {username, password} = req.body;
    const user = await users.findOne({ where: {username: username}})
    if (!user){
        return res.json ({error: "Not Existing User"})
    } 
    else{
        bcrypt.compare(password, user.password).then((match) => {
            if (!match) return res.json({error: "wrong username and/or password"})
            const accessToken = sign(
                { username: user.username, id: user.id },
                "supersecrettoken"
              );
              return res.json(accessToken);
        })
    }
})

module.exports = router
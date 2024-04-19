const express = require('express')
const session = require('express-session')
const app = express()
const cors = require("cors");

app.use(session({
    secret: 'some secret',
    cookie: {maxAge: 30000},
    saveUninitialized: false,
}));

app.use(express.json())
app.use(cors())

const db = require('./models')

//Routers so front end can access api
const factRouter = require('./routes/fact_board');
app.use("/facts", factRouter);
const commentsRouter = require('./routes/comments');
app.use("/comments", commentsRouter);
const usersRouter = require('./routes/users');
app.use("/auth", usersRouter);
const likesRouter = require('./routes/likes');
app.use("/likes", likesRouter);
const chatRouter = require('./routes/chat');
app.use("/chat", chatRouter);

db.sequelize.sync().then(() =>{
    app.listen(3001, () => {
        console.log("server running on port 3001");
    
    });
});


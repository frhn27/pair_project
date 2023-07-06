const express = require('express')
const app = express()
const session = require('express-session')
const port = 3000

// const route = require("./routes/route")
const routeUser = require('./routes/userRoutes')

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended : true}))


app.use(session({
  secret: 'rahasia', // harus ada
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false ,
    sameSite : true , // untuk secuirty dari csrf attack
  }
}))


app.use(routeUser)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
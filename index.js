const express = require('express')
const app = express()
const port = 3000

// const route = require("./routes/route")
const routeUser = require('./routes/userRoutes')

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended : true}))
app.use(express.json())


app.use(routeUser)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require("express")
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.post("/login", (req, res) => {

        console.log(req.body.user)    
})


app.listen(port, () => console.log(`Server is listening on port ${port}`))
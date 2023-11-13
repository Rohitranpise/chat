const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
    res.send({ message: `hello server` })
})

app.listen(PORT, () => console.log(`server is running on the ${PORT}`))
const express = require("express");

const app = express()
const PORT = process.env.PORT || 3000

app.get("/", (_, res) => {
    return res.send("Hello World")
})

app.get("/chat", (_, res) => {
    res.send("Welcome To Chat")
})

app.get("/:id", (req, res) => {
    res.send(`Hello abhishek World ${req.params.id}`)
})


// Only listen if not in test
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is listening at PORT:${PORT}`)
    })
}

module.exports = app
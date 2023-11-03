const express = require("express")
const bodyparser = require("body-parser")
const mongoose = require("mongoose")





app = express()
port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => {
    console.log("connected data base");
})

const User = mongoose.model("User", { name: String, age: Number, location: String })

app.use(bodyparser.urlencoded())

app.listen(port, () => {
    console.log(`server started in port ${port}`);
})

app.get("/", function (req, res) {

    res.send("hello world")
})

app.post("/post-method", function (req, res) {
    res.send("this is post method")
})

app.put("/put-method", function (req, res) {
    res.send("this is a put method")
})


app.patch("/patch-method", function (req, res) {
    res.send("this is patch method")
})


app.post("/data-share", function (req, res) {

    const userData = new User()
    userData.name = req.body.Name
    userData.age = req.body.age
    userData.location = req.body.location

    userData.save().then((data) => {
        console.log("data", data);
    }).catch((err)=>{
        console.log(err);
    })

})
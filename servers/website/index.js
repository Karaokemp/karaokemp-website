const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const port = 80

app.use(express.static('public'))

app.post('/request', function(req, res) {
    let songRequest = req.body
    console.log(songRequest)
    res.sendFile(__dirname + '/public/requests.html')
    
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




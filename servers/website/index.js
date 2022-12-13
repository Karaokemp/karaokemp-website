const {CloudTasksClient} = require('@google-cloud/tasks');
const url = require('url')
const client = new CloudTasksClient();

project = "karaokemp-website",
  queue = 'video-requests', // Name of your Queue
  location = 'europe-west1', // The GCP region of your queue
  VIDEO_SERVER_URL = 'https://video-server-sch5ny6pxq-ew.a.run.app'
  const parent = client.queuePath(project, location, queue);

const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.urlencoded({ extended: true }));
const port = 80

app.use(express.static('public'))

app.post('/request', function(req, res) {
    let songRequest = req.body
    let requester = songRequest.requester
    const songURLObject = url.parse(songRequest.song_url, true).query;
    videoID = songURLObject.v
    videoServerRequestURL = VIDEO_SERVER_URL + "/?video_id=" + videoID + "&requester=" + requester
    console.log(videoServerRequestURL)
    const task = {
      httpRequest: {
        headers: {
          'Content-Type': 'text/plain',
        },
        httpMethod: 'POST',
        videoServerRequestURL,
      },
    };
    const taskRequest = {parent: parent, task: task};
    client.createTask(taskRequest).then(response=>{
      console.log(response)
    })



    res.sendFile(__dirname+'/public/index.html')
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




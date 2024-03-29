const {CloudTasksClient} = require('@google-cloud/tasks');
const storage = require('./services/storage')

const url = require('url')
const client = new CloudTasksClient();

let processingSongs = []



project = "karaokemp-website",
  queue = 'video-requests', // Name of your Queue
  location = 'europe-west1', // The GCP region of your queue
  VIDEO_SERVER_URL = 'https://video-server-sch5ny6pxq-ew.a.run.app'
  CLEAN_PROCESSING_TIME = 60000
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
    videoServerRequestURL = `https://video-server-sch5ny6pxq-ew.a.run.app/youtube_video?video_id=${videoID}&requester=${requester}`
    const task = {
      httpRequest: {
        headers: {
          'Content-Type': 'text/plain',
        },
        httpMethod: 'PUT',
        url: videoServerRequestURL,
      },
    };
    const taskRequest = {parent: parent, task: task};
    client.createTask(taskRequest).then(response=>{
      
      console.log(response)
    }).catch(e=>{
      console.log(e)
    })

    newProcessingSong = {
      title: songRequest.song_url,
      url: songRequest.song_url,
      requester: requester
    }

    processingSongs.push(newProcessingSong)

    res.sendFile(__dirname+'/public/index.html')
    setTimeout(()=>{
      processingSongs = []
    },CLEAN_PROCESSING_TIME)
});

app.get('/karaoke-songs', function(req, res) {
  storage.getKaraokeSongs().then(songs=>{
    songs.push(...processingSongs)
    res.json(songs)
  })

});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




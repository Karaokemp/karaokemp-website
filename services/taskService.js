// Imports the Google Cloud Tasks library.
const {CloudTasksClient} = require('@google-cloud/tasks');

// Instantiates a client.
const client = new CloudTasksClient();

   const project = 'karaokemp-website';
   const queue = 'song-requests';
   const location = 'europe-west3';
   const payload = 'hello';

  const parent = client.queuePath(project, location, queue);

  const task = {
    appEngineHttpRequest: {
      httpMethod: 'POST',
      relativeUri: '/log_payload',
    },
  };

  if (payload) {
    task.appEngineHttpRequest.body = Buffer.from(payload).toString('base64');
  }

  const request = {
    parent: parent,
    task: task,
  };

  console.log('Sending task:');
  console.log(task);
  // Send create task request.
  const response = client.createTask(request);
  const name = response.name;
  console.log(`Created task ${name}`)
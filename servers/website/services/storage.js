const {Storage} = require('@google-cloud/storage');
const storage = new Storage();

BUCKET_NAME = 'karaokemp-karaoke-songs'

const bucket = storage.bucket(BUCKET_NAME)


 async function getKaraokeSongs(){
    let files = await bucket.getFiles()
    return files[0].map(file=>{
        return {
            name: file.name,
            title: file.metadata.metadata.title,
            requester: file.metadata.metadata.requester
        }
    })
}

module.exports = { getKaraokeSongs};

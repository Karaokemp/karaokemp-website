const {Firestore} = require('@google-cloud/firestore');

async function test() {
    const snapshot = await firestore().collection('song-requests').get()
    return snapshot.docs.map(doc => doc.data());
}
test().then(data=>{
    console.log(data)
}).catch(err=>{
    console.error(err)
})
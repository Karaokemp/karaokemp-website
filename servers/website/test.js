const {Firestore} = require('@google-cloud/firestore');

async function test() {
    const snapshot = await firebase.firestore().collection('events').get()
    return snapshot.docs.map(doc => doc.data());
}
test.then(data=>{
    console.log(data)
})
from google.cloud import firestore
db = firestore.Client(project="karaokemp-website")
songs_collection_ref = db.collection('song-requests')

def create(song_request):
    update_time,song_request_ref = songs_collection_ref.add(song_request)
    print(f'created song request: {song_request} on: {update_time}')  
    return update_time

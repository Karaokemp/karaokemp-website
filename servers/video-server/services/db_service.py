from google.cloud import firestore
db = firestore.Client(project="karaokemp-website2")
songs_collection_ref = db.collection('karaoke-songs')
song ={'title':'Song 2', 'youtube_video_id':'aaaaa'}
update_time,song_ref = songs_collection_ref.add(song)
print(update_time)  


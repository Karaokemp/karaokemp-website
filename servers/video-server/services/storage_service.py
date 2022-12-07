from google.cloud import storage

bucket_name = "karaokemp-karaoke-songs"
source_file_name = '../media/Song2.mp4'
destination_blob_name = "Song2"
storage_client = storage.Client()
bucket = storage_client.bucket(bucket_name)
blob = bucket.blob(destination_blob_name)
print(bucket.path)
# blob.upload_from_filename(source_file_name)
# print(f"File {source_file_name} uploaded to {destination_blob_name}.")

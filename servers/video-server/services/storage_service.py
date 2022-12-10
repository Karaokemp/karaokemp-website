from google.cloud import storage
import os

bucket_name = "karaokemp-karaoke-songs"
bucket_url = 'https://storage.cloud.google.com/karaokemp-karaoke-songs'
storage_client = storage.Client()
bucket = storage_client.bucket(bucket_name)

def upload(file_path):
        
    filename = file_path.rsplit(os.path.sep, 1)[-1]
    blob = bucket.blob(filename)
    blob.upload_from_filename(file_path)

    print(f'uploaded {filename}')
    return f'{bucket_url}/{filename}'


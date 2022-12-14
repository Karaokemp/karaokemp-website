import os
import youtube_dl
from slugify import slugify

TEMP_FILE_DIR = 'media'
TEMP_FILE_NAME = 'new.mp4'
TEMP_FILE_PATH = f'{TEMP_FILE_DIR}{os.path.sep}{TEMP_FILE_NAME}'



def my_hook(d):
    if d['status'] == 'finished':
        print('Done downloading, now converting ...')

ydl_opts = {

    'outtmpl': TEMP_FILE_PATH,        
    'noplaylist' : True,        
    'progress_hooks': [my_hook],  
}

def download(video_id):

    print(f'downloading {video_id} ...')
    url = f'http://www.youtube.com/watch?v={video_id}'
    with youtube_dl.YoutubeDL(ydl_opts) as ydl:
        if os.path.exists(TEMP_FILE_PATH):
            os.remove(TEMP_FILE_PATH)
        video_info = ydl.extract_info(url, download=True)
        video_title = video_info.get('title', None)
        video_extention = video_info.get('ext', None)
        filename = f'{slugify(video_title)}.{video_extention}'
        file_path = f'{TEMP_FILE_DIR}{os.path.sep}{filename}'
        if os.path.exists(file_path):
            os.remove(file_path)
        os.rename(TEMP_FILE_PATH,file_path)

        print(f'Downloaded: {filename}')


    return video_title, file_path
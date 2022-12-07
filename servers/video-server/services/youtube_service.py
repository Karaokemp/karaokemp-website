from __future__ import unicode_literals
import youtube_dl



def my_hook(d):
    if d['status'] == 'finished':
        print('Done downloading, now converting ...')

ydl_opts = {

    'outtmpl': 'media/new.mp4',        
    'noplaylist' : True,        
    'progress_hooks': [my_hook],  
}

def download(video_id):

    print(f'downloading {video_id} ...')
    url = f'http://www.youtube.com/watch?v={video_id}'
    with youtube_dl.YoutubeDL(ydl_opts) as ydl:
        video_info = ydl.extract_info(url, download=True)
        video_title = video_info.get('title', None)
        video_extention = video_info.get('ext', None)
        print(video_extention)


    return video_title
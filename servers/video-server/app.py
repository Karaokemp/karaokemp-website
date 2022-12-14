from flask import Flask, render_template,request
import os
from services.youtube_service import download as download_youtube_video
from services.storage_service import upload
from services.db_service import create as create_db_document

app = Flask(__name__)

app = Flask(__name__, static_url_path='/templates')
@app.route('/')
def home():
    return render_template('index.html')

@app.route("/youtube_video", methods=["PUT"])
def put_youtube_video():
    video_id = request.args.get('video_id')
    requester = request.args.get('requester')
    
    print(f'{requester} requests to put youtube video id: {video_id}')
    video_title, video_path = download_youtube_video(video_id=video_id)
    video_url = upload(video_path)
    song_request = {
        'song_title':video_title,
        'youtube_video_id': video_id,
        'video_url': video_url,
        'requester': requester
    }
    update_time = create_db_document(song_request)
    print(song_request)
    return song_request


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 80))
    app.run(debug=True, host='0.0.0.0', port=port)
from flask import Flask, render_template
import os
from services.youtube_service import download as download_youtube_video

app = Flask(__name__)

app = Flask(__name__, static_url_path='/templates')
@app.route('/')
def home():
    return render_template('index.html')

@app.route("/youtube_video/<video_id>", methods=["PUT"])
def put_youtube_video(video_id):

    print(f'request to put youtube video id: {video_id}')
    video_title = download_youtube_video(video_id=video_id)
    return f'Downloaded: {video_title}'


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 80))
    app.run(debug=True, host='0.0.0.0', port=port)
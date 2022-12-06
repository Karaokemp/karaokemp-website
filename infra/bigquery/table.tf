resource "google_bigquery_table" "song_requests" {
  dataset_id = google_bigquery_dataset.main.dataset_id
  project = local.project
  table_id   = "song-requests"
  deletion_protection=false

  time_partitioning {
    type = "DAY"
  }

  schema = <<EOF
[
  {
    "name": "video_id",
    "type": "STRING",
    "mode": "Required",
    "description": "Youtube Video ID"
  },
  {
    "name": "youtube_title",
    "type": "STRING",
    "mode": "Required",
    "description": "Youtube Video Title"
  },
  {
    "name": "requester_name",
    "type": "STRING",
    "mode": "Nullable",
    "description": "The person who asked the song"
  },
  {
    "name": "request_time",
    "type": "TIMESTAMP",
    "mode": "Nullable",
    "description": "Time the requests have been recorded"
  }
]
EOF

}

resource "google_cloud_tasks_queue" "song_requests" {
  name = "video-requests"
  project = "karaokemp-website"
  location = "europe-west1"
  #host = "https://video-server-sch5ny6pxq-ew.a.run.app"
}

output "tasks" {
    value = google_cloud_tasks_queue.song_requests.id
  
}
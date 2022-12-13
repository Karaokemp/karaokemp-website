resource "google_storage_bucket" "karaoke_songs"{
    project = "karaokemp-website"
    name = "karaokemp-karaoke-songs"
    location = "europe-west3"
    force_destroy = true
    uniform_bucket_level_access = true
}

output "bucket" {
    value = google_storage_bucket.karaoke_songs.self_link

  
}
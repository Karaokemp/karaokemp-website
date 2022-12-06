resource "google_storage_bucket_iam_binding" "public_viewer" {
  bucket = google_storage_bucket.karaoke_songs.name
  role = "roles/storage.objectViewer"
  members = [
    "allUsers"
  ]
}

resource "google_storage_bucket_iam_binding" "owner" {
    bucket = google_storage_bucket.karaoke_songs.name
    role = "roles/storage.objectAdmin"
    members = [
        "user:dreckguy@gmail.com"
  
    ]
  
}
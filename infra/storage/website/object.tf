resource "google_storage_bucket_object" "index_file" {
  name   = "index.html"
  source = "index.html"
  bucket = google_storage_bucket.website.name
}
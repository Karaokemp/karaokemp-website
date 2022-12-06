resource "google_app_engine_application" "db" {
  project     = "karaokemp-website2"
  location_id = "europe-west3"
  database_type = "CLOUD_FIRESTORE"
}

output "db" {
    value = google_app_engine_application.db.default_hostname
    
  
}
resource "google_service_account" "karaokemp_website" {
  account_id   = "karaokemp-website"
  display_name = "Karaokemp Website"
  project = "karaokemp-website"
}
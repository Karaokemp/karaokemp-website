resource "google_service_account" "karaokemp_website" {
  account_id   = "karaokemp-website"
  display_name = "Karaokemp Website"
  project = "karaokemp-website"
}

resource "google_project_iam_binding" "enqueuer" {
  project = "karaokemp-website"
  role    = "roles/cloudtasks.enqueuer"

  members = [
    "serviceAccount:karaokemp-website@karaokemp-website.iam.gserviceaccount.com"
  ]
}

resource "google_project_iam_binding" "aaa" {
  project = "karaokemp-website"
  role    = "roles/cloudtasks.enqueuer"

  members = [
    "serviceAccount:karaokemp-website@karaokemp-website.iam.gserviceaccount.com"
  ]
}
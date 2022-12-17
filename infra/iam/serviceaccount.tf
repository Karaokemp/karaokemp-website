resource "google_service_account" "karaokemp_website" {
  account_id   = "karaokemp-website"
  display_name = "Karaokemp Website"
  project = "karaokemp-website"
}

resource "google_project_iam_binding" "enqueuer" {
  project = "karaokemp-website"
  role    = "roles/cloudtasks.enqueuer"

  members = [
    "serviceAccount:karaokemp-website@karaokemp-website.iam.gserviceaccount.com",
    "serviceAccount:firebase-adminsdk-nt2m9@karaokemp-website.iam.gserviceaccount.com"
  ]
}

resource "google_project_iam_binding" "datastore_owner" {
  project = "karaokemp-website"
  role    = "roles/datastore.owner"

  members = [
    "serviceAccount:karaokemp-website@karaokemp-website.iam.gserviceaccount.com",
    "serviceAccount:firebase-adminsdk-nt2m9@karaokemp-website.iam.gserviceaccount.com"
  ]
}

resource "google_project_iam_binding" "appengine_admin" {
  project = "karaokemp-website"
  role    = "roles/appengine.appAdmin"

  members = [
    "serviceAccount:karaokemp-website@karaokemp-website.iam.gserviceaccount.com",
    "serviceAccount:firebase-adminsdk-nt2m9@karaokemp-website.iam.gserviceaccount.com"
  ]
}

resource "google_project_iam_binding" "custom_role" {
  project = "karaokemp-website"
  role    = google_project_iam_custom_role.karaokemp_website.id

  members = [
    "serviceAccount:karaokemp-website@karaokemp-website.iam.gserviceaccount.com"
  ]
}


resource "google_cloud_run_service" "video_service" {
  name     = "video-service"
  project = "karaokemp-website"
  location = "europe-west3"

  template {
    spec {
      containers {
        image = "europe-west3-docker.pkg.dev/karaokemp-website/karaokemp-website/video-server"
      }
    }
  }
}

data "google_iam_policy" "noauth" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_service_iam_policy" "noauth" {
  location    = google_cloud_run_service.video_service.location
  project     = google_cloud_run_service.video_service.project
  service     = google_cloud_run_service.video_service.name

  policy_data = data.google_iam_policy.noauth.policy_data
}
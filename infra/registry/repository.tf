resource "google_artifact_registry_repository" "docker_repository" {
    project = "karaokemp-website"
    location = "europe-west3"
  repository_id = "karaokemp-website"
  description   = "karaokemp-website docker repository"
  format        = "DOCKER"
}
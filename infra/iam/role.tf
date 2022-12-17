resource "google_project_iam_custom_role" "karaokemp_website" {
    project = "karaokemp-website"
  role_id     = "karaokempWebsite"
  title       = "karaokemp-website custom role"
  permissions = [
"storage.buckets.createTagBinding",
"storage.buckets.deleteTagBinding",
"storage.buckets.listEffectiveTags",
"storage.buckets.listTagBindings",
"storage.buckets.update"
]
}
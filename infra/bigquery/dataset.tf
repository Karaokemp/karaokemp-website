resource "google_bigquery_dataset" "main" {
  dataset_id                  = "main"
  project = local.project
  description                 = "main db for Karaokemp website"
  location                    = "europe-west3"
}


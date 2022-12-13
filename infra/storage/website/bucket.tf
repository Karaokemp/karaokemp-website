resource "google_storage_bucket" "website"{
    project = "karaokemp-website"
    name = "www.karaokemp.com"
    location = "europe-west1"
    force_destroy = true
    uniform_bucket_level_access = true

    
    website {
          main_page_suffix = "index.html"
    }
    

}

output "bucket" {
    value = google_storage_bucket.website.self_link

  
}
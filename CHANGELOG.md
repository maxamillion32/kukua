## nightly-0.0.2

### Features

* **posts page**: added a new post page displaying posts from a Wordpress site.  
post are retrieved by the new provider "getposts" which launch an HTTP request to the back-end.
The Wordpress site must have installed and configured the [WP REST API](http://v2.wp-api.org/)  
The page also demonstrate the use of ionic _infinite scroll_ 

* **post details page**: the page is pushed on click of a single post card 
### Bug Fixes
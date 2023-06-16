## Purpose

To make it easier to find Athletics Track & Field competitions near you.

England Athletics have a "Competition Finder" but it does not have a map element, making it hard to guage the distance to events. It enables you to filter by region, but if you are prepared to cross a regional boundary, it is not easy to get a list of events that you'd be prepared to travel to.

## Use

The webpage can be viewed here: https://alxwaugh.github.io/trackmeetfinder/index.html

## Method

England Athletics license events in the UK, and periodically publish a list of licenced events: 
https://www.englandathletics.org/athletics-and-running/england-competitions/licensed-competitions/

1. Download the data - only interested in the track and field events
2. Geocode the data using https://www.geoapify.com/geocoding-api - spotty results, prob due to the limited "address" info in the available data
3. Clean up geocoded csv and pop it in the repo

## Need to do

* ~~Clean up the badly geocoded events - like, why are there 2 in the Philipines??~~
* Better filter options:
  * Can we do filter by age categories?
  * Can we do a date-range slider rather than the horrendous month checkbox list?
* Automate the CSV cleanup (ETL)
  * Match events to set of master locations
  * Geocode missing locations via geoapify
  * Add geocoded locations to master locations
  * Save latest as Meets.csv and update repo  
* Create master locations dataset that can be used next time EA publish an update

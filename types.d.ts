type featureAddress = {
  "type": string,
  "geometry": {
    "type": string,
    "coordinates": number[]
  },
  "properties": {
    "id": string,
    "gid": string,
    "layer": string,
    "source": string,
    "source_id": string,
    "name": string,
    "housenumber": string,
    "street": string,
    "accuracy": string,
    "country": string,
    "country_gid": string,
    "country_a": string,
    "region": string,
    "region_gid": string,
    "region_a": string,
    "county": string,
    "county_gid": string,
    "locality": string,
    "locality_gid": string,
    "borough": string,
    "borough_gid": string,
    "continent": string,
    "continent_gid": string,
    "label": string,
    "addendum": {
      "osm": {
        "phone": string
      }
    }
  }
}
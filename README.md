# Benchmark of different cleaning levels in Axios

## Requirements

* Node 12
* Yarn
* Docker Compose

## Init

Just run `yarn install` then `yarn up` from the root of the project directory.

Since InfluxDB takes time to start, you'll have to wait 3 to 10 seconds before running any benchmark.

A grafana will be available at http://localhost:3000/.

To completely clean all the containers and their volumes, run `yarn down`.

## Benchmarks

### Raw: Case-control

`yarn bench-raw`

Runs a benchmark against http://localhost:8080/raw.
This endpoint returns a big JSON without any processing.

### No Null: Removes any null from the JSON

`yarn bench-no-null`

Runs a benchmark against http://localhost:8080/no-null.
This endpoint returns a big JSON stripped from any null.

### Clean: Removes any null or empty string from the JSON

`yarn bench-clean`

Runs a benchmark against http://localhost:8080/clean.
This endpoint returns a big JSON stripped from any null or empty string.

### Parano: Removes any null, empty string, empty object and empty array from the JSON

`yarn bench-parano`

Runs a benchmark against http://localhost:8080/parano.
This endpoint returns a big JSON stripped from any null, empty string, object and array.

The arrays and objects are cleaned recursively thanks to `JSON.parse`'s native behavior.

However, the fact that "empty arrays" can contain null/undefined values must be considered for the recursive clean to work: While removed object's properties will be completely erased from it, removed array's items will be replaced with null instead.

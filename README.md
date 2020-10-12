## Simple REST API for Code Engine

This code is used to demonstrate how to build and run a containerized application in [IBM Cloud Code Engine](https://cloud.ibm.com/docs/codeengine?topic=codeengine-about).

> Code Engine is currently an experimental offering and all resources are deleted every 7 days.

## What the API does
This simple REST API allows you to post an Artist as well as your ranking for their albums by type:

favorite_album = Your favorite album by the artist
best_album = The album you think is the best in their catalog
start_album = The album you would suggest to someone if they had not heard of the artist before

## API Calls
**Create a new Artist ranking**
Here is an example using the band The Cure

```
$ curl -s -X POST -H 'Content-Type: application/json' "APPLICATION_URL/new_ranking" -d '{"artist_name": "The Cure","favorite_album": "Wish","best_album": "Disintegration", "start_album": "Seventeen Seconds"}'
```

**Retrieve an Artists rankings**

```
$ curl -s -X GET -H 'Content-Type: application/json' "APPLICATION_URL/get_rankings"
```

## Test locally
You can test this locally before deploying to Code Engine. 
```
$ git clone https://github.com/cloud-design-dev/code-engine-simple-api.git
$ cd code-engine-simple-api
$ npm install . 
$ npm start
```
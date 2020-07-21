// import express
const express = require("express");
// import redis
const redis = require("redis");
// create an express app
const app = express();
// create a redis client
const client = redis.createClient();
// set initial visits to 0
client.set("visits", 0);
// handle home route
app.get("/", (req, res) => {
  // get visits numbers
  client.get("visits", (err, visits) => {
    // send visits number
    res.send("Number of visits is " + visits);
    // add one more to visits
    client.set("visits", parseInt(visits) + 1);
  });
});
// listen on port 8081
app.listen(8081, () => {
  console.log("Listening on PORT 8081");
});

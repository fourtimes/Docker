const express = require("express");
const redis = require("redis");

const app = express();
const redisClient = redis.createClient();
redisClient.set("visits", 0);

app.get("/", (req, res) => {
  redisClient.get("visits", (err, visits) => {
    res.send("number of visits" + visits);
    console.log(visits);
    redisClient.set("visits", parseInt(visits) + 1);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

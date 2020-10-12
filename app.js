const express = require("express");
const app = express();
const bodyparser = require("body-parser");

const port = process.env.PORT || 3200;

//Middle ware

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

const rankings = [];

/**
 * creating a New ranking
 */

app.post("/new_ranking", (req, res) => {
  const ranking = req.body;

  if (ranking.artist_name || ranking.favorite_album || ranking.best_album || ranking.artist_start) {
    rankings.push({
      ...ranking,
      id: rankings.length + 1,
      date: Date.now().toString()
    });
    console.log();
    res.status(200).json({
      message: "New Ranking created successfully"
    });
  } else {
    res.status(401).json({
      message: "Invalid ranking creation"
    });
  }
});

/**
 *  Getting All rankings
 */

app.get("/get_rankings", (req, res) => {
  res.status(200).send(rankings);
});

/**
 * Update ranking
 */
app.patch("/ranking/:id", (req, res) => {
  const ranking_id = req.params.id;
  const ranking_update = req.body;
  for (let ranking of rankings) {
    if (ranking.id == ranking_id) {
      if (ranking_update.artist_name != null || undefined)
        ranking.artist_name = ranking_update.artist_name;
      if (ranking_update.best_album != null || undefined)
        ranking.best_album = ranking_update.best_album;
      if (ranking_update.favorite_album != null || undefined)
        ranking.favorite_album = ranking_update.favorite_album;
      if (ranking_update.artist_start != null || undefined)
      ranking.artist_start = ranking_update.artist_start;

      return res
        .status(200)
        .json({ message: "Updated Succesfully", data: ranking });
    }
  }

  res.status(404).json({ message: "Invalid ranking Id" });
});

/**
 * Delete ranking
 */
app.delete("/ranking/:id", (req, res) => {
  const ranking_id = req.params.id;

  for (let ranking of rankings) {
    if (ranking.id == ranking_id) {
      rankings.splice(rankings.indexOf(ranking), 1);

      return res.status(200).json({
        message: "Deleted Successfully"
      });
    }
  }

  res.status(404).json({ message: "Invalid ranking Id" });
});

app.listen(port, () => {
  console.log(`running at port ${port}`);
});

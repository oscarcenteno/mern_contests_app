import express from "express";

const router = express.Router();

import testData from "./contests_test_data.json";

router.get("/contests", (req, res) => {
  // get data from mongodb
  res.send(testData);
});

// router.get("/api/contests")

export default router;

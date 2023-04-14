import express from "express";
import cors from "cors";

const router = express.Router();
router.use(cors());

import testData from "./contests_test_data.json";

router.get("/contests", (req, res) => {
  // get data from mongodb
  res.send({ contests: testData });
});

// router.get("/api/contests")

export default router;

import express from "express";
import cors from "cors";

import { connectClient } from "./db";

const router = express.Router();
router.use(cors());

// to parse req body
router.use(express.json());

router.get("/contests", async (req, res) => {
  const client = await connectClient();
  const contests = await client
    .collection("contests")
    .find()
    .project({ id: 1, categoryName: 1, contestName: 1, _id: 0 })
    .toArray();

  // get data from mongodb
  res.send({ contests });
});

router.get("/contests/:contestId", async (req, res) => {
  const client = await connectClient();
  const contest = await client
    .collection("contests")
    .findOne({ id: req.params.contestId });

  res.send({ contest });
});

router.put("/contests/:contestId", async (req, res) => {
  const client = await connectClient();

  const newNameValue: string = req.body.newNameValue;

  const newName = {
    id: newNameValue.toLocaleLowerCase().replace(/\s/g, "-"),
    name: newNameValue,
    timestamp: new Date(),
  };

  await client.collection("contests").updateOne(
    { id: req.params.contestId },
    {
      $push: {
        categories: newName,
        names: newName,
      },
    },
  );

  const updatedContest = await client
    .collection("contests")
    .findOne({ id: req.params.contestId });

  res.send({ updatedContest });
});

export default router;

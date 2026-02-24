const express = require('express');
repository = require("../data/users.memory");

const router = express.Router();

router.get("/", (req, res) => {
  const page = Number(req.query.page || 1);
  const limit = Number(req.query.limit || 10);
  const all = repository.getAll();
  const start = (page - 1) * limit;
  const items = all.slice(start, start + limit);
  res.status(200).json({ page, limit, total: all.length, items });
});

module.exports = router;

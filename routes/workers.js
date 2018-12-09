const express = require("express");
const router = express.Router();
const workerController = require("../controllers/workers");
const model = require("../models/index");

// GET /workers - Return all workers
router.get("/", workerController.getAll.bind(null, model.models));

// GET /workers/name?name - Return all workers with that name
router.get("/name", workerController.getByName.bind(null, model.models));

module.exports = router;

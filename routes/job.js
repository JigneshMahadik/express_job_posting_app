const express = require("express");
const jobController = require("../controllers/job");
const router = express.Router();


router.post("/api/jobs",jobController.createJob);

router.get("/api/jobs", jobController.viewJob);

router.put("/api/jobs/:id",jobController.editJob);

router.delete("/api/jobs/:id",jobController.deleteJob);

module.exports = router;
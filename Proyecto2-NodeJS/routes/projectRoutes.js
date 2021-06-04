"use strict";

const express = require("express");
const projectController = require("../controllers/projectController");

const router = express.Router();

const multiparty = require("connect-multiparty");
const imagesMiddleware = multiparty({ uploadDir: "./images" });

router.get("/home", projectController.home);
router.post("/test", projectController.test);
router.post("/save-project", projectController.saveProject);
router.get("/get-project/:id", projectController.getProject);
router.get("/get-all-projects", projectController.getAllProjects);
router.post("/update-project", projectController.updateProject);
router.delete("/remove-project/:id", projectController.deleteProject);
router.post(
  "/upload-image/:id",
  imagesMiddleware,
  projectController.uploadImage
);
router.get("/get-image/:file", projectController.getImageFile);

module.exports = router;

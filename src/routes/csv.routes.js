const express = require("express");
const router = express.Router();
const csvController = require("../controllers/upload/csv.controller");
const upload = require("../middlewares/upload");

let routes = (app) => {
  router.post("/upload/:id", upload.single("file"), csvController.upload);
  router.get("/GetCSv/:id", csvController.Getcsv);
  router.get("/GetCSv/", csvController.GetAllcsv);
  // router.get("/tutorials/", csvController.GetAllcsv);
  router.delete("/DeleteCSV/:id", csvController.Deletecsv);
  
  // router.get("/download", csvController.download);

  app.use("/api/csv", router);
};

module.exports = routes;

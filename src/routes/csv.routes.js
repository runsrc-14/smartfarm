const express = require("express");
const router = express.Router();
const csvController = require("../controllers/upload/csv.controller");
const model_csv = require("../controllers/upload/model.controller")
const upload = require("../middlewares/upload");

let routes = (app) => {
  router.post("/upload/model", upload.single("file"), model_csv.upload);
  router.get("/model/show",model_csv.getmodel_csv);
  router.delete("/Delete_model/:id",model_csv.DeleteOne);
  router.delete("/Delete_model",model_csv.DeleteAllModel);
  router.get("/predicted/:id",model_csv.getpredict);
  
  router.post("/upload/:id", upload.single("file"), csvController.upload);
  router.get("/GetCSv/:id", csvController.Getcsv);
  router.get("/GetCSv/", csvController.GetAllcsv);
  router.get("/tutorials/", csvController.GetAllcsv);
  router.delete("/DeleteCSV/:id", csvController.Deletecsv);
  router.delete("/DeleteCSV", csvController.DeleteAllcsv);
  app.use("/api/csv", router);
};

module.exports = routes;

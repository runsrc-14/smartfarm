const db = require("../../models");
const model = db.model
const fs = require("fs");
const csv = require("fast-csv");
// let fileuploads = [];
const Op = db.Sequelize.Op;
const upload = async (req, res) => {
    try {
        if (req.file == undefined) {
            return res.status(400).send("Please upload a CSV file!");
        }
        let model_csv = [];
        let path = __basedir + "/resources/static/assets/uploads/" + req.file.filename;

        fs.createReadStream(path)
            .pipe(csv.parse({ headers: true }))
            .on("error", (error) => {
                throw error.message;
            })
            .on("data", (row) => {
                model_csv.push(row);
            })
            .on("end", () => {
                model.bulkCreate(model_csv)
                    .then(() => {
                        res.status(200).send({
                            message:
                                "Uploaded the file successfully: " + req.file.originalname,
                        });
                    })
                    .catch((error) => {
                        res.status(500).send({
                            message: "Fail to import data into database!",
                            error: error.message,
                        });
                    });
            });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Could not upload the file: " + req.file.originalname,
        });
    }
};

const getmodel_csv = (req, res) => {
    Tutorial.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving model_csv.",
            });
        });
};

module.exports = {
    upload,
    getmodel_csv
};
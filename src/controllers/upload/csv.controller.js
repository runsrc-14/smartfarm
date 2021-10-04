const db = require("../../models");
const User = db.user;
const weathers = db.weathers
const fs = require("fs");
const csv = require("fast-csv");
const CsvParser = require("json2csv").Parser;
// let fileuploads = [];
const Op = db.Sequelize.Op;
const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }
    let fileuploads = [];
    let path = __basedir + "/resources/static/assets/uploads/" + req.file.filename;

    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        fileuploads.push(row);
      })
      .on("end", () => {
        res.send({ message: fileuploads.length })
        for (i = 0; i < fileuploads.length; i++) {
          weathers.create({
            Date: fileuploads[i].Date,
            MaxTemp: fileuploads[i].MaxTemp,
            MinTemp: fileuploads[i].MinTemp,
            Rainfall: fileuploads[i].Rainfall,
            Evaporation: fileuploads[i].Evaporation,
            Sunshine: fileuploads[i].Sunshine,
            WindGustSpeed: fileuploads[i].WindGustSpeed,
            WindSpeed9am: fileuploads[i].WindSpeed9am,
            WindSpeed3pm: fileuploads[i].WindSpeed3pm,
            Humidity9am: fileuploads[i].Humidity9am,
            Humidity3pm: fileuploads[i].Humidity3pm,
            Pressure9am: fileuploads[i].Pressure9am,
            Pressure3pm: fileuploads[i].Pressure3pm,
            Cloud9am: fileuploads[i].Cloud9am,
            Cloud3pm: fileuploads[i].Cloud3pm,
            Temp9am: fileuploads[i].Temp9am,
            Temp3pm: fileuploads[i].Temp3pm,
            RISK_MM: fileuploads[i].RISK_MM,
            userId: req.params.id
          }).then(() => {
            res.status(200).send({
              message:
                "Uploaded the file successfully: " + req.file.originalname + req.params.id,
            });
          })

            // })
            .catch((error) => {
              res.status(500).send({
                message: "Fail to import data into database!",
                error: error.message,
              });
            });
        }
        // fileuploads = []
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};
const Getcsv = (req, res) => {
  const id = req.params.id;
  weathers.findAll({
    where: {
      userId: {
        [Op.eq]: id
      }
    }
  })
    .then((data) => {
      if (data) {
        res.send(
          data
        )
      }
      else {
        res.send({ message: 'Not data' })
      }

    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id,
      });
    });
};
const GetAllcsv = (req, res) => {
  weathers.findAll().then((data) => {
    if (data) {
      res.send(data)
    }

    // if (data[0].userId) {
    //   res.send(data[0].userId)
    // }
  })
  // res.send(fileuploads);
}
const Deletecsv = (req, res) => {
  // fileuploads.splice(0)
  // return res.send(fileuploads).send({ message: 'ลบข้อมูลแล้วจ้ะ' });
  const id = req.params.id;

  weathers.destroy({
    where: { userId: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
}
const DeleteAllcsv = (req, res) => {
  weathers.destroy().then((data)=>{
    res.send(data)
  })
}
module.exports = {
  GetAllcsv,
  upload,
  Getcsv,
  Deletecsv,
  DeleteAllcsv
};

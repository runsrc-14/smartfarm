module.exports = (sequelize, Sequelize) => {
    const Model_csv = sequelize.define("model", {
        Date: {
            type: Sequelize.DATE,
            default: Date.now
        },
        MaxTemp: {
            type: Sequelize.FLOAT,
        },
        MinTemp: {
            type: Sequelize.FLOAT,
        },
        Rainfall: {
            type: Sequelize.FLOAT,
        },
        Evaporation: {
            type: Sequelize.FLOAT,
        },
        Sunshine: {
            type: Sequelize.FLOAT,
        },
        WindGustSpeed: {
            type: Sequelize.FLOAT,
        },

        WindSpeed9am: {
            type: Sequelize.FLOAT,
        },
        WindSpeed3pm: {
            type: Sequelize.FLOAT,
        },
        Humidity9am: {
            type: Sequelize.FLOAT,
        },
        Humidity3pm: {
            type: Sequelize.FLOAT,
        },
        Pressure9am: {
            type: Sequelize.FLOAT,
        },
        Pressure3pm: {
            type: Sequelize.FLOAT,
        },
        Cloud9am: {
            type: Sequelize.FLOAT,
        },
        Cloud3pm: {
            type: Sequelize.FLOAT,
        },
        Temp9am: {
            type: Sequelize.FLOAT,
        },
        Temp3pm: {
            type: Sequelize.FLOAT,
        },
        RainToday: {
            type: Sequelize.STRING,
        },
        RISK_MM: {
            type: Sequelize.FLOAT,
        },
        RainTomorrow: {
            type: Sequelize.STRING,
        },
    }, { timestamps: true, versionKey: false },

    );

    return Model_csv;
};


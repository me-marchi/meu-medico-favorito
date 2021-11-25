const { Sequelize, DataTypes } = require("sequelize");
const { database } = require("./db");

const Doctor = database.define("Doctor", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    crm: {
        type: DataTypes.STRING,
    },
    speciality: {
        type: DataTypes.STRING,
    },
    clinic: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    favorite: {
        type: DataTypes.BOOLEAN,
    },
});

//autoIncrement: o id nunca se repete, garante que sempre irá acrescentar um ao atual
//allowNull: permite que o campo seja nulo
//primaryKey: chave primária do banco
//BIGINT: permite que o id seja um grande inteiro

Doctor.sync()
module.exports = Doctor;
const Doctor = require("../models/Doctors");

const createDoctor = async (req, res) => {
    const { name, crm, speciality, clinic, phone, favorite } = req.body
    try {
        const doctor = await Doctor.create({ name, crm, speciality, clinic, phone, favorite });
        console.log(`Seu médico ${doctor.name} foi cadastrado`);
        res.status(201).send(doctor);
    } catch (error) {
        console.log(error);
        //res.status(500).send({ message: error.message });
        messageError(res, error);
    };
};

const getAllDoctors = async (req, res) => {
    const { favorite = false } = req.query;
    try {
        const where = favorite ? { where: { favorite } }: {}
        const doctor = await Doctor.findAll(where);
        if (doctor && doctor.length > 0) {
            res.status(200).send(doctor);
        } else {
            res.status(204).send();
        }
    } catch (error) {
        //res.status(500).send({ message: error.message });
        messageError(res, error);
    };
};

const messageError = (res, error) => {
    res.status(500).send({ message: error.message });
};

module.exports = {
    createDoctor,
    getAllDoctors
};
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

const getDoctor = async (req, res) => {
    const doctorId = req.params.id
    try {
        const doctor = await Doctor.findOne({
            where: { id: doctorId }
        });
        if (doctor) {
            res.status(200).send(doctor)
        } else {
            res.status(404).send({ message: `Médico de id ${doctorId} não foi encontrado na base.` })
        };
    } catch (error) {
        res.status(500).send({ message: error.message })
    };
};

const updateDoctor = async (req, res) => {
    const doctorId = req.params.id
    const { name, crm, speciality, clinic, phone, favorite } = req.body
    try {
        const rowsUpdate = await Doctor.update({ name, crm, speciality, clinic, phone, favorite}, {
            where: { id: doctorId }
        });
        if (rowsUpdate && rowsUpdate[0] > 0) {
            res.status(200).send({ message: "Médico alterado com sucesso"});
        } else {
            res.status(404).send({ message: "Médico não encontrado"});
        };
    } catch (error) {
        res.status(500).send({ message: error.message});
    };
};

const updateFavorite = async (req, res) => {
    const doctorId = req.params.id;
    const favorite = req.body.favorite;
    try {
        const rowsUpdated = await Doctor.update({ favorite }, { where: { id: doctorId} });
        if (rowsUpdated && rowsUpdated > 0) {
            res.status(200).send({message: `${rowsUpdated[0]} medico(s) com informação de favorito atualizada com sucesso` });
        } else {
            res.status(404).send({ message: `Medico com id ${doctorId} não encontrado para atualizar informação de favorito` }); 
        };
    } catch (error) {
        res.status(500).send({ message: error.message });
    };
};

const deleteDoctor = async (req, res) => {
    const doctorId = req.params.id;
    try {
        const rowsDeleted = await Doctor.destroy({ where: { id: doctorId } });
        if (rowsDeleted) {
            res.status(200).send({ message: `${rowsDeleted[0]} medico(s) deletado(s) com sucesso` });
        } else {
            res.status(404).send({ message: `Medico com id ${doctorId} não encontrado para deletar` });
        };
    } catch (error) {
        res.status(500).send({ message: error.message });
    };
};




module.exports = {
    createDoctor,
    getAllDoctors,
    getDoctor,
    updateDoctor,
    updateFavorite,
    deleteDoctor
};
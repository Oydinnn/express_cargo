const Status = require("../models/status");

const CreateStatus = async (req, res) => {
  try {
    const { name, desc } = req.body;

    const candidate = await Status.findOne({ where: { name } });
    if (candidate) {
      return res.status(403).send({ message: "Bunday status mavjud" });
    }

    const newStatus = await Status.create({
      name,
      desc,
    });

    res.status(201).send({
      message: "New Status created successfully",
      data: newStatus,
    });
  } catch (err) {
    console.error("Catch worked! Error:", err);
    res.status(500).send({ error: "Created Status error", details: err.message });
  }
};


const GetAllStatus = async (req, res) => {
  try {
    const Statuss = await Status.findAll();

    res.status(200).send({
      message: "Statuss fetched successfuly",
      data: Statuss,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Statuss fetched error" });
  }
};

const GetOneStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const Statuss = await Status.findByPk(id);

    if (!Statuss) {
      return res.status(404).send({
        message: "Status not found",
      });
    }

    res.status(200).send({
      message: "Status fetched successfully",
      data: Statuss,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Status fetch error" });
  }
};


const UpdateStatus = async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;

    const Statuss = await Status.update(body, {
      where: { id },
      returning: true,
    });

    res.status(200).send({
      message: "Status updated successfuly",
      data: Statuss[1][0],
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Status updated error" });
  }
};

const DeleteStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const Status = await Status.destroy({ where: {id} });

    res.status(202).send({
      message: "Status deleted successfuly",
      data: Status,
    });
  } catch (err) {
    res.status(500).send({ error: "Status deleted error" });
  }
};

module.exports = {
  CreateStatus,
  GetAllStatus,
  GetOneStatus,
  UpdateStatus,
  DeleteStatus,
};

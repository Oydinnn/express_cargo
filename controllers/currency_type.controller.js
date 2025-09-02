const Currency_type = require("../models/status");

const CreateCurrency_type = async (req, res) => {
  try {
    const { name, desc } = req.body;

    const candidate = await Currency_type.findOne({ where: { name } });
    if (candidate) {
      return res.status(403).send({ message: "Bunday status mavjud" });
    }

    const newCurrency_type = await Currency_type.create({
      name,
      desc,
    });

    res.status(201).send({
      message: "New Currency_type created successfully",
      data: newCurrency_type,
    });
  } catch (err) {
    console.error("Catch worked! Error:", err);
    res.status(500).send({ error: "Created Currency_type error", details: err.message });
  }
};


const GetAllCurrency_type = async (req, res) => {
  try {
    const Currency_types = await Currency_type.findAll();

    res.status(200).send({
      message: "Currency_types fetched successfuly",
      data: Currency_types,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Currency_types fetched error" });
  }
};

const GetOneCurrency_type = async (req, res) => {
  try {
    const { id } = req.params;

    const Currency_types = await Currency_type.findByPk(id);

    if (!Currency_types) {
      return res.status(404).send({
        message: "Currency_type not found",
      });
    }

    res.status(200).send({
      message: "Currency_type fetched successfully",
      data: Currency_types,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Currency_type fetch error" });
  }
};


const UpdateCurrency_type = async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;

    const Currency_types = await Currency_type.update(body, {
      where: { id },
      returning: true,
    });

    res.status(200).send({
      message: "Currency_type updated successfuly",
      data: Currency_types[1][0],
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Currency_type updated error" });
  }
};

const DeleteCurrency_type = async (req, res) => {
  try {
    const { id } = req.params;

    const Currency_type = await Currency_type.destroy({ where: {id} });

    res.status(202).send({
      message: "Currency_type deleted successfuly",
      data: Currency_type,
    });
  } catch (err) {
    res.status(500).send({ error: "Currency_type deleted error" });
  }
};

module.exports = {
  CreateCurrency_type,
  GetAllCurrency_type,
  GetOneCurrency_type,
  UpdateCurrency_type,
  DeleteCurrency_type,
};

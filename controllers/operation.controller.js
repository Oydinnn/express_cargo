const Operation = require("../models/operation")
const Client = require("../models/client");


const addOperation = async (req, res) => {
  try {
    const { operation_date, desc, adminId, orderId } = req.body;

    const newOperation = await Operation.create({
      operation_date,     
      desc,
      adminId,
      orderId
    });

    res.status(201).send({
      message: "New operation created successfully",
      data: newOperation,
    });
  } catch (err) {
    console.error("Catch worked! Error:", err); 
    res.status(500).send({ error: "Created operation error", details: err.message });
  }
};


const GetAllOperation = async (req, res) => {
  try {
    const orders = await Operation.findAll({
      // include: Client
    include: [
      {
      model: Client, 
      required: false, //false ->   OUTERJOIN, TRUE -> INNERJOIN
      attributes: ['full_name', "email"],
      },
    ], 
    // attributes: ["product_link", "sum"]
    });

    res.status(200).send({
      message: "Operations fetched successfuly",
      data: orders,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Operations fetched error" });
  }
};

const GetOneOperation = async (req, res) => {
  try {
    const { id } = req.params;

    const operation = await Operation.findByPk(id);

    if (!operation) {
      return res.status(404).send({
        message: "operation not found",
      });
    }

    res.status(200).send({
      message: "operation fetched successfully",
      data: operation,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "operation fetch error" });
  }
};


const UpdateOperation = async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;

    const operation = await Operation.update(body, {
      where: { id },
      returning: true,
    });

    res.status(200).send({
      message: "operation updated successfuly",
      data: operation[1][0],
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "operation updated error" });
  }
};

const DeleteOperation = async (req, res) => {
  try {
    const { id } = req.params;

    const operation = await Operation.destroy({ where: {id} });

    res.status(202).send({
      message: "operation deleted successfuly",
      data: operation,
    });
  } catch (err) {
    res.status(500).send({ error: "operation deleted error" });
  }
};

module.exports = {
  addOperation,
  GetAllOperation,
  GetOneOperation,
  UpdateOperation,
  DeleteOperation,
};

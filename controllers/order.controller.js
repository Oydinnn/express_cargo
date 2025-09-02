const Order = require("../models/order");
const Client = require("../models/client")
const Admin = require('../models/admin')

const addOrder = async (req, res) => {
  try {
    const { unique_id, product_link, quantity, sum, truck, desc } = req.body;

    const newOrder = await Order.create({
      unique_id,     
      product_link,
      quantity,
      sum,
      truck,
      desc,
    });

    res.status(201).send({
      message: "New Order created successfully",
      data: newOrder,
    });
  } catch (err) {
    console.error("Catch worked! Error:", err); 
    res.status(500).send({ error: "Created order error", details: err.message });
  }
};


const GetAllOrder = async (req, res) => {
  try {
    const orders = await Order.findAll({
      // include: Client
    include: [
      {
      model: Admin, 
      required: false, //false ->   OUTERJOIN, TRUE -> INNERJOIN
      },
    ], 
    });

    res.status(200).send({
      message: "Orders fetched successfuly",
      data: orders,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Orders fetched error" });
  }
};

const GetOneOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).send({
        message: "Order not found",
      });
    }

    res.status(200).send({
      message: "Order fetched successfully",
      data: order,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Order fetch error" });
  }
};


const UpdateOrder = async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;

    const order = await Order.update(body, {
      where: { id },
      returning: true,
    });

    res.status(200).send({
      message: "Order updated successfuly",
      data: order[1][0],
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Order updated error" });
  }
};

const DeleteOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.destroy({ where: {id} });

    res.status(202).send({
      message: "Order deleted successfuly",
      data: order,
    });
  } catch (err) {
    res.status(500).send({ error: "Order deleted error" });
  }
};

module.exports = {
  addOrder,
  GetAllOrder,
  GetOneOrder,
  UpdateOrder,
  DeleteOrder,
};

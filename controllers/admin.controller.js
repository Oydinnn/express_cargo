const { sendErrorResponse } = require("../helpers/send.error.response");
const Admin = require("../models/admin");
const Order = require("../models/order");
const bcrypt = require("bcrypt");

const createAdmin = async (req, res) => {
  try {
    const {
      full_name,
      user_name,
      password,
      confirm_password,
      phone_number,
      email,
      desc,
    } = req.body;

    const candidate = await Admin.findOne({ where: { email } });
    if (candidate) {
      return sendErrorResponse(
        { message: "Bunday foydalanuvchi mavjud" },
        res,
        403
      );
    }

    if (password !== confirm_password) {
      return sendErrorResponse({ message: "Parollar mosmas" }, res, 400);
    }

    const hashedPassword = await bcrypt.hash(password, 7);

    const newAdmin = await Admin.create({
      full_name,
      user_name,
      password: hashedPassword,
      phone_number,
      email,
      desc,
    });

    res.status(201).send({
      message: "New Admin created successfully",
      data: newAdmin,
    });
  } catch (err) {
    sendErrorResponse(err, res, 500);
  }
};

const getAllAdmin = async (req, res) => {
  try {
    const Admins = await Admin.findAll({
      include: [
        {
          model: Order,
          through: { attributes: ["operation_date"] },
        },
      ],
    });

    res.status(200).send({
      message: "Admins fetched successfuly",
      data: Admins,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Admins fetched error" });
  }
};

const getOneAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const admin = await Admin.findByPk(id);

    if (!admin) {
      return res.status(404).send({
        message: "Admin not found",
      });
    }

    res.status(200).send({
      message: "Admin fetched successfully",
      data: admin,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Admin fetch error" });
  }
};

const updateAdmin = async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;

    const Admin = await Admin.update(body, {
      where: { id },
      returning: true,
    });

    res.status(200).send({
      message: "Admin updated successfuly",
      data: Admin[1][0],
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Admin updated error" });
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const Admin = await Admin.destroy({ where: { id } });

    res.status(202).send({
      message: "Admin deleted successfuly",
      data: Admin,
    });
  } catch (err) {
    res.status(500).send({ error: "Admin deleted error" });
  }
};

module.exports = {
  createAdmin,
  getAllAdmin,
  getOneAdmin,
  updateAdmin,
  deleteAdmin,
};

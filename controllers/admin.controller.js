const Admin = require("../models/admin");
const Order = require("../models/order");

const CreateAdmin = async (req, res) => {
  try {
    const { full_name, user_name, password, phone_number, email, desc} = req.body;

    const candidate = await Admin.findOne({ where: { email } });
    if (candidate) {
      return res.status(403).send({ message: "Bunday foydalanuvchi mavjud" });
    }

    const newAdmin = await Admin.create({
      full_name,
      user_name,
      password,
      phone_number,
      email,
      desc,
    });

    res.status(201).send({
      message: "New Admin created successfully",
      data: newAdmin,
    });
  } catch (err) {
    console.error("Catch worked! Error:", err); // 👈 to‘liq chiqadi
    res.status(500).send({ error: "Created Admin error", details: err.message });
  }
};


const GetAllAdmin = async (req, res) => {
  try {
    const Admins = await Admin.findAll({
      include: [
        {
          model: Order,
          through: {attributes: ["operation_date"]},
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

const GetOneAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const Admin = await Admin.findByPk(id);

    if (!Admin) {
      return res.status(404).send({
        message: "Admin not found",
      });
    }

    res.status(200).send({
      message: "Admin fetched successfully",
      data: Admin,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Admin fetch error" });
  }
};


const UpdateAdmin = async (req, res) => {
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

const DeleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const Admin = await Admin.destroy({ where: {id} });

    res.status(202).send({
      message: "Admin deleted successfuly",
      data: Admin,
    });
  } catch (err) {
    res.status(500).send({ error: "Admin deleted error" });
  }
};

module.exports = {
  CreateAdmin,
  GetAllAdmin,
  GetOneAdmin,
  UpdateAdmin,
  DeleteAdmin,
};

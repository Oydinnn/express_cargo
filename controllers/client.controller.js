const Client = require("../models/client");

const CreateClient = async (req, res) => {
  try {
    const { full_name, phone_number, email, address, location, clientId } = req.body;

    const candidate = await Client.findOne({ where: { email } });
    if (candidate) {
      return res.status(403).send({ message: "Bunday foydalanuvchi mavjud" });
    }

    const newClient = await Client.create({
      full_name,
      phone_number,
      email,
      address,
      location,
      clientId,
    });

    res.status(201).send({
      message: "New Client created successfully",
      data: newClient,
    });
  } catch (err) {
    console.error("Catch worked! Error:", err); // 👈 to‘liq chiqadi
    res.status(500).send({ error: "Created client error", details: err.message });
  }
};


const GetAllClient = async (req, res) => {
  try {
    const clients = await Client.findAll();

    res.status(200).send({
      message: "Clients fetched successfuly",
      data: clients,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Clients fetched error" });
  }
};

const GetOneClient = async (req, res) => {
  try {
    const { id } = req.params;

    const client = await Client.findByPk(id);

    if (!client) {
      return res.status(404).send({
        message: "Client not found",
      });
    }

    res.status(200).send({
      message: "Client fetched successfully",
      data: client,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Client fetch error" });
  }
};


const UpdateClient = async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;

    const client = await Client.update(body, {
      where: { id },
      returning: true,
    });

    res.status(200).send({
      message: "Client updated successfuly",
      data: client[1][0],
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Client updated error" });
  }
};

const DeleteClient = async (req, res) => {
  try {
    const { id } = req.params;

    const client = await Client.destroy({ where: {id} });

    res.status(202).send({
      message: "Client deleted successfuly",
      data: client,
    });
  } catch (err) {
    res.status(500).send({ error: "Client deleted error" });
  }
};

module.exports = {
  CreateClient,
  GetAllClient,
  GetOneClient,
  UpdateClient,
  DeleteClient,
};

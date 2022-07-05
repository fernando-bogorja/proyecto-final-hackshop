const { Address } = require("../dbInitialSetup");

async function createAddress(req, res) {
  const { line_one, line_two, country, zipCode, city, department, phone, user } =
    req.body;
  try {
    const address = await Address.create({
      line_one,
      line_two,
      country,
      zipCode,
      city,
      department,
      phone,
      user
    });
    res.status(201).json({
      status: "success",
      data: address,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

async function getAddress(req, res) {
  const { id } = req.params;
  try {
    const address = await Address.findByPk(id);
    res.status(200).json({
      status: "success",
      data: address,
    });
  } catch (err) {
    res.status(500).json(err);
  }
}

async function getAllAddresses(req, res) {
  try {
    const addresses = await Address.find();
    res.status(200).json({
      status: "success",
      data: addresses,
    });
  } catch (err) {
    res.status.json(err);
  }
}

module.exports = { createAddress, getAddress, getAllAddresses };

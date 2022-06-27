const { PaymentMethod } = require("../dbInitialSetup");

async function getAllPaymentMethods(req, res) {
  try {
    const methods = await PaymentMethod.find();
    return res.json(methods);
  } catch (error) {
    return res.json({ error: error.message });
  }
}

async function getPaymentMethodById(req, res) {
  const { id } = req.query;
  try {
    const method = await PaymentMethod.findById(id);
    if (!method) return res.json({ message: "Payment method not found", data: {} });
    return res.json({ message: "Payment method found", data: method });
  } catch (error) {
    return res.json({
      message: "Error finding the payment method",
      error: error.message,
    });
  }
}

async function getPaymentMethodByName(req, res) {
  const { name } = req.query;
  try {
    const method = await PaymentMethod.findOne({ name });
    if (!method) return res.json({ message: "Payment method not found", data: {} });
    return res.json({ message: "Payment method found", data: method });
  } catch (error) {
    return res.json({
      message: "Error finding the payment method",
      error: error.message,
    });
  }
}

async function getPaymentMethodByQuery(req, res) {
  const query = req.query;
  const { action } = req.params;

  switch (Object.keys(query)[0]) {
    case "id":
      return getPaymentMethodById(req, res);
    case "name":
      return getPaymentMethodByName(req, res);
    default:
      return getAllPaymentMethods(req, res);
  }
}

async function createPaymentMethod(req, res) {
  const { name, icon, description } = req.body;
  try {
    const method = await PaymentMethod.create({ name, icon, description });
    await method.save();
    return res.json({ message: "Payment method created", data: method });
  } catch (error) {
    return res.json({
      message: "Error creating the payment method",
      error: error.message,
    });
  }
}

module.exports = { getPaymentMethodByQuery, createPaymentMethod, getAllPaymentMethods };
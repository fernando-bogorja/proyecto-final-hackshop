const { Order } = require('../dbInitialSetup');

async function createOrder(req, res) {
    const { shopList, boughtBy, shippingAddress, total } = req.body;

    try {
        const order = await Order.create({ shopList, boughtBy, shippingAddress, total, createdAt: new Date().toLocaleDateString() });
        await order.save();
        return res.status(201).json({
            message: 'Order created successfully',
            order
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al crear el pedido",
            error
        });
    }
}

async function getOrders(req, res) {
    try {
        const orders = await Order.find();
        if (!orders) return res.status(404).json({ message: 'No orders found' });

        return res.status(200).json({
            message: 'Orders retrieved successfully',
            orders
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al obtener los pedidos",
            error
        });
    }
}
module.exports = { createOrder, getOrders };
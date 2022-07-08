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
        const orders = await Order.find().populate('shopList').populate('boughtBy').populate('shippingAddress');
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

async function getSingleOrder(req, res) {
    const { id } = req.params;
    try {
        const order = await Order.findById(id).populate('shopList').populate('boughtBy').populate('shippingAddress');
        if (!order) return res.status(404).json({ message: 'Order not found' });

        return res.status(200).json({
            message: 'Order retrieved successfully',
            order
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al obtener el pedido",
            error
        });
    }
}

async function deleteOrder(req, res) {
    const { id } = req.body;

    try {
        const order = await Order.findById(id);
        if (!order) return res.status(500).json({ message: 'Order not found' });

        await order.remove();
        return res.status(200).json({
            message: 'Order deleted successfully'
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al eliminar el pedido",
            error
        });
    }
}

async function updateStatus(req, res) {
    const { id, status } = req.body;

    try {
        const order = await Order.findById(id);
        if (!order) return res.status(500).json({ message: 'Order not found' });

        order.status = status;
        await order.save();
        return res.status(200).json({
            message: 'Order updated successfully'
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al actualizar el pedido",
            error
        });
    }
}
module.exports = { createOrder, getOrders, getSingleOrder, deleteOrder, updateStatus };
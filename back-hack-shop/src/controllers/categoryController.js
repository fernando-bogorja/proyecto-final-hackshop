const { Category, Product } = require("../dbInitialSetup");

async function getAllCategories(req, res) {
    try {
        const categories = await Category.find();
        return res.json(categories);
    } catch (error) {
        return res.json({ error: error.message });
    }
}

async function createCategory(req, res) {
    const { name, description } = req.body;
    try {
        const category = await Category.create({ name, description });
        return res.json({
            message: "Category created successfully",
            data: category,
        });
    } catch (error) {
        return res.json({ error: error.message });
    }
}

module.exports = { getAllCategories, createCategory };
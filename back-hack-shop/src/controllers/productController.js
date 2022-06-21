const { Product } = require("../dbInitialSetup");


/**
 * Obtiene todos los productos de la base de datos.
 * @param  req Request object
 * @param  res Response object
 * @return req.json() with all the data
 */
async function getAllProducts(req, res) {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    return res.json({ error: error.message });
  }
}

/**
 * Obtiene un producto de la base de datos.
 * @param  req Request object
 * @param  res Response object
 * @[Request Body] id: String
 * @return req.json() with the product data
 */
async function getProductByQuery(req, res) {
  const { action } = req.params;
  const query = req.query;

  const regex = new RegExp(query.search, 'i');
  if (action === 'get') {
    try {
      const product = await Product.findOne({ name: regex });
      if (!product) return res.json({ message: "Product not found", data: {} });
      return res.json({ message: "Product found", data: product });
    } catch (error) {
      return res.json({ message: 'Error getting the product', error: error.message });
    }
  } else {
    return res.json({ message: 'Action not found', data: {} });
  }
}

/**
 * Elimina un producto de la base de datos.
 * @param  req Request object
 * @param  res Response object
 * @[Request Body] id: String
 * @return req.json() with the related data
 */
async function deleteOne(req, res) { }

/**
 * Actualiza un producto de la base de datos.
 * @param  req Request object
 * @param  res Response object
 * @ [Request Body]
 * @ id: String,
 * @ name: String(100),
 * @ price: String(100), 
 * @ description: String(200)
 * @ stock: String(50),
 * @ featured: Boolean
 * @return req.json() with the related data
 */
async function updateOne(req, res) { }

async function createOne(req, res) {
  const { name, price, images, description, featured, stock, slug } = req.body;

  try {
    const product = new Product({
      name,
      price: String(price),
      images,
      description,
      featured,
      stock: String(stock),
      slug
    });
    await product.save();
    return res.json({ message: "Product created successfully", data: product });
  } catch (error) {
    return res.json({ message: 'error creating the product', error: error.message });
  }
}

/**
 * Compra varios productos de la base de datos.
 * @param  req Request object
 * @param  res Response object
 * @ [Request Body]
 * @ boughtBy: String,
 * @ products: Array
 * @return req.json() with the related data
 * 
**/
async function buy(req, res) { }

module.exports = { getAllProducts, getProductByQuery, deleteOne, updateOne, createOne, buy };

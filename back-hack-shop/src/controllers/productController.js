const { Product } = require("../dbInitialSetup");


/**
 * Obtiene todos los productos de la base de datos.
 * @param  req Request object
 * @param  res Response object
 * @return req.json() with all the data
 */
async function getAll(req, res) {
  try {
    const products = await Product.findAll();
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
async function getById(req, res) { }

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
    const product = await Product.create({
      name,
      price,
      images,
      description,
      featured,
      stock,
      slug
    });
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

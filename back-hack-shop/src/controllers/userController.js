const { User } = require('../dbInitialSetup');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    return res.json({ message: 'Error getting users', error });
  }
};

/* Begin Authentication */

/**
 * Registra un usuario.
 * @param  req Request object
 * @param  res Response object
 * @ [Request Body]
 * @ name: String(100),
 * @ lastName: String(100),
 * @ email: String(50),
 * @ password: String(100)
 * @ address: String(100),
 * @ phone: String(50),
 * @return req.json() with the info and the new user data
**/
async function createUser(req, res) {
  const { name, lastName, email, password, phone, isAdmin } = req.body;
  try {
    const findUser = await User.findOne({ $or: [{ email }, { phone }] });

    //Si encontramos un usuario con el mismo email, retornamos un mensaje de error.
    if (findUser) return res.json({ message: 'An user with the same email or phone number already exists', data: {} })

    //Si no encontramos un usuario con el mismo email, creamos el usuario.
    const user = new User({
      name,
      lastName,
      email,
      password: String(password),
      isAdmin,
      phone
    });
    await user.save();

    return res.json({ message: 'User created successfully', data: user });

  } catch (error) {
    return res.json({ message: 'Error creating user', error });
  }
};

/**
 * Autentica un usuario.
 * @param  req Request object
 * @param  res Response object
 * @ [Request Body]
 * @ email: String(50),
 * @ password: String(100)
 * @return req.json() with the user data and a token
**/
async function loginUser(req, res) {
  const { email, password } = req.body;
  try {
    const findUser = await User.findOne({ email }).populate('address').populate('orderList');

    if (!findUser) return res.json({ message: 'User not found' });

    //Verificamos que la contraseña coincida con la contraseña encriptada.
    const isValidPassword = bcrypt.compareSync(String(password), findUser.password);
    if (!isValidPassword) return res.json({ message: 'Invalid password' });

    //Si la contraseña es correcta, generamos un token.
    jwt.sign({ id: findUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) return res.json({ message: 'Error generating token', err });
      return res.json({
        message: 'Login successful', data: {
          user: findUser,
          token
        }
      });
    })
  } catch (error) {
    return res.json({ message: 'Error logging in', error });
  }
};

async function deleteUser(req, res) {

};

async function updateUser(req, res) {

};

/* End Authentication */


module.exports = { createUser, loginUser, getAllUsers };
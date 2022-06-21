const { User } = require('../dbInitialSetup');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


async function getUsers(req, res) {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    return res.json({ message: 'Error getting users', error });
  }
}


/* Begin Authentication */

//Register an user in the database
async function createUser(req, res) {
  const { name, lastName, email, password, address, phone } = req.body;
  try {
    const findUser = await User.findOne({ email })

    //Si encontramos un usuario con el mismo email, retornamos un mensaje de error.
    if (findUser) return res.json({ message: 'An user with the same email already exists' })

    //Si no encontramos un usuario con el mismo email, creamos el usuario.
    const user = new User({
      name,
      lastName,
      email,
      password: String(password),
      address,
      phone
    });
    //HASH
    await user.save();
    return res.json({ message: 'User created successfully' });

  } catch (error) {
    return res.json({ message: 'Error creating user', error });
  }
}

//Login an user in the database
async function loginUser(req, res) {
  const { email, password } = req.body;
  try {
    const findUser = await User.findOne({ email });

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
}

/* End Authentication */


module.exports = { createUser, loginUser, getUsers };
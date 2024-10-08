// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');
dotenv.config();

// Register User
const register = async (req, res) => {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: "User registration failed" });
    }
};

// Login User
const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).send("Email or Password is wrong");

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(400).send("Invalid Password");

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.header('auth-token', token).json({ token });
};

module.exports = { register, login };

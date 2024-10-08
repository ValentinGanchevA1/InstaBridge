// // middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authMiddleware = (req, res, next) => {
    const authHeader = req.header('Authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send('Access Denied: No token provided');
    }

    // Remove "Bearer " from the header to get the token
    const token = authHeader.replace('Bearer ', '').trim();

    try {
        // Verify token using the secret key from .env
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;  // Add the verified user info to the request object
        next();
    } catch (err) {
        // Send an error if the token is invalid
        res.status(400).send('Invalid Token');
    }
};

module.exports = authMiddleware;


// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');
// dotenv.config();

// const authMiddleware = (req, res, next) => {
//     const token = req.header('Authorization').replace('Bearer ', '');

//     if (!token) return res.status(401).send('Access Denied');
    
//     try {
//         const verified = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = verified;
//         next();
//     } catch (err) {
//         res.status(400).send('Invalid Token');
//     }
// };

// module.exports = authMiddleware;

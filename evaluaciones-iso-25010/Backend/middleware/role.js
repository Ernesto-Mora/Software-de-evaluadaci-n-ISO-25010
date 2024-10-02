// middleware/role.js
const checkRole = (requiredRoles) => {
    return (req, res, next) => {
        if (!requiredRoles.includes(req.userRole)) {
            return res.status(403).send({ message: 'Acceso denegado.' });
        }
        next();
    };
};

module.exports = checkRole;

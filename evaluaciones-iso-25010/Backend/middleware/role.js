// middleware/role.js
const checkRole = (rolesPermitidos) => {
    return (req, res, next) => {
        const { rol } = req.user;
        if (!rolesPermitidos.includes(rol)) {
            return res.status(403).json({ message: 'Acceso denegado.' });
        }
        next();
    };
};

module.exports = checkRole;

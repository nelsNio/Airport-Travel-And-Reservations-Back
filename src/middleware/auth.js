const jwt = require('jsonwebtoken');


exports.checkJwt = async function(req, res, next) {
    console.log('\x1b[34m', 'app.middleware.auth.checkJwt');

    let token = req.headers["authorization"];
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }
        req.user = decoded.usuario;
        console.log(req.user);
        next();

    })

}

exports.checkAdminRole = (req, resp, next) => {
    usuario = req.user;
    if (usuario.role === 'admin') {
        next();
    } else {
        return resp.status(401).json({
            ok: false,
            err: {
                message: 'Insufficient permissions'
            }
        });
    }

};
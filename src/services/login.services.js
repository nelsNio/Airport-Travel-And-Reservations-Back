const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

'use strict';
var dbConn = require('./../../config/db.config');
exports.login = (body, result) => {
    let email = body.email;
    let password = body.password;
    console.log(email, password);
    dbConn.query("Select * from user where email = ?", email, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log(res);
            if (!res[0]) {
                result({
                    ok: false,
                    mensaje: '(Usuario) o contraseña incorectos'
                })

            } else {

                if (!bcrypt.compareSync(password, res[0].password)) {
                    result({
                        ok: false,
                        mensaje: '(Usuario) o contraseña incorectos'
                    })
                } else {
                    let token = jwt.sign({
                        usuario: res[0],
                    }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN })

                    result(null, {
                        ok: true,
                        usuario: res[0],
                        token
                    });
                }
            }

        }
    });
};
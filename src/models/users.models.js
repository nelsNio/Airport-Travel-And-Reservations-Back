const bcrypt = require('bcrypt');



//User object create
var User = function(user) {
    console.log(user.password);
    this.fullname = user.fullname;
    this.email = user.email;
    this.document = user.document;
    this.password = bcrypt.hashSync(user.password, 10);
};
module.exports = User;
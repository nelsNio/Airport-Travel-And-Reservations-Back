function validateRole(user, role) {

    if (!role || !user) {
        return false;
    }
    if (role != 'admin' && role != 'client')
        return false;

    return user.role == role;
}
module.exports = validateRole;
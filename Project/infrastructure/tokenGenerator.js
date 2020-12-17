let users = [
    {
        email: 'test@test.com',
        password: '123'
    },
    {
        email: 'edib@test.com',
        password: '123'
    },
    {
        email: 'salt@test.com',
        password: '123'
    }
]

exports.generateToken = (email, password) => {
    let user = users.find((x) => x.email == email);
    if (user && user.password == password) {
        return "token";
    }
    return "not token";
}

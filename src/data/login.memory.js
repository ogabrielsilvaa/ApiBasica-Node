const bcrypt = require("bcryptjs");

const logins = [
  {
    id: 1,
    username: "beta",
    role: "user",
    passwordHash: bcrypt.hashSync("123", 10),
  },
  {
    id: 2,
    username: "gabriel",
    role: "admin",
    passwordHash: bcrypt.hashSync("123", 10),
  },
];

function findByUserName(username) {
  return logins.find(login => login.username === username);
}

module.exports = { findByUserName };

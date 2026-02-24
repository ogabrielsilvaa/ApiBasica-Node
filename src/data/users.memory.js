let users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Bruno" },
  { id: 3, name: "João" },
  { id: 4, name: "Maria" },
];

function getAll() {
  return users;
}

function getById(id) {
  return users.find(user => user.id === id) || null;
}

function createUser(name) {
  const nextId = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
  const newUser = { id: nextId, name };
  users.push(newUser);
  return newUser;
}

module.exports = { getAll, getById, createUser };

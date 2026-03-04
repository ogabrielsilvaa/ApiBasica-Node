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

function updateUser(id, name) {
  const user = getById(id);
  if (user == null) return null;
  const index = users.findIndex(user => user.id === id);
  users[index].name = name.trim();
  return user;
}

function deleteUser(id) {
  const user = getById(id);
  if (user == null) return null;
  const index = users.findIndex(user => user.id === id);
  users.splice(index, 1);
  return true;
}

module.exports = { getAll, getById, createUser, updateUser, deleteUser };

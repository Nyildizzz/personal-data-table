// src/api/users.js


let users = [];
let lastUserId = 0;

export function getUsers() {
  return users;
}

function generateId() {
  lastUserId++;
  return lastUserId;
}



export function addUser(newUser) {
  const newId = generateId();
  const userWithId = { ...newUser, id: newId };
  users.push(userWithId);
  return userWithId;
}

// src/pages/api/users/users.js

export function updateUser(id, updatedUserData) {
    const index = users.findIndex(user => user.id === parseInt(id));
    console.log('index', typeof index, index)
  
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedUserData };
      return users[index];
    } else {
      throw new Error('User not found');
    }
  }

export function deleteUser(id) {
  const index = users.findIndex(user => user.id === parseInt(id));
  console.log('index', typeof index, index)
  if (index !== -1) {
    users.splice(index, 1);
  } else {
    throw new Error('User not found');
  }
}
export function deleteSelectedUsers(ids) {
  console.log('ids', typeof ids, ids);
  ids.forEach(id => {
    deleteUser(id);
  });
} 
  


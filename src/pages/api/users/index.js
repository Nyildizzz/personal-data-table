// api/users/index.js

import { addUser } from './users';
import { getUsers } from './users';


export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const newUser = req.body;
      const user = addUser(newUser);
      res.status(201).json(user);
    } catch (error) {
      console.error('Error adding user:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }else if (req.method === 'GET') {
    try {
      const users = getUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

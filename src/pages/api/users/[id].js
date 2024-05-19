// api/users/[id].js

import { updateUser } from './users';

export default function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      const { id } = req.query;
      const updatedUser = req.body;
      const user = updateUser(id, updatedUser);
      res.status(200).json(user);
    } catch (error) {
      console.error('Error updating user:', error);
      if (error.message === 'User not found') {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.status(500).json({ message: 'Internal Server Error' });
      }
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

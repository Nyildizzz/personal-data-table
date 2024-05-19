import { deleteUser } from "../users/users";


export default function handler(req, res) {
    if (req.method === 'DELETE') {
        try {
        const { id } = req.query;
        deleteUser(id);
        res.status(200).json({ message: 'User deleted successfully!' });
        } catch (error) {
        console.error('Error deleting user:', error);
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

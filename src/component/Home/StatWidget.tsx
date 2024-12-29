import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '../../types/User';
import { UserCard } from './Home';

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => setError(error.message));
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;

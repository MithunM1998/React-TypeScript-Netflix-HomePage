import React,{useState} from 'react';
import { User } from '../../types/User';
import { UserCard } from './Home';


export const AddItems:React.FC=()=>{
const[itemsName,setItems]=useState('');
const[emailItem,setEmailItems]=useState('');
const[add,setAdd]=useState('');
const [users, setUsers] = useState<User[]>([]);

const handleUserInputs = () => {
    const newUser: User = {
      id: Date.now(), // Assuming `User` has an `id` property
      name: itemsName,
      email: emailItem
    };

    setUsers([...users, newUser]);
    setItems(''); // Clear the input fields after adding
    setEmailItems('');
  };

return(
    <div>
        <h1>Add Users</h1>
        <div>
            <input type='text' placeholder='Enter name'  value={itemsName}
            onChange={(e)=>setItems(e.target.value)}></input>
             <input type='text' placeholder='Enter email'  value={emailItem}
            onChange={(e)=>setEmailItems(e.target.value)}></input>
            <button onClick={handleUserInputs}>Add User</button>
        </div>
        <div>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
        </div>
    </div>
)
}
import React,{useEffect,useState} from "react";
import axios from 'axios';
export const Settings:React.FC=()=>{
    const[userId,setUserId]=useState(1);
    const[settings,setSettings]=useState<any>(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
          .then((response) => setSettings(response.data))
          .catch((error) => console.error('Error fetching user settings:', error));
      }, [userId]); // Dependency on `userId`

      const changeUserid=()=>{
        setUserId((previd)=>previd===1?2:1);
      }
    return (
        <div>
            <h2>
            in Settings Pagee!!!!
            </h2>
            <button onClick={changeUserid}>Toggle user</button>
            {
                settings? (
                    <div>
                        <p>Name: {settings.name}</p>
                        <p>email:{settings.email}</p>
                        </div>
                ):(
                    <p>Loading....</p>
                )
            }
        </div>
    )
}
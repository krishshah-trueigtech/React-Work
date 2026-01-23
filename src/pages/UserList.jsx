import React, {useState, useEffect} from 'react';

const UserList = ({}) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
        const fetchUsers = async () =>{
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if(!response){
                    throw new Error("Something went wrong");
                }
                const data = await response.json()

                setUser(data);
                setLoading(false);
            }catch (err){
                setError(err.message);
                setLoading(false);
            }
        };
        fetchUsers();
    },[])

    if(loading){
        return (<div className="loader">Loading users....</div>)
    }
    if(error){
        return(<div  className="error"> Error: {error}</div>)
    }

    return (
        <>
        <div className="User Container">
            <h2>User List</h2>
            <ul className="user-list">
                {user.map((u)=>(
                    <li key={u.id} className="user-card">
                        <strong>{u.name}</strong>
                        <p>{u.email}</p>
                        <small>{u.company.name}</small>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
};
export default UserList;
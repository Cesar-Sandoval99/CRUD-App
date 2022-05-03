import React, { useEffect, useState } from 'react';
import UsersList from '../UsersList/UsersList';
import UsersForm from '../UsersForm/UsersForm';
import '../Users/UsersStyles.css'
import axios from 'axios';


const Users = () => {
    
    const [users, setUsers] = useState([])
    const [userSelected, setUserSelected] = useState(null)

    useEffect(() =>{
        axios.get('https://users-crud1.herokuapp.com/users/')
            .then(res => setUsers(res.data))  
    }, [])

    const getUser = () => {
        axios.get('https://users-crud1.herokuapp.com/users/')
            .then(res => setUsers(res.data))  
    }

    const deleteUser = id => {
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
            .then(() => getUser())
    }

    const selectUser = user => setUserSelected(user)

    const deselectUser = user => setUserSelected(null)

    return (
        <div className='formCard'>
            <div className="fixed">
                <UsersForm getUser={getUser} userSelected={userSelected} deselectUser={deselectUser} />
            </div>
            <div>
                <UsersList users={users} selectUser={selectUser} deleteUser={deleteUser} />
            </div>
        </div>
    );
};
export default Users;
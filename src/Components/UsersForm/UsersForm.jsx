import { useState } from 'react/cjs/react.development';
import React, { useEffect } from 'react';
import '../UsersForm/UsersFormStyles.css'
import axios from 'axios';

const UsersForm = ({getUser, userSelected, deselectUser}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthday, setBirthday] = useState("")

    useEffect(() => {
        if(userSelected !== null) {
            setEmail(userSelected?.email)
            setPassword(userSelected?.password)
            setFirstName(userSelected?.first_name)
            setLastName(userSelected?.last_name)
            setBirthday(userSelected?.birthday)
        } else {
            reset()
        }
    }, [userSelected])

    const submit = e => {
        e.preventDefault()
        const user = {
            email,
            password,
            first_name: firstName,
            last_name: lastName,
            birthday
        }
        if(userSelected) {
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
            .then(() => getUser())
        } else {
            axios.post('https://users-crud1.herokuapp.com/users/', user)
            .then(() => getUser())
        }
        reset()
    }

    const reset = () => {
        setEmail("")
        setPassword("")
        setFirstName("")
        setLastName("")
        setBirthday("")
    }

    return (
        <div className='fromCard'>
            <form onSubmit={submit}>
                <div className="container">
                    <label htmlFor="email">Email</label>
                    <input
                    type="text" 
                    id='email'
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    required
                    />
                </div>
                <div className="container">
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    id='password' 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                    required 
                    />
                </div>
                <div className="container">
                    <label htmlFor="first_name">First name</label>
                    <input 
                    type="text" 
                    id='first_name'
                    value={firstName} 
                    onChange={e => setFirstName(e.target.value)}  
                    required
                    />
                </div>
                <div className="container">
                    <label htmlFor="last_name">Last name</label>
                    <input 
                    type="text" 
                    id='last_name'
                    value={lastName} 
                    onChange={e => setLastName(e.target.value)}
                    required 
                    />
                </div>
                <div className="container">
                    <label htmlFor="birthday">Birthday</label>
                    <input 
                    type="date" 
                    id='birthday'
                    value={birthday} 
                    onChange={e => setBirthday(e.target.value)} 
                    required
                    />
                </div>
                <div className='cardButtons'>
                    <button className="submit">Submit</button>
                </div>
                <div className='cardButtons'>
                    <button className='cancel' onClick={deselectUser} >Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default UsersForm;
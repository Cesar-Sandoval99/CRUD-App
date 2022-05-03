import '../UsersList/UsersListStyles.css'
import React from 'react';

const UsersList = ({users, selectUser, deleteUser}) => {


    return (
        <div>
            {
                users?.map(user => 
                    <div key={user?.id} >
                        <div className='usersCard' >
                            <ul>
                                <li><b>Name:</b> {user?.first_name} {user?.last_name}</li>
                                <li><b>Email:</b> {user?.email} </li>
                                <li><b>Birthday:</b> {user?.birthday}</li>
                            </ul>
                            <div className='buttons' >
                                <div>
                                    <button onClick={() => deleteUser(user.id)} ><img src="https://img.icons8.com/ios-glyphs/30/000000/trash--v1.png"/></button>
                                </div>
                                <div>
                                    <button type='button' onClick={() => selectUser(user)}><img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/32/000000/external-edit-miscellaneous-kiranshastry-solid-kiranshastry.png"/></button>
                                </div>
                            </div>
                        </div>
                    </div> 
                )
            }
        </div>
    );
};

export default UsersList;
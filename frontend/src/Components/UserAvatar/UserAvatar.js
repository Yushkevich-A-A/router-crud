import React from 'react';
import userLogo from './img/user.png';

import './UserAvatar.css';

function UserAvatar(props) {
    return (
        <div className='avatar'>
            <img className='avatar-img' src={userLogo} alt="" />
        </div>
    )
}

export default UserAvatar;


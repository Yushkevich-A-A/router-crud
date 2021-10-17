import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import './HeaderPost.css';


function HeaderPost(props) {
    return (
        <div className="header-post">
            <div className="user-info">
                <div className="user-avatar">
                <UserAvatar />  
                </div>
                <p className="user-name">Пользователь</p>
            </div>
        </div>
    )
}

export default HeaderPost


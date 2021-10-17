import React, { useState } from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import './CommentBlock.css';

function CommentBlock(props) {
    const [ value, setValue ] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className="post-comment-block">
            <div className="post-comment-avatar">
                <UserAvatar />
            </div>
            <div className="post-comment-input-block">
                <input className='post-comment-input' type="text" value={value} onChange={handleChange} placeholder='Напишите коментарий...'/>
                <div className="post-comment-input-actions">
                    <div className="post-comment-input-smile"></div>
                    <div className="post-comment-input-photo"></div>
                    <div className="post-comment-input-gif"></div>
                    <div className="post-comment-input-emodji"></div>
                </div>
            </div>
        </div>
    )
}

export default CommentBlock;


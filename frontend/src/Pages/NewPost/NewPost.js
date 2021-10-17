import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import './NewPost.css';
import UserAvatar from '../../Components/UserAvatar/UserAvatar';

function NewPost(props) {

    const [ value, setValue ] = useState('');
    const [ redirect, setRedirect ] = useState(false)

    const handleCancel = () => {
        setRedirect(!redirect)
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSent = async () => {
        const resp = await fetch(`${process.env.REACT_APP_CURRENT_URL}/posts`, {
            method: 'POST',
            body: JSON.stringify({id: 0,content: value}),
        })
        setRedirect(!redirect)
    }

    return (
        <div className='new-post'>
            <div className="new-post-header">
                <div className="new-post-cancel" onClick={handleCancel}></div>
            </div>
            <div className="new-post-input-block">
                <div className="new-post-author-avatar">
                    <UserAvatar />
                </div>
                <div className="new-post-input">
                    <input className="post-input" type="text" value={value} onChange={handleChange} placeholder='type here'/>
                </div>

            </div>
            <div className="new-post-send-block">
                <div className="new-post-send" onClick={handleSent}>
                    Опубликовать
                </div>
            </div>
            {redirect && <Redirect to='/' />}
        </div>
    )
}

export default NewPost;


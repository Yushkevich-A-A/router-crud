import React, { useState } from 'react';
import { Redirect } from 'react-router';
import './NewPost.css';
import UserAvatar from '../../Components/UserAvatar/UserAvatar';
import AdmitButton from '../../Components/Buttons/AdmitButton/AdmitButton';
import ButtonCancel from '../../Components/Buttons/ButtonCancel/ButtonCancel';

function NewPost(props) {

    const [ value, setValue ] = useState('');
    const [ redirect, setRedirect ] = useState(false)
    
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSent = () => {
        if (value.trim() === '') {
            return;
        }

        fetch(`${process.env.REACT_APP_CURRENT_URL}/posts`, {
            method: 'POST',
            body: JSON.stringify({id: 0,content: value}),
        }).then( () => setRedirect(!redirect))
    }

    return (
        <div className='new-post'>
            <div className="new-post-header">
                <span className="new-post-header-label">Создать Публикацию</span>
                <ButtonCancel />            
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
                <AdmitButton name='Опубликовать' handleClick={handleSent}/>
            </div>
            {redirect && <Redirect to='/' />}
        </div>
    )
}

export default NewPost;


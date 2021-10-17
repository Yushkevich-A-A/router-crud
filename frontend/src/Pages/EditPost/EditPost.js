import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EditPost.css';
import PostContext from '../../Context/PostContext';
import ButtonCancel from '../../Components/Buttons/ButtonCancel/ButtonCancel';
import UserAvatar from '../../Components/UserAvatar/UserAvatar';
import AdmitButton from '../../Components/Buttons/AdmitButton/AdmitButton';
import { Redirect } from 'react-router';

function EditPost(props) {
    const { match } = props
    const [ value, setValue ] = useState('');
    const [ redirect, setRedirect ] = useState(false);
    const { list } = useContext(PostContext);
    const post = list.find( item => Number(item.id) === Number(match.params.id))
    console.log(list)

    useEffect(() => {
        post && setValue(post.content);
        // eslint-disable-next-line
    },[list])

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleClick = () => {
        fetch(`${process.env.REACT_APP_CURRENT_URL}/posts`, {
            method: 'POST',
            body: JSON.stringify({...post, content: value})
        }).then( () => setRedirect(!redirect));
    } 
    
    return (
        <div className='edit-post'>
            <div className="header-edit-post">
                <span className="header-edit-label">Редактировать Публикацию</span>
                <ButtonCancel />
            </div>
            <div className="edit-post-body">
                <div className="edit-user-avatar">
                    <UserAvatar />
                </div>
                <div className="edit-post-input-block">
                    <input className="edit-post-input" type="text" value={value} onChange={handleChange}/>
                </div>
            </div>
            <div className="edit-action">
                <AdmitButton name='Сохранить' handleClick={handleClick}/>

            </div>
            { redirect && <Redirect to='/' />}
        </div>
    )
}

EditPost.propTypes = {
    match: PropTypes.object.isRequired,
};

export default EditPost;


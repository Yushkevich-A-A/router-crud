import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './PostItem.css';
import UserAvatar from '../../UserAvatar/UserAvatar';
import CommentBlock from '../../CommentBlock/CommentBlock';

function PostItem(props) {
    const { item } = props;

    return (
        <div className='post-item'>
            <div className="header-post">
                <div className="user-info">
                    <div className="user-avatar">
                      <UserAvatar />  
                    </div>
                    <p className="user-name">Пользователь</p>
                </div>
            </div>
            <div className="post-content">
                {item.content}
            </div>
            <div className="post-actions">
                <div className="post-action-like">Нравится</div>
                <div className="post-action-comment">Комментировать</div>
            </div>
            <CommentBlock />
        </div>

    )
}

PostItem.propTypes = {

};

export default PostItem;


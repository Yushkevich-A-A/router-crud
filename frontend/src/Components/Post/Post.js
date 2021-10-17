import React from 'react';
import PropTypes from 'prop-types';
import HeaderPost from '../HeaderPost/HeaderPost';
import './Post.css';

function Post(props) {
    const { item } = props;

    return (
        <div className='post-item'>
            <HeaderPost />
            <div className="post-content">
                {item.content}
            </div>
            <div className="post-actions">
                <div className="post-action-like">Нравится</div>
                <div className="post-action-comment">Комментировать</div>
            </div>
            {props.children}
        </div>
    )
}

Post.propTypes = {
    item: PropTypes.object.isRequired,
}

export default Post


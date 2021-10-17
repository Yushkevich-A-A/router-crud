import React from 'react';
import { Link } from 'react-router-dom';
import './PostItem.css';
import Post from '../../Post/Post';

function PostItem(props) {
    const { item } = props;

    return (
        <Link to={`/posts/${item.id}`}>
            <Post item={item}>
                {props.children}
            </Post>
        </Link>
    )
}

export default PostItem;


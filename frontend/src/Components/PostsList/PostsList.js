import React from 'react';
import PropTypes from 'prop-types';
import './PostsList.css';
import PostItem from './PostItem/PostItem';
import CommentBlock from '../CommentBlock/CommentBlock';

function PostsList(props) {
    const { list } = props;

    return (
        <div className='posts-list'>
            {
                list.map( item => <PostItem key={item.id} item={item}><CommentBlock/></PostItem> )
            }
        </div>
    )
}

PostsList.propTypes = {
    list: PropTypes.array.isRequired,
};

export default PostsList;


import React from 'react';
import PropTypes from 'prop-types';
import './PostsList.css';
import PostItem from './PostItem/PostItem';

function PostsList(props) {
    const { list } = props;

    return (
        <div className='posts-list'>
            {
                list.map( item => <PostItem key={item.id} item={item} /> )
            }
        </div>
    )
}

PostsList.propTypes = {

};

export default PostsList;


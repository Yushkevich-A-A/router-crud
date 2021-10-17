import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './HomePage.css';
import PostsList from '../../Components/PostsList/PostsList';

function HomePage(props) {
    const [ list, setList ] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_CURRENT_URL}/posts`)
            .then( response => response.json())
            .then( data => setList(data) )
    }, [])

    return (
        <div className='home-page'>
            <div className="link-post-block">
                <Link to='/posts/new' className='link-to-new-post'>Создать пост</Link>
            </div>
            <PostsList list={list}/>
        </div>
    )
}

HomePage.propTypes = {

};

export default HomePage;


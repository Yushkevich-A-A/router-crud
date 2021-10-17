import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AdmitButton from '../../Components/Buttons/AdmitButton/AdmitButton';
import PostsList from '../../Components/PostsList/PostsList';
import PostContext from '../../Context/PostContext';
import './HomePage.css';

function HomePage(props) {
    const { list, handleChangeList } = useContext(PostContext)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_CURRENT_URL}/posts`)
            .then( response => response.json())
            .then( data => handleChangeList(data) )
            // eslint-disable-next-line
    }, [])

    return (
        <div className='home-page'>
            <div className="link-post-block">
                <Link to='/posts/new'>
                    <AdmitButton name='Создать пост'/>
                </Link>
            </div>
            <PostsList list={list}/>
        </div>
    )
}

export default HomePage;


import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PostContext from '../../Context/PostContext';
import Post from '../../Components/Post/Post';
import AdmitButton from '../../Components/Buttons/AdmitButton/AdmitButton';
import DeleteButton from '../../Components/Buttons/DeleteButton/DeleteButton';
import './PagePost.css';
import { Redirect } from 'react-router';

function PagePost(props) {
    const { match } = props;
    const { list } = useContext(PostContext);
    const [ redirect, setRedirect ] = useState(false)

    const post = list.find( item => Number(item.id) === Number(match.params.id))
    const handleDeletePost = () => {
        fetch(`${process.env.REACT_APP_CURRENT_URL}/posts/${match.params.id}`, {
            method: 'DELETE',
        }).then( resp => setRedirect(!redirect))
    }
    return (
        <div>
            { post && <Post item={post}>
                <div className="page-post-actions">
                    <Link to={`/posts/edit/${match.params.id}`}>
                       <AdmitButton name='Изменить'/> 
                    </Link>
                    <DeleteButton name='Удалить' handleClick={handleDeletePost}/>
                </div>
            </Post>}
            {redirect && <Redirect to='/' />}
        </div>
    )
}

export default PagePost


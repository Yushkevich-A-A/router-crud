import React, { useEffect, useState } from 'react';
import PostContext from '../../Context/PostContext';

function ProviderPosts(props) {
    const [ list, setList ] = useState([]);

    // eslint-disable-next-line
    useEffect( async () => {
        const resp = await fetch(`${process.env.REACT_APP_CURRENT_URL}/posts`);
        const data = await resp.json();
         setList(data);
    }, [])

    const handleChangeList = ( data ) => {
        setList(data)
    }

    return (
        <PostContext.Provider value={{list:list, handleChangeList:handleChangeList}}>
            {props.children}
        </PostContext.Provider>
    )
}

export default ProviderPosts;

import React, { useState, useEffect } from 'react';
import './App.css';
import Posts from './components/Posts';
import PostLoadingComponent from './components/PostLoading';

const serverURL = "http://localhost:8000/api"
const postApiUrl =  `${serverURL}/post/`;
function App() {
    const PostLoading = PostLoadingComponent(Posts);
    const [appState, setAppState] = useState({
        loading: false,
        posts: null,
    });

    async function apiCall() {
        setAppState({ 
            ...appState,
            loading: true,
        });
        const response = await fetch(
            postApiUrl, {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                },
              });

        const posts = await response.json();
        setAppState({
            ...appState,
            loading: false,
            posts,
        });
    }

    useEffect(() => {
        apiCall()
        // eslint-disable-next-line
    }, []);

    return (
        <div className='App'>
            <h1>Latest Posts</h1>
            <PostLoading isLoading={appState.loading} posts={appState.posts} />
        </div>
    )
}

export default App;

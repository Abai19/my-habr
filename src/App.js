import React from 'react'
import PostList from "./pages/postList/PostList";
import Post from "./pages/post/Post";
class App extends React.Component{
    render(){
            return (
                <div>
                   {/* <PostList/>*/}
                    <Post/>
                </div>
            )
    }
}
export default App;
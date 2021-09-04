import React from "react";
import PostStyles from './Post.module.css'
class Post extends React.Component{
    render(){
        return (
            <div className={PostStyles.postContainer}>
                <div className={PostStyles.postBlockInfo}>
                    <img src="https://img.icons8.com/ios/452/user--v1.png" className={PostStyles.postImg}/>
                    <span> Имя автора</span>
                    <span className={PostStyles.postDate}> 28.08.2021    14:23</span>
                </div>
                <h3> Lorem Ipsum</h3>
                <img src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-768x492.png" />
                <div className={PostStyles.postText}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


                </div>
            </div>
        )
    }
}
export default Post;
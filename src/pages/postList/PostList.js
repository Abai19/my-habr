import React from "react";
import Header from "../../components/header/Header";
import Second from "../../components/second/Second";
import Footer from "../../components/footer/Footer";

class PostList extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            postList: []
        }
    }
    componentDidMount(error, errorInfo) {
            fetch("http://localhost:3001/posts")
                .then(response=> {
                    if(response.ok){
                        return response.json();
                    }else{
                        alert("Error"+ response.status)
                    }
                })
                .then(data=>this.setState({
                    postList:data
                }))
    }

    render(){
        return (
            <>
                <Header/>
                {
                    [<Second/>,<Second/>,<Second/>]
                }
                {
                    this.state.postList.map(data=>(
                        <Second
                            createName={data.createdUser}
                            createDate={data.createdDate}
                            title={data.title}
                        />
                    ))
                }
                <Footer />
            </>
        )
    }
}
export default PostList;
import React from "react";
import Header from "../../components/header/Header";
import Second from "../../components/second/Second";
import Footer from "../../components/footer/Footer";

class PostList extends React.Component{
    render(){
        return (
            <>
                <Header/>
                <Second
                    createName="Testov Test"
                    createDate="12.02.2021 15:45"
                    createTitle="NASA переходит в облака: MCP, DAPHNE и облачные инструменты для команды
                            Perseverance"
                />
                <Second createName="Testov Testa" createDate="12.02.2021 15:45"/>
                <Footer/>
            </>
        )
    }
}
export default PostList;
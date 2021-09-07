import React from "react";
import styles2 from './Second.module.css'
class Second extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(

            <div className={styles2.postcardBlocks}>
                <div className={styles2.postcard}>
                    <div className={styles2.postcardAuthors}>
                        <span className={styles2.createName}>{this.props.createName}</span>
                        <span className={styles2.createDate}>{this.props.createDate}</span>
                    </div>
                    <div className={styles2.postcardImg}>
                        <img className={styles2.postcardImg} src="https://picsum.photos/1200/200" alt=""/>
                    </div>
                    <div className={styles2.postcardTitle}>
                        <a href="#">{this.props.title}</a>
                    </div>
                </div>
            </div>

        )
    }
}
Second.defaultProps={
    createName:"Автор неизвестен",
    createDate:"Дата неизвестна",
    title:"..."
}
export default Second;
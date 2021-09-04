import React from 'react';
import styles from './Footer.module.css'
const styles1={textAlign:"center", fontSize:"10px"}
const isAdmin=true;
class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            title: "Footer"
        }
    }

    render(){
        return (
            <div onClick={()=>this.setState({title:"NO FOOTER NOW"})} className={styles.footerBlock}>
                 <h3 style={isAdmin?styles: styles1}>{this.state.title}</h3>
            </div>
        )
    }
}
export default Footer;